import type { PipelineStage } from '../../../types/api.types'
import { stageLabel } from '../../../utils/candidate'
import { cn } from '../../../utils/cn'

export interface ColumnBadgeProps {
  stage: PipelineStage
  value: Number
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
    <div className="inline-flex items-center text-heading font-medium gap-[4px]">
      <span className={cn('rounded-full w-[12px] h-[12px]  text-[14px]', STAGE_CLASS[stage])} />
      <span>
        {stageLabel(stage)} ({value.toString()})
      </span>
    </div>
  )
}
