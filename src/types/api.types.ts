// ─── Primitives ──────────────────────────────────────────────────────────────

export type PipelineStage =
  | 'applications'
  | 'under_review'
  | 'first_interview'
  | 'contract_offer'
  | 'hired'
  | 'not_proceeding'

export type AvailabilityStatus = 'available' | 'unavailable' | 'now'

export type VacancyStatus = 'Public' | 'Private' | 'Draft' | 'Closed'

export type EmploymentType = 'full-time' | 'part-time' | 'contract' | 'freelance'

/** ISO 4217 currency codes (common subset + open string for extensibility) */
export type Currency = 'EUR' | 'USD' | 'GBP' | 'CHF' | 'PLN' | 'SEK' | (string & {})

export type RatePeriod = 'hour' | 'day' | 'week' | 'month' | 'year'

// ─── Value types ─────────────────────────────────────────────────────────────

export interface DateRange {
  startDate: string // ISO 8601, e.g. "2025-03-01"
  endDate: string // ISO 8601, e.g. "2025-04-01"
}

export interface Skill {
  id: string
  label: string
}

export interface Person {
  name: string
  avatarUrl?: string
}

// ─── Candidate compensation ───────────────────────────────────────────────────

export interface Rate {
  amount: number
  currency: Currency
  period: RatePeriod
}

export interface CandidateCompensation extends Rate {
  type: EmploymentType
}

// ─── Vacancy budget ───────────────────────────────────────────────────────────

export interface VacancyBudget {
  type: EmploymentType
  period: RatePeriod
  min: number
  max: number
  currency: string
}

// ─── AI scoring ───────────────────────────────────────────────────────────────

/** Per-category AI match breakdown. Provided by AI scoring service; aggregated into BoardResponse. */
export interface AiMatchBreakdown {
  experience: number // 0–100
  skills: number // 0–100
  rate: number // 0–100
  distance: string // distance to job location in km
  availability: boolean
  industry: boolean
}

// ─── Entities ─────────────────────────────────────────────────────────────────

export interface CandidateAvailability {
  status: AvailabilityStatus
  availableFrom: string // ISO 8601 date
}

export interface VacancyManagement {
  hiringManager: Person
  createdBy: Person
  accountManager: Person & { email?: string }
  workspace: string // e.g. "Private Workspace"
}

export interface CandidateProcess {
  stage: PipelineStage
  /** Offer acceptance — set when stage transitions to 'hired'. */
  hiredAt?: string // ISO 8601
  hiredBy?: string // recruiter name
  /** Decline info — set when stage transitions to 'not_proceeding'. */
  declinedAt?: string // ISO 8601
  declinedBy?: string
  declineReason?: string
  /** Recruiter-authored note from the vacancy-candidate negotiation; absent if not negotiated. */
  negotiationNote?: string
}

export interface Candidate {
  id: string
  name: string
  role: string
  location: string
  avatarUrl?: string
  availability: CandidateAvailability
  skills: Skill[]
  postedAt: string // ISO 8601 datetime
  compensation: CandidateCompensation[]
  aiAnalise: {
    matchScore: number // 0–100,
    matchBreakdown?: AiMatchBreakdown
  }
  process: CandidateProcess
  isShortlisted: boolean
  /** True if the candidate is a registered GloPros platform professional. */
  isGloPros: boolean
}

export interface Vacancy {
  id: string // e.g. "CN00001"
  jobTitle: string
  clientName: string
  status: VacancyStatus
  preferredEmploymentType: EmploymentType
  hoursPerWeek: number
  location: string
  workPeriod: DateRange
  publicationPeriod: DateRange
  budgets: VacancyBudget[]
  management: VacancyManagement
  aiMatches: number
}

// ─── API shapes ───────────────────────────────────────────────────────────────

/** GET /api/candidates/:vacancyId */
export interface CandidatesResponse {
  candidates: Candidate[]
  totalCount: number
}

/** GET /api/vacancy/:id */
export interface VacancyResponse {
  vacancy: Vacancy
}

/** PATCH /api/candidates/:id */
export interface UpdateCandidateRequest {
  stage?: PipelineStage
  isShortlisted?: boolean
}
