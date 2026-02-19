import type { UniqueIdentifier } from '@dnd-kit/core'
import type { Candidate, PipelineStage } from '../../types/api.types'

/**
 * Determines the target stage from a @dnd-kit DragEndEvent's `over.id`.
 * `over.id` is either a stage name (dropped on an empty column droppable)
 * or a candidate ID (dropped on top of another card inside a column).
 * Returns null when the id cannot be resolved to a stage.
 */
export function resolveDropStage(
  overId: UniqueIdentifier,
  candidates: Candidate[],
  stages: PipelineStage[],
): PipelineStage | null {
  if (stages.includes(overId as PipelineStage)) {
    return overId as PipelineStage
  }
  return candidates.find((c) => c.id === overId)?.stage ?? null
}
