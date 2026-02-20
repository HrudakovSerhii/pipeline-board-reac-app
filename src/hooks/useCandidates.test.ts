import { renderHook, act, waitFor } from '@testing-library/react'
import { useCandidates } from './useCandidates'
import { getCandidates, updateCandidate } from '../api/candidates.api'
import { getLocalStorage } from '../utils/localStorage'
import type { Candidate, PipelineStage } from '../types/api.types'

vi.mock('../api/candidates.api')
vi.mock('../utils/localStorage')

function makeCandidate(id: string, stage: PipelineStage): Candidate {
  return {
    id,
    name: 'Test User',
    role: 'Developer',
    location: 'Berlin',
    availability: { status: 'available', availableFrom: '2026-03-01' },
    skills: [],
    postedAt: '2026-01-01T00:00:00Z',
    compensation: [],
    aiAnalise: { matchScore: 80 },
    process: { stage },
    isShortlisted: false,
    isGloPros: false,
  }
}

const VACANCY_ID = 'CN00001'

beforeEach(() => {
  vi.resetAllMocks()
  vi.mocked(getLocalStorage).mockReturnValue(null)
})

describe('useCandidates', () => {
  it('returns candidates after successful fetch', async () => {
    const candidate = makeCandidate('c1', 'applications')
    vi.mocked(getCandidates).mockResolvedValueOnce({ candidates: [candidate], totalCount: 1 })

    const { result } = renderHook(() => useCandidates(VACANCY_ID))

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.candidates).toEqual([candidate])
    expect(result.current.error).toBeNull()
  })

  it('applies saved stages from localStorage over API data', async () => {
    vi.mocked(getCandidates).mockResolvedValueOnce({
      candidates: [makeCandidate('c1', 'applications')],
      totalCount: 1,
    })
    vi.mocked(getLocalStorage).mockReturnValue([makeCandidate('c1', 'under_review')])

    const { result } = renderHook(() => useCandidates(VACANCY_ID))

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.candidates![0].process.stage).toBe('under_review')
  })

  it('rolls back stage on PATCH failure', async () => {
    vi.mocked(getCandidates).mockResolvedValueOnce({
      candidates: [makeCandidate('c1', 'applications')],
      totalCount: 1,
    })
    vi.mocked(updateCandidate).mockRejectedValueOnce(new Error('Network error'))

    const { result } = renderHook(() => useCandidates(VACANCY_ID))
    await waitFor(() => expect(result.current.isLoading).toBe(false))

    act(() => {
      result.current.moveCandidate('c1', 'under_review')
    })
    expect(result.current.candidates![0].process.stage).toBe('under_review')

    await waitFor(() =>
      expect(result.current.candidates![0].process.stage).toBe('applications'),
    )
  })

  it('aborts the fetch on unmount', () => {
    let capturedSignal: AbortSignal | undefined
    vi.mocked(getCandidates).mockImplementation((_id, signal) => {
      capturedSignal = signal
      return new Promise(() => {})
    })

    const { unmount } = renderHook(() => useCandidates(VACANCY_ID))

    expect(capturedSignal?.aborted).toBe(false)
    unmount()
    expect(capturedSignal?.aborted).toBe(true)
  })
})
