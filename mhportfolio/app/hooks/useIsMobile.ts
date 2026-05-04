'use client'
import { useEffect, useState } from 'react'

// Single source of truth for mobile breakpoint — no duplicate listeners.
let listeners: Set<() => void> = new Set()
let currentIsMobile = false // safe SSR default

if (typeof window !== 'undefined') {
  currentIsMobile = window.innerWidth <= 768
  window.addEventListener('resize', () => {
    const next = window.innerWidth <= 768
    if (next !== currentIsMobile) {
      currentIsMobile = next
      listeners.forEach(fn => fn())
    }
  })
}

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false) // SSR-safe: always false on server

  useEffect(() => {
    // Sync with real value on mount
    setIsMobile(currentIsMobile)

    const listener = () => setIsMobile(currentIsMobile)
    listeners.add(listener)
    return () => { listeners.delete(listener) }
  }, [])

  return isMobile
}
