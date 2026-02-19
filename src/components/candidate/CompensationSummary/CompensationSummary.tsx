import type { CandidateRate } from '../../../types/api.types'
import { formatRate, rateModeLabel } from '../../../utils/candidate'

export interface CompensationSummaryProps {
  compensation: CandidateRate[]
}

export function CompensationSummary({ compensation }: CompensationSummaryProps) {
  if (compensation.length === 0) return null

  return (
    <div className="flex flex-wrap gap-[10px] items-start">
      {compensation.map((rate) => (
        <div key={rate.mode} className="text-[11px] text-[#6e6f7d]">
          {rateModeLabel(rate.mode)}: <span className="text-[#0d102b]">{formatRate(rate)}</span>
        </div>
      ))}
    </div>
  )
}
