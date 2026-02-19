import { useCallback, useEffect, useState } from 'react'
import type { Candidate, PipelineStage } from '../types/api.types'

import { getCandidates, updateCandidate } from '../api/candidates.api'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

const STORAGE_KEY = 'board-candidates-'

interface CandidatesState {
  candidates: Array<Candidate> | null
  isLoading: boolean
  error: Error | null
  moveCandidate: (id: string, stage: PipelineStage) => void
}

export function useCandidates(vacancyId: string): CandidatesState {
  const [candidates, setCandidates] = useState<Array<Candidate> | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelled = false

    getCandidates(vacancyId)
      .then((data) => {
        if (cancelled) return

        const savedCandidates = getLocalStorage<Candidate[] | null>(STORAGE_KEY + vacancyId, null)
        let resolved = data.candidates

        if (savedCandidates) {
          const stageById = new Map(savedCandidates.map((c) => [c.id, c.process.stage]))
          resolved = data.candidates.map((c) => ({
            ...c,
            process: {
              ...c.process,
              stage: stageById.get(c.id) ?? c.process.stage,
            },
          }))
        }

        setCandidates(resolved)
      })
      .catch((err: unknown) => {
        if (cancelled) return
        setError(err instanceof Error ? err : new Error(String(err)))
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [vacancyId])

  const moveCandidate = useCallback(
    (id: string, stage: PipelineStage) => {
      if (!candidates) return

      const previous = candidates
      const updated = candidates.map((c) =>
        c.id === id ? { ...c, process: { ...c.process, stage } } : c,
      )

      setCandidates(updated)

      updateCandidate(id, { stage })
        .then(() => {
          setLocalStorage(STORAGE_KEY + vacancyId, updated)
        })
        .catch((err: unknown) => {
          setCandidates(previous)
          setError(err instanceof Error ? err : new Error(String(err)))
        })
    },
    [candidates, vacancyId],
  )

  return { candidates, isLoading, error, moveCandidate }
}
