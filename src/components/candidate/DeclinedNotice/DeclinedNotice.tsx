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
    <div className="w-full border-l-2 border-[#D32F2F] pl-[12px] py-[4px] flex flex-col gap-[2px]">
      <span className="text-[11px] text-[#D32F2F]">{reason}</span>
      <span className="text-[10px] text-[#0D102B]">
        Sent by {declinedBy} · {date}
      </span>
    </div>
  )
}
