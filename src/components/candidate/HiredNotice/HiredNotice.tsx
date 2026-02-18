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
    <div className="w-full border-l-2 border-[#0053cd] pl-[12px] py-[4px] flex flex-col gap-[2px]">
      <span className="text-[11px] text-[#0053cd]">Professional has accepted the offer</span>
      <span className="text-[10px] text-[#0D102B]">
        Offer accepted {date} · Sent by {hiredBy}
      </span>
    </div>
  )
}
