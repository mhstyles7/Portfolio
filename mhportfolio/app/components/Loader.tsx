'use client'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [pct, setPct] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let current = 0
    const iv = setInterval(() => {
      current += Math.random() * 8 + 2
      if (current >= 100) {
        current = 100
        clearInterval(iv)
        setTimeout(() => {
          setExiting(true)
          setTimeout(() => setHidden(true), 1000)
        }, 400)
      }
      setPct(Math.floor(current))
    }, 45)
    return () => clearInterval(iv)
  }, [])

  if (hidden) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 8000,
      background: '#030712', // Deep dark blue/black
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
      opacity: exiting ? 0 : 1,
      transform: exiting ? 'translateY(-30px)' : 'none',
      pointerEvents: exiting ? 'none' : 'all',
      overflow: 'hidden'
    }}>
      {/* Background Subtle Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '60vw', height: '60vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 112, 204, 0.08) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      {/* Name */}
      <div style={{
        fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 800,
        fontSize: 'clamp(2rem, 6vw, 4.5rem)', letterSpacing: '-0.03em',
        color: '#fff', display: 'flex', alignItems: 'center',
        marginBottom: '2.5rem', position: 'relative', zIndex: 2
      }}>
        Md. Meheraj Hossain<span style={{ color: '#0070cc' }}>.</span>
      </div>

      {/* Loading Track */}
      <div style={{ width: 'min(300px, 70vw)', height: 1, background: 'rgba(255,255,255,0.1)', position: 'relative', zIndex: 2 }}>
        <div style={{
          position: 'absolute', top: -1, left: 0, height: 3,
          width: `${pct}%`, background: '#0070cc',
          boxShadow: '0 0 12px #0070cc, 0 0 4px #0070cc',
          transition: 'width 0.1s ease-out'
        }} />
      </div>

      {/* Percentage & Status */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', width: 'min(300px, 70vw)',
        marginTop: '1rem', fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)',
        position: 'relative', zIndex: 2
      }}>
        <span>INITIALIZING</span>
        <span>{pct.toString().padStart(3, '0')}%</span>
      </div>
    </div>
  )
}
