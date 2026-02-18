export function getLocalStorage<T>(key: string, fallback: T): T {
  try {
    const item = window.localStorage.getItem(key)
    if (item === null) return fallback
    return JSON.parse(item) as T
  } catch {
    return fallback
  }
}

export function setLocalStorage<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Storage quota exceeded or unavailable — fail silently
  }
}

export function removeLocalStorage(key: string): void {
  try {
    window.localStorage.removeItem(key)
  } catch {
    // Unavailable — fail silently
  }
}
