export interface SkillChipProps {
  label: string
}

export function SkillChip({ label }: SkillChipProps) {
  return (
    <div className="bg-brand-subtle flex h-5.5 items-center justify-center px-2.5 rounded-full">
      <span className="text-[10px] text-brand-dark tracking-[0.3px]">{label}</span>
    </div>
  )
}
