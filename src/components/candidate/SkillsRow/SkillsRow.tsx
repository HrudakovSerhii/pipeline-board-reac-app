import type { Skill } from '../../../types/api.types'
import { SkillChip } from '../../ui/SkillChip'
import icons from '../../../assets/icons'
import { daysAgoLabel } from '../../../utils/candidate'

export interface SkillsRowProps {
  skills: Skill[]
  visibleCount: number
  postedAt: string
}

function ClockIcon() {
  return (
    <div className="shrink-0 size-[14px] text-muted-foreground">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d={icons.p1cbd8200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 4V8L10.6667 9.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export function SkillsRow({ skills, visibleCount, postedAt }: SkillsRowProps) {
  const visible = skills.slice(0, visibleCount)
  const extra = skills.length - visibleCount

  return (
    <div className="flex items-center justify-between gap-[8px] w-full">
      <div className="flex flex-wrap gap-[4px] items-center">
        {visible.map((skill) => (
          <SkillChip key={skill.id} label={skill.label} />
        ))}
        {extra > 0 && <SkillChip label={`+${extra}`} />}
      </div>

      <div className="flex items-center gap-[4px] shrink-0">
        <ClockIcon />
        <span className="text-[11px] text-secondary whitespace-nowrap">{daysAgoLabel(postedAt)}</span>
      </div>
    </div>
  )
}
