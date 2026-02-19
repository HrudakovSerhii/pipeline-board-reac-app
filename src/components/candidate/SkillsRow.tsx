import { SkillChip } from '../ui/SkillChip'
import { daysAgoLabel } from '../../utils/candidate.ts'
import { CandidateClockIcon } from '../ui/icons'

import type { Skill } from '../../types/api.types.ts'

export interface SkillsRowProps {
  skills: Skill[]
  visibleCount: number
  postedAt: string
}

export function SkillsRow({ skills, visibleCount, postedAt }: SkillsRowProps) {
  const visible = skills.slice(0, visibleCount)
  const extra = skills.length - visibleCount

  return (
    <div className="flex items-center justify-between gap-2 w-full">
      <div className="flex flex-wrap gap-1 items-center">
        {visible.map((skill) => (
          <SkillChip key={skill.id} label={skill.label} />
        ))}
        {extra > 0 && <SkillChip label={`+${extra}`} />}
      </div>

      <div className="flex items-center gap-1 shrink-0">
        <div className="shrink-0 size-3.5 text-muted-foreground">
          <CandidateClockIcon />
        </div>
        <span className="text-[11px] text-secondary whitespace-nowrap">
          {daysAgoLabel(postedAt)}
        </span>
      </div>
    </div>
  )
}
