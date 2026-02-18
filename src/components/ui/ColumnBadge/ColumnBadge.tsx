import type { PipelineStage } from '../../../types/api.types'
import { stageLabel } from '../../../utils/candidate'
import { cn } from '../../../utils/cn'

export interface ColumnBadgeProps {
  stage: PipelineStage
}

const STAGE_CLASS: Record<PipelineStage, string> = {
  applications: 'bg-badge-applications',
  under_review: 'bg-badge-under-review',
  first_interview: 'bg-badge-first-interview',
  contract_offer: 'bg-badge-contract-offer',
  hired: 'bg-badge-hired',
  not_proceeding: 'bg-badge-not-proceeding',
}

export function ColumnBadge({ stage }: ColumnBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center h-[20px] px-[8px] rounded-full text-[11px] text-white font-medium',
        STAGE_CLASS[stage],
      )}
    >
      {stageLabel(stage)}
    </span>
  )
}
