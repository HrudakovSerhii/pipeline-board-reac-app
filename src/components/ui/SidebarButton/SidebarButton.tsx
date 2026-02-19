import type { ReactNode } from 'react'
import { cn } from '../../../utils/cn'

export interface SidebarButtonProps {
  icon: ReactNode
  label: string
  isExpanded: boolean
  className?: string
  onClick?: () => void
}

export function SidebarButton({ icon, label, isExpanded, className, onClick }: SidebarButtonProps) {
  return (
    <button
      onClick={onClick}
      title={!isExpanded ? label : undefined}
      className={cn(
        'flex items-center transition-colors',
        // gap-0 when collapsed removes the phantom space between icon and hidden label
        isExpanded ? 'gap-2 justify-start' : 'gap-0 justify-center',
        className,
      )}
    >
      {icon}
      <span
        className={cn(
          'text-sm whitespace-nowrap overflow-hidden transition-all duration-200',
          isExpanded ? 'max-w-[140px] opacity-100' : 'max-w-0 opacity-0',
        )}
      >
        {label}
      </span>
    </button>
  )
}
