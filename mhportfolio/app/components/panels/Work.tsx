'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaMicrochip } from 'react-icons/fa'
import { useIsMobile } from '../../hooks/useIsMobile'

const projects: {
  num: string; title: string; desc: string; tech: string[];
  tag: string; link: string; github: string; hardware?: boolean
}[] = [
  {
    num: '01', title: 'PothChola',
    desc: 'Localized smart travel & cultural discovery — social posts, friend groups, shared itineraries, Gemini AI recommendations.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini API'],
    tag: 'Full-Stack · Dec 2025 – Feb 2026',
    link: 'https://poth-chola.vercel.app',
    github: 'https://github.com/mhstyles7/PothChola',
  },
  {
    num: '02', title: 'Trippy 2.0',
    desc: 'Travel marketplace rebuilt solo — JWT auth, OCR-powered NID verification, role-based traveler/provider dashboards.',
    tech: ['MERN', 'JWT', 'OCR API', 'VoiceFlow'],
    tag: 'Full-Stack · Mar 2026 – May 2026',
    link: 'https://trippy-2-0.vercel.app/',
    github: 'https://github.com/mhstyles7/Trippy-2.0',
  },
  {
    num: '03', title: 'Air Quality Monitor for Urban Homes',
    desc: 'Active indoor air monitoring using ESP32, MQ-series gas sensors (smoke/CO₂) and DHT11. Triggers exhaust fan via p-channel MOSFET and piezo buzzer on unsafe readings. Data logged to SD card and streamed via Wi-Fi.',
    tech: ['ESP32', 'MOSFET', 'I2C/SPI', 'Wi-Fi'],
    tag: 'Hardware · Dec 2025 – Jan 2026',
    link: '', github: '', hardware: true,
  },
  {
    num: '04', title: 'Voltage Deviation Visualizer',
    desc: 'Analog circuit that quantizes voltage deviations from a simulated pressure sensor into discrete levels, visualised via a colour-coded LED array using op-amps and diodes.',
    tech: ['Op-Amps', 'Diodes', 'Analog', 'LEDs'],
    tag: 'Hardware · Mar 2024',
    link: '', github: '', hardware: true,
  },
]

export default function Work() {
  const isMobile = useIsMobile()

  return (
    <section style={{
      width: isMobile ? '100%' : '100vw',
      height: isMobile ? 'auto' : '100vh',
      flexShrink: 0,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      overflow: isMobile ? 'visible' : 'hidden',
    }}>
      {/* Left panel */}
      <div style={{
        width: isMobile ? '100%' : '42%',
        background: 'var(--cream)', color: '#111',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: isMobile ? '4rem 6vw 2rem' : '3rem 4vw 1rem 7vw',
        position: 'relative', overflowY: 'hidden',
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.7rem',
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: '#0070CC', marginBottom: '1rem',
          }}>
            <span style={{ width: 20, height: 1, background: '#0070CC', display: 'block' }} />
            02 — Portfolio
          </div>
          <h2 style={{
            fontFamily: 'Inter,sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem,3.5vw,3.2rem)',
            lineHeight: 1.05, letterSpacing: '-0.025em',
            marginBottom: '1.2rem',
          }}>
            Featured<br />
            <em style={{ fontStyle: 'italic', color: '#0070CC' }}>Projects</em>
          </h2>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '1rem', lineHeight: 1.8, color: '#555', maxWidth: 480 }}>
            Full-Stack Development · Hardware Engineering
          </p>
        </motion.div>
      </div>

      {/* Right panel */}
      <div style={{
        flex: 1,
        padding: isMobile ? '2rem 6vw 4rem' : '4rem 7vw 4rem 4vw',
        display: 'flex', flexDirection: 'column',
        overflowY: isMobile ? 'visible' : 'auto',
        maxHeight: isMobile ? 'none' : '100vh',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                display: 'flex', flexDirection: 'column', gap: '0.6rem',
                padding: '1.2rem 0',
                borderBottom: '1px solid rgba(75,191,255,0.08)',
                borderTop: i === 0 ? '1px solid rgba(75,191,255,0.08)' : 'none',
                /* Hardware projects get a distinct amber-tinted left border */
                borderLeft: p.hardware ? '2px solid rgba(245,158,11,0.4)' : '2px solid transparent',
                paddingLeft: p.hardware ? '0.8rem' : '0',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Row: number + title + tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: 'JetBrains Mono,monospace', fontSize: '0.85rem', fontWeight: 700,
                  color: p.hardware ? '#f59e0b' : 'var(--blue)',
                  textShadow: p.hardware ? '0 0 15px rgba(245,158,11,0.5)' : '0 0 15px rgba(75,191,255,0.6)',
                  flexShrink: 0,
                }}>{p.num}</span>
                {p.hardware && <FaMicrochip size={12} color="#f59e0b" style={{ flexShrink: 0, opacity: 0.7 }} />}
                <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 'clamp(0.85rem,1.4vw,1.15rem)', color: 'var(--cream)', flex: 1 }}>{p.title}</span>
                {p.tag && (
                  <span style={{
                    fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: p.hardware ? '#f59e0b' : '#6FEA6F',
                    background: p.hardware ? 'rgba(245,158,11,0.08)' : 'rgba(111,234,111,0.08)',
                    border: `1px solid ${p.hardware ? 'rgba(245,158,11,0.25)' : 'rgba(111,234,111,0.25)'}`,
                    padding: '0.2rem 0.55rem', borderRadius: 4,
                    boxShadow: p.hardware ? '0 0 10px rgba(245,158,11,0.12)' : '0 0 10px rgba(111,234,111,0.12)',
                    flexShrink: 0,
                  }}>{p.tag}</span>
                )}
              </div>

              {/* Description */}
              <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</div>

              {/* Tech + Links row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.tech.map((t, j) => (
                    <span key={j} style={{
                      fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem',
                      color: 'var(--muted)', border: `1px solid ${p.hardware ? 'rgba(245,158,11,0.15)' : 'rgba(75,191,255,0.12)'}`,
                      padding: '0.2rem 0.5rem', borderRadius: 3,
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  {p.hardware && !p.link && (
                    <span style={{
                      fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'rgba(245,158,11,0.6)', border: '1px solid rgba(245,158,11,0.15)',
                      padding: '0.38rem 0.7rem',
                    }}>Hardware Build</span>
                  )}
                  {p.link && (
                    <button onClick={() => window.open(p.link, '_blank')}
                      aria-label={`View ${p.title} live demo`}
                      style={{
                        background: 'none', border: '1px solid rgba(75,191,255,0.25)',
                        color: 'var(--blue)', padding: '0.38rem 0.7rem',
                        cursor: 'pointer', transition: 'all 0.2s',
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                      }}>
                      <FaExternalLinkAlt size={11} />
                      <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Live</span>
                    </button>
                  )}
                  {p.github && (
                    <button onClick={() => window.open(p.github, '_blank')}
                      aria-label={`View ${p.title} on GitHub`}
                      style={{
                        background: 'none', border: '1px solid rgba(255,255,255,0.1)',
                        color: 'var(--muted)', padding: '0.38rem 0.7rem',
                        cursor: 'pointer', transition: 'all 0.2s',
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                      }}>
                      <FaGithub size={13} />
                      <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>GitHub</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
