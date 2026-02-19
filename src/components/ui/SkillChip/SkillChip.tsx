export interface SkillChipProps {
  label: string
}

export function SkillChip({ label }: SkillChipProps) {
  return (
    <div className="bg-brand-subtle flex h-[22px] items-center justify-center px-[10px] rounded-full">
      <span className="text-[10px] text-brand-dark tracking-[0.3px]">{label}</span>
    </div>
  )
}
