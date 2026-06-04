'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaFilePdf, FaChevronDown, FaChevronUp, FaMicrochip } from 'react-icons/fa'
import { useIsMobile } from '../../hooks/useIsMobile'

const projects: {
  num: string; title: string; desc: string; tech: string[];
  tag: string; link: string; github: string; hardware?: boolean;
  report: string;
  highlights: string[];
  architecture: string;
}[] = [
  {
    num: '01', title: 'PothChola',
    desc: 'Localized smart travel & cultural discovery — social posts, friend groups, shared itineraries, Gemini AI recommendations.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini API'],
    tag: 'Full-Stack · Dec 2025 – Feb 2026',
    link: 'https://poth-chola.vercel.app',
    github: 'https://github.com/mhstyles7/PothChola',
    report: '',
    highlights: [
      'AI-powered travel recommendations via Gemini API integration',
      'Real-time social features: posts, friend groups, shared itineraries',
      'Role-based dashboards for travelers and local guides',
      'Responsive design with mobile-first approach',
    ],
    architecture: 'MERN stack architecture — React frontend deployed on Vercel, Node.js/Express REST API with MongoDB Atlas. Gemini API handles NLP-based recommendation engine. JWT auth with role-based access control.',
  },
  {
    num: '02', title: 'Trippy 2.0',
    desc: 'Travel marketplace rebuilt solo — JWT auth, OCR-powered NID verification, role-based traveler/provider dashboards.',
    tech: ['MERN', 'JWT', 'OCR API', 'VoiceFlow'],
    tag: 'Full-Stack · Mar 2026 – May 2026',
    link: 'https://trippy-2-0.vercel.app/',
    github: 'https://github.com/mhstyles7/Trippy-2.0',
    report: '',
    highlights: [
      'OCR-powered NID verification for user identity validation',
      'VoiceFlow chatbot for automated customer support',
      'Dual-role dashboard system: Traveler & Service Provider',
      'Complete CRUD operations with real-time data sync',
    ],
    architecture: 'Full MERN stack — Express REST API with JWT-based authentication flow. OCR API integration for document verification. VoiceFlow SDK embedded for conversational AI. Deployed on Vercel (frontend) + Render (backend).',
  },
  {
    num: '03', title: 'Air Quality Monitor for Urban Homes',
    desc: 'Active indoor air monitoring using ESP32, MQ-series gas sensors (smoke/CO₂) and DHT11. Triggers exhaust fan via p-channel MOSFET and piezo buzzer on unsafe readings. Data logged to SD card and streamed via Wi-Fi.',
    tech: ['ESP32', 'MOSFET', 'I2C/SPI', 'Wi-Fi'],
    tag: 'Hardware · Dec 2025 – Jan 2026',
    link: '', github: '', hardware: true,
    report: '',
    highlights: [
      'Multi-sensor fusion: MQ-series (CO₂/smoke) + DHT11 (temp/humidity)',
      'Automated actuator response via p-channel MOSFET switching',
      'SD card data logging for offline analysis',
      'Wi-Fi streaming for remote monitoring dashboard',
    ],
    architecture: 'ESP32 microcontroller as central hub. I2C/SPI buses for sensor communication. p-channel MOSFET circuit for high-side switching of exhaust fan. Wi-Fi module streams sensor data to web dashboard. Piezo buzzer for audible alerts.',
  },
  {
    num: '04', title: 'Voltage Deviation Visualizer',
    desc: 'Analog circuit that quantizes voltage deviations from a simulated pressure sensor into discrete levels, visualised via a colour-coded LED array using op-amps and diodes.',
    tech: ['Op-Amps', 'Diodes', 'Analog', 'LEDs'],
    tag: 'Hardware · Mar 2024',
    link: '', github: '', hardware: true,
    report: '',
    highlights: [
      'Op-amp comparator cascade for multi-level voltage quantization',
      'Color-coded LED bar graph for intuitive visual feedback',
      'Simulated pressure sensor interface with calibration',
      'Pure analog design — no microcontroller required',
    ],
    architecture: 'Signal conditioning stage with voltage divider and buffer. Comparator cascade using LM741 op-amps with precision reference voltages. Diode-based isolation for independent LED activation. Power supply regulation for stable operation.',
  },
]

export default function Work() {
  const isMobile = useIsMobile()
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  return (
    <section style={{
      width: isMobile ? '100%' : '100vw',
      height: isMobile ? 'auto' : '100vh',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      overflowY: isMobile ? 'visible' : 'auto',
      overflowX: 'hidden',
      position: 'relative',
      background: `radial-gradient(circle at 85% 20%, var(--blue-glow) 0%, transparent 60%)`,
    }}>
      {/* Header */}
      <div style={{
        padding: isMobile ? '4rem 6vw 1.5rem' : '5rem 5vw 1rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        flexWrap: 'wrap', gap: '0.5rem',
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.7rem',
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.8rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--blue)', marginBottom: '0.6rem',
          }}>
            <span style={{ width: 24, height: 2, background: 'var(--blue)', display: 'block' }} />
            02 — Portfolio
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk','Inter',sans-serif", fontWeight: 800,
            fontSize: 'clamp(1.8rem,3.5vw,2.8rem)',
            lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--text)',
          }}>
            Featured <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Projects</em>
          </h2>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--muted)', marginTop: '0.4rem' }}>
            Full-Stack Development · Hardware Engineering
          </p>
        </motion.div>
      </div>

      {/* Project Cards Grid */}
      <div style={{
        flex: 1,
        padding: isMobile ? '0 6vw 4rem' : '0 5vw 2rem',
        overflowY: isMobile ? 'visible' : 'auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gridAutoRows: 'max-content',
        gap: '0.85rem',
        alignContent: 'start',
      }}>
        {projects.map((p, i) => {
          const isExpanded = expandedIdx === i
          return (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                display: 'flex', flexDirection: 'column',
                padding: '1.3rem 1.5rem',
                border: '1px solid var(--border)',
                borderRadius: 12,
                background: 'var(--card-bg)',
                position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = p.hardware ? 'var(--amber)' : 'var(--blue)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = p.hardware
                  ? '0 4px 20px rgba(245,158,11,0.08)' : '0 4px 20px var(--blue-glow)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              {/* Top: number + title + tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                <span style={{
                  fontFamily: 'JetBrains Mono,monospace', fontSize: '0.9rem', fontWeight: 700,
                  color: p.hardware ? 'var(--amber)' : 'var(--blue)',
                  flexShrink: 0,
                }}>{p.num}</span>
                {p.hardware && <FaMicrochip size={14} color="var(--amber)" style={{ flexShrink: 0, opacity: 0.8 }} />}
                <span style={{
                  fontFamily: 'Inter,sans-serif', fontWeight: 700,
                  fontSize: 'clamp(0.95rem,1.4vw,1.15rem)',
                  color: 'var(--text)', flex: 1,
                }}>{p.title}</span>
                {p.tag && (
                  <span style={{
                    fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: p.hardware ? 'var(--amber)' : 'var(--green)',
                    background: p.hardware ? 'rgba(245,158,11,0.08)' : 'rgba(111,234,111,0.08)',
                    border: `1px solid ${p.hardware ? 'rgba(245,158,11,0.25)' : 'rgba(111,234,111,0.25)'}`,
                    padding: '0.22rem 0.6rem', borderRadius: 6,
                    flexShrink: 0,
                  }}>{p.tag}</span>
                )}
              </div>

              {/* Description */}
              <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.7rem' }}>{p.desc}</div>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.9rem' }}>
                {p.tech.map((t, j) => (
                  <span key={j} style={{
                    fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem',
                    color: 'var(--blue)', background: 'var(--blue-glow)',
                    border: '1px solid var(--border-strong)',
                    padding: '0.25rem 0.6rem', borderRadius: 6,
                    fontWeight: 600, letterSpacing: '0.05em'
                  }}>{t}</span>
                ))}
              </div>

              {/* Expandable Details */}
              <button
                onClick={() => setExpandedIdx(isExpanded ? null : i)}
                style={{
                  background: 'none', border: 'none', color: 'var(--blue)',
                  fontFamily: 'JetBrains Mono,monospace', fontSize: '0.7rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  cursor: 'pointer', display: 'flex', alignItems: 'center',
                  gap: '0.4rem', padding: '0.3rem 0', marginBottom: '0.5rem',
                  transition: 'color 0.2s',
                }}
              >
                {isExpanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                {isExpanded ? 'Hide Details' : 'System Design & Highlights'}
              </button>

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '0.7rem', marginBottom: '0.5rem',
                  }}
                >
                  {/* Architecture */}
                  <div style={{ marginBottom: '0.6rem' }}>
                    <div style={{
                      fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'var(--blue)', marginBottom: '0.3rem', fontWeight: 600,
                    }}>System Architecture</div>
                    <div style={{
                      fontFamily: 'Inter,sans-serif', fontSize: '0.85rem',
                      color: 'var(--muted)', lineHeight: 1.7,
                    }}>{p.architecture}</div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <div style={{
                      fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'var(--blue)', marginBottom: '0.3rem', fontWeight: 600,
                    }}>Key Highlights</div>
                    <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                      {p.highlights.map((h, j) => (
                        <li key={j} style={{
                          fontFamily: 'Inter,sans-serif', fontSize: '0.85rem',
                          color: 'var(--muted)', lineHeight: 1.8,
                        }}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', marginTop: 'auto' }}>
                {p.hardware && !p.link && (
                  <span style={{
                    fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'var(--amber)', border: '1px solid rgba(245,158,11,0.2)',
                    padding: '0.38rem 0.7rem', borderRadius: 6,
                  }}>Hardware Build</span>
                )}
                {p.link && (
                  <button onClick={() => window.open(p.link, '_blank')}
                    aria-label={`View ${p.title} live demo`}
                    style={{
                      background: 'none', border: '1px solid var(--border-strong)',
                      color: 'var(--blue)', padding: '0.38rem 0.7rem',
                      cursor: 'pointer', transition: 'all 0.2s', borderRadius: 6,
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                    }}>
                    <FaExternalLinkAlt size={11} />
                    <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Live</span>
                  </button>
                )}
                {p.github && (
                  <button onClick={() => window.open(p.github, '_blank')}
                    aria-label={`View ${p.title} on GitHub`}
                    style={{
                      background: 'none', border: '1px solid var(--border)',
                      color: 'var(--muted)', padding: '0.38rem 0.7rem',
                      cursor: 'pointer', transition: 'all 0.2s', borderRadius: 6,
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                    }}>
                    <FaGithub size={13} />
                    <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>GitHub</span>
                  </button>
                )}
                {p.report && (
                  <button onClick={() => window.open(p.report, '_blank')}
                    aria-label={`View ${p.title} report PDF`}
                    style={{
                      background: 'none', border: '1px solid var(--border)',
                      color: 'var(--muted)', padding: '0.38rem 0.7rem',
                      cursor: 'pointer', transition: 'all 0.2s', borderRadius: 6,
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                    }}>
                    <FaFilePdf size={12} />
                    <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Report</span>
                  </button>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
