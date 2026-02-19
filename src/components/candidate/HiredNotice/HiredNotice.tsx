export interface HiredNoticeProps {
  hiredAt: string
  hiredBy: string
}

export function HiredNotice({ hiredAt, hiredBy }: HiredNoticeProps) {
  const date = new Date(hiredAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <div className="w-full border-l-2 border-brand pl-[12px] py-[4px] flex flex-col gap-[2px]">
      <span className="text-[11px] text-brand">Professional has accepted the offer</span>
      <span className="text-[10px] text-secondary">
        Offer accepted {date} · Sent by {hiredBy}
      </span>
    </div>
  )
}
