import type { Vacancy } from '../../../types/api.types'
import { VacancyLeftPanel } from './VacancyLeftPanel'
import { VacancyRatePanel } from './VacancyRatePanel'
import { VacancyManagementPanel } from './VacancyManagementPanel'

export interface VacancyCardProps {
  vacancy: Vacancy
}

export function VacancyCard({ vacancy }: VacancyCardProps) {
  return (
    <div className="flex items-stretch overflow-hidden rounded-[20px] shadow-card mx-[24px] my-[16px] shrink-0">
      <VacancyLeftPanel vacancy={vacancy} />
      {vacancy.budgets.length > 0 && <VacancyRatePanel budgets={vacancy.budgets} />}
      <VacancyManagementPanel vacancy={vacancy} />
    </div>
  )
}
