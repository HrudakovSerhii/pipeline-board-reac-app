import type { Vacancy, VacancyBudget, VacancyStatus } from '../../../types/api.types'
import { Avatar } from '../../ui/Avatar'
import { Pill } from '../../ui/Pill'
import { formatBudgetRange, budgetLabel } from '../../../utils/candidate'

export interface VacancyCardProps {
  vacancy: Vacancy
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function LocationIcon() {
  return (
    <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  )
}

function DotsMenuIcon() {
  return (
    <svg className="size-[20px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="19" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
      <path d="M19 3l.75 2.25L22 6l-2.25.75L19 9l-.75-2.25L16 6l2.25-.75z" />
    </svg>
  )
}

function EditIcon() {
  return (
    <svg className="size-[18px] shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm17.71-10.46a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="size-[18px] shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
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
  const pubRange = formatDateRange(vacancy.publicationPeriod.startDate, vacancy.publicationPeriod.endDate)

  return (
    <div className="flex flex-col flex-1 min-w-0 gap-[12px] px-[40px] pt-[24px] pb-[24px] bg-white">
      {/* Vacancy ID + title row */}
      <div className="flex items-start justify-between gap-[8px]">
        <div className="flex flex-col gap-[4px] min-w-0">
          <span className="text-caption text-[13px] tracking-[0.5px]">{vacancy.id}</span>
          <div className="flex items-center gap-[8px]">
            <span className="text-foreground text-[22px] font-medium tracking-[0.15px] truncate">{vacancy.jobTitle}</span>
            {/* Recruiter search badge */}
            <div className="size-[24px] rounded-bl-[24px] rounded-br-[24px] rounded-tl-[24px] rounded-tr-[3px] bg-recruiter-badge flex items-center justify-center shrink-0 text-foreground">
              <svg className="size-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <button
          className="flex items-center gap-[6px] h-[36px] px-[16px] rounded-full text-white text-sm font-medium"
          style={{ backgroundImage: 'linear-gradient(90deg, #0a2246 0%, #0654c7 100%)' }}
        >
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
            <div key={budget.type} className="flex flex-col gap-[2px] px-[12px] py-[10px]">
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
        <span className={`h-[24px] px-[12px] rounded-full text-[13px] flex items-center ${statusClass}`}>
          {status}
        </span>
      </div>

      {/* Person rows */}
      <div className="flex flex-col gap-[8px]">
        {rows.map(({ label, person, value, icon }) => (
          <div key={label} className="flex items-center gap-[4px] w-full">
            <span className="text-muted-foreground text-sm w-[140px] shrink-0">{label}</span>
            <div className="flex items-center gap-[8px] flex-1 min-w-0">
              {person && (
                <Avatar name={person.name} isGloPros={false} size="sm" />
              )}
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
