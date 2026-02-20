import { memo, useState } from 'react'

import { Stage } from '../../../utils/candidate'
import { DownIcon } from '../../ui/icons'

import { RecruiterBadge } from '../RecruiterBadge.tsx'
import { ProfileHeader } from '../ProfileHeader.tsx'
import { HiredNotice } from '../HiredNotice.tsx'
import { DeclinedNotice } from '../DeclinedNotice.tsx'
import { AvailabilityTags } from '../AvailabilityTags.tsx'
import { SkillsRow } from '../SkillsRow.tsx'
import { CompensationSummary } from '../CompensationSummary.tsx'
import { ScoreCircle } from '../../ui/ScoreCircle'

import type { Candidate, PipelineStage } from '../../../types/api.types'
import { AiMatchBreakdown } from '../AiMatchBreakdown.tsx'

export interface CandidateCardProps {
  candidate: Candidate
  stage: PipelineStage
}

const VISIBLE_SKILLS = 3

export const CandidateCard = memo(function CandidateCard({ candidate, stage }: CandidateCardProps) {
  const isApplications = stage === Stage.applications
  const candidateProcess = candidate.process

  const [isAIBreakdownVisible, setIsAIBreakdownVisible] = useState(isApplications)
  const showRecruiterBadge = stage === Stage.under_review || stage === Stage.first_interview

  return (
    <div className="relative bg-white rounded-lg w-full py-3.5 flex flex-col gap-3">
      {showRecruiterBadge && <RecruiterBadge />}

      <div className="px-3.5">
        <ProfileHeader candidate={candidate} variant={isApplications ? 'applications' : 'full'} />
      </div>

      {stage === Stage.hired && candidateProcess.hiredAt && candidateProcess.hiredBy && (
        <div className="px-3.5">
          <HiredNotice hiredAt={candidateProcess.hiredAt} hiredBy={candidateProcess.hiredBy} />
        </div>
      )}

      {stage === Stage.not_proceeding &&
        candidateProcess.declinedAt &&
        candidateProcess.declinedBy &&
        candidateProcess.declineReason && (
          <div className="px-3.5">
            <DeclinedNotice
              reason={candidateProcess.declineReason}
              declinedBy={candidateProcess.declinedBy}
              declinedAt={candidateProcess.declinedAt}
            />
          </div>
        )}

      <div className="flex flex-col gap-2">
        <div className="px-3.5">
          <AvailabilityTags
            availability={candidate.availability}
            negotiationNote={candidateProcess.negotiationNote}
          />
        </div>

        <div className="px-3.5">
          <SkillsRow
            skills={candidate.skills}
            visibleCount={VISIBLE_SKILLS}
            postedAt={candidate.postedAt}
          />
        </div>

        <div className="px-3.5 flex gap-3 items-start">
          <div className="flex-1 min-w-0">
            <CompensationSummary compensation={candidate.compensation} />
          </div>
          <div className="flex gap-1 justify-center items-center">
            <ScoreCircle score={candidate.aiAnalise.matchScore} />
            <button
              type="button"
              className="cursor-pointer"
              aria-expanded={isAIBreakdownVisible}
              aria-label="Toggle AI match breakdown"
              onClick={() => setIsAIBreakdownVisible(!isAIBreakdownVisible)}
            >
              <DownIcon />
            </button>
          </div>
        </div>

        {isAIBreakdownVisible && candidate.aiAnalise?.matchBreakdown && (
          <div className="px-3.5">
            <AiMatchBreakdown breakdown={candidate.aiAnalise.matchBreakdown} />
          </div>
        )}
      </div>
    </div>
  )
})
