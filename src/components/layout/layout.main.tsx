import { useBoardState } from '../../hooks/useBoardState'
import { useSearch } from '../../hooks/useSearch'
import { useShortlistFilter } from '../../hooks/useShortlistFilter'
import { NavigationSidebar } from './NavigationSidebar'
import { VacancyCard } from './VacancyCard'
import { ViewOptionsPanel } from './ViewOptionsPanel'
import { SearchBar } from './SearchBar'
import { KanbanBoard } from '../board/KanbanBoard'

export function MainLayout() {
  const { board, isLoading, error, moveCandidate } = useBoardState()

  const candidates = board?.candidates ?? []
  const { query, setQuery, filtered: searched } = useSearch(candidates)
  const { showOnlyShortlisted, toggle, filtered } = useShortlistFilter(searched)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-muted-foreground text-sm">
        Loading…
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-destructive text-sm">
        Failed to load board: {error.message}
      </div>
    )
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <NavigationSidebar />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {board?.vacancy && <VacancyCard vacancy={board.vacancy} />}

        <ViewOptionsPanel candidateCount={filtered.length} />

        <SearchBar
          query={query}
          onQueryChange={setQuery}
          showOnlyShortlisted={showOnlyShortlisted}
          onToggleShortlisted={toggle}
        />

        <div className="flex-1 overflow-hidden">
          <KanbanBoard candidates={filtered} onMoveCandidate={moveCandidate} />
        </div>
      </div>
    </div>
  )
}
