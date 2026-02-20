import { render, screen } from '@testing-library/react'
import { CandidateCard } from './CandidateCard'
import type { Candidate, PipelineStage } from '../../../types/api.types'
import { Stage } from '../../../utils/candidate'

function makeCandidate(overrides: Partial<Candidate> = {}): Candidate {
  return {
    id: 'c1',
    name: 'Jane Doe',
    role: 'Frontend Developer',
    location: 'Berlin, Germany',
    availability: { status: 'available', availableFrom: '2026-03-01' },
    skills: [
      { id: 's1', label: 'React' },
      { id: 's2', label: 'TypeScript' },
      { id: 's3', label: 'CSS' },
      { id: 's4', label: 'Node.js' },
    ],
    postedAt: '2026-01-15T00:00:00Z',
    compensation: [{ type: 'freelance', amount: 80, currency: 'USD', period: 'hour' }],
    aiAnalise: {
      matchScore: 85,
    },
    process: {
      stage: 'applications',
    },
    isShortlisted: false,
    isGloPros: false,
    ...overrides,
  }
}

function renderCard(stage: PipelineStage, overrides: Partial<Candidate> = {}) {
  const { process: processOverride, ...rest } = overrides
  const candidate = makeCandidate({ ...rest, process: { ...processOverride, stage } })
  return render(<CandidateCard candidate={candidate} stage={stage} />)
}

describe('CandidateCard', () => {
  it('renders candidate skills and score for any stage', () => {
    renderCard(Stage.under_review)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('CSS')).toBeInTheDocument()
    expect(screen.getByText('85%')).toBeInTheDocument()
  })

  it('renders availability status', () => {
    renderCard(Stage.applications)

    expect(screen.getByText('Available')).toBeInTheDocument()
  })

  it('shows AI match breakdown only in applications stage', () => {
    const breakdown = {
      experience: 90,
      skills: 80,
      rate: 70,
      distance: '50km',
      availability: true,
      industry: true,
    }

    renderCard(Stage.applications, { aiAnalise: { matchScore: 85, matchBreakdown: breakdown } })
    expect(screen.getByText('Experience:')).toBeInTheDocument()
    expect(screen.getByText('Skills:')).toBeInTheDocument()
  })

  it('hides AI match breakdown in non-applications stages', () => {
    const breakdown = {
      experience: 90,
      skills: 80,
      rate: 70,
      distance: '50km',
      availability: true,
      industry: true,
    }

    renderCard(Stage.under_review, { aiAnalise: { matchScore: 85, matchBreakdown: breakdown } })
    expect(screen.queryByText('Experience:')).not.toBeInTheDocument()
  })

  it('shows recruiter badge in under_review stage', () => {
    renderCard(Stage.under_review)

    expect(screen.getByText('Recruiter search')).toBeInTheDocument()
  })

  it('shows recruiter badge in first_interview stage', () => {
    renderCard(Stage.first_interview)

    expect(screen.getByText('Recruiter search')).toBeInTheDocument()
  })

  it('hides recruiter badge in other stages', () => {
    renderCard(Stage.applications)

    expect(screen.queryByText('Recruiter search')).not.toBeInTheDocument()
  })

  it('shows hired notice when stage is hired with required fields', () => {
    renderCard(Stage.hired, {
      process: { stage: Stage.hired, hiredAt: '2026-02-01T00:00:00Z', hiredBy: 'John Smith' },
    })

    expect(screen.getByText('Professional has accepted the offer')).toBeInTheDocument()
    expect(screen.getByText(/John Smith/)).toBeInTheDocument()
  })

  it('hides hired notice when hiredAt is missing', () => {
    renderCard(Stage.hired, { process: { stage: Stage.hired, hiredBy: 'John Smith' } })

    expect(screen.queryByText('Professional has accepted the offer')).not.toBeInTheDocument()
  })

  it('shows declined notice when stage is not_proceeding with required fields', () => {
    renderCard(Stage.not_proceeding, {
      process: {
        stage: Stage.not_proceeding,
        declinedAt: '2026-02-10T00:00:00Z',
        declinedBy: 'Jane Recruiter',
        declineReason: 'Salary expectations too high',
      },
    })

    expect(screen.getByText('Salary expectations too high')).toBeInTheDocument()
    expect(screen.getByText(/Jane Recruiter/)).toBeInTheDocument()
  })

  it('hides declined notice when declineReason is missing', () => {
    renderCard(Stage.not_proceeding, {
      process: {
        stage: Stage.not_proceeding,
        declinedAt: '2026-02-10T00:00:00Z',
        declinedBy: 'Jane Recruiter',
      },
    })

    expect(screen.queryByText(/Jane Recruiter/)).not.toBeInTheDocument()
  })

  it('shows +1 badge when skills exceed visible count', () => {
    renderCard(Stage.applications)

    expect(screen.getByText('+1')).toBeInTheDocument()
  })

  it('renders compensation info', () => {
    renderCard(Stage.contract_offer)

    expect(screen.getByText('$80/h')).toBeInTheDocument()
  })
})
