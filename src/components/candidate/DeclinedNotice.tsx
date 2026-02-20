import { formatDate } from '../../utils/date'

export interface DeclinedNoticeProps {
  reason: string
  declinedBy: string
  declinedAt: string
}

export function DeclinedNotice({ reason, declinedBy, declinedAt }: DeclinedNoticeProps) {
  const date = formatDate(declinedAt)

  return (
    <div className="w-full border-l-2 border-declined pl-3 py-1 flex flex-col gap-0.5">
      <span className="text-[11px] text-declined">{reason}</span>
      <span className="text-[10px] text-secondary">
        Sent by {declinedBy} · {date}
      </span>
    </div>
  )
}
