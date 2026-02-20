export interface ScoreCircleProps {
  score: number // 0–100
}

export function ScoreCircle({ score }: ScoreCircleProps) {
  const radius = 18
  const circumference = 2 * Math.PI * radius
  // style={{}} is required here — strokeDasharray is runtime-computed from score
  const dash = (score / 100) * circumference

  return (
    <div className="relative size-9 shrink-0">
      <svg className="block size-full" fill="none" viewBox="0 0 46 46">
        <circle cx="23" cy="23" r={radius} fill="white" className="stroke-border" strokeWidth="4" />
        <circle
          cx="23"
          cy="23"
          r={radius}
          fill="none"
          className="stroke-brand"
          strokeWidth="4"
          strokeDasharray={`${dash} ${circumference}`}
          strokeLinecap="round"
          transform="rotate(-90 23 23)"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[9px] text-brand-navy">
        {score}%
      </span>
    </div>
  )
}
