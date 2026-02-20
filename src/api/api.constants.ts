export const API_BASE_URL = ''

export const VACANCY_PATHS = {
  get: (id: string) => `/api/vacancy/${id}`,
}

export const CANDIDATE_PATHS = {
  list: (vacancyId: string) => `/api/candidates/${vacancyId}`,
  update: (id: string) => `/api/candidates/${id}`,
}
