import { Avatar } from '../ui/Avatar'
import { CandidateJobIcon, CandidateLocationIcon } from '../ui/icons'

import type { Candidate } from '../../types/api.types.ts'

export interface ProfileHeaderProps {
  candidate: Candidate
  variant: 'applications' | 'full'
}

export function ProfileHeader({ candidate, variant }: ProfileHeaderProps) {
  if (variant === 'applications') {
    return (
      <div className="flex gap-2 items-center w-full">
        <Avatar
          name={candidate.name}
          avatarUrl={candidate.avatarUrl}
          isGloPros={candidate.isGloPros}
          isBlurred
        />
        <div className="flex flex-col gap-0.75 min-w-0">
          <span className="text-[14px] text-secondary tracking-[0.28px] truncate">
            {candidate.role}
          </span>
          <div className="flex gap-1 items-center">
            <div className="shrink-0 size-3.5 text-muted-foreground">
              <CandidateLocationIcon />
            </div>
            <span className="text-[11px] text-secondary">{candidate.location}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-2 items-center w-full">
      <Avatar
        name={candidate.name}
        avatarUrl={candidate.avatarUrl}
        isGloPros={candidate.isGloPros}
        isBlurred={false}
      />
      <div className="flex flex-col gap-0.75 min-w-0">
        <span className="text-[15px] text-secondary tracking-[0.3px] truncate">
          {candidate.name}
        </span>
        <div className="flex flex-wrap gap-1 items-center">
          <div className="shrink-0 size-3.5 text-muted-foreground">
            <CandidateJobIcon />
          </div>
          <span className="text-[11px] text-secondary">{candidate.role}</span>
          <span className="text-[10px] text-secondary opacity-60">•</span>
          <div className="shrink-0 size-3.5 text-muted-foreground">
            <CandidateLocationIcon />
          </div>
          <span className="text-[11px] text-secondary">{candidate.location}</span>
        </div>
      </div>
    </div>
  )
}
