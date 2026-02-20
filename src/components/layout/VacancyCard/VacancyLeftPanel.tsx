import { Pill } from '../../ui/Pill'
import {
  LocationIcon,
  CalendarIcon,
  ClockIcon,
  DotsMenuIcon,
  SparklesIcon,
  RecruiterSearchIcon,
  CheckmarkIcon,
} from '../../ui/icons'

import { formatDateRange } from '../../../utils/date.ts'

import type { Vacancy } from '../../../types/api.types'

export function VacancyLeftPanel({ vacancy }: { vacancy: Vacancy }) {
  const workRange = formatDateRange(vacancy.workPeriod.startDate, vacancy.workPeriod.endDate)
  const pubRange = formatDateRange(
    vacancy.publicationPeriod.startDate,
    vacancy.publicationPeriod.endDate,
  )

  return (
    <div className="flex flex-col flex-1 min-w-0 gap-3 px-10 pt-6 pb-6 bg-white">
      {/* Vacancy ID + title row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-caption text-2xs tracking-[0.5px]">{vacancy.id}</span>
          <div className="flex items-center gap-2">
            <h2 className="text-foreground text-[22px] font-medium tracking-[0.15px] truncate">
              {vacancy.jobTitle}
            </h2>
            {/* Recruiter search badge */}
            <div
              role="img"
              aria-label="Recruiter search"
              className="size-6 rounded-bl-3xl rounded-br-3xl rounded-tl-3xl rounded-tr-[3px] bg-recruiter-badge flex items-center justify-center shrink-0 text-foreground"
            >
              <RecruiterSearchIcon />
            </div>
          </div>
        </div>
        <button
          disabled
          type="button"
          aria-label="Vacancy options"
          className="text-muted-foreground mt-1 shrink-0 hover:text-foreground transition-colors"
        >
          <DotsMenuIcon />
        </button>
      </div>

      {/* Client + employment type + hours */}
      <div className="flex items-center gap-4">
        <span className="text-foreground text-sm font-medium">{vacancy.clientName}</span>
        <div className="flex items-center">
          <Pill className="rounded-r-none border px-4 gap-1">
            <CheckmarkIcon />
            {vacancy.preferredEmploymentType}
          </Pill>
          <Pill className="rounded-l-none border px-4 border-l-0">
            {vacancy.hoursPerWeek} h/week
          </Pill>
        </div>
      </div>

      {/* Location + work period */}
      <div className="flex flex-wrap gap-4 items-center text-foreground text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <LocationIcon />
          <span className="text-foreground">{vacancy.location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarIcon />
          <span className="text-foreground">{workRange}</span>
        </div>
      </div>

      {/* Publication period */}
      <div className="flex items-center gap-2 text-muted-foreground">
        <ClockIcon />
        <span className="text-caption text-sm">Publication period:</span>
        <span className="text-foreground text-sm">{pubRange}</span>
      </div>

      {/* AI matches button */}
      <div className="mt-auto pt-1">
        <button
          type="button"
          className="flex items-center gap-1.5 h-9 px-4 rounded-full text-white text-sm font-medium bg-linear-to-r from-ai-gradient-from to-ai-gradient-to"
        >
          <SparklesIcon />
          AI-matches ({vacancy.aiMatches})
        </button>
      </div>
    </div>
  )
}
