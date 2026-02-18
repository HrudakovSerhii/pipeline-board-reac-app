export function RecruiterBadge() {
  return (
    <div
      className="absolute top-px right-px flex h-[28px] items-center justify-center rounded-bl-[20px] rounded-tr-[10px] px-4"
      style={{
        backgroundImage:
          'linear-gradient(86deg, rgb(6,29,61) 26%, rgba(5,62,146,0.97) 78%, rgba(9,62,140,0.95) 116%)',
      }}
    >
      <span className="text-[11px] text-white whitespace-nowrap">Recruiter search</span>
    </div>
  )
}
