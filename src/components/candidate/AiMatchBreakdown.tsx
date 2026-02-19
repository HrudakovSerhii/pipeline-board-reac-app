import type { AiMatchBreakdown as AiMatchBreakdownType } from '../../types/api.types.ts'

export interface AiMatchBreakdownProps {
  breakdown: AiMatchBreakdownType
}

const BARS: Array<{ key: keyof AiMatchBreakdownType; label: string }> = [
  { key: 'experience', label: 'Experience:' },
  { key: 'skills', label: 'Skills:' },
  { key: 'rate', label: 'Rate:' },
]

const STRINGS: Array<{ key: keyof AiMatchBreakdownType; label: string }> = [
  { key: 'distance', label: 'Location:' },
  { key: 'availability', label: 'Availability:' },
  { key: 'industry', label: 'Industry:' },
]

function displayValue(key: keyof AiMatchBreakdownType, value: number | string): string {
  switch (key) {
    case 'availability':
    case 'industry':
      return value ? 'No match' : 'Match'
    case 'distance':
      return `${value} km away` // maybe km in number
    default:
      return value === 0 ? 'No match' : `${value}%`
  }
}

export function AiMatchBreakdown({ breakdown }: AiMatchBreakdownProps) {
  return (
    <div className="pt-2.5 pb-1 w-full flex flex-row gap-5">
      <div className="flex flex-col gap-1 flex-1">
        {BARS.map(({ key, label }) => {
          const value = breakdown[key] as number

          return (
            <div key={key} className="flex gap-2 items-center w-full">
              <span className="text-[11px] text-muted-foreground w-20 shrink-0">{label}</span>
              <div className="flex-1 relative h-1 bg-progress-track rounded-full">
                {value > 0 && (
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-progress-fill"
                    style={{ width: `${value}%` }} // runtime-computed from breakdown score
                  />
                )}
              </div>
              <span className="text-[11px] text-ai-text w-13.75 text-right shrink-0">
                {displayValue(key, value)}
              </span>
            </div>
          )
        })}
      </div>
      <div className="flex flex-col gap-1.5">
        {STRINGS.map(({ key, label }) => {
          const value = breakdown[key]

          return (
            <div key={key} className="flex gap-2 justify-end w-full">
              <span className="text-[11px] text-muted-foreground w-20 shrink-0">{label}</span>
              <span className="text-[11px] text-ai-text w-13.75 text-right shrink-0">{value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
