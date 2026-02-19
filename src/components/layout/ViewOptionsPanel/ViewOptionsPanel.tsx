export interface ViewOptionsPanelProps {
  candidateCount: number
}

export function ViewOptionsPanel({ candidateCount }: ViewOptionsPanelProps) {
  return (
    <div className="flex items-center gap-[4px] px-[16px] py-[10px] border-b border-border">
      <button
        disabled
        className="h-[32px] px-[14px] rounded-full text-2xs text-muted-foreground opacity-40 cursor-not-allowed"
      >
        Vacancy overview
      </button>
      <button
        disabled
        className="h-[32px] px-[14px] rounded-full text-2xs text-muted-foreground opacity-40 cursor-not-allowed"
      >
        AI search
      </button>
      <button className="h-[32px] px-[14px] rounded-full text-2xs font-medium bg-brand text-white">
        Candidates {candidateCount}
      </button>
    </div>
  )
}
