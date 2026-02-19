import { VacancyLeftPanel } from './VacancyLeftPanel'
import { VacancyRatePanel } from './VacancyRatePanel'
import { VacancyManagementPanel } from './VacancyManagementPanel'

import { useVacancy } from '../../../hooks/useVacancy.ts'

export function VacancyView() {
  const { vacancy, isLoading, error } = useVacancy()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-muted-foreground text-sm">
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-destructive text-sm">
        Failed to load vacancy: {error.message}
      </div>
    )
  }

  if (!vacancy) return null

  return (
    <div className="flex items-stretch overflow-hidden rounded-[20px] shadow-card">
      <VacancyLeftPanel vacancy={vacancy} />
      {vacancy.budgets.length > 0 && <VacancyRatePanel budgets={vacancy.budgets} />}
      <VacancyManagementPanel vacancy={vacancy} />
    </div>
  )
}
