'use client'
import { useEffect, useState } from 'react'

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    // CounterAPI.dev — free, real, cross-user persistent counter
    // Each page load hits /up which atomically increments then returns the new count
    fetch('https://api.counterapi.dev/v1/mhportfolio-meheraj/visits/up')
      .then(r => r.json())
      .then(data => {
        if (typeof data?.count === 'number') setCount(data.count)
      })
      .catch(() => {
        // Fallback: try to read last known count without incrementing
        fetch('https://api.counterapi.dev/v1/mhportfolio-meheraj/visits')
          .then(r => r.json())
          .then(data => { if (typeof data?.count === 'number') setCount(data.count) })
          .catch(() => {})
      })
  }, [])

  if (count === null) return null

  // Animate count up from 0
  return (
    <span style={{
      fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem',
      letterSpacing: '0.1em', textTransform: 'uppercase',
      color: 'var(--blue)', display: 'inline-flex',
      alignItems: 'center', gap: '0.4rem',
      opacity: 0.75,
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: '50%',
        background: 'var(--green)', boxShadow: `0 0 6px var(--green)`,
        display: 'inline-block', animation: 'visitorPulse 2s ease-in-out infinite',
      }} />
      {count.toLocaleString()} {count === 1 ? 'visit' : 'visits'}
      <style>{`@keyframes visitorPulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
    </span>
  )
}
