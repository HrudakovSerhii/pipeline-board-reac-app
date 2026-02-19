import { formatCandidateRate, rateModeLabel } from '../../utils/candidate.ts'

import type { CandidateRate } from '../../types/api.types.ts'

export interface CompensationSummaryProps {
  compensation: CandidateRate[]
}

export function CompensationSummary({ compensation }: CompensationSummaryProps) {
  if (compensation.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2.5 items-center">
      {compensation.map((rate) => (
        <div key={rate.type} className="flex flex-col text-[11px]">
          <span className="text-muted-foreground">{rateModeLabel(rate.type)}</span>
          <span className="text-secondary font-bold">{formatCandidateRate(rate)}</span>
        </div>
      ))}
    </div>
  )
}
