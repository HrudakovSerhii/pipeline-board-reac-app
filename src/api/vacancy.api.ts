import { API_BASE_URL, VACANCY_PATHS } from './api.constants'
import { ApiError } from './api.errors'

import type { VacancyResponse } from '../types/api.types'

export async function getVacancy(id: string): Promise<VacancyResponse> {
  const response = await fetch(`${API_BASE_URL}${VACANCY_PATHS.get(id)}`)
  if (!response.ok) {
    throw new ApiError(response.status, response)
  }
  return response.json() as Promise<VacancyResponse>
}
