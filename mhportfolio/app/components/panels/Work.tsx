'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaFilePdf, FaChevronDown, FaChevronUp, FaMicrochip, FaYoutube } from 'react-icons/fa'

const projects: {
  num: string; title: string; desc: string; tech: string[];
  tag: string; link: string; github: string; hardware?: boolean;
  report: string;
  highlights: string[];
  architecture: string;
  image?: string;
}[] = [
  {
    num: '01', title: 'CollabBD — Bangladesh\'s Talent Network',
    desc: 'Full-stack talent marketplace connecting verified students, freelancers, and professionals with clients. Features local talent discovery, emergency task posting, and real-time messaging.',
    tech: ['Next.js 16', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.IO'],
    tag: 'Full-Stack · Apr 2026 – Present',
    link: '',
    github: '',
    report: '',
    image: '/CollabBD.png',
    highlights: [
      'Verified trust system with admin-reviewed student ID verification',
      'Geospatial talent discovery with interactive map view',
      'Emergency task posting with real-time socket notifications',
      'Real-time 1-on-1 messaging & community rooms via Socket.IO',
      'Proposal system for workers to bid on jobs with custom budgets',
      'Enterprise-grade security: rate limiting, NoSQL injection protection, Helmet headers, JWT auth'
    ],
    architecture: 'Full-stack monorepo — Next.js 16 frontend, Node.js/Express REST API with MongoDB. Real-time communication via Socket.IO. Zod for schema validation and Multer for file uploads. Admin dashboard for moderation.',
  },
  {
    num: '02', title: 'Trippy 2.0',
    desc: 'Travel marketplace rebuilt solo — JWT auth, OCR-powered NID verification, role-based traveler/provider dashboards.',
    tech: ['MERN', 'JWT', 'OCR API', 'VoiceFlow'],
    tag: 'Full-Stack · Mar 2026 – May 2026',
    link: 'https://trippy-2-0.vercel.app/',
    github: 'https://github.com/mhstyles7/Trippy-2.0',
    report: '',
    image: '/Trippy%202.0.png',
    highlights: [
      'OCR-powered NID verification for user identity validation',
      'VoiceFlow chatbot for automated customer support',
      'Dual-role dashboard system: Traveler & Service Provider',
      'Complete CRUD operations with real-time data sync',
    ],
    architecture: 'Full MERN stack — Express REST API with JWT-based authentication flow. OCR API integration for document verification. VoiceFlow SDK embedded for conversational AI. Deployed on Vercel (frontend) + Render (backend).',
  },
  {
    num: '03', title: 'PothChola',
    desc: 'Localized smart travel & cultural discovery — social posts, friend groups, shared itineraries, Gemini AI recommendations.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini API'],
    tag: 'Full-Stack · Dec 2025 – Feb 2026',
    link: 'https://poth-chola.vercel.app',
    github: 'https://github.com/mhstyles7/PothChola',
    report: '',
    image: '/PothChola.png',
    highlights: [
      'AI-powered travel recommendations via Gemini API integration',
      'Real-time social features: posts, friend groups, shared itineraries',
      'Role-based dashboards for travelers and local guides',
      'Responsive design with mobile-first approach',
    ],
    architecture: 'MERN stack architecture — React frontend deployed on Vercel, Node.js/Express REST API with MongoDB Atlas. Gemini API handles NLP-based recommendation engine. JWT auth with role-based access control.',
  },
  {
    num: '04', title: 'Air Quality Monitor for Urban Homes',
    desc: 'Active indoor air monitoring using ESP32, MQ-series gas sensors (smoke/CO₂) and DHT11. Triggers exhaust fan via p-channel MOSFET and piezo buzzer on unsafe readings. Data logged to SD card and streamed via Wi-Fi.',
    tech: ['ESP32', 'MOSFET', 'I2C/SPI', 'Wi-Fi'],
    tag: 'Hardware · Dec 2025 – Jan 2026',
    link: 'https://youtube.com/shorts/9QiRM2_Dl7w?si=IccLwjJQwS6G8Ybt', github: '', hardware: true,
    report: '',
    image: 'https://img.youtube.com/vi/9QiRM2_Dl7w/hqdefault.jpg',
    highlights: [
      'Multi-sensor fusion: MQ-series (CO₂/smoke) + DHT11 (temp/humidity)',
      'Automated actuator response via p-channel MOSFET switching',
      'SD card data logging for offline analysis',
      'Wi-Fi streaming for remote monitoring dashboard',
    ],
    architecture: 'ESP32 microcontroller as central hub. I2C/SPI buses for sensor communication. p-channel MOSFET circuit for high-side switching of exhaust fan. Wi-Fi module streams sensor data to web dashboard. Piezo buzzer for audible alerts.',
  },
  {
    num: '05', title: 'Voltage Deviation Visualizer',
    desc: 'Analog circuit that quantizes voltage deviations from a simulated pressure sensor into discrete levels, visualised via a colour-coded LED array using op-amps and diodes.',
    tech: ['Op-Amps', 'Diodes', 'Analog', 'LEDs'],
    tag: 'Hardware · Mar 2024',
    link: 'https://youtube.com/shorts/Ab4WL24I230?si=ecJ2Zvk_cAMfGCUN', github: '', hardware: true,
    report: '',
    image: 'https://img.youtube.com/vi/Ab4WL24I230/hqdefault.jpg',
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
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  return (
    <section id="work" style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      padding: 'clamp(5rem, 8vh, 7rem) clamp(1.5rem, 5vw, 5rem) clamp(2rem, 4vh, 4rem)',
      background: `radial-gradient(circle at 85% 20%, var(--blue-glow) 0%, transparent 60%)`,
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem',
        maxWidth: 1200, width: '100%', margin: '0 auto 2rem',
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
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
        gap: '1rem',
        maxWidth: 1200, width: '100%', margin: '0 auto',
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
              {/* Thumbnail Image */}
              {p.image && (
                <div style={{
                  width: '100%', aspectRatio: '16/9', marginBottom: '1rem',
                  borderRadius: '8px', overflow: 'hidden',
                  background: 'var(--card-bg-hover)',
                  border: '1px solid var(--border)',
                  flexShrink: 0,
                }}>
                  <img src={p.image} alt={p.title} style={{
                    width: '100%', height: '100%', objectFit: 'cover'
                  }} />
                </div>
              )}

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
                    {p.link.includes('youtube') ? <FaYoutube size={13} /> : <FaExternalLinkAlt size={11} />}
                    <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {p.link.includes('youtube') ? 'YouTube' : 'Live'}
                    </span>
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
