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
