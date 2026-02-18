import icons from '../../../assets/icons'
import { cn } from '../../../utils/cn'
import { avatarPalette, nameInitials } from '../../../utils/string'

export interface AvatarProps {
  name: string
  avatarUrl?: string
  isGloPros: boolean
  isBlurred?: boolean
  size?: 'sm' | 'md'
}

export function Avatar({ name, avatarUrl, isGloPros, isBlurred, size = 'md' }: AvatarProps) {
  const palette = avatarPalette(name)
  const initials = nameInitials(name)
  const sizeClass = size === 'sm' ? 'size-[36px] text-[12px]' : 'size-[44px] text-[14px]'

  return (
    <div
      className="flex items-center justify-center relative"
    >
      <div className={cn(
          'shrink-0 rounded-bl-[30px] rounded-br-[30px] rounded-tl-[30px] rounded-tr-[3px] flex items-center overflow-hidden',
          sizeClass,
          !avatarUrl && palette.bgClass,
      )}>
        {avatarUrl ? (
            <img src={avatarUrl} alt={name} className={cn(
                'size-full object-cover',
                isBlurred && 'blur-xs',
            )} />
        ) : (
            <span className={cn('leading-none select-none', !isGloPros && palette.textClass)}>
          {initials}
        </span>
        )}
        {/*{isBlurred && <div className="w-full h-full relative backdrop-blur-sm" />}*/}
      </div>

      {isGloPros && (
        <div className="absolute bottom-0 right-0 bg-[rgba(230,140,13,0.9)] rounded-tl-[6px] size-[14px] flex items-center justify-center">
          {/* GloPros badge — inline SVG, size runtime-independent */}
          <svg width="8" height="10" fill="none" viewBox="0 0 12.5 16.1">
            <path d={icons.pb62d5c0} fill="white" />
            <path d={icons.p1ca40480} fill="#E68C0D" />
          </svg>
        </div>
      )}
    </div>
  )
}
