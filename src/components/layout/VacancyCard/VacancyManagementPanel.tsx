import type { Vacancy, VacancyStatus } from '../../../types/api.types'
import { PhotoAvatar } from '../../ui/PhotoAvatar'
import { EditIcon, MailIcon } from '../../ui/icons'

const STATUS_CLASS: Record<VacancyStatus, string> = {
  Public: 'bg-status-public text-foreground',
  Private: 'bg-pill-bg text-muted-foreground',
  Draft: 'bg-pill-bg text-muted-foreground',
  Closed: 'bg-destructive text-destructive-foreground',
}

export function VacancyManagementPanel({ vacancy }: { vacancy: Vacancy }) {
  const { management, status } = vacancy
  const statusClass = STATUS_CLASS[status] ?? 'bg-pill-bg text-muted-foreground'

  const rows = [
    { label: 'Hiring manager', person: management.hiringManager, icon: <EditIcon /> },
    { label: 'Vacancy created by', person: management.createdBy, icon: null },
    { label: 'Account manager', person: management.accountManager, icon: <MailIcon /> },
    { label: 'Workspace', person: null, value: management.workspace, icon: <EditIcon /> },
  ]

  return (
    <div className="flex flex-col gap-[12px] p-[24px] min-w-[320px] shrink-0 bg-brand-subtle rounded-br-[20px] rounded-tr-[20px] self-stretch border border-input-border border-l-0">
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
