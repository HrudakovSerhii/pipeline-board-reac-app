import { cn } from '../../../utils/cn'
import { nameInitials } from '../../../utils/string'

export interface PhotoAvatarProps {
  name: string
  avatarUrl?: string
}

export function PhotoAvatar({ name, avatarUrl }: PhotoAvatarProps) {
  const initials = nameInitials(name)

  return (
    <div
      className={cn(
        'size-6 shrink-0 rounded-full flex items-center justify-center overflow-hidden text-[10px] font-medium leading-none select-none',
        !avatarUrl && 'bg-white text-brand-dark',
      )}
    >
      {avatarUrl ? <img src={avatarUrl} alt={name} className="size-full object-cover" /> : initials}
    </div>
  )
}
