export interface DeclinedNoticeProps {
  reason: string
  declinedBy: string
  declinedAt: string
}

export function DeclinedNotice({ reason, declinedBy, declinedAt }: DeclinedNoticeProps) {
  const date = new Date(declinedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <div className="w-full rounded-[6px] bg-[#fff1f2] border border-[#fecdd3] px-[12px] py-[8px] flex flex-col gap-[2px]">
      <span className="text-[11px] text-[#9f1239]">{reason}</span>
      <span className="text-[10px] text-[#f43f5e]">
        Sent by {declinedBy} · {date}
      </span>
    </div>
  )
}
