'use client'
import { motion } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'
import { SiGooglescholar, SiResearchgate, SiOrcid } from 'react-icons/si'

const researchProfiles = [
  { href: 'https://scholar.google.com/citations?user=wl2xVSQAAAAJ&hl=en', icon: <SiGooglescholar size={14} />, label: 'Google Scholar', color: '#4285F4' },
  { href: 'https://www.researchgate.net/profile/Md-Meheraj-Hossain', icon: <SiResearchgate size={14} />, label: 'ResearchGate', color: '#00CCBB' },
  { href: 'https://orcid.org/0009-0009-0796-3751', icon: <SiOrcid size={14} />, label: 'ORCID', color: '#A6CE39' },
]

export default function Research() {
  const isMobile = useIsMobile()

  return (
    <section style={{
      width: isMobile ? '100%' : '100vw',
      height: isMobile ? 'auto' : '100vh',
      flexShrink: 0,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      overflowY: 'auto',
      background: 'linear-gradient(135deg,rgba(6,10,20,0.88) 0%,rgba(12,12,12,0.88) 60%)',
    }}>
      {/* Left */}
      <div style={{
        width: isMobile ? '100%' : '52%',
        padding: isMobile ? '4rem 6vw 2rem' : '5rem 4vw 3rem 7vw',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
        borderRight: isMobile ? 'none' : '1px solid rgba(75,191,255,0.08)',
        borderBottom: isMobile ? '1px solid rgba(75,191,255,0.08)' : 'none',
        position: 'relative', overflow: 'hidden',
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {/* Top row: Status badge + Profiles */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', width: 'fit-content', marginTop: '0.2rem' }}>
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

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {researchProfiles.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  title={s.label}
                  aria-label={`Visit ${s.label} profile`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.35rem 0.6rem',
                    border: '1px solid rgba(75,191,255,0.15)',
                    background: 'transparent',
                    color: 'var(--muted)',
                    transition: 'all 0.25s', textDecoration: 'none', cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = s.color
                    ;(e.currentTarget as HTMLElement).style.borderColor = s.color
                    ;(e.currentTarget as HTMLElement).style.background = `${s.color}12`
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--muted)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(75,191,255,0.15)'
                    ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  }}
                >
                  {s.icon}
                  <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</span>
                </a>
              ))}
            </div>
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

          <a href="https://doi.org/10.1016/j.icte.2026.05.001" target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              border: '1px solid rgba(75,191,255,0.3)', background: 'rgba(75,191,255,0.08)',
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '0.7rem 1.5rem', color: 'var(--cream)', textDecoration: 'none',
              transition: 'background 0.2s, box-shadow 0.2s',
              marginBottom: '1.5rem',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(75,191,255,0.2)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6FEA6F', boxShadow: '0 0 8px #6FEA6F', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
              View DOI: 10.1016/j.icte.2026.05.001
          </a>


        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <div style={{
            paddingTop: '1.2rem', borderTop: '1px solid rgba(75,191,255,0.1)',
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.52rem',
            letterSpacing: '0.1em', color: 'var(--muted)',
          }}>
            <strong style={{ color: 'var(--cream)' }}>First Author</strong> · Published in{' '}
            <span style={{ color: 'var(--blue)' }}>ICT Express</span> (Elsevier, CiteScore: 10.8, IF: 4.2)
            <br /><br />
            Co-authored thesis · BRAC University · 2024–2025
          </div>
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

        {/* Unified Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '2.5rem', width: '100%', maxWidth: 500, position: 'relative', zIndex: 2 }}>
          {/* Main metric spans two columns on desktop if desired, but let's make them all equal sized for symmetry, or top one full width */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8, type: 'spring' }}
            style={{ textAlign: 'center', gridColumn: isMobile ? '1' : '1 / -1', marginBottom: isMobile ? '1rem' : '1.5rem' }}
          >
            <div style={{
              fontFamily: 'Inter,sans-serif', fontWeight: 800,
              fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1,
              color: 'var(--blue)', textShadow: '0 0 40px rgba(75,191,255,0.5)',
            }}>99.28%</div>
            <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cream)', marginTop: '0.7rem' }}>
              Training Accuracy
            </div>
          </motion.div>

          {[
            { v: '99.07%', l: 'Unseen Attack\nAccuracy' },
            { v: '93.94%', l: 'Zero-Day\nDetection Rate' },
            { v: '0.50ms', l: 'Detection\nLatency' },
            { v: '2.21%',  l: 'False-Positive\nRate' },
          ].map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ 
                fontFamily: 'Inter,sans-serif', fontWeight: 800, 
                fontSize: 'clamp(2rem,3.5vw,2.8rem)', 
                color: 'var(--blue)', textShadow: '0 0 30px rgba(75,191,255,0.4)',
              }}>{m.v}</div>
              <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cream)', marginTop: '0.5rem', whiteSpace: 'pre-line' }}>{m.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
