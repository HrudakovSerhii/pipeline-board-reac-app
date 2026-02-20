import { PersonIcon, SearchIcon, VacancyIcon } from '../../ui/icons'

export interface ViewOptionsPanelProps {
  candidateCount: number
}

export function ViewOptionsPanel({ candidateCount }: ViewOptionsPanelProps) {
  return (
    <div className="flex items-center border-b border-border mx-4 gap-4">
      <button disabled className="flex flex-col items-start p-4 gap-2.5 h-14 cursor-not-allowed">
        <div className="flex items-center gap-2.25">
          <VacancyIcon className="w-5 h-5 shrink-0 text-muted-foreground" />
          <span className="tracking-[0.5px] text-muted-foreground whitespace-nowrap">
            Vacancy overview
          </span>
        </div>
      </button>
      <button disabled className="flex flex-col items-start p-4 gap-2.5 h-14 cursor-not-allowed">
        <div className="flex items-center gap-2.25">
          <SearchIcon className="w-5 h-5 shrink-0 text-muted-foreground" />
          <span className="tracking-[0.5px] text-muted-foreground">AI search</span>
        </div>
      </button>
      <button className="flex flex-col items-start p-4 gap-2.5 h-14  border-brand border-b-4">
        <div className="flex items-center gap-2.25">
          <PersonIcon className="w-5 h-5 shrink-0" />
          <span className="tracking-[0.5px] text-brand">Candidates</span>
          <span className="flex justify-center items-center px-2.5 py-0.5 bg-brand-subtle rounded-full text-sm leading-4 tracking-[0.5px] text-secondary">
            {candidateCount}
          </span>
        </div>
      </button>
    </div>
  )
}
