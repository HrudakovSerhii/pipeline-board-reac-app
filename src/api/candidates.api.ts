import type { Candidate, UpdateCandidateRequest } from '../types/api.types'
import { API_BASE_URL, CANDIDATE_PATHS } from './api.constants'
import { ApiError } from './api.errors'

export async function updateCandidate(id: string, req: UpdateCandidateRequest): Promise<Candidate> {
  const response = await fetch(`${API_BASE_URL}${CANDIDATE_PATHS.update(id)}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  })
  if (!response.ok) {
    throw new ApiError(response.status, response)
  }
  return response.json() as Promise<Candidate>
}
