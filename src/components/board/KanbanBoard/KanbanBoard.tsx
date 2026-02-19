import { useState } from 'react'
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'

import { Stage } from '../../../utils/candidate'
import { resolveDropStage } from '../board.utils'
import { KanbanColumn } from '../KanbanColumn'
import { CandidateCard } from '../../candidate/CandidateCard'

import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import type { Candidate, PipelineStage } from '../../../types/api.types'

export interface KanbanBoardProps {
  candidates: Candidate[]
  onMoveCandidate: (id: string, stage: PipelineStage) => void
}

const STAGES = Object.values(Stage) as PipelineStage[]

export function KanbanBoard({ candidates, onMoveCandidate }: KanbanBoardProps) {
  const [activeCandidate, setActiveCandidate] = useState<Candidate | null>(null)

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }))

  function handleDragStart(event: DragStartEvent) {
    const candidate = candidates.find((c) => c.id === event.active.id)
    if (candidate) setActiveCandidate(candidate)
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveCandidate(null)
    const { active, over } = event
    if (!over) return

    const draggedCandidate = candidates.find((c) => c.id === active.id)
    if (!draggedCandidate) return

    const newStage = resolveDropStage(over.id, candidates, STAGES)
    if (!newStage || draggedCandidate.process.stage === newStage) return

    onMoveCandidate(String(active.id), newStage)
  }

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex gap-(--kanban-col-gap) px-4 pt-2 overflow-x-auto h-full">
        {STAGES.map((stage) => (
          <KanbanColumn
            key={stage}
            stage={stage}
            candidates={candidates.filter((c) => c.process.stage === stage)}
          />
        ))}
        <div className="shrink-0 w-2" />
      </div>

      <DragOverlay>
        {activeCandidate && (
          <div className="w-(--kanban-col-w) rotate-2 opacity-95 shadow-lg">
            <CandidateCard candidate={activeCandidate} stage={activeCandidate.process.stage} />
          </div>
        )}
      </DragOverlay>
    </DndContext>
  )
}
