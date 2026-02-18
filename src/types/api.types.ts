// ─── Primitives ──────────────────────────────────────────────────────────────

export type PipelineStage =
    | "applications"
    | "under_review"
    | "first_interview"
    | "contract_offer"
    | "hired"
    | "not_proceeding";

export type AvailabilityStatus = "available" | "unavailable" | "soon";

export type VacancyStatus = "Public" | "Private" | "Draft" | "Closed";

export type EmploymentType = "Full-time" | "Part-time" | "Contract" | "Freelance";

/** ISO 4217 currency codes (common subset + open string for extensibility) */
export type Currency = "EUR" | "USD" | "GBP" | "CHF" | "PLN" | "SEK" | (string & {});

export type RatePeriod = "hour" | "day" | "week" | "month" | "year";

// ─── Value types ─────────────────────────────────────────────────────────────

export interface DateRange {
    startDate: string; // ISO 8601, e.g. "2025-03-01"
    endDate: string;   // ISO 8601, e.g. "2025-04-01"
}

export interface Skill {
    id: string;
    label: string;
}

export interface Person {
    name: string;
    avatarUrl?: string;
}

// ─── Candidate compensation ───────────────────────────────────────────────────

/**
 * Candidate's asking rate for a given engagement mode.
 * Keeping `amount` as `number` makes comparison easy; format at the UI layer.
 */
export interface Rate {
    amount: number;
    currency: Currency;
    period: RatePeriod;
}

/** What the candidate charges, keyed by engagement mode. */
export interface CandidateCompensation {
    freelancer?: Rate;
    contractor?: Rate;
    directEmployment?: Rate;
}

// ─── Vacancy budget ───────────────────────────────────────────────────────────

export interface FreelanceBudget {
    type: "freelance";
    min: number;
    max: number;
    currency: string;
}

export interface PayrollBudget {
    type: "payroll_contractor";
    min: number;
    max: number;
    currency: string;
}

export interface PermanentBudget {
    type: "permanent_employment";
    min: number;
    max: number;
    currency: string;
}

export type VacancyBudget = FreelanceBudget | PayrollBudget | PermanentBudget;

// ─── Entities ─────────────────────────────────────────────────────────────────

export interface CandidateAvailability {
    status: AvailabilityStatus;
    availableFrom: string; // ISO 8601 date
}

export interface VacancyManagement {
    hiringManager: Person;
    createdBy: Person;
    accountManager: Person & { email?: string };
    workspace: string; // e.g. "Private Workspace"
}

export interface Candidate {
    id: string;
    name: string;
    role: string;
    location: string;
    avatarUrl?: string;
    availability: CandidateAvailability;
    skills: Skill[];
    postedAt: string;        // ISO 8601 datetime
    compensation: CandidateCompensation;
    matchScore: number;      // 0–100
    stage: PipelineStage;
    isShortlisted: boolean;
}

export interface Vacancy {
    id: string;              // e.g. "CN00001"
    jobTitle: string;
    clientName: string;
    status: VacancyStatus;
    employmentType: EmploymentType;
    hoursPerWeek: number;
    location: string;
    workPeriod: DateRange;
    publicationPeriod: DateRange;
    aiMatchesCount: number;
    budgets: VacancyBudget[];
    management: VacancyManagement;
}

// ─── API shapes ───────────────────────────────────────────────────────────────

/** GET /api/board */
export interface BoardResponse {
    vacancy: Vacancy;
    candidates: Candidate[];
}

/** PATCH /api/candidates/:id */
export interface UpdateCandidateRequest {
    stage?: PipelineStage;
    isShortlisted?: boolean;
}
