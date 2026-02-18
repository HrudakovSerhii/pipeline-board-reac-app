import type { CandidateCompensation } from '../../../types/api.types'
import { formatRate } from '../../../utils/candidate'

export interface CompensationSummaryProps {
  compensation: CandidateCompensation
}

export function CompensationSummary({ compensation }: CompensationSummaryProps) {
  const rows = [
    { label: 'Freelancer:', rate: compensation.freelancer },
    { label: 'Contractor:', rate: compensation.contractor },
    { label: 'Direct employment:', rate: compensation.directEmployment },
  ].filter((row) => row.rate !== undefined)

  if (rows.length === 0) return null

  return (
    <div className="flex flex-wrap gap-[10px] items-start">
      {rows.map(({ label, rate }) => (
        <div key={label} className="text-[11px] text-[#6e6f7d]">
          {label} <span className="text-[#0d102b]">{formatRate(rate!)}</span>
        </div>
      ))}
    </div>
  )
}
