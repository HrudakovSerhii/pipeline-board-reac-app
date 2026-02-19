import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { ColumnBadge } from '../../ui/ColumnBadge'
import { SortableCandidateCard } from './SortableCandidateCard'

import type { Candidate, PipelineStage } from '../../../types/api.types'

export interface KanbanColumnProps {
  stage: PipelineStage
  candidates: Candidate[]
}

export function KanbanColumn({ stage, candidates }: KanbanColumnProps) {
  const { setNodeRef } = useDroppable({ id: stage })

  return (
    <div className="flex flex-col h-full w-kanban-col shrink-0 bg-col-bg rounded-lg px-3">
      {/* Header */}
      <div className="flex items-center gap-2 py-3.5 sticky top-0 bg-col-bg z-10">
        <ColumnBadge stage={stage} value={candidates.length} />
      </div>

      {/* Droppable card list */}
      <SortableContext items={candidates.map((c) => c.id)} strategy={verticalListSortingStrategy}>
        <div ref={setNodeRef} className="flex flex-col gap-3 overflow-y-auto pb-4 flex-1 min-h-20">
          {candidates.map((candidate) => (
            <SortableCandidateCard key={candidate.id} candidate={candidate} stage={stage} />
          ))}
        </div>
      </SortableContext>
    </div>
  )
}
