import { useCallback, useEffect, useState } from 'react'
import type { BoardResponse, Candidate, PipelineStage } from '../types/api.types'
import { getBoardData } from '../api/board.api'
import { updateCandidate } from '../api/candidates.api'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

const STORAGE_KEY = 'board-candidates'

interface BoardState {
  board: BoardResponse | null
  isLoading: boolean
  error: Error | null
  moveCandidate: (id: string, stage: PipelineStage) => void
}

export function useBoardState(): BoardState {
  const [board, setBoard] = useState<BoardResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelled = false

    getBoardData()
      .then((data) => {
        if (cancelled) return
        // Hydrate stages from localStorage if a previous session saved them
        const savedCandidates = getLocalStorage<Candidate[] | null>(STORAGE_KEY, null)
        if (savedCandidates) {
          const stageById = new Map(savedCandidates.map((c) => [c.id, c.stage]))
          data = {
            ...data,
            candidates: data.candidates.map((c) => ({
              ...c,
              stage: stageById.get(c.id) ?? c.stage,
            })),
          }
        }
        setBoard(data)
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
  }, [])

  const moveCandidate = useCallback(
    (id: string, stage: PipelineStage) => {
      if (!board) return

      const previous = board.candidates
      const updated = board.candidates.map((c) => (c.id === id ? { ...c, stage } : c))

      // Optimistic update
      setBoard((prev) => (prev ? { ...prev, candidates: updated } : prev))

      updateCandidate(id, { stage })
        .then(() => {
          setLocalStorage(STORAGE_KEY, updated)
        })
        .catch((err: unknown) => {
          // Rollback on failure
          setBoard((prev) => (prev ? { ...prev, candidates: previous } : prev))
          setError(err instanceof Error ? err : new Error(String(err)))
        })
    },
    [board],
  )

  return { board, isLoading, error, moveCandidate }
}
