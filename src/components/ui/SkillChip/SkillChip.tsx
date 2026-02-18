export interface SkillChipProps {
  label: string
}

export function SkillChip({ label }: SkillChipProps) {
  return (
    <div className="bg-[#ecf5ff] flex h-[22px] items-center justify-center px-[10px] rounded-full">
      <span className="text-[10px] text-[#063b83] tracking-[0.3px]">{label}</span>
    </div>
  )
}
