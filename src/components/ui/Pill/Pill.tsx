import type { ReactNode } from 'react'
import { cn } from '../../../utils/cn'

export interface PillProps {
  children: ReactNode
  className?: string
}

export function Pill({ children, className }: PillProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center h-[22px] px-[8px] rounded-full bg-[#f1f5f9] text-[11px] text-[#0d102b] whitespace-nowrap',
        className,
      )}
    >
      {children}
    </div>
  )
}
