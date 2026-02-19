import { useState } from 'react'
import { cn } from '../../../utils/cn'

// ─── Icon primitives — currentColor, sized via className ─────────────────────

function SearchIcon() {
  return (
    <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" strokeLinecap="round" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg className="size-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

function UserPlusIcon() {
  return (
    <svg className="size-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M16 21v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </svg>
  )
}

function ChevronIcon({ up }: { up: boolean }) {
  return (
    <svg
      className={cn('size-4 shrink-0 transition-transform duration-200 text-muted-foreground', !up && 'rotate-180')}
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  )
}

function ArrowIcon({ right }: { right: boolean }) {
  return (
    <svg
      className={cn('size-6 transition-transform duration-300', !right && 'rotate-180')}
      fill="none" viewBox="0 0 24 24"
    >
      <rect x="3" y="3" width="18" height="18" rx="9" fill="white" />
      <path
        d={right ? 'M10 8l4 4-4 4' : 'M14 8l-4 4 4 4'}
        stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

function NavIcon() {
  return (
    <svg className="size-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  )
}

// ─── Nav data ─────────────────────────────────────────────────────────────────

interface NavItem {
  id: string
  label: string
  badge?: boolean
}

interface NavSection {
  id: string
  title: string
  items: NavItem[]
}

const NAV_SECTIONS: NavSection[] = [
  {
    id: 'vacancies',
    title: 'Vacancies',
    items: [
      { id: 'vac-grid', label: 'Vacancies' },
      { id: 'vac-applications', label: 'Applications' },
      { id: 'vac-messages', label: 'Messages', badge: true },
      { id: 'vac-documents', label: 'Documents' },
    ],
  },
  {
    id: 'professionals',
    title: 'Professionals',
    items: [
      { id: 'pro-candidates', label: 'Candidates' },
      { id: 'pro-profiles', label: 'Profiles', badge: true },
    ],
  },
  {
    id: 'administration',
    title: 'Administration',
    items: [
      { id: 'adm-dashboard', label: 'Dashboard' },
      { id: 'adm-reports', label: 'Reports' },
      { id: 'adm-tables', label: 'Tables' },
      { id: 'adm-finance', label: 'Finance' },
    ],
  },
  {
    id: 'finance',
    title: 'Finance',
    items: [
      { id: 'fin-bank', label: 'Bank' },
      { id: 'fin-settings', label: 'Settings' },
    ],
  },
  {
    id: 'recruitment',
    title: 'Recruitment',
    items: [
      { id: 'rec-jobs', label: 'Jobs' },
      { id: 'rec-team', label: 'Team' },
      { id: 'rec-legal', label: 'Legal' },
      { id: 'rec-salary', label: 'Salary' },
      { id: 'rec-templates', label: 'Templates' },
    ],
  },
]

// ─── NavSectionBlock ──────────────────────────────────────────────────────────

interface NavSectionBlockProps {
  section: NavSection
  isExpanded: boolean
  isOpen: boolean
  activeItem: string
  onToggle: () => void
  onSelect: (id: string) => void
}

function NavSectionBlock({ section, isExpanded, isOpen, activeItem, onToggle, onSelect }: NavSectionBlockProps) {
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
        <ChevronIcon up={isOpen} />
        {isExpanded && (
          <span className="text-muted-foreground text-xs tracking-wide uppercase whitespace-nowrap">
            {section.title}
          </span>
        )}
      </button>

      <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0')}>
        <div className="flex flex-col gap-1 px-2 pb-1">
          {section.items.map((item) => {
            const isActive = activeItem === item.id
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
                <NavIcon />
                <span className={cn(
                  'text-sm whitespace-nowrap overflow-hidden transition-all duration-200',
                  isExpanded ? 'max-w-[140px] opacity-100' : 'max-w-0 opacity-0',
                )}>
                  {item.label}
                </span>
                {item.badge && (
                  <span className={cn(
                    'absolute size-2 rounded-full bg-notification',
                    isExpanded ? 'right-3 top-2' : 'right-1.5 top-1.5',
                  )} />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ─── NavigationSidebar ────────────────────────────────────────────────────────

export function NavigationSidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    vacancies: true,
    professionals: true,
    administration: true,
    finance: true,
    recruitment: true,
  })
  const [activeItem, setActiveItem] = useState('vac-grid')

  function toggleSection(id: string) {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <aside className={cn(
      'relative flex flex-col bg-white border-r border-divider h-full overflow-hidden transition-[width] duration-300 ease-in-out shrink-0',
      isExpanded ? 'w-60' : 'w-[72px]',
    )}>
      {/* Header */}
      <div className="relative flex items-center px-6 py-4 border-b border-divider shrink-0 h-[57px]">
        <div className={cn(
          'overflow-hidden transition-all duration-300',
          isExpanded ? 'max-w-[120px] opacity-100' : 'max-w-0 opacity-0',
        )}>
          <span className="text-brand-navy font-semibold text-sm whitespace-nowrap">GloPros</span>
        </div>
        <button
          onClick={() => setIsExpanded((v) => !v)}
          className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10"
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <ArrowIcon right={!isExpanded} />
        </button>
      </div>

      {/* Scrollable body */}
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Search shortcut */}
        <button
          className={cn(
            'flex items-center gap-2.5 px-[27px] py-[19px] text-nav-text hover:bg-gray-50 transition-colors shrink-0',
            isExpanded ? 'justify-start' : 'justify-center',
          )}
          title={!isExpanded ? 'Search' : undefined}
        >
          <SearchIcon />
          <span className={cn(
            'text-sm text-muted-foreground whitespace-nowrap overflow-hidden transition-all duration-200',
            isExpanded ? 'max-w-[120px] opacity-100' : 'max-w-0 opacity-0',
          )}>
            Search…
          </span>
        </button>

        {/* Add new button */}
        <div className="px-3 pb-3 shrink-0">
          <button
            className="flex items-center justify-center gap-2 w-full h-8 rounded-[34px] text-nav-text backdrop-blur-sm bg-add-btn-bg border border-add-btn-border hover:bg-add-btn-bg-hover transition-colors"
            title={!isExpanded ? 'Add new' : undefined}
          >
            <PlusIcon />
            <span className={cn(
              'text-sm whitespace-nowrap overflow-hidden transition-all duration-200',
              isExpanded ? 'max-w-[100px] opacity-100' : 'max-w-0 opacity-0',
            )}>
              Add new
            </span>
          </button>
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
        <button className="flex items-center justify-center gap-2 h-8 rounded-full px-4 text-white bg-gradient-to-r from-gradient-cta-from to-gradient-cta-to hover:opacity-90 transition-opacity w-full">
          <UserPlusIcon />
          <span className={cn(
            'text-sm whitespace-nowrap overflow-hidden transition-all duration-200',
            isExpanded ? 'max-w-[120px] opacity-100' : 'max-w-0 opacity-0',
          )}>
            Add user
          </span>
        </button>
      </div>
    </aside>
  )
}
