import { VacancyLeftPanel } from './VacancyLeftPanel'
import { VacancyRatePanel } from './VacancyRatePanel'
import { VacancyManagementPanel } from './VacancyManagementPanel'

import type { Vacancy } from '../../../types/api.types.ts'

export type VacancyViewProps = {
  isLoading: boolean
  error: Error | null
  vacancy: Vacancy | null
}

export function VacancyView({ isLoading, error, vacancy }: VacancyViewProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-muted-foreground text-sm">
        Loading Vacancy...
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
    <div className="flex items-stretch overflow-hidden rounded-[20px] shadow-card mx-6 my-4 shrink-0">
      <VacancyLeftPanel vacancy={vacancy} />
      {vacancy.budgets.length > 0 && <VacancyRatePanel budgets={vacancy.budgets} />}
      <VacancyManagementPanel vacancy={vacancy} />
    </div>
  )
}
