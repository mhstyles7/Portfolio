'use client'
import { useEffect, useState } from 'react'
import { FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Home',     id: 'hero' },
  { label: 'Projects', id: 'work' },
  { label: 'Background', id: 'about' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Research', id: 'research' },
  { label: 'Certs',    id: 'certifications' },
  { label: 'Contact',  id: 'contact' },
]

export default function Nav() {
  const [visible, setVisible]     = useState(false)
  const [activeId, setActiveId]   = useState('hero')
  const [clock, setClock]         = useState('')
  const [progress, setProgress]   = useState(0)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [narrow, setNarrow]       = useState(false)
  const [copied, setCopied]       = useState(false)

  const handleEmailClick = (e: React.MouseEvent) => {
    navigator.clipboard.writeText('meherajhossainmahir@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2800)
    return () => clearTimeout(t)
  }, [])

  /* Responsive breakpoint */
  useEffect(() => {
    const check = () => setNarrow(window.innerWidth < 920)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  /* Live Dhaka clock */
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const dhaka = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }))
      const h = dhaka.getHours()
      const m = String(dhaka.getMinutes()).padStart(2, '0')
      const s = String(dhaka.getSeconds()).padStart(2, '0')
      const ampm = h >= 12 ? 'PM' : 'AM'
      setClock(`${h % 12 || 12}:${m}:${s} ${ampm}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  /* Scroll progress + active section via IntersectionObserver */
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? Math.min(1, window.scrollY / total) : 0
      setProgress(pct * 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Intersection Observer for active section
    const sectionIds = links.map(l => l.id)
    const observers: IntersectionObserver[] = []

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    })

    // Delay observer setup to let DOM settle
    const timer = setTimeout(() => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    }, 100)

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const navHeight = 80
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      {/* Progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9999,
        height: 3, width: `${progress}%`,
        background: 'linear-gradient(90deg, var(--blue), var(--blue-glow))',
        boxShadow: `0 0 8px var(--blue)`, transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }} />

      {/* ── Desktop Nav ─────────────────────────────────── */}
      {!narrow && (
        <nav style={{
          position: 'fixed', top: '1.1rem', left: '50%', transform: 'translateX(-50%)',
          zIndex: 700,
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(24px)',
          border: '1px solid var(--nav-border)',
          borderRadius: 100,
          padding: '0.65rem 1.6rem',
          display: 'flex', alignItems: 'center', gap: '1.1rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease',
          boxShadow: 'var(--shadow-lg)',
          whiteSpace: 'nowrap',
        }}>
          {/* Logo */}
          <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', flexShrink: 0, color: 'var(--text)' }}>
            MH<span style={{ color: 'var(--blue)' }}>.</span>
          </div>

          <div style={{ width: 1, height: 20, background: 'var(--border)', flexShrink: 0 }} />

          {/* Nav links */}
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map(l => (
              <li key={l.label}>
                <button
                  onClick={() => scrollTo(l.id)}
                  style={{
                    background: 'none',
                    color: activeId === l.id ? 'var(--blue)' : 'var(--muted)',
                    fontFamily: 'JetBrains Mono,monospace', fontSize: '0.72rem',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    cursor: 'pointer', padding: '0.15rem 0', transition: 'color 0.2s',
                    fontWeight: activeId === l.id ? 700 : 500,
                    borderBottom: activeId === l.id ? '2px solid var(--blue)' : '2px solid transparent',
                    paddingBottom: '2px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                  onMouseLeave={e => (e.currentTarget.style.color = activeId === l.id ? 'var(--blue)' : 'var(--muted)')}
                >{l.label}</button>
              </li>
            ))}
          </ul>

          <div style={{ width: 1, height: 20, background: 'var(--border)', flexShrink: 0 }} />

          {/* Theme Toggle */}
          <ThemeToggle />

          <div style={{ width: 1, height: 20, background: 'var(--border)', flexShrink: 0 }} />

          {/* Email CTA */}
          <a href="mailto:meherajhossainmahir@gmail.com"
            onClick={handleEmailClick}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.45rem',
              background: copied ? 'var(--green)' : 'var(--blue)', color: '#000',
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.7rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontWeight: 700, padding: '0.48rem 1rem',
              borderRadius: 100, transition: 'all 0.3s', flexShrink: 0,
              textDecoration: 'none', cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = copied ? `0 0 18px var(--green-glow)` : `0 0 18px var(--blue-glow)`}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
          >
            <FaEnvelope size={12} />
            {copied ? 'Copied!' : 'Email Me'}
          </a>
        </nav>
      )}

      {/* ── Mobile / Narrow Nav ─────────────────────────── */}
      {narrow && (
        <>
          <nav style={{
            position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)',
            zIndex: 700,
            background: 'var(--nav-bg)',
            backdropFilter: 'blur(24px)',
            border: '1px solid var(--nav-border)',
            borderRadius: 100,
            padding: '0.6rem 1.2rem',
            display: 'flex', alignItems: 'center', gap: '0.9rem',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease',
            boxShadow: 'var(--shadow-lg)',
          }}>
            <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text)' }}>
              MH<span style={{ color: 'var(--blue)' }}>.</span>
            </div>
            <div style={{
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.62rem',
              letterSpacing: '0.08em', color: 'var(--blue)',
              textShadow: `0 0 10px var(--blue-glow)`,
              background: 'var(--input-bg)', padding: '0.3rem 0.6rem',
              border: '1px solid var(--border-strong)', borderRadius: 6,
            }}>{clock}</div>

            {/* Theme Toggle for mobile */}
            <ThemeToggle />

            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              style={{
                background: 'none', color: 'var(--text)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, cursor: 'pointer',
                border: '1px solid var(--border-strong)', borderRadius: '50%',
                transition: 'all 0.2s', flexShrink: 0,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--blue)'; (e.currentTarget as HTMLElement).style.color = 'var(--blue)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'; (e.currentTarget as HTMLElement).style.color = 'var(--text)' }}
            >
              {menuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
            </button>
          </nav>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div style={{
              position: 'fixed', top: '4.5rem', left: '50%', transform: 'translateX(-50%)',
              zIndex: 699, minWidth: 220,
              background: 'var(--nav-bg)',
              backdropFilter: 'blur(24px)',
              border: '1px solid var(--nav-border)',
              borderRadius: 14, overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              animation: 'dropIn 0.2s ease',
            }}>
              <style>{`@keyframes dropIn{from{opacity:0;transform:translateX(-50%) translateY(-8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}`}</style>
              {links.map((l, i) => (
                <button key={l.label} onClick={() => scrollTo(l.id)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    padding: '0.95rem 1.5rem',
                    background: activeId === l.id ? 'var(--blue-glow)' : 'transparent',
                    color: activeId === l.id ? 'var(--blue)' : 'var(--muted)',
                    fontFamily: 'JetBrains Mono,monospace', fontSize: '0.78rem',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    cursor: 'pointer', transition: 'all 0.2s',
                    borderBottom: i < links.length - 1 ? '1px solid var(--border)' : 'none',
                    fontWeight: activeId === l.id ? 700 : 500,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--blue-glow)'; (e.currentTarget as HTMLElement).style.color = 'var(--blue)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = activeId === l.id ? 'var(--blue-glow)' : 'transparent'; (e.currentTarget as HTMLElement).style.color = activeId === l.id ? 'var(--blue)' : 'var(--muted)' }}
                >{l.label}</button>
              ))}
              <a href="mailto:meherajhossainmahir@gmail.com"
                onClick={handleEmailClick}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.95rem 1.5rem', textDecoration: 'none', cursor: 'pointer',
                  color: '#000', background: copied ? 'var(--green)' : 'var(--blue)',
                  fontFamily: 'JetBrains Mono,monospace', fontSize: '0.78rem',
                  letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700,
                  transition: 'background 0.3s',
                }}
              >
                <FaEnvelope size={13} /> {copied ? 'Mail Copied!' : 'Email Me'}
              </a>
            </div>
          )}
        </>
      )}
    </>
  )
}

