import { useCandidates } from '../../../hooks/useCandidates'
import { useSearch } from '../../../hooks/useSearch'
import { useShortlistFilter } from '../../../hooks/useShortlistFilter'
import { KanbanBoard } from '../../board/KanbanBoard'
import { ViewOptionsPanel } from '../ViewOptionsPanel'
import { SearchBar } from '../SearchBar'

interface BoardViewProps {
  vacancyId: string
}

export function BoardView({ vacancyId }: BoardViewProps) {
  const { candidates, isLoading, error, moveCandidate } = useCandidates(vacancyId)
  const { query, setQuery, filtered: searched } = useSearch(candidates ?? [])
  const { showOnlyShortlisted, toggle, filtered } = useShortlistFilter(searched)

  return (
    <>
      <ViewOptionsPanel candidateCount={filtered.length} />

      <SearchBar
        query={query}
        onQueryChange={setQuery}
        showOnlyShortlisted={showOnlyShortlisted}
        onToggleShortlisted={toggle}
      />

      {error?.message ? (
        <div className="flex items-center justify-center h-full text-destructive text-sm">
          Failed to load candidates: {error ? error.message : undefined}
        </div>
      ) : null}
      {isLoading ? (
        <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
          Loading…
        </div>
      ) : null}
      {candidates ? <KanbanBoard candidates={filtered} onMoveCandidate={moveCandidate} /> : null}
    </>
  )
}
