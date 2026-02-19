import type { CandidateAvailability } from '../../../types/api.types'
import { Pill } from '../../ui/Pill'
import icons from '../../../assets/icons'

export interface AvailabilityTagsProps {
  availability: CandidateAvailability
  negotiationNote?: string
}

const STATUS_DOT: Record<CandidateAvailability['status'], string> = {
  available: 'bg-badge-hired',
  soon: 'bg-badge-contract-offer',
  unavailable: 'bg-unavailable',
}

const STATUS_LABEL: Record<CandidateAvailability['status'], string> = {
  available: 'Available',
  soon: 'Available soon',
  unavailable: 'Unavailable',
}

function CheckCircleIcon() {
  return (
    <div className="shrink-0 size-[14px] text-muted-foreground">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={icons.p2cf40a0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export function AvailabilityTags({ availability, negotiationNote }: AvailabilityTagsProps) {
  return (
    <div className="flex flex-wrap gap-[6px] items-center w-full">
      <Pill>
        <span className="mr-[4px]">{STATUS_LABEL[availability.status]}</span>
        <div className={`rounded-[2px] size-[5px] shrink-0 ${STATUS_DOT[availability.status]}`} />
      </Pill>

      {negotiationNote && (
        <Pill>
          <CheckCircleIcon />
          <span className="ml-[4px]">{negotiationNote}</span>
        </Pill>
      )}
    </div>
  )
}
