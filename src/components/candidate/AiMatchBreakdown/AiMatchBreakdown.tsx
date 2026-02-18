import type { AiMatchBreakdown as AiMatchBreakdownType } from '../../../types/api.types'

export interface AiMatchBreakdownProps {
  breakdown: AiMatchBreakdownType
}

const BARS: Array<{ key: keyof AiMatchBreakdownType; label: string }> = [
  { key: 'experience', label: 'Experience:' },
  { key: 'skills', label: 'Skills:' },
  { key: 'rate', label: 'Rate:' }
]

const STRINGS: Array<{ key: keyof AiMatchBreakdownType; label: string}> = [
  { key: 'location', label: 'Location:' },
  { key: 'availability', label: 'Availability:' },
  { key: 'industry', label: 'Industry:' },
]

function displayValue(key: keyof AiMatchBreakdownType, value: number): string {
  if (value === 0) return 'No match'
  if (key === 'location') return value === 100 ? 'Exact match' : `${value}%`
  if (key === 'industry') return value === 100 ? 'Match' : `${value}%`
  return `${value}%`
}

export function AiMatchBreakdown({ breakdown }: AiMatchBreakdownProps) {
  return (
    <div className="pt-[10px] pb-[4px] w-full flex flex-row gap-[20px]">
      <div className="flex flex-col gap-[4px] flex-1">
        {BARS.map(({ key, label }) => {
          const value = breakdown[key]

          return (
              <div key={key} className="flex gap-[8px] items-center w-full">
                <span className="text-[11px] text-[#676e81] w-[80px] shrink-0">{label}</span>
                <div className="flex-1 relative h-[4px] bg-[rgba(206,214,225,0.5)] rounded-full">
                  {value > 0 && (
                      <div
                          className="absolute left-0 top-0 h-full rounded-full bg-[#408ef9]"
                          style={{ width: `${value}%` }} // runtime-computed from breakdown score
                      />
                  )}
                </div>
                <span className="text-[11px] text-[#021b38] w-[55px] text-right shrink-0">
                  {displayValue(key, value)}
                </span>
              </div>
          )
        })}
      </div>
      <div className="flex flex-col gap-[6px]">
        {STRINGS.map(({ key, label }) => {
          const value = breakdown[key];

          return (
              <div key={key} className="flex gap-[8px] justify-end w-full">
                <span className="text-[11px] text-[#676e81] w-[80px] shrink-0">{label}</span>
                <span className="text-[11px] text-[#021b38] w-[55px] text-right shrink-0">
                  {value}
                </span>
              </div>
          )
        })}
      </div>
    </div>
  )
}
