import type { VacancyBudget } from '../../../types/api.types'
import { formatBudgetRange, budgetLabel } from '../../../utils/candidate'

export function VacancyRatePanel({ budgets }: { budgets: VacancyBudget[] }) {
  return (
    <div className="relative flex flex-col self-stretch w-[176px] shrink-0 bg-brand-subtle rounded-bl-[30px] border border-input-border overflow-hidden">
      <div className="flex flex-col flex-1 divide-y divide-input-border">
        {budgets.map((budget) => {
          const { title, subtitle } = budgetLabel(budget)
          return (
            <div key={budget.mode} className="flex flex-col gap-[2px] px-[12px] py-[10px]">
              <span className="text-foreground text-[12px] font-bold leading-[16px]">{title}</span>
              <span className="text-caption text-[12px] leading-[16px]">{subtitle}</span>
              <span className="text-brand-dark text-[16px] font-medium tracking-[0.15px] mt-[2px]">
                {formatBudgetRange(budget)}
              </span>
            </div>
          )
        })}
      </div>
      <button className="flex items-center justify-center h-[36px] border-t border-input-border text-brand text-sm bg-pill-bg hover:bg-brand-subtle transition-colors">
        View details
      </button>
    </div>
  )
}
