// — Brand icons —

export function GloProIcon({ className = 'size-4 shrink-0' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 12.5 16.1"
      aria-hidden="true"
    >
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
