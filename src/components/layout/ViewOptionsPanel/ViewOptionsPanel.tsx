import { PersonIcon, SearchIcon, VacancyIcon } from '../../ui/icons'

export interface ViewOptionsPanelProps {
  candidateCount: number
}

export function ViewOptionsPanel({ candidateCount }: ViewOptionsPanelProps) {
  return (
    <div className="flex items-center gap-1 px-4 py-2.5 border-b border-border">
      <button
        disabled
        className="h-8 px-3.5 rounded-full text-2xs text-muted-foreground opacity-40 cursor-not-allowed"
      >
        <VacancyIcon />
        Vacancy overview
      </button>
      <button
        disabled
        className="h-8 px-3.5 rounded-full text-2xs text-muted-foreground opacity-40 cursor-not-allowed"
      >
        <SearchIcon />
        AI search
      </button>
      <button className="h-8 px-3.5 rounded-full text-2xs font-medium bg-brand text-white">
        <PersonIcon />
        Candidates {candidateCount}
      </button>
    </div>
  )
}
