// All icons: 24×24 viewBox, currentColor, stroke-based (1.5px), shrink-0
// Sized via parent className — default is size-5

const S = {
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function GridIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  )
}

export function FileCheckIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
      <path d="M14 2v6h6" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  )
}

export function ChatIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
    </svg>
  )
}

export function FolderIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v11Z" />
    </svg>
  )
}

export function UsersIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function UserHexagonIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <path d="M12 2l8 4.5v7L12 22l-8-8.5v-7L12 2Z" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.7A6 6 0 0 1 12 17a6 6 0 0 1 5 3.7" />
    </svg>
  )
}

export function DashboardIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 15h18" />
    </svg>
  )
}

export function TableIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 3v18" />
    </svg>
  )
}

export function FinanceIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <path d="M2 17l5-5 4 4 5-5 4 4" />
      <path d="M18 9h4v4" />
      <rect x="2" y="3" width="20" height="18" rx="2" />
    </svg>
  )
}

export function BankIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <path d="M3 21h18" />
      <path d="M3 10h18" />
      <path d="M12 3l9 7H3l9-7Z" />
      <path d="M5 10v8" />
      <path d="M9 10v8" />
      <path d="M15 10v8" />
      <path d="M19 10v8" />
    </svg>
  )
}

export function CogIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  )
}

export function BriefcaseIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M2 13h20" />
      <circle cx="12" cy="13" r="1" />
    </svg>
  )
}

export function ScaleIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <path d="M12 3v18" />
      <path d="M5 7l7-4 7 4" />
      <path d="M5 7l-3 8h6L5 7Z" />
      <path d="M19 7l-3 8h6l-3-8Z" />
      <path d="M8 21h8" />
    </svg>
  )
}

export function DollarIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <path d="M12 1v22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

export function CopyIcon() {
  return (
    <svg className="size-5 shrink-0" {...S}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export function SearchIcon() {
  return (
    <svg
      className="size-[18px] shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" strokeLinecap="round" />
    </svg>
  )
}

export function PlusIcon() {
  return (
    <svg
      className="size-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function UserPlusIcon() {
  return (
    <svg
      className="size-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M16 21v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </svg>
  )
}

export function ChevronIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  )
}

export function ArrowIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="9" fill="white" />
      <path
        d="M10 8l4 4-4 4"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
