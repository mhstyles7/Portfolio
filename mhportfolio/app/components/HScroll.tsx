'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsMobile } from '../hooks/useIsMobile'
import Hero from './panels/Hero'
import Work from './panels/Work'
import About from './panels/About'
import Skills from './panels/Skills'
import Research from './panels/Research'
import Contact from './panels/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function HScroll() {
  const trackRef = useRef<HTMLDivElement>(null)
  const pinRef   = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    // Kill any lingering ScrollTrigger instances first
    ScrollTrigger.getAll().forEach(st => st.kill())

    if (isMobile) return  // no GSAP on mobile

    const track = trackRef.current
    const pin   = pinRef.current
    if (!track || !pin) return

    // Small delay to ensure DOM is painted before GSAP measures
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const totalScroll = track.scrollWidth - window.innerWidth

        gsap.to(track, {
          x: () => -totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: pin,
            pin: true,
            scrub: 1.2,
            start: 'top top',
            end: () => `+=${totalScroll}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          }
        })
      })

      // Store cleanup on the ref so we can access it
      ;(pin as any).__gsapCtx = ctx
    }, 100)

    return () => {
      clearTimeout(timer)
      const ctx = (pin as any)?.__gsapCtx
      if (ctx) ctx.revert()
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [isMobile])

  const footer = (
    <footer style={{
      background: 'var(--bg)', borderTop: '1px solid rgba(75,191,255,0.1)',
      padding: '1.8rem 5vw',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
      fontFamily: 'JetBrains Mono,monospace', fontSize: '0.52rem',
      letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase',
    }}>
      <span>© 2026 <span style={{ color: 'var(--blue)' }}>Md. Meheraj Hossain</span></span>
      <span>Built with Next.js · <span style={{ color: 'var(--blue)' }}>Dhaka, Bangladesh</span></span>
      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
        <a href="/Meheraj_CV.pdf" target="_blank" rel="noreferrer"
          style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
        >View CV ↗</a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none', color: 'var(--muted)',
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.52rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            cursor: 'pointer', transition: 'color 0.2s', padding: 0,
          }}
        >↑ Back to top</button>
      </div>
    </footer>
  )

  /* ── Mobile: simple vertical stack ────────────────────── */
  if (isMobile) {
    return (
      <>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Research />
        <Contact />
        {footer}
      </>
    )
  }

  /* ── Desktop: GSAP horizontal scroll ───────────────── */
  return (
    <>
      <div ref={pinRef} style={{ height: '100vh', overflow: 'hidden' }}>
        <div ref={trackRef} style={{
          display: 'flex', height: '100vh',
          width: '600vw', willChange: 'transform',
        }}>
          <Hero />
          <Work />
          <About />
          <Skills />
          <Research />
          <Contact />
        </div>
      </div>
      {footer}
    </>
  )
}
