export class ApiError extends Error {
  readonly status: number
  readonly response: Response

  constructor(status: number, response: Response) {
    super(`API error ${status}: ${response.url}`)
    this.name = 'ApiError'
    this.status = status
    this.response = response
  }
}
