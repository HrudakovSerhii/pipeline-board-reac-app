import type { PipelineStage, Rate } from '../types/api.types'

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
