import { cn } from '../../../utils/cn'
import { avatarPalette, nameInitials } from '../../../utils/string'

export interface PhotoAvatarProps {
  name: string
  avatarUrl?: string
}

export function PhotoAvatar({ name, avatarUrl }: PhotoAvatarProps) {
  const palette = avatarPalette(name)
  const initials = nameInitials(name)

  return (
    <div
      className={cn(
        'size-[24px] shrink-0 rounded-full flex items-center justify-center overflow-hidden text-[10px] font-medium leading-none select-none',
        !avatarUrl && palette.bgClass,
        !avatarUrl && palette.textClass,
      )}
    >
      {avatarUrl ? (
        <img src={avatarUrl} alt={name} className="size-full object-cover" />
      ) : (
        initials
      )}
    </div>
  )
}
