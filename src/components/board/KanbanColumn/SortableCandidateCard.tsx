import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { CandidateCard } from '../../candidate/CandidateCard'

import type { Candidate, PipelineStage } from '../../../types/api.types'

interface SortableCandidateCardProps {
  candidate: Candidate
  stage: PipelineStage
}

export function SortableCandidateCard({ candidate, stage }: SortableCandidateCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: candidate.id,
  })

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform), // runtime DnD transform
        transition,
        opacity: isDragging ? 0.4 : 1,
      }}
      {...attributes}
      {...listeners}
    >
      <CandidateCard candidate={candidate} stage={stage} />
    </div>
  )
}
