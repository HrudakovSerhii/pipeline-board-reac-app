import icons from '../../../assets/icons'
import { Avatar } from '../../ui/Avatar'
import type { Candidate } from '../../../types/api.types'

export interface ProfileHeaderProps {
  candidate: Candidate
  variant: 'applications' | 'full'
}

function LocationIcon() {
  return (
    <div className="shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={icons.p2aa12f00} stroke="#6E6F7D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        <path d={icons.p1a649170} stroke="#6E6F7D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
      </svg>
    </div>
  )
}

function JobIcon() {
  return (
    <div className="shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={icons.p2be5280} stroke="#6E6F7D" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export function ProfileHeader({ candidate, variant }: ProfileHeaderProps) {
  if (variant === 'applications') {
    return (
      <div className="flex gap-[8px] items-center w-full">
        <Avatar name={candidate.name} avatarUrl={candidate.avatarUrl} isGloPros={candidate.isGloPros} isBlurred/>
        <div className="flex flex-col gap-[3px] min-w-0">
          <span className="text-[14px] text-[#0d102b] tracking-[0.28px] truncate">{candidate.role}</span>
          <div className="flex gap-[4px] items-center">
            <LocationIcon />
            <span className="text-[11px] text-[#0d102b]">{candidate.location}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-[8px] items-center w-full">
      <Avatar name={candidate.name} avatarUrl={candidate.avatarUrl} isGloPros={candidate.isGloPros} isBlurred={false}/>
      <div className="flex flex-col gap-[3px] min-w-0">
        <span className="text-[15px] text-[#0d102b] tracking-[0.3px] truncate">{candidate.name}</span>
        <div className="flex flex-wrap gap-[4px] items-center">
          <JobIcon />
          <span className="text-[11px] text-[#0d102b]">{candidate.role}</span>
          <span className="text-[10px] text-[#0d102b] opacity-60">•</span>
          <LocationIcon />
          <span className="text-[11px] text-[#0d102b]">{candidate.location}</span>
        </div>
      </div>
    </div>
  )
}
