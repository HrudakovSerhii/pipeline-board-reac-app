import { useMemo, useState } from 'react'
import type { Candidate } from '../types/api.types'

interface ShortlistFilterState {
  showOnlyShortlisted: boolean
  toggle: () => void
  filtered: Candidate[]
}

export function useShortlistFilter(candidates: Candidate[]): ShortlistFilterState {
  const [showOnlyShortlisted, setShowOnlyShortlisted] = useState(false)

  const toggle = useMemo(
    () => () => setShowOnlyShortlisted((prev) => !prev),
    [],
  )

  const filtered = useMemo(
    () => (showOnlyShortlisted ? candidates.filter((c) => c.isShortlisted) : candidates),
    [candidates, showOnlyShortlisted],
  )

  return { showOnlyShortlisted, toggle, filtered }
}
