'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'
const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('mh-theme') as Theme | null
    if (saved) setTheme(saved)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.style.setProperty('--bg',      '#f5f5f0')
      root.style.setProperty('--surface', '#ebebE6')
      root.style.setProperty('--surface2','#e0e0da')
      root.style.setProperty('--cream',   '#1a1a1a')
      root.style.setProperty('--muted',   '#666660')
      root.style.setProperty('--border',  'rgba(0,0,0,0.12)')
    } else {
      root.style.setProperty('--bg',      '#050507')
      root.style.setProperty('--surface', '#0d0d12')
      root.style.setProperty('--surface2','#141419')
      root.style.setProperty('--cream',   '#F2EDE4')
      root.style.setProperty('--muted',   '#8F8A96')
      root.style.setProperty('--border',  'rgba(75,191,255,0.12)')
    }
    localStorage.setItem('mh-theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>
}

export const useTheme = () => useContext(ThemeCtx)

/* Floating toggle button */
export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        position: 'fixed', bottom: '1.8rem', left: '1.8rem', zIndex: 800,
        width: 38, height: 38, borderRadius: '50%',
        background: 'rgba(5,5,7,0.85)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(75,191,255,0.2)',
        color: 'var(--blue)', cursor: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1rem', transition: 'all 0.3s',
        boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--blue)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(75,191,255,0.4)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(75,191,255,0.2)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.4)' }}
    >
      {theme === 'dark' ? '☀' : '🌙'}
    </button>
  )
}
