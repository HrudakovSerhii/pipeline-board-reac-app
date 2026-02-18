import { useMemo, useState } from 'react'
import type { Candidate } from '../types/api.types'

interface SearchState {
  query: string
  setQuery: (q: string) => void
  filtered: Candidate[]
}

export function useSearch(candidates: Candidate[]): SearchState {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return candidates
    return candidates.filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.role.toLowerCase().includes(term) ||
        c.location.toLowerCase().includes(term),
    )
  }, [candidates, query])

  return { query, setQuery, filtered }
}
