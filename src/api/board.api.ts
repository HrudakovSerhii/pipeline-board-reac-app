import type { BoardResponse } from '../types/api.types'
import { API_BASE_URL, BOARD_PATHS } from './api.constants'
import { ApiError } from './api.errors'

export async function getBoardData(): Promise<BoardResponse> {
  const response = await fetch(`${API_BASE_URL}${BOARD_PATHS.board}`)
  if (!response.ok) {
    throw new ApiError(response.status, response)
  }
  return response.json() as Promise<BoardResponse>
}
