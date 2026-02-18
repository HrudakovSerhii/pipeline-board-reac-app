import type { PipelineStage, Rate, VacancyBudget } from '../types/api.types'

export const Stage = {
  applications: 'applications',
  under_review: 'under_review',
  first_interview: 'first_interview',
  contract_offer: 'contract_offer',
  hired: 'hired',
  not_proceeding: 'not_proceeding',
} as const satisfies Record<string, PipelineStage>

const CURRENCY_SYMBOL: Record<string, string> = {
  EUR: '€',
  USD: '$',
  GBP: '£',
  CHF: 'CHF ',
  PLN: 'zł',
  SEK: 'kr',
}

const PERIOD_LABEL: Record<Rate['period'], string> = {
  hour: 'h',
  day: 'd',
  week: 'wk',
  month: 'mo',
  year: 'yr',
}

const STAGE_LABEL: Record<PipelineStage, string> = {
  applications: 'Applications',
  under_review: 'Under Review',
  first_interview: 'First Interview',
  contract_offer: 'Contract Offer',
  hired: 'Hired',
  not_proceeding: 'Not Proceeding',
}

export function formatRate(rate: Rate): string {
  const symbol = CURRENCY_SYMBOL[rate.currency] ?? `${rate.currency} `
  const amount = rate.amount.toLocaleString('en-US')
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

const BUDGET_LABELS: Record<VacancyBudget['type'], { title: string; subtitle: string }> = {
  freelance: { title: 'Freelance', subtitle: 'Hourly rate' },
  payroll_contractor: { title: 'Payroll contractor', subtitle: 'Monthly salary' },
  permanent_employment: { title: 'Permanent employment', subtitle: 'Yearly salary' },
}

export function formatBudgetRange(budget: VacancyBudget): string {
  const symbol = CURRENCY_SYMBOL[budget.currency] ?? `${budget.currency} `
  const min = budget.min.toLocaleString('en-US')
  const max = budget.max.toLocaleString('en-US')
  return `${min}–${max} ${symbol}`
}

export function budgetLabel(budget: VacancyBudget): { title: string; subtitle: string } {
  return BUDGET_LABELS[budget.type]
}
