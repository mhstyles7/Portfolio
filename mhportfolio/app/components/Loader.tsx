'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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
      {/* Background Subtle Breathing Glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '50%', left: '50%', 
          x: '-50%', y: '-50%', // Framer motion safe centering
          width: '60vw', height: '60vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 112, 204, 0.1) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} 
      />

      {/* Name with elegant blur-in reveal */}
      <motion.div 
        initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.95 }}
        animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 800,
          fontSize: 'clamp(2rem, 6vw, 4.5rem)', letterSpacing: '-0.03em',
          color: '#fff', display: 'flex', alignItems: 'center',
          marginBottom: '2.5rem', position: 'relative', zIndex: 2
        }}
      >
        Md. Meheraj Hossain<span style={{ color: '#0070cc' }}>.</span>
      </motion.div>

      {/* Loading Track fading in slightly after */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: 'min(300px, 70vw)', height: 1, background: 'rgba(255,255,255,0.1)', position: 'relative', zIndex: 2 }}
      >
        <div style={{
          position: 'absolute', top: -1, left: 0, height: 3,
          width: `${pct}%`, background: '#0070cc',
          boxShadow: '0 0 12px #0070cc, 0 0 4px #0070cc',
          transition: 'width 0.1s ease-out'
        }} />
      </motion.div>

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
