import type { CandidateRate } from '../../../types/api.types'
import { formatRate, rateModeLabel } from '../../../utils/candidate'

export interface CompensationSummaryProps {
  compensation: CandidateRate[]
}

export function CompensationSummary({ compensation }: CompensationSummaryProps) {
  if (compensation.length === 0) return null

  return (
    <div className="flex flex-wrap gap-[10px] items-center">
      {compensation.map((rate) => (
        <div key={rate.mode} className="flex flex-col text-[11px]">
          <span className="text-muted-foreground">{rateModeLabel(rate.mode)}</span>
          <span className="text-secondary font-bold">{formatRate(rate)}</span>
        </div>
      ))}
    </div>
  )
}
