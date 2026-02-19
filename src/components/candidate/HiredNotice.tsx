import { formatDate } from '../../utils/date'

export interface HiredNoticeProps {
  hiredAt: string
  hiredBy: string
}

export function HiredNotice({ hiredAt, hiredBy }: HiredNoticeProps) {
  const date = formatDate(hiredAt)

  return (
    <div className="w-full border-l-2 border-brand pl-3 py-1 flex flex-col gap-0.5">
      <span className="text-[11px] text-brand">Professional has accepted the offer</span>
      <span className="text-[10px] text-secondary">
        Offer accepted {date} · Sent by {hiredBy}
      </span>
    </div>
  )
}
