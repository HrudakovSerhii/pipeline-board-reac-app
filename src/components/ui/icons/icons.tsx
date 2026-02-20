// - Board Card

export function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M5.77777 8.42222L6.78166 9.56952C7.06392 9.8921 7.57287 9.86833 7.82383 9.52085L10.2222 6.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CandidateLocationIcon({ className = 'block size-full' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M11.7712 11.1046C11.1468 11.729 9.84104 13.0348 8.94253 13.9333C8.42183 14.454 7.57845 14.4543 7.05775 13.9336C6.17489 13.0507 4.89439 11.7702 4.22876 11.1046C2.14597 9.02177 2.14597 5.64489 4.22876 3.5621C6.31156 1.4793 9.68844 1.4793 11.7712 3.5621C13.854 5.64489 13.854 9.02177 11.7712 11.1046Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33"
      />
      <path
        d="M10 7.33333C10 8.4379 9.10457 9.33333 8 9.33333C6.89543 9.33333 6 8.4379 6 7.33333C6 6.22876 6.89543 5.33333 8 5.33333C9.10457 5.33333 10 6.22876 10 7.33333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33"
      />
    </svg>
  )
}

export function CandidateJobIcon({ className = 'block size-full' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M14 8.83696C12.1471 9.58697 10.1218 9.99999 8 9.99999C5.8782 9.99999 3.85286 9.58698 2 8.83696M10.6667 4V2.66667C10.6667 1.93029 10.0697 1.33333 9.33333 1.33333H6.66667C5.93029 1.33333 5.33333 1.93029 5.33333 2.66667V4M8 8H8.00667M3.33333 13.3333H12.6667C13.403 13.3333 14 12.7364 14 12V5.33333C14 4.59695 13.403 4 12.6667 4H3.33333C2.59695 4 2 4.59695 2 5.33333V12C2 12.7364 2.59695 13.3333 3.33333 13.3333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CandidateClockIcon({ className = 'block size-full' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M13.6667 10.5339V5.46615C13.6664 5.24398 13.6081 5.02577 13.4976 4.83342C13.3871 4.64107 13.2283 4.48134 13.037 4.37026L8.62963 1.8364C8.4382 1.72521 8.22105 1.66667 8 1.66667C7.77895 1.66667 7.5618 1.72521 7.37037 1.8364L2.96296 4.37026C2.77172 4.48134 2.61288 4.64107 2.50236 4.83342C2.39185 5.02577 2.33356 5.24398 2.33333 5.46615V10.5339C2.33356 10.756 2.39185 10.9742 2.50236 11.1666C2.61288 11.3589 2.77172 11.5187 2.96296 11.6297L7.37037 14.1636C7.5618 14.2748 7.77895 14.3333 8 14.3333C8.22105 14.3333 8.4382 14.2748 8.62963 14.1636L13.037 11.6297C13.2283 11.5187 13.3871 11.3589 13.4976 11.1666C13.6081 10.9742 13.6664 10.756 13.6667 10.5339Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4V8L10.6667 9.33333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DownIcon({ className = 'size-2 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 10 6" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z"
        fill="currentColor"
      />
    </svg>
  )
}

// — Brand icons —

export function GloProIcon({ className = 'size-4 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 12.5 16.1" aria-hidden="true">
      <path
        d="M10.7383 1.728C9.59086 0.598857 8.10971 0 6.45486 0H0V16.128H1.6C3.99086 16.128 5.93371 14.1851 5.93371 11.7943V11.4514C6.37257 11.584 6.86171 11.6571 7.392 11.6571C9.38971 11.6571 12.4023 10.1531 12.5029 6.016C12.544 4.38857 11.9314 2.90743 10.7383 1.728Z"
        className="fill-white"
      />
      <path
        d="M9.61372 2.86619C8.75886 2.02505 7.69829 1.5999 6.45029 1.5999H1.60001V14.5279C3.10858 14.5279 4.33372 13.3028 4.33372 11.7942V4.16905H6.45486C6.94858 4.16905 7.36458 4.33819 7.69372 4.67647C8.02286 5.01933 8.19201 5.45819 8.19201 5.97476C8.19201 6.49133 8.02286 6.91647 7.69372 7.2639C7.36915 7.60676 7.11315 7.78047 6.61486 7.78047H4.92801C4.92801 9.19762 5.79201 10.0433 7.36458 10.0525H7.39201C8.63543 10.0525 10.8251 9.14276 10.9029 5.97476C10.9303 4.75419 10.4686 3.70733 9.61372 2.86162V2.86619Z"
        className="fill-glopros"
      />
    </svg>
  )
}

// — Vacancy detail icons —

export function LocationIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

export function CalendarIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

export function ClockIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  )
}

export function DotsMenuIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="5" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="19" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}

export function SparklesIcon({ className = 'size-4 shrink-0' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
      <path d="M19 3l.75 2.25L22 6l-2.25.75L19 9l-.75-2.25L16 6l2.25-.75z" />
    </svg>
  )
}

export function RecruiterSearchIcon({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <circle cx="18.5" cy="18.5" r="2.5" />
      <path d="M20.5 20.5L22 22" />
    </svg>
  )
}

export function EditIcon({ className = 'size-4.5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm17.71-10.46a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  )
}

export function MailIcon({ className = 'size-4.5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

export function CheckmarkIcon({ className = 'size-4.5 shrink-0' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.31809 7L0 3.68191L0.829522 2.85239L3.31809 5.34096L8.65904 0L9.48857 0.829522L3.31809 7Z"
        fill="currentColor"
      />
    </svg>
  )
}

// — Search / toolbar icons (16×16 viewBox) —

export function SearchIcon({ className = 'size-3.5 shrink-0' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 16 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="4.5" />
      <path d="M10.5 10.5L14 14" />
    </svg>
  )
}

export function PlusIcon({ className = 'size-3.5 shrink-0' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 16 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M8 3v10M3 8h10" />
    </svg>
  )
}

export function FilterLineIcon({ className = 'size-3.5 shrink-0' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 16 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2 4h12M4 8h8M6 12h4" />
    </svg>
  )
}

export function PersonIcon({ className = 'w-3.5 h-4.25' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 17" fill="none" aria-hidden="true">
      <path
        d="M10.1667 4.33333C10.1667 6.17428 8.67428 7.66667 6.83333 7.66667C4.99239 7.66667 3.5 6.17428 3.5 4.33333C3.5 2.49238 4.99239 1 6.83333 1C8.67428 1 10.1667 2.49238 10.1667 4.33333Z"
        fill="#0053CD"
      />
      <path
        d="M6.83333 10.1667C3.61167 10.1667 1 12.7783 1 16H12.6667C12.6667 12.7783 10.055 10.1667 6.83333 10.1667Z"
        fill="#0053CD"
      />
      <path
        d="M10.1667 4.33333C10.1667 6.17428 8.67428 7.66667 6.83333 7.66667C4.99239 7.66667 3.5 6.17428 3.5 4.33333C3.5 2.49238 4.99239 1 6.83333 1C8.67428 1 10.1667 2.49238 10.1667 4.33333Z"
        stroke="#0053CD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.83333 10.1667C3.61167 10.1667 1 12.7783 1 16H12.6667C12.6667 12.7783 10.055 10.1667 6.83333 10.1667Z"
        stroke="#0053CD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function VacancyIcon({ className = 'size-4.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.85812 5.78571V1.92857H5.57436V5.78571H1.85812ZM0 1.28571C0 0.944722 0.13051 0.617695 0.362821 0.376577C0.595131 0.135459 0.910211 0 1.23875 0H6.19374C6.52227 0 6.83735 0.135459 7.06966 0.376577C7.30197 0.617695 7.43249 0.944722 7.43249 1.28571V6.42857C7.43249 6.76956 7.30197 7.09659 7.06966 7.33771C6.83735 7.57883 6.52227 7.71429 6.19374 7.71429H1.23875C0.910211 7.71429 0.595131 7.57883 0.362821 7.33771C0.13051 7.09659 0 6.76956 0 6.42857V1.28571ZM9.90998 1.60714C9.90998 1.3514 10.0079 1.10613 10.1821 0.92529C10.3563 0.744451 10.5926 0.642857 10.839 0.642857H16.4134C16.6598 0.642857 16.8961 0.744451 17.0704 0.92529C17.2446 1.10613 17.3425 1.3514 17.3425 1.60714C17.3425 1.86289 17.2446 2.10816 17.0704 2.289C16.8961 2.46983 16.6598 2.57143 16.4134 2.57143H10.839C10.5926 2.57143 10.3563 2.46983 10.1821 2.289C10.0079 2.10816 9.90998 1.86289 9.90998 1.60714ZM10.839 5.14286C10.5926 5.14286 10.3563 5.24445 10.1821 5.42529C10.0079 5.60613 9.90998 5.8514 9.90998 6.10714C9.90998 6.36289 10.0079 6.60816 10.1821 6.789C10.3563 6.96983 10.5926 7.07143 10.839 7.07143H16.4134C16.6598 7.07143 16.8961 6.96983 17.0704 6.789C17.2446 6.60816 17.3425 6.36289 17.3425 6.10714C17.3425 5.8514 17.2446 5.60613 17.0704 5.42529C16.8961 5.24445 16.6598 5.14286 16.4134 5.14286H10.839ZM1.85812 12.2143V16.0714H5.57436V12.2143H1.85812ZM1.23875 10.2857C0.910211 10.2857 0.595131 10.4212 0.362821 10.6623C0.13051 10.9034 0 11.2304 0 11.5714V16.7143C0 17.0553 0.13051 17.3823 0.362821 17.6234C0.595131 17.8645 0.910211 18 1.23875 18H6.19374C6.52227 18 6.83735 17.8645 7.06966 17.6234C7.30197 17.3823 7.43249 17.0553 7.43249 16.7143V11.5714C7.43249 11.2304 7.30197 10.9034 7.06966 10.6623C6.83735 10.4212 6.52227 10.2857 6.19374 10.2857H1.23875ZM10.839 10.9286C10.5926 10.9286 10.3563 11.0302 10.1821 11.211C10.0079 11.3918 9.90998 11.6371 9.90998 11.8929C9.90998 12.1486 10.0079 12.3939 10.1821 12.5747C10.3563 12.7555 10.5926 12.8571 10.839 12.8571H16.4134C16.6598 12.8571 16.8961 12.7555 17.0704 12.5747C17.2446 12.3939 17.3425 12.1486 17.3425 11.8929C17.3425 11.6371 17.2446 11.3918 17.0704 11.211C16.8961 11.0302 16.6598 10.9286 16.4134 10.9286H10.839ZM10.839 15.4286C10.5926 15.4286 10.3563 15.5302 10.1821 15.711C10.0079 15.8918 9.90998 16.1371 9.90998 16.3929C9.90998 16.6486 10.0079 16.8939 10.1821 17.0747C10.3563 17.2555 10.5926 17.3571 10.839 17.3571H16.4134C16.6598 17.3571 16.8961 17.2555 17.0704 17.0747C17.2446 16.8939 17.3425 16.6486 17.3425 16.3929C17.3425 16.1371 17.2446 15.8918 17.0704 15.711C16.8961 15.5302 16.6598 15.4286 16.4134 15.4286H10.839Z"
        fill="#6E6F7D"
      />
    </svg>
  )
}

// — Nav icons —
const NavIconProps = {
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function GridIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  )
}

export function FileCheckIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
      <path d="M14 2v6h6" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  )
}

export function ChatIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
    </svg>
  )
}

export function FolderIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v11Z" />
    </svg>
  )
}

export function UsersIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function UserHexagonIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <path d="M12 2l8 4.5v7L12 22l-8-8.5v-7L12 2Z" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.7A6 6 0 0 1 12 17a6 6 0 0 1 5 3.7" />
    </svg>
  )
}

export function DashboardIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 15h18" />
    </svg>
  )
}

export function TableIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 3v18" />
    </svg>
  )
}

export function FinanceIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <path d="M2 17l5-5 4 4 5-5 4 4" />
      <path d="M18 9h4v4" />
      <rect x="2" y="3" width="20" height="18" rx="2" />
    </svg>
  )
}

export function BankIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
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

export function CogIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  )
}

export function BriefcaseIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M2 13h20" />
      <circle cx="12" cy="13" r="1" />
    </svg>
  )
}

export function ScaleIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <path d="M12 3v18" />
      <path d="M5 7l7-4 7 4" />
      <path d="M5 7l-3 8h6L5 7Z" />
      <path d="M19 7l-3 8h6l-3-8Z" />
      <path d="M8 21h8" />
    </svg>
  )
}

export function DollarIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <path d="M12 1v22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

export function CopyIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export function UserPlusIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} {...NavIconProps}>
      <path d="M16 21v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </svg>
  )
}

export function ChevronIcon({ className }: { className: string }) {
  return (
    <svg className={className} {...NavIconProps}>
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
