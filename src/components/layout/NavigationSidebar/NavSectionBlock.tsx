import { cn } from '../../../utils/cn'
import { NAV_ICON_MAP, ChevronIcon } from '../../ui/icons'

import type { NavSection } from './constants'

interface NavSectionBlockProps {
  section: NavSection
  isExpanded: boolean
  isOpen: boolean
  activeItem: string
  onToggle: () => void
  onSelect: (id: string) => void
}

export function NavSectionBlock({
  section,
  isExpanded,
  isOpen,
  activeItem,
  onToggle,
  onSelect,
}: NavSectionBlockProps) {
  return (
    <div className="w-full shrink-0">
      <button
        onClick={onToggle}
        className={cn(
          'flex items-center gap-2.5 w-full px-4 py-2.5 hover:bg-gray-50 transition-colors',
          isExpanded ? 'justify-start' : 'justify-center',
        )}
        title={!isExpanded ? section.title : undefined}
      >
        <ChevronIcon
          className={cn(
            'size-4 shrink-0 transition-transform duration-200 text-muted-foreground',
            !isExpanded && 'rotate-180',
          )}
        />
        {isExpanded && (
          <span className="text-muted-foreground text-xs tracking-wide uppercase whitespace-nowrap">
            {section.title}
          </span>
        )}
      </button>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="flex flex-col gap-1 px-2 pb-1">
          {section.items.map((item) => {
            const isActive = activeItem === item.id
            const Icon = NAV_ICON_MAP[item.id]
            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                title={!isExpanded ? item.label : undefined}
                className={cn(
                  'relative flex items-center gap-2.5 rounded-lg px-3 py-2 w-full transition-colors duration-150',
                  isActive
                    ? 'bg-brand-subtle text-brand-navy'
                    : 'bg-white hover:bg-gray-50 text-nav-text',
                  isExpanded ? 'justify-start' : 'justify-center',
                )}
              >
                {Icon && <Icon />}
                <span
                  className={cn(
                    'text-sm whitespace-nowrap overflow-hidden transition-all duration-200',
                    isExpanded ? 'max-w-35 opacity-100' : 'hidden max-w-0 opacity-0',
                  )}
                >
                  {item.label}
                </span>
                {item.badge && (
                  <span
                    className={cn(
                      'absolute size-2 rounded-full bg-notification',
                      isExpanded ? 'right-3 top-2' : 'right-1.5 top-1.5',
                    )}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
