import type { Vacancy } from '../../../types/api.types'
import { Pill } from '../../ui/Pill'
import {
  LocationIcon,
  CalendarIcon,
  ClockIcon,
  DotsMenuIcon,
  SparklesIcon,
} from '../../ui/icons'

function formatDateRange(start: string, end: string): string {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  return `${fmt(start)} – ${fmt(end)}`
}

export function VacancyLeftPanel({ vacancy }: { vacancy: Vacancy }) {
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
