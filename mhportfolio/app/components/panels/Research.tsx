'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Research() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section style={{
      width: isMobile ? '100%' : '100vw',
      height: isMobile ? 'auto' : '100vh',
      flexShrink: 0,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      overflowY: 'auto',
      background: 'linear-gradient(135deg,#060a14 0%,#0C0C0C 60%)',
    }}>
      {/* Left */}
      <div style={{
        width: isMobile ? '100%' : '52%',
        padding: isMobile ? '4rem 6vw 2rem' : '5rem 4vw 3rem 7vw',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
        borderRight: isMobile ? 'none' : '1px solid rgba(75,191,255,0.08)',
        borderBottom: isMobile ? '1px solid rgba(75,191,255,0.08)' : 'none',
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {/* Status badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.2rem', width: 'fit-content' }}>
            <div style={{
              width: 6, height: 6, background: '#6FEA6F', borderRadius: '50%',
              boxShadow: '0 0 10px #6FEA6F', animation: 'pulse 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.52rem',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#6FEA6F', border: '1px solid rgba(111,234,111,0.3)',
              padding: '0.35rem 0.9rem',
            }}>ICT Express · Elsevier · ✓ Published</span>
          </div>

          <div style={{
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.52rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--blue)', marginBottom: '1rem',
            display: 'flex', alignItems: 'center', gap: '0.8rem',
          }}>
            <span style={{ width: 20, height: 1, background: 'var(--blue)', display: 'block' }} />
            05 — Research
          </div>

          <h2 style={{
            fontFamily: 'Inter,sans-serif', fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,2rem)',
            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1.2rem',
            color: 'var(--cream)',
          }}>
            A Cross-Dataset based Zero-Day Intrusion Detection System by Integrating{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--blue)', textShadow: '0 0 30px rgba(75,191,255,0.25)' }}>
              Siamese Network and Reinforcement Learning
            </em>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <p style={{ fontSize: '0.73rem', lineHeight: 1.85, color: 'var(--muted)', marginBottom: '1.2rem', textAlign: 'justify' }}>
            <strong style={{ color: 'var(--cream)' }}>Abstract: </strong>
            Zero-day attacks threaten IoT security as signature-based detection fails against novel exploits. This paper proposes a hybrid IDS integrating unsupervised anomaly detection, non-parametric Siamese-based cross-dataset dissimilarity filtering, and PPO-based adaptive defense. Evaluations demonstrate state-of-the-art results.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
            {['Zero-Day', 'Cybersecurity', 'Reinforcement Learning', 'Siamese Network', 'PPO', 'IoT Security'].map(t => (
              <span key={t} style={{
                fontFamily: 'JetBrains Mono,monospace', fontSize: '0.44rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '0.22rem 0.6rem', background: 'rgba(75,191,255,0.05)',
                border: '1px solid rgba(75,191,255,0.15)', color: 'var(--blue)',
              }}>{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <div style={{
            paddingTop: '1.2rem', borderTop: '1px solid rgba(75,191,255,0.1)',
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.52rem',
            letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: '1.5rem',
          }}>
            <strong style={{ color: 'var(--cream)' }}>First Author</strong> · Published in{' '}
            <span style={{ color: 'var(--blue)' }}>ICT Express</span> (Elsevier, CiteScore: 10.8, IF: 4.2)
            <br /><br />
            Co-authored thesis · BRAC University · 2024–2025
          </div>

          <a href="#" target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--blue)', color: '#000',
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem',
              fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '0.7rem 1.5rem', transition: 'box-shadow 0.3s',
              textDecoration: 'none', cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(75,191,255,0.5)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
          >Read Paper →</a>
        </motion.div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
      </div>

      {/* Right — Metrics */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: isMobile ? '3rem 6vw 4rem' : '5rem 4vw 3rem',
        gap: isMobile ? '1.5rem' : '2.5rem', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Inter,sans-serif', fontWeight: 800, fontStyle: 'italic',
          fontSize: '20vw', color: 'rgba(75,191,255,0.018)',
          pointerEvents: 'none', userSelect: 'none',
        }}>RL</div>

        {/* Big number */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, type: 'spring' }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}
        >
          <div style={{
            fontFamily: 'Inter,sans-serif', fontWeight: 800,
            fontSize: 'clamp(3rem,6vw,5.5rem)', lineHeight: 1,
            color: 'var(--blue)', textShadow: '0 0 60px rgba(75,191,255,0.4)',
          }}>99.28%</div>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.7rem' }}>
            Training Accuracy
          </div>
        </motion.div>

        {/* 2×2 sub-metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isMobile ? '1rem 2rem' : '1.2rem 2.5rem', width: '100%', maxWidth: 360 }}>
          {[
            { v: '99.07%', l: 'Unseen Attack\nAccuracy' },
            { v: '93.94%', l: 'Zero-Day\nDetection Rate' },
            { v: '0.50ms', l: 'Detection\nLatency' },
            { v: '2.21%',  l: 'False-Positive\nRate' },
          ].map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.25 + i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: isMobile ? '1.4rem' : '1.8rem', color: 'var(--cream)' }}>{m.v}</div>
              <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.43rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.35rem', whiteSpace: 'pre-line' }}>{m.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
