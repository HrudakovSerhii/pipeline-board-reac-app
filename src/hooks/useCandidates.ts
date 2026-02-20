import { useCallback, useEffect, useState } from 'react'
import type { Candidate, PipelineStage } from '../types/api.types'

import { getCandidates, updateCandidate } from '../api/candidates.api'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

const STORAGE_KEY = 'board-candidates-'

type Settled =
  | { id: string; result: 'success'; candidates: Candidate[] }
  | { id: string; result: 'error'; error: Error }

interface CandidatesState {
  candidates: Array<Candidate> | null
  isLoading: boolean
  error: Error | null
  moveCandidate: (id: string, stage: PipelineStage) => void
}

export function useCandidates(vacancyId: string | null): CandidatesState {
  const [settled, setSettled] = useState<Settled | null>(null)

  const isLoading = vacancyId !== null && settled?.id !== vacancyId
  const candidates = settled?.result === 'success' && settled.id === vacancyId ? settled.candidates : null
  const error = settled?.result === 'error' && settled.id === vacancyId ? settled.error : null

  useEffect(() => {
    if (!vacancyId) return

    const controller = new AbortController()
    let cancelled = false

    getCandidates(vacancyId, controller.signal)
      .then((data) => {
        if (cancelled) return

        const saved = getLocalStorage<Candidate[] | null>(STORAGE_KEY + vacancyId, null)
        let resolved = data.candidates

        if (saved) {
          const stageById = new Map(saved.map((c) => [c.id, c.process.stage]))
          resolved = data.candidates.map((c) => ({
            ...c,
            process: { ...c.process, stage: stageById.get(c.id) ?? c.process.stage },
          }))
        }

        setSettled({ id: vacancyId, result: 'success', candidates: resolved })
      })
      .catch((err: unknown) => {
        if (cancelled) return
        if (err instanceof Error && err.name === 'AbortError') return
        setSettled({
          id: vacancyId,
          result: 'error',
          error: err instanceof Error ? err : new Error(String(err)),
        })
      })

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [vacancyId])

  const moveCandidate = useCallback(
    (id: string, stage: PipelineStage) => {
      if (settled?.result !== 'success' || settled.id !== vacancyId || !vacancyId) return

      const snapshot = settled
      const updated = settled.candidates.map((c) =>
        c.id === id ? { ...c, process: { ...c.process, stage } } : c,
      )

      setSettled({ ...settled, candidates: updated })

      updateCandidate(id, { stage })
        .then(() => {
          setLocalStorage(STORAGE_KEY + vacancyId, updated)
        })
        .catch((err: unknown) => {
          setSettled(snapshot)
          // surface move error without overwriting fetch error state
          console.error('Failed to persist stage change', err)
        })
    },
    [settled, vacancyId],
  )

  return { candidates, isLoading, error, moveCandidate }
}
