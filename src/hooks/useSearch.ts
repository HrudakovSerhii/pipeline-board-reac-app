import { useEffect, useMemo, useState } from 'react'
import type { Candidate } from '../types/api.types'

const DEBOUNCE_MS = 150

interface SearchState {
  query: string
  setQuery: (q: string) => void
  filtered: Candidate[]
}

export function useSearch(candidates: Candidate[]): SearchState {
  const [inputValue, setInputValue] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(inputValue), DEBOUNCE_MS)
    return () => clearTimeout(timer)
  }, [inputValue])

  const filtered = useMemo(() => {
    const term = debouncedQuery.trim().toLowerCase()
    if (!term) return candidates
    return candidates.filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.role.toLowerCase().includes(term) ||
        c.location.toLowerCase().includes(term),
    )
  }, [candidates, debouncedQuery])

  return { query: inputValue, setQuery: setInputValue, filtered }
}
