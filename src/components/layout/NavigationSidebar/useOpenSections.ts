import { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../../../utils/localStorage'
import { NAV_SECTIONS } from './constants'

const STORAGE_KEY = 'nav-open-sections'

function getInitialState(): Record<string, boolean> {
  const stored = getLocalStorage<Record<string, boolean> | null>(STORAGE_KEY, null)
  if (stored) return stored
  const allOpen: Record<string, boolean> = {}
  for (const section of NAV_SECTIONS) {
    allOpen[section.id] = true
  }
  return allOpen
}

export function useOpenSections() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(getInitialState)

  function toggleSection(id: string) {
    setOpenSections((prev) => {
      const next = { ...prev, [id]: !prev[id] }
      setLocalStorage(STORAGE_KEY, next)
      return next
    })
  }

  return { openSections, toggleSection } as const
}
