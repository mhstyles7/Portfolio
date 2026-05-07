'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useIsMobile } from '../../hooks/useIsMobile'

const projects: { num:string; title:string; desc:string; tech:string[]; tag:string; link:string; github:string }[] = [
  {
    num: '01', title: 'PothChola: A Localized Smart Travel and Cultural Discovery Platform',
    desc: 'Localized smart travel & cultural discovery — social posts, friend groups, shared itineraries, Gemini AI recommendations.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini API'],
    tag: 'Full-Stack · Dec 2025 - Feb 2026',
    link: 'https://poth-chola.vercel.app',
    github: 'https://github.com/mhstyles7/PothChola',
  },
  {
    num: '02', title: 'Trippy 2.0 : Travel Marketplace and Social Platform',
    desc: 'Travel marketplace rebuilt solo — JWT auth, OCR-powered NID verification, role-based traveler/provider dashboards.',
    tech: ['MERN', 'JWT', 'OCR API', 'VoiceFlow'],
    tag: 'Full-Stack · Mar 2026 - May 2026',
    link: 'https://trippy-2-0.vercel.app/',
    github: 'https://github.com/mhstyles7/Trippy-2.0',
  },
  {
    num: '03', title: 'Air Quality Monitor for Urban Homes',
    desc: 'Active indoor air monitoring system using ESP32, MQ-series gas sensors (smoke/CO₂) and DHT11 (temperature). Triggers exhaust fan via p-channel MOSFET and piezo buzzer on unsafe readings. Data logged to SD card and streamed via Wi-Fi.',
    tech: ['ESP32', 'MOSFET', 'I2C/SPI', 'Wi-Fi'],
    tag: 'Hardware · Dec 2025 – Jan 2026',
    link: '', github: '',
  },
  {
    num: '04', title: 'Voltage Deviation Visualizer',
    desc: 'Analog circuit that quantizes voltage deviations from a simulated pressure sensor into discrete levels, visualised via a colour-coded LED array using op-amps and diodes.',
    tech: ['Op-Amps', 'Diodes', 'Analog', 'LEDs'],
    tag: 'Hardware · Mar 2024',
    link: '', github: '',
  },
]

export default function Work() {
  const isMobile = useIsMobile()

  return (
    <section style={{
      width: isMobile ? '100%' : '100vw',
      height: isMobile ? 'auto' : '100vh',
      flexShrink: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
      padding: isMobile ? '4rem 6vw 3rem' : '5.5rem 7vw 3rem',
      overflowY: 'auto',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '220px 1fr',
        gap: isMobile ? '1.5rem' : '4vw',
        alignItems: 'start', width: '100%',
      }}>
        {/* Left label */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span style={{
            fontFamily: 'Inter,sans-serif', fontWeight: 800,
            fontSize: isMobile ? '4rem' : 'clamp(5rem,9vw,8rem)', lineHeight: 1,
            color: 'rgba(75,191,255,0.05)', display: 'block', marginBottom: '-0.5rem',
          }}>02</span>
          <h2 style={{
            fontFamily: 'Inter,sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem,3.5vw,3.2rem)',
            lineHeight: 1.05, letterSpacing: '-0.025em',
          }}>Featured<br /><em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Projects</em></h2>
          <p style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '1rem' }}>
            Full-Stack · Hardware
          </p>
        </motion.div>

        {/* Project list */}
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
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Row: number + title + tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: 'JetBrains Mono,monospace', fontSize: '0.85rem', fontWeight: 700,
                  color: 'var(--blue)', textShadow: '0 0 15px rgba(75,191,255,0.6)', flexShrink: 0,
                }}>{p.num}</span>
                <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 'clamp(0.82rem,1.4vw,1.2rem)', color: 'var(--cream)', flex: 1 }}>{p.title}</span>
                {p.tag && (
                  <span style={{
                    fontFamily: 'JetBrains Mono,monospace', fontSize: '0.42rem',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#6FEA6F', background: 'rgba(111,234,111,0.08)',
                    border: '1px solid rgba(111,234,111,0.25)',
                    padding: '0.2rem 0.5rem', borderRadius: 4,
                    boxShadow: '0 0 10px rgba(111,234,111,0.15)', flexShrink: 0,
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
                      fontFamily: 'JetBrains Mono,monospace', fontSize: '0.47rem',
                      color: 'var(--muted)', border: '1px solid rgba(75,191,255,0.12)',
                      padding: '0.15rem 0.45rem', borderRadius: 3,
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {p.link && (
                    <button onClick={() => window.open(p.link, '_blank')} style={{
                      background: 'none', border: '1px solid rgba(75,191,255,0.25)',
                      color: 'var(--blue)', padding: '0.38rem 0.7rem',
                      cursor: 'pointer', transition: 'all 0.2s',
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                    }}>
                      <FaExternalLinkAlt size={11} />
                      <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.48rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Live</span>
                    </button>
                  )}
                  {p.github && (
                    <button onClick={() => window.open(p.github, '_blank')} style={{
                      background: 'none', border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--muted)', padding: '0.38rem 0.7rem',
                      cursor: 'pointer', transition: 'all 0.2s',
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                    }}>
                      <FaGithub size={13} />
                      <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.48rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>GitHub</span>
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
