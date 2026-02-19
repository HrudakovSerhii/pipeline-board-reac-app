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
        'inline-flex items-center h-[22px] px-[8px] rounded-full bg-pill-bg text-[11px] text-secondary whitespace-nowrap',
        className,
      )}
    >
      {children}
    </div>
  )
}
