import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import type { Candidate, PipelineStage } from '../../../types/api.types'
import { ColumnBadge } from '../../ui/ColumnBadge'
import { SortableCandidateCard } from './SortableCandidateCard'

export interface KanbanColumnProps {
  stage: PipelineStage
  candidates: Candidate[]
}

export function KanbanColumn({ stage, candidates }: KanbanColumnProps) {
  const { setNodeRef } = useDroppable({ id: stage })

  return (
    <div className="flex flex-col h-full w-kanban-col shrink-0 bg-col-bg rounded-[10px] px-[12px]">
      {/* Header */}
      <div className="flex items-center gap-[8px] py-[14px] sticky top-0 bg-col-bg z-10">
        <ColumnBadge stage={stage} value={candidates.length} />
      </div>

      {/* Droppable card list */}
      <SortableContext items={candidates.map((c) => c.id)} strategy={verticalListSortingStrategy}>
        <div
          ref={setNodeRef}
          className="flex flex-col gap-[12px] overflow-y-auto pb-[16px] flex-1 min-h-[80px]"
        >
          {candidates.map((candidate) => (
            <SortableCandidateCard key={candidate.id} candidate={candidate} stage={stage} />
          ))}
        </div>
      </SortableContext>
    </div>
  )
}
