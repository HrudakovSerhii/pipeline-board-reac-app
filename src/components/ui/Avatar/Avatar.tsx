import icons from '../../../assets/icons'
import { cn } from '../../../utils/cn'
import { nameInitials } from '../../../utils/string'

export interface AvatarProps {
  name: string
  avatarUrl?: string
  isGloPros: boolean
  isBlurred?: boolean
  size?: 'sm' | 'md'
}

export function Avatar({ name, avatarUrl, isGloPros, isBlurred, size = 'md' }: AvatarProps) {
  const initials = nameInitials(name)
  const sizeClass = size === 'sm' ? 'size-[36px] text-[12px]' : 'size-[44px] text-[14px]'

  return (
    <div className="flex items-center justify-center relative">
      <div
        className={cn(
          'shrink-0 rounded-bl-[30px] rounded-br-[30px] rounded-tl-[30px] rounded-tr-[3px] flex items-center justify-center overflow-hidden border-2',
          sizeClass,
          !avatarUrl && 'bg-brand-subtle',
          isGloPros && 'shadow-glopros',
        )}
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className={cn('size-full object-cover', isBlurred && 'blur-xs')}
          />
        ) : (
          <span className="leading-none select-none text-brand-dark">{initials}</span>
        )}
      </div>

      {isGloPros && (
        <div className="absolute bottom-0 right-0 bg-glopros rounded-tl-[6px] size-[14px] flex items-center justify-center">
          {/* GloPros badge — inline SVG, size runtime-independent */}
          <svg width="8" height="10" fill="none" viewBox="0 0 12.5 16.1">
            <path d={icons.pb62d5c0} fill="white" />
            <path d={icons.p1ca40480} className="fill-glopros" />
          </svg>
        </div>
      )}
    </div>
  )
}
