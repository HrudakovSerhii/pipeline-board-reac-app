import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import { useState } from 'react'
import type { Candidate, PipelineStage } from '../../../types/api.types'
import { Stage } from '../../../utils/candidate'
import { KanbanColumn } from '../KanbanColumn'
import { CandidateCard } from '../../candidate/CandidateCard'

export interface KanbanBoardProps {
  candidates: Candidate[]
  onMoveCandidate: (id: string, stage: PipelineStage) => void
}

const STAGES = Object.values(Stage) as PipelineStage[]

export function KanbanBoard({ candidates, onMoveCandidate }: KanbanBoardProps) {
  const [activeCandidate, setActiveCandidate] = useState<Candidate | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
  )

  function handleDragStart(event: DragStartEvent) {
    const candidate = candidates.find((c) => c.id === event.active.id)
    if (candidate) setActiveCandidate(candidate)
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveCandidate(null)
    const { active, over } = event
    if (!over || active.id === over.id) return

    const newStage = over.id as PipelineStage
    if (!STAGES.includes(newStage)) return

    const candidate = candidates.find((c) => c.id === active.id)
    if (!candidate || candidate.stage === newStage) return

    onMoveCandidate(String(active.id), newStage)
  }

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex gap-[var(--kanban-col-gap)] px-[16px] pt-[8px] overflow-x-auto h-full">
        {STAGES.map((stage) => (
          <KanbanColumn
            key={stage}
            stage={stage}
            candidates={candidates.filter((c) => c.stage === stage)}
          />
        ))}
        <div className="shrink-0 w-[8px]" />
      </div>

      <DragOverlay>
        {activeCandidate && (
          <div className="w-[var(--kanban-col-w)] rotate-2 opacity-95 shadow-lg">
            <CandidateCard candidate={activeCandidate} stage={activeCandidate.stage} />
          </div>
        )}
      </DragOverlay>
    </DndContext>
  )
}
