import { resolveDropStage } from './board.utils'
import type { Candidate } from '../../types/api.types'
import { Stage } from '../../utils/candidate'

function makeCandidate(overrides: Partial<Candidate> & { id: string }): Candidate {
  return {
    name: 'Test User',
    role: 'Developer',
    location: 'Berlin, Germany',
    availability: { status: 'available', availableFrom: '2026-03-01' },
    skills: [],
    postedAt: '2026-01-01T00:00:00Z',
    compensation: [],
    matchScore: 80,
    stage: 'applications',
    isShortlisted: false,
    isGloPros: false,
    ...overrides,
  }
}

const STAGES = Object.values(Stage) as Array<(typeof Stage)[keyof typeof Stage]>

const candidates: Candidate[] = [
  makeCandidate({ id: 'c1', stage: Stage.applications }),
  makeCandidate({ id: 'c2', stage: Stage.under_review }),
  makeCandidate({ id: 'c3', stage: Stage.hired }),
]

describe('resolveDropStage', () => {
  it('returns the stage when over.id is a stage name (dropped on empty column)', () => {
    expect(resolveDropStage(Stage.contract_offer, candidates, STAGES)).toBe(Stage.contract_offer)
  })

  it('returns the target candidate stage when over.id is a candidate id (dropped on a card)', () => {
    // c2 is in under_review — dropping on c2 should move to under_review
    expect(resolveDropStage('c2', candidates, STAGES)).toBe(Stage.under_review)
  })

  it('returns the source candidate stage when dropped on a card in the same column', () => {
    // c1 is in applications — dropping on c1 resolves to applications
    expect(resolveDropStage('c1', candidates, STAGES)).toBe(Stage.applications)
  })

  it('returns null for an unknown id', () => {
    expect(resolveDropStage('unknown-id', candidates, STAGES)).toBeNull()
  })

  it('resolves all valid stage names', () => {
    for (const stage of STAGES) {
      expect(resolveDropStage(stage, candidates, STAGES)).toBe(stage)
    }
  })
})
