import { useState } from 'react'
import { cn } from '../../../utils/cn'
import { NAV_SECTIONS } from './constants'

import { SidebarButton } from '../../ui/SidebarButton'
import { NavSectionBlock } from './NavSectionBlock'
import { useOpenSections } from '../../../hooks/useOpenSections.ts'

import { ArrowIcon, PlusIcon, SearchIcon, UserPlusIcon } from '../../ui/icons/icons.tsx'

export function NavigationSidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { openSections, toggleSection } = useOpenSections()
  const [activeItem, setActiveItem] = useState('vac-grid')

  return (
    <aside
      className={cn(
        'relative flex flex-col bg-white border-r border-divider h-full overflow-hidden transition-[width] duration-300 ease-in-out shrink-0',
        isExpanded ? 'w-60' : 'w-18',
      )}
    >
      {/* Header */}
      <div className="relative flex items-center justify-between px-6 py-4 border-b border-divider shrink-0 h-14.25">
        <div
          className={cn(
            'overflow-hidden transition-all duration-300',
            isExpanded ? 'max-w-30 opacity-100' : 'max-w-0 opacity-0',
          )}
        >
          <span className="text-brand-navy font-semibold text-sm whitespace-nowrap">GloPros</span>
        </div>
        <button
          onClick={() => setIsExpanded((v) => !v)}
          className=""
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <ArrowIcon
            className={cn('size-6 transition-transform duration-300', !isExpanded && 'rotate-180')}
          />
        </button>
      </div>

      {/* Scrollable body */}
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Search shortcut */}
        <SidebarButton
          icon={<SearchIcon />}
          label="Search..."
          isExpanded={isExpanded}
          className="px-6.75 py-4.75 text-nav-text hover:bg-gray-50 w-full shrink-0"
        />

        {/* Add new button */}
        <div className="px-3 pb-3 shrink-0">
          <SidebarButton
            icon={<PlusIcon />}
            label="Add new"
            isExpanded={isExpanded}
            className="w-full h-8 rounded-[34px] px-3 text-nav-text backdrop-blur-sm bg-add-btn-bg border border-add-btn-border hover:bg-add-btn-bg-hover"
          />
        </div>

        <div className="h-px w-full bg-divider my-1.5 shrink-0" />

        {/* Nav sections */}
        {NAV_SECTIONS.map((section, idx) => (
          <div key={section.id} className="shrink-0">
            <NavSectionBlock
              section={section}
              isExpanded={isExpanded}
              isOpen={openSections[section.id] ?? true}
              activeItem={activeItem}
              onToggle={() => toggleSection(section.id)}
              onSelect={setActiveItem}
            />
            {idx < NAV_SECTIONS.length - 1 && (
              <div className="h-px w-full bg-divider my-1.5 shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="px-4 py-4 border-t border-divider shrink-0">
        <SidebarButton
          icon={<UserPlusIcon />}
          label="Add user"
          isExpanded={isExpanded}
          className="w-full h-8 rounded-full px-4 text-white bg-linear-to-r from-gradient-cta-from to-gradient-cta-to hover:opacity-90"
        />
      </div>
    </aside>
  )
}
