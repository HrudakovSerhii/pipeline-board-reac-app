// Class pairs map to --color-avatar-N / --color-avatar-N-foreground tokens in index.css
const AVATAR_PALETTE: Array<{ bgClass: string; textClass: string }> = [
  { bgClass: 'bg-avatar-1', textClass: 'text-avatar-1-foreground' },
  { bgClass: 'bg-avatar-2', textClass: 'text-avatar-2-foreground' },
  { bgClass: 'bg-avatar-3', textClass: 'text-avatar-3-foreground' },
  { bgClass: 'bg-avatar-4', textClass: 'text-avatar-4-foreground' },
  { bgClass: 'bg-avatar-5', textClass: 'text-avatar-5-foreground' },
  { bgClass: 'bg-avatar-6', textClass: 'text-avatar-6-foreground' },
  { bgClass: 'bg-avatar-7', textClass: 'text-avatar-7-foreground' },
  { bgClass: 'bg-avatar-8', textClass: 'text-avatar-8-foreground' },
]

function hashName(name: string): number {
  let h = 0
  for (let i = 0; i < name.length; i++) {
    h = (h * 31 + name.charCodeAt(i)) & 0xffffffff
  }
  return Math.abs(h)
}

export function nameInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function avatarPalette(name: string): { bgClass: string; textClass: string } {
  return AVATAR_PALETTE[hashName(name) % AVATAR_PALETTE.length]
}
