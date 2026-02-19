import type { CandidateRate, EngagementMode, PipelineStage, RatePeriod, VacancyBudget } from '../types/api.types'

export const Stage = {
  applications: 'applications',
  under_review: 'under_review',
  first_interview: 'first_interview',
  contract_offer: 'contract_offer',
  hired: 'hired',
  not_proceeding: 'not_proceeding',
} as const satisfies Record<string, PipelineStage>

/**
 * Extracts the display symbol for any ISO 4217 currency code using Intl.
 * Falls back to the code itself when the environment lacks full ICU data.
 */
function currencySymbol(currency: string): string {
  try {
    const parts = new Intl.NumberFormat('en', {
      style: 'currency',
      currency,
      currencyDisplay: 'narrowSymbol',
      maximumFractionDigits: 0,
    }).formatToParts(0)
    return parts.find((p) => p.type === 'currency')?.value ?? currency
  } catch {
    return currency
  }
}

const PERIOD_LABEL: Record<RatePeriod, string> = {
  hour: 'h',
  day: 'd',
  week: 'wk',
  month: 'mo',
  year: 'yr',
}

const PERIOD_DISPLAY: Record<RatePeriod, string> = {
  hour: 'Hourly rate',
  day: 'Daily rate',
  week: 'Weekly rate',
  month: 'Monthly salary',
  year: 'Yearly salary',
}

const MODE_DISPLAY: Record<EngagementMode, string> = {
  freelance: 'Freelance',
  contractor: 'Payroll contractor',
  employment: 'Permanent employment',
}

const STAGE_LABEL: Record<PipelineStage, string> = {
  applications: 'Applications',
  under_review: 'Under Review',
  first_interview: 'First Interview',
  contract_offer: 'Contract Offer',
  hired: 'Hired',
  not_proceeding: 'Not Proceeding',
}

export function formatRate(rate: CandidateRate): string {
  const symbol = currencySymbol(rate.currency)
  const amount = formatNumber(rate.amount)
  const period = PERIOD_LABEL[rate.period]
  return `${symbol}${amount}/${period}`
}

export function daysAgoLabel(postedAt: string): string {
  const diff = Date.now() - new Date(postedAt).getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  if (days === 0) return 'today'
  if (days === 1) return '1d ago'
  return `${days}d ago`
}

export function stageLabel(stage: PipelineStage): string {
  return STAGE_LABEL[stage]
}

/** Formats a number with space as thousands separator: 15000 → "15 000", 150000 → "150 000" */
export function formatNumber(n: number): string {
  return Math.floor(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0')
}

export function formatBudgetRange(budget: VacancyBudget): string {
  const symbol = currencySymbol(budget.currency)
  return `${formatNumber(budget.min)}–${formatNumber(budget.max)} ${symbol}`
}

export function budgetLabel(budget: VacancyBudget): { title: string; subtitle: string } {
  return { title: MODE_DISPLAY[budget.mode], subtitle: PERIOD_DISPLAY[budget.period] }
}

export function rateModeLabel(mode: EngagementMode): string {
  return MODE_DISPLAY[mode]
}
