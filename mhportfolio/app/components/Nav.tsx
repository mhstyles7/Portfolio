'use client'
import { useEffect, useState } from 'react'
import { FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import dynamic from 'next/dynamic'

const VisitorCounter = dynamic(() => import('./VisitorCounter'), { ssr: false })

const links = [
  { label: 'Home',     idx: 0 },
  { label: 'Projects', idx: 1 },
  { label: 'About',    idx: 2 },
  { label: 'Skills',   idx: 3 },
  { label: 'Research', idx: 4 },
  { label: 'Contact',  idx: 5 },
]

const PANEL_COUNT = 6

export default function Nav() {
  const [visible, setVisible]     = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
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

  /* Scroll progress + active section */
  useEffect(() => {
    const onScroll = () => {
      const isMob = window.innerWidth <= 768
      if (isMob) {
        // On mobile, panels stack vertically — use document height
        const total = document.body.scrollHeight - window.innerHeight
        const pct = total > 0 ? Math.min(1, window.scrollY / total) : 0
        setProgress(pct * 100)
        setActiveIdx(Math.round(pct * (PANEL_COUNT - 1)))
      } else {
        // On desktop, GSAP pin-spacer consumes vw*(PANEL_COUNT-1) of scroll
        const vw = window.innerWidth
        const totalScroll = vw * (PANEL_COUNT - 1)
        const pct = Math.min(1, window.scrollY / totalScroll)
        setProgress(pct * 100)
        setActiveIdx(Math.round(pct * (PANEL_COUNT - 1)))
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (idx: number) => {
    const isMob = window.innerWidth <= 768
    if (isMob) {
      // On mobile, scroll to the nth section by getting all sections
      const sections = document.querySelectorAll('section')
      if (sections[idx]) sections[idx].scrollIntoView({ behavior: 'smooth' })
    } else {
      // On desktop, each panel = 1vw of horizontal scroll
      window.scrollTo({ top: window.innerWidth * idx, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      {/* Progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9999,
        height: 2, width: `${progress}%`,
        background: 'linear-gradient(90deg, var(--blue), rgba(75,191,255,0.4))',
        boxShadow: '0 0 8px var(--blue)', transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }} />

      {/* ── Desktop Nav ─────────────────────────────────── */}
      {!narrow && (
        <nav style={{
          position: 'fixed', top: '1.1rem', left: '50%', transform: 'translateX(-50%)',
          zIndex: 700,
          background: 'rgba(5,5,7,0.88)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(75,191,255,0.15)',
          borderRadius: 100,
          padding: '0.5rem 1.1rem',
          display: 'flex', alignItems: 'center', gap: '0.9rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          whiteSpace: 'nowrap',
        }}>
          {/* Logo */}
          <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '-0.02em', flexShrink: 0 }}>
            MH<span style={{ color: 'var(--blue)' }}>.</span>
          </div>

          <div style={{ width: 1, height: 14, background: 'rgba(75,191,255,0.12)', flexShrink: 0 }} />

          {/* Nav links */}
          <ul style={{ display: 'flex', gap: '0.85rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map(l => (
              <li key={l.label}>
                <button
                  onClick={() => scrollTo(l.idx)}
                  style={{
                    background: 'none',
                    color: activeIdx === l.idx ? 'var(--blue)' : 'var(--muted)',
                    fontFamily: 'JetBrains Mono,monospace', fontSize: '0.52rem',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    cursor: 'pointer', padding: 0, transition: 'color 0.2s',
                    fontWeight: activeIdx === l.idx ? 600 : 400,
                    borderBottom: activeIdx === l.idx ? '1px solid var(--blue)' : '1px solid transparent',
                    paddingBottom: '1px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                  onMouseLeave={e => (e.currentTarget.style.color = activeIdx === l.idx ? 'var(--blue)' : 'var(--muted)')}
                >{l.label}</button>
              </li>
            ))}
          </ul>

          <div style={{ width: 1, height: 14, background: 'rgba(75,191,255,0.12)', flexShrink: 0 }} />

          {/* Visitor count */}
          <VisitorCounter />

          <div style={{ width: 1, height: 14, background: 'rgba(75,191,255,0.12)', flexShrink: 0 }} />

          {/* Glowing clock */}
          <div style={{
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.48rem',
            letterSpacing: '0.1em', color: 'var(--blue)', flexShrink: 0,
            textShadow: '0 0 12px rgba(75,191,255,0.9), 0 0 24px rgba(75,191,255,0.4)',
            background: 'rgba(75,191,255,0.07)',
            padding: '0.28rem 0.55rem',
            border: '1px solid rgba(75,191,255,0.22)',
            borderRadius: 4,
          }}>{clock} · GMT+6</div>

          <div style={{ width: 1, height: 14, background: 'rgba(75,191,255,0.12)', flexShrink: 0 }} />

          {/* Email CTA */}
          <a href="mailto:meherajhossainmahir@gmail.com"
            onClick={handleEmailClick}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              background: copied ? '#6FEA6F' : 'var(--blue)', color: '#000',
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.5rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              fontWeight: 700, padding: '0.4rem 0.9rem',
              borderRadius: 100, transition: 'all 0.3s', flexShrink: 0,
              textDecoration: 'none', cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = copied ? '0 0 18px rgba(111,234,111,0.6)' : '0 0 18px rgba(75,191,255,0.6)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
          >
            <FaEnvelope size={10} />
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
            background: 'rgba(5,5,7,0.92)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(75,191,255,0.15)',
            borderRadius: 100,
            padding: '0.5rem 1rem',
            display: 'flex', alignItems: 'center', gap: '0.8rem',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          }}>
            <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: '0.82rem' }}>
              MH<span style={{ color: 'var(--blue)' }}>.</span>
            </div>
            <div style={{
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.45rem',
              letterSpacing: '0.1em', color: 'var(--blue)',
              textShadow: '0 0 10px rgba(75,191,255,0.8)',
              background: 'rgba(75,191,255,0.07)', padding: '0.25rem 0.5rem',
              border: '1px solid rgba(75,191,255,0.2)', borderRadius: 4,
            }}>{clock}</div>
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              style={{
                background: 'none', color: 'var(--cream)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 32, height: 32, cursor: 'pointer',
                border: '1px solid rgba(75,191,255,0.2)', borderRadius: '50%',
                transition: 'all 0.2s', flexShrink: 0,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--blue)'; (e.currentTarget as HTMLElement).style.color = 'var(--blue)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(75,191,255,0.2)'; (e.currentTarget as HTMLElement).style.color = 'var(--cream)' }}
            >
              {menuOpen ? <FaTimes size={12} /> : <FaBars size={12} />}
            </button>
          </nav>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div style={{
              position: 'fixed', top: '4.2rem', left: '50%', transform: 'translateX(-50%)',
              zIndex: 699, minWidth: 200,
              background: 'rgba(5,5,7,0.97)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(75,191,255,0.15)',
              borderRadius: 12, overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(0,0,0,0.7)',
              animation: 'dropIn 0.2s ease',
            }}>
              <style>{`@keyframes dropIn{from{opacity:0;transform:translateX(-50%) translateY(-8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}`}</style>
              {links.map((l, i) => (
                <button key={l.label} onClick={() => scrollTo(l.idx)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    padding: '0.85rem 1.4rem',
                    background: activeIdx === l.idx ? 'rgba(75,191,255,0.08)' : 'transparent',
                    color: activeIdx === l.idx ? 'var(--blue)' : 'var(--muted)',
                    fontFamily: 'JetBrains Mono,monospace', fontSize: '0.58rem',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    cursor: 'pointer', transition: 'all 0.2s',
                    borderBottom: i < links.length - 1 ? '1px solid rgba(75,191,255,0.06)' : 'none',
                    fontWeight: activeIdx === l.idx ? 600 : 400,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(75,191,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'var(--blue)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = activeIdx === l.idx ? 'rgba(75,191,255,0.08)' : 'transparent'; (e.currentTarget as HTMLElement).style.color = activeIdx === l.idx ? 'var(--blue)' : 'var(--muted)' }}
                >{l.label}</button>
              ))}
              <a href="mailto:meherajhossainmahir@gmail.com"
                onClick={handleEmailClick}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.85rem 1.4rem', textDecoration: 'none', cursor: 'pointer',
                  color: '#000', background: copied ? '#6FEA6F' : 'var(--blue)',
                  fontFamily: 'JetBrains Mono,monospace', fontSize: '0.58rem',
                  letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700,
                  transition: 'background 0.3s',
                }}
              >
                <FaEnvelope size={11} /> {copied ? 'Mail Copied!' : 'Email Me'}
              </a>
            </div>
          )}
        </>
      )}
    </>
  )
}

