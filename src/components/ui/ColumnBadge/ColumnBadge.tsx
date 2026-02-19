import { stageLabel } from '../../../utils/candidate'
import { cn } from '../../../utils/cn'

import type { PipelineStage } from '../../../types/api.types'

export interface ColumnBadgeProps {
  stage: PipelineStage
  value: number
}

const STAGE_CLASS: Record<PipelineStage, string> = {
  applications: 'bg-badge-applications',
  under_review: 'bg-badge-under-review',
  first_interview: 'bg-badge-first-interview',
  contract_offer: 'bg-badge-contract-offer',
  hired: 'bg-badge-hired',
  not_proceeding: 'bg-badge-not-proceeding',
}

export function ColumnBadge({ stage, value }: ColumnBadgeProps) {
  return (
    <div className="inline-flex items-center text-brand-dark font-medium gap-1">
      <span className={cn('rounded-full w-3 h-3 text-sm', STAGE_CLASS[stage])} />
      <span>
        {stageLabel(stage)} ({value.toString()})
      </span>
    </div>
  )
}
