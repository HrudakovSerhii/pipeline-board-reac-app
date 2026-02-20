import { NavigationSidebar } from './NavigationSidebar'
import { VacancyView } from './VacancyCard'
import { BoardView } from './BoardView'
import { useVacancy } from '../../hooks/useVacancy.ts'

export function MainLayout() {
  const { vacancy, isLoading, error } = useVacancy()

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <NavigationSidebar />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <VacancyView isLoading={isLoading} error={error} vacancy={vacancy} />
        {vacancy ? <BoardView vacancyId={vacancy.id} /> : null}
      </div>
    </div>
  )
}
