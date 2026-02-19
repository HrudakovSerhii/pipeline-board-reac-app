import { formatNumber, formatBudgetRange, budgetLabel } from './candidate'
import type { VacancyBudget } from '../types/api.types'

describe('formatNumber', () => {
  it('formats numbers below 1000 without separator', () => {
    expect(formatNumber(80)).toBe('80')
    expect(formatNumber(500)).toBe('500')
  })

  it('formats thousands with non-breaking space separator', () => {
    expect(formatNumber(1000)).toBe('1\u00a0000')
    expect(formatNumber(15000)).toBe('15\u00a0000')
    expect(formatNumber(150000)).toBe('150\u00a0000')
  })

  it('truncates decimals', () => {
    expect(formatNumber(15000.9)).toBe('15\u00a0000')
  })
})

describe('formatBudgetRange', () => {
  it('formats a freelance hourly range', () => {
    const budget: VacancyBudget = { type: 'freelance', rateType: 'hourly', min: 50, max: 80, currency: 'EUR' }
    expect(formatBudgetRange(budget)).toBe('50–80 €')
  })

  it('formats a contractor monthly range with thousands separator', () => {
    const budget: VacancyBudget = { type: 'contractor', rateType: 'monthly', min: 12000, max: 15000, currency: 'EUR' }
    expect(formatBudgetRange(budget)).toBe('12\u00a0000–15\u00a0000 €')
  })

  it('formats an employment yearly range with thousands separator', () => {
    const budget: VacancyBudget = { type: 'employment', rateType: 'yearly', min: 120000, max: 150000, currency: 'EUR' }
    expect(formatBudgetRange(budget)).toBe('120\u00a0000–150\u00a0000 €')
  })

  it('uses currency code when no narrow symbol is defined', () => {
    const budget: VacancyBudget = { type: 'freelance', rateType: 'hourly', min: 100, max: 200, currency: 'AED' }
    // Intl resolves AED to its symbol or code — verify the range and currency are present
    const result = formatBudgetRange(budget)
    expect(result).toMatch(/^100–200 /)
    expect(result).toContain('AED')
  })
})

describe('budgetLabel', () => {
  it('returns correct title and subtitle for each type + rateType combination', () => {
    expect(budgetLabel({ type: 'freelance', rateType: 'hourly', min: 0, max: 0, currency: 'EUR' }))
      .toEqual({ title: 'Freelance', subtitle: 'Hourly rate' })

    expect(budgetLabel({ type: 'contractor', rateType: 'monthly', min: 0, max: 0, currency: 'EUR' }))
      .toEqual({ title: 'Payroll contractor', subtitle: 'Monthly salary' })

    expect(budgetLabel({ type: 'employment', rateType: 'yearly', min: 0, max: 0, currency: 'EUR' }))
      .toEqual({ title: 'Permanent employment', subtitle: 'Yearly salary' })
  })
})
