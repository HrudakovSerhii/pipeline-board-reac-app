import type { Vacancy, VacancyBudget, VacancyStatus } from '../../../types/api.types'
import { PhotoAvatar } from '../../ui/PhotoAvatar'
import { Pill } from '../../ui/Pill'
import { formatBudgetRange, budgetLabel } from '../../../utils/candidate'
import {
  LocationIcon,
  CalendarIcon,
  ClockIcon,
  DotsMenuIcon,
  SparklesIcon,
  EditIcon,
  MailIcon,
} from '../../ui/icons'

export interface VacancyCardProps {
  vacancy: Vacancy
}

// ─── Local helpers ────────────────────────────────────────────────────────────

function formatDateRange(start: string, end: string): string {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  return `${fmt(start)} – ${fmt(end)}`
}

const STATUS_CLASS: Record<VacancyStatus, string> = {
  Public: 'bg-status-public text-foreground',
  Private: 'bg-pill-bg text-muted-foreground',
  Draft: 'bg-pill-bg text-muted-foreground',
  Closed: 'bg-destructive text-destructive-foreground',
}

// ─── Sub-panels ───────────────────────────────────────────────────────────────

function LeftPanel({ vacancy }: { vacancy: Vacancy }) {
  const workRange = formatDateRange(vacancy.workPeriod.startDate, vacancy.workPeriod.endDate)
  const pubRange = formatDateRange(
    vacancy.publicationPeriod.startDate,
    vacancy.publicationPeriod.endDate,
  )

  return (
    <div className="flex flex-col flex-1 min-w-0 gap-[12px] px-[40px] pt-[24px] pb-[24px] bg-white">
      {/* Vacancy ID + title row */}
      <div className="flex items-start justify-between gap-[8px]">
        <div className="flex flex-col gap-[4px] min-w-0">
          <span className="text-caption text-[13px] tracking-[0.5px]">{vacancy.id}</span>
          <div className="flex items-center gap-[8px]">
            <span className="text-foreground text-[22px] font-medium tracking-[0.15px] truncate">
              {vacancy.jobTitle}
            </span>
            {/* Recruiter search badge */}
            <div className="size-[24px] rounded-bl-[24px] rounded-br-[24px] rounded-tl-[24px] rounded-tr-[3px] bg-recruiter-badge flex items-center justify-center shrink-0 text-foreground">
              <svg
                className="size-[14px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
                <circle cx="18.5" cy="18.5" r="2.5" />
                <path d="M20.5 20.5L22 22" />
              </svg>
            </div>
          </div>
        </div>
        <button className="text-muted-foreground mt-[4px] shrink-0 hover:text-foreground transition-colors">
          <DotsMenuIcon />
        </button>
      </div>

      {/* Client + employment type + hours */}
      <div className="flex items-center gap-[16px]">
        <span className="text-foreground text-sm font-medium">{vacancy.clientName}</span>
        <div className="flex items-center">
          <Pill className="rounded-r-none border border-input-border bg-white text-foreground text-xs">
            {vacancy.employmentType}
          </Pill>
          <Pill className="rounded-l-none border border-input-border border-l-0 bg-white text-foreground text-xs">
            {vacancy.hoursPerWeek} h/week
          </Pill>
        </div>
      </div>

      {/* Location + work period */}
      <div className="flex flex-wrap gap-[16px] items-center text-foreground text-sm">
        <div className="flex items-center gap-[8px] text-muted-foreground">
          <LocationIcon />
          <span className="text-foreground">{vacancy.location}</span>
        </div>
        <div className="flex items-center gap-[8px] text-muted-foreground">
          <CalendarIcon />
          <span className="text-foreground">{workRange}</span>
        </div>
      </div>

      {/* Publication period */}
      <div className="flex items-center gap-[8px] text-muted-foreground">
        <ClockIcon />
        <span className="text-caption text-sm">Publication period:</span>
        <span className="text-foreground text-sm">{pubRange}</span>
      </div>

      {/* AI matches button */}
      <div className="mt-auto pt-[4px]">
        <button className="flex items-center gap-[6px] h-[36px] px-[16px] rounded-full text-white text-sm font-medium bg-linear-to-r from-ai-gradient-from to-ai-gradient-to">
          <SparklesIcon />
          AI-matches ({vacancy.aiMatchesCount})
        </button>
      </div>
    </div>
  )
}

function RatePanel({ budgets }: { budgets: VacancyBudget[] }) {
  return (
    <div className="relative flex flex-col self-stretch w-[176px] shrink-0 bg-brand-subtle rounded-bl-[30px] border border-input-border overflow-hidden">
      <div className="flex flex-col flex-1 divide-y divide-input-border">
        {budgets.map((budget) => {
          const { title, subtitle } = budgetLabel(budget)
          return (
            <div key={budget.mode} className="flex flex-col gap-[2px] px-[12px] py-[10px]">
              <span className="text-foreground text-[12px] font-bold leading-[16px]">{title}</span>
              <span className="text-caption text-[12px] leading-[16px]">{subtitle}</span>
              <span className="text-brand-dark text-[16px] font-medium tracking-[0.15px] mt-[2px]">
                {formatBudgetRange(budget)}
              </span>
            </div>
          )
        })}
      </div>
      <button className="flex items-center justify-center h-[36px] border-t border-input-border text-brand text-sm bg-pill-bg hover:bg-brand-subtle transition-colors">
        View details
      </button>
    </div>
  )
}

function ManagementPanel({ vacancy }: { vacancy: Vacancy }) {
  const { management, status } = vacancy
  const statusClass = STATUS_CLASS[status] ?? 'bg-pill-bg text-muted-foreground'

  const rows = [
    { label: 'Hiring manager', person: management.hiringManager, icon: <EditIcon /> },
    { label: 'Vacancy created by', person: management.createdBy, icon: null },
    { label: 'Account manager', person: management.accountManager, icon: <MailIcon /> },
    { label: 'Workspace', person: null, value: management.workspace, icon: <EditIcon /> },
  ]

  return (
    <div className="flex flex-col gap-[12px] p-[24px] w-[320px] shrink-0 bg-brand-subtle rounded-br-[20px] rounded-tr-[20px] self-stretch border border-input-border border-l-0">
      {/* Title + status */}
      <div className="flex items-center justify-between gap-[8px]">
        <span className="text-foreground text-[16px] font-medium">Vacancy management</span>
        <span
          className={`h-[24px] px-[12px] rounded-full text-[13px] flex items-center ${statusClass}`}
        >
          {status}
        </span>
      </div>

      {/* Person rows */}
      <div className="flex flex-col gap-[8px]">
        {rows.map(({ label, person, value, icon }) => (
          <div key={label} className="flex items-center gap-[4px] w-full">
            <span className="text-muted-foreground text-sm w-[140px] shrink-0">{label}</span>
            <div className="flex items-center gap-[8px] flex-1 min-w-0">
              {person && <PhotoAvatar name={person.name} avatarUrl={person.avatarUrl} />}
              <span className="text-foreground text-sm truncate">
                {person ? person.name : value}
              </span>
              {icon && <span className="text-muted-foreground shrink-0">{icon}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── VacancyCard ──────────────────────────────────────────────────────────────

export function VacancyCard({ vacancy }: VacancyCardProps) {
  return (
    <div className="flex items-stretch overflow-hidden rounded-[20px] shadow-[0px_0px_5px_0px_rgba(17,24,33,0.3)] mx-[24px] my-[16px] shrink-0">
      <LeftPanel vacancy={vacancy} />
      {vacancy.budgets.length > 0 && <RatePanel budgets={vacancy.budgets} />}
      <ManagementPanel vacancy={vacancy} />
    </div>
  )
}
