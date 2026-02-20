import { API_BASE_URL, CANDIDATE_PATHS } from './api.constants'
import { ApiError } from './api.errors'

import type { Candidate, CandidatesResponse, UpdateCandidateRequest } from '../types/api.types'

export async function getCandidates(
  vacancyId: string,
  signal?: AbortSignal,
): Promise<CandidatesResponse> {
  const response = await fetch(`${API_BASE_URL}${CANDIDATE_PATHS.list(vacancyId)}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    signal,
  })
  if (!response.ok) {
    throw new ApiError(response.status, response)
  }
  return response.json() as Promise<CandidatesResponse>
}

export async function updateCandidate(
  id: string,
  req: UpdateCandidateRequest,
  signal: AbortSignal,
): Promise<Candidate> {
  const response = await fetch(`${API_BASE_URL}${CANDIDATE_PATHS.update(id)}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
    signal,
  })
  if (!response.ok) {
    throw new ApiError(response.status, response)
  }
  return response.json() as Promise<Candidate>
}
