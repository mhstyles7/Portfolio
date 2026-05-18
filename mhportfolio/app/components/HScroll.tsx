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
      </>
    )
  }

  /* ── Desktop: GSAP horizontal scroll ───────────────── */
  return (
    <>
      <div ref={pinRef} style={{ height: '100vh', overflow: 'hidden', background: 'transparent' }}>
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
    </>
  )
}
