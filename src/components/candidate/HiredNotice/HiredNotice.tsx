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
    <div className="w-full rounded-[6px] bg-[#f0fdf4] border border-[#bbf7d0] px-[12px] py-[8px] flex flex-col gap-[2px]">
      <span className="text-[11px] text-[#166534]">Professional has accepted the offer</span>
      <span className="text-[10px] text-[#4ade80]">
        Offer accepted {date} · Sent by {hiredBy}
      </span>
    </div>
  )
}
