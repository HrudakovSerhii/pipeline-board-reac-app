/**
 * Component prop types derived from Figma design.
 *
 * Reference only — not used for API contracts or OpenAPI schema generation.
 * Field names and shapes match the design file exactly, including UI-only
 * props and display-formatted strings.
 *
 * Shared primitives are imported from api.types.ts to avoid drift.
 */

import type {
    AvailabilityStatus,
    Currency,
    EmploymentType,
    Rate,
    RatePeriod,
    Skill,
    VacancyStatus,
} from "./api.types";

export type { AvailabilityStatus, Currency, EmploymentType, Rate, RatePeriod, Skill, VacancyStatus };

// ─── Candidate compensation (display shape) ───────────────────────────────────

export interface Compensation {
    freelancer?: Rate;
    contractor?: Rate;
    directEmployment?: Rate;
}

/** rateType carries the display label derived from the employment mode. */
export interface FreelanceRate {
    type: "freelance";
    rateType: "Hourly rate";
    min: number;
    max: number;
    currency: string;
}

export interface PayrollContractorRate {
    type: "payroll_contractor";
    rateType: "Monthly salary";
    min: number;
    max: number;
    currency: string;
}

export interface PermanentEmploymentRate {
    type: "permanent_employment";
    rateType: "Yearly salary";
    min: number;
    max: number;
    currency: string;
}

export type CompensationRate =
    | FreelanceRate
    | PayrollContractorRate
    | PermanentEmploymentRate;

// ─── Card section props ───────────────────────────────────────────────────────

export interface ProfileInfo {
    role: string;
    /** e.g. "Amsterdam (Remote)" */
    location: string;
    avatarUrl?: string;
}

export interface AvailabilityInfo {
    status: AvailabilityStatus;
    /** e.g. "1 April 2025" */
    availableFrom: string;
}

/** Value must be in the range 0–100. */
export interface MatchScore {
    value: number;
}

// ─── CardProps ────────────────────────────────────────────────────────────────

export interface CardProps {
    className?: string;

    profile: ProfileInfo;

    availability: AvailabilityInfo;

    /**
     * Full list of skills the candidate has.
     * The component will show `visibleSkillsCount` chips and
     * append a "+N" overflow badge for the remainder.
     */
    skills: Skill[];

    /**
     * How many skill chips to render before showing the overflow badge.
     * @default 4
     */
    visibleSkillsCount?: number;

    /**
     * Time since the profile was posted / last active.
     * Displayed verbatim next to the clock icon (e.g. "2d", "1w").
     */
    postedAt: string;

    compensation: Compensation;

    matchScore: MatchScore;
}

// ─── CandidateInfoProps ───────────────────────────────────────────────────────

export interface DateRange {
    startDate: string;
    endDate: string;
}

export interface Person {
    name: string;
    avatarUrl?: string;
}

export interface VacancyManagement {
    status: VacancyStatus;
    hiringManager: Person;
    vacancyCreatedBy: Person;
    gloprosAccountManager: Person & { email?: string };
    vacancyWorkspace: string; // e.g. "Private Workspace"
}

export interface CandidateInfoProps {
    /** e.g. "CN00001" */
    vacancyId: string;

    jobTitle: string;

    clientName: string;

    employmentType: EmploymentType;

    /** e.g. "40 h/week" */
    hoursPerWeek: string;

    /** e.g. "Amsterdam, the Netherlands" */
    location: string;

    /** Assignment / contract date range */
    workPeriod: DateRange;

    /** Vacancy publication date range */
    publicationPeriod: DateRange;

    /** Number of AI-suggested candidate matches */
    aiMatchesCount: number;

    /**
     * One entry per employment-type rate block shown in the middle panel.
     * The design shows up to three blocks (freelance, payroll, permanent).
     */
    compensationRates: CompensationRate[];

    vacancyManagement: VacancyManagement;
}
