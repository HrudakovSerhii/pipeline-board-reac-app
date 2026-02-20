import { formatBudgetRange, budgetLabel } from '../../../utils/candidate'

import type { VacancyBudget } from '../../../types/api.types'

export function VacancyRatePanel({ budgets }: { budgets: VacancyBudget[] }) {
  return (
    <div className="relative flex flex-col self-stretch w-44 shrink-0 bg-brand-subtle rounded-bl-[30px] border border-input-border overflow-hidden">
      <div className="flex flex-col flex-1 divide-y divide-input-border">
        {budgets.map((budget) => {
          const { title, subtitle } = budgetLabel(budget)
          return (
            <div key={budget.type} className="flex flex-col gap-0.5 px-3 py-2.5">
              <span className="text-foreground text-[12px] font-bold leading-4">{title}</span>
              <span className="text-caption text-[12px] leading-4">{subtitle}</span>
              <span className="text-brand-dark text-[16px] font-medium tracking-[0.15px] mt-0.5">
                {formatBudgetRange(budget)}
              </span>
            </div>
          )
        })}
      </div>
      <button
        disabled
        className="flex items-center justify-center h-9 border-t border-input-border text-brand font-normal bg-pill-bg hover:bg-brand-subtle transition-colors"
      >
        View details
      </button>
    </div>
  )
}
