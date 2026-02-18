export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly response: Response,
  ) {
    super(`API error ${status}: ${response.url}`)
    this.name = 'ApiError'
  }
}
