import { Pill } from '../ui/Pill'
import { CheckCircleIcon } from '../ui/icons'

import type { CandidateAvailability } from '../../types/api.types.ts'

export interface AvailabilityTagsProps {
  availability: CandidateAvailability
  negotiationNote?: string
}

const STATUS_DOT: Record<CandidateAvailability['status'], string> = {
  available: 'bg-badge-hired',
  now: 'bg-badge-contract-offer',
  unavailable: 'bg-unavailable',
}

const STATUS_LABEL: Record<CandidateAvailability['status'], string> = {
  available: 'Available',
  now: 'Available now',
  unavailable: 'Unavailable',
}

export function AvailabilityTags({ availability, negotiationNote }: AvailabilityTagsProps) {
  return (
    <div className="flex flex-wrap gap-1.5 items-center w-full">
      <Pill>
        <span className="mr-1">{STATUS_LABEL[availability.status]}</span>
        <div className={`rounded-xs size-1.25 shrink-0 ${STATUS_DOT[availability.status]}`} />
      </Pill>

      {negotiationNote && (
        <Pill>
          <div className="shrink-0 size-3.5 text-muted-foreground">
            <CheckCircleIcon />
          </div>
          <span className="ml-1">{negotiationNote}</span>
        </Pill>
      )}
    </div>
  )
}
