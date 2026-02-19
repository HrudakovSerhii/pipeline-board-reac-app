import { useEffect, useState } from 'react'
import { getVacancy } from '../api/vacancy.api.ts'

import type { Vacancy } from '../types/api.types.ts'

interface VacancyState {
  vacancy: Vacancy | null
  isLoading: boolean
  error: Error | null
}

// Mock server use this id to return mock data
const STATIC_VACANCY_ID: string = 'CN00001'

export function useVacancy(): VacancyState {
  const [vacancy, setVacancy] = useState<Vacancy | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let cancelled = false

    getVacancy(STATIC_VACANCY_ID)
      .then((data) => {
        setVacancy(data.vacancy)
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

  return { vacancy, isLoading, error }
}
