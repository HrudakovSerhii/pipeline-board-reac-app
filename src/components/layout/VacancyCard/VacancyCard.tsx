import type { Vacancy } from '../../../types/api.types'

export interface VacancyCardProps {
  vacancy: Vacancy
}

export function VacancyCard({ vacancy }: VacancyCardProps) {
  const start = new Date(vacancy.workPeriod.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  const end = new Date(vacancy.workPeriod.endDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <div className="flex items-center gap-[12px] px-[24px] py-[14px] border-b border-border">
      <div className="size-[28px] rounded-[6px] bg-brand flex items-center justify-center shrink-0">
        <span className="text-white text-[12px] font-medium">G</span>
      </div>
      <div className="flex flex-col gap-[2px] min-w-0">
        <span className="text-foreground text-2xs tracking-[0.3px] truncate">
          {vacancy.id} · {vacancy.jobTitle}
        </span>
        <span className="text-muted-foreground text-[11px]">
          {vacancy.clientName} · {vacancy.employmentType} · {vacancy.hoursPerWeek}h/w · {start} – {end}
        </span>
      </div>
      <span className="ml-auto text-[11px] text-muted-foreground bg-pill-bg px-[10px] py-[4px] rounded-full whitespace-nowrap shrink-0">
        {vacancy.status}
      </span>
    </div>
  )
}
