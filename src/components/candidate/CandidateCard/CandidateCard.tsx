import type { Candidate, PipelineStage } from '../../../types/api.types'
import { Stage } from '../../../utils/candidate'
import { ProfileHeader } from '../ProfileHeader'
import { AvailabilityTags } from '../AvailabilityTags'
import { SkillsRow } from '../SkillsRow'
import { CompensationSummary } from '../CompensationSummary'
import { AiMatchBreakdown } from '../AiMatchBreakdown'
import { HiredNotice } from '../HiredNotice'
import { DeclinedNotice } from '../DeclinedNotice'
import { RecruiterBadge } from '../RecruiterBadge'
import { ScoreCircle } from '../../ui/ScoreCircle'
import { useState } from 'react'
import { DownIcon } from '../../ui/icons'

export interface CandidateCardProps {
  candidate: Candidate
  stage: PipelineStage
}

const VISIBLE_SKILLS = 3

export function CandidateCard({ candidate, stage }: CandidateCardProps) {
  const isApplications = stage === Stage.applications

  const [isAIBreakdownVisible, setIsAIBreakdownVisible] = useState(isApplications)
  const showRecruiterBadge = stage === Stage.under_review || stage === Stage.first_interview

  return (
    <div className="relative bg-white rounded-[10px] w-full py-[14px] flex flex-col gap-[12px]">
      {showRecruiterBadge && <RecruiterBadge />}

      <div className="px-[14px]">
        <ProfileHeader candidate={candidate} variant={isApplications ? 'applications' : 'full'} />
      </div>

      {stage === Stage.hired && candidate.hiredAt && candidate.hiredBy && (
        <div className="px-[14px]">
          <HiredNotice hiredAt={candidate.hiredAt} hiredBy={candidate.hiredBy} />
        </div>
      )}

      {stage === Stage.not_proceeding &&
        candidate.declinedAt &&
        candidate.declinedBy &&
        candidate.declineReason && (
          <div className="px-[14px]">
            <DeclinedNotice
              reason={candidate.declineReason}
              declinedBy={candidate.declinedBy}
              declinedAt={candidate.declinedAt}
            />
          </div>
        )}

      <div className="flex flex-col gap-[8px]">
        <div className="px-[14px]">
          <AvailabilityTags
            availability={candidate.availability}
            negotiationNote={candidate.negotiationNote}
          />
        </div>

        <div className="px-[14px]">
          <SkillsRow
            skills={candidate.skills}
            visibleCount={VISIBLE_SKILLS}
            postedAt={candidate.postedAt}
          />
        </div>

        <div className="px-[14px] flex gap-[12px] items-start">
          <div className="flex-1 min-w-0">
            <CompensationSummary compensation={candidate.compensation} />
          </div>
          <div className="flex gap-[4px] justify-center items-center">
            <ScoreCircle score={candidate.matchScore} />
            <button onClick={() => setIsAIBreakdownVisible(!isAIBreakdownVisible)}>
              <DownIcon />
            </button>
          </div>
        </div>

        {isAIBreakdownVisible && candidate.aiMatchBreakdown && (
          <div className="px-[14px]">
            <AiMatchBreakdown breakdown={candidate.aiMatchBreakdown} />
          </div>
        )}
      </div>
    </div>
  )
}
