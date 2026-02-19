import { cn } from '../../../utils/cn'
import { FilterLineIcon, PlusIcon, SearchIcon } from '../../ui/icons'

export interface SearchBarProps {
  query: string
  onQueryChange: (q: string) => void
  showOnlyShortlisted: boolean
  onToggleShortlisted: () => void
}

export function SearchBar({
  query,
  onQueryChange,
  showOnlyShortlisted,
  onToggleShortlisted,
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-[8px] px-[16px] py-[10px] border-b border-border">
      {/* Filter button — dummy */}
      <button className="flex items-center gap-[6px] h-[36px] px-[14px] rounded-full border-2 border-brand text-brand text-2xs font-medium shrink-0 hover:bg-brand-subtle transition-colors">
        <FilterLineIcon />
        Filter
      </button>

      {/* Search input */}
      <div className="relative flex-1 min-w-0 text-muted-foreground">
        <div className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search..."
          className="w-full h-[36px] pl-[34px] pr-[40px] rounded-full bg-search-bg border border-input-border text-2xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand transition-colors"
        />
        <span className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[11px] text-muted-foreground pointer-events-none">
          ⌘F
        </span>
      </div>

      {/* Shortlist toggle */}
      <button
        onClick={onToggleShortlisted}
        className={cn(
          'flex items-center h-[36px] px-[14px] rounded-full border-2 border-brand text-2xs font-medium shrink-0 transition-colors whitespace-nowrap',
          showOnlyShortlisted ? 'bg-brand text-white' : 'text-brand hover:bg-brand-subtle',
        )}
      >
        ☆ Shortlisted
      </button>

      {/* Filter icon button — dummy */}
      <button className="flex items-center justify-center size-[36px] rounded-full border-2 border-brand text-brand shrink-0 hover:bg-brand-subtle transition-colors">
        <FilterLineIcon />
      </button>

      {/* Add candidate button — dummy */}
      <button className="flex items-center gap-[6px] h-[36px] pl-[12px] pr-[16px] rounded-full bg-brand text-white text-2xs font-medium shrink-0 hover:bg-brand-hover transition-colors whitespace-nowrap">
        <PlusIcon />
        Add candidate
      </button>
    </div>
  )
}
