'use client'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  r: number; opacity: number
}

export default function ConstellationBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isMobile = window.innerWidth < 768
    const COUNT = isMobile ? 45 : 85
    const MAX_DIST = isMobile ? 110 : 155

    let W = window.innerWidth
    let H = window.innerHeight
    let particles: Particle[] = []
    let raf: number

    const getThemeColors = () => {
      const theme = document.documentElement.getAttribute('data-theme')
      const isLight = theme === 'light'
      if (isLight) {
        return { dot: 'rgba(0,112,204,', line: 'rgba(0,112,204,', isLight }
      }
      return { dot: 'rgba(75,191,255,', line: 'rgba(75,191,255,', isLight }
    }

    const resize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
    }

    const init = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.4,
        opacity: Math.random() * 0.5 + 0.3,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const colors = getThemeColors()

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const baseAlpha = colors.isLight ? 0.35 : 0.2
            const alpha = (1 - dist / MAX_DIST) * baseAlpha
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `${colors.line}${alpha})`
            ctx.lineWidth = colors.isLight ? 1 : 0.7
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        const dotAlpha = colors.isLight ? Math.min(1, p.opacity * 1.5) : p.opacity
        ctx.fillStyle = `${colors.dot}${dotAlpha})`
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    const onResize = () => { resize(); init() }
    resize()
    init()
    draw()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} aria-hidden="true"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }} />
  )
}
