'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

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
    desc: 'Active indoor air monitoring system using ESP32, MQ-series gas sensors (smoke/CO₂) and DHT11 (temperature). Triggers an exhaust fan via p-channel MOSFET and a piezo buzzer on unsafe readings. Data displayed on 16×2 LCD, logged to SD card, and streamed to cloud via Wi-Fi for mobile viewing.',
    tech: ['ESP32', 'C', 'MOSFET', 'I2C/SPI', 'Wi-Fi'],
    tag: 'Hardware · Dec 2025 – Jan 2026',
    link: '', github: '',
  },
  {
    num: '04', title: 'Voltage Deviation Visualizer',
    desc: 'Analog circuit that takes a time-varying input voltage (emulating a pressure sensor output), quantizes deviations into discrete levels, and visualises them via a colour-coded LED array using op-amps and diodes — making pressure status instantly readable.',
    tech: ['Op-Amps', 'Diodes', 'Analog', 'LEDs'],
    tag: 'Hardware · Mar 2024',
    link: '', github: '',
  },
]


export default function Work() {
  return (
    <section style={{
      width: '100vw', height: '100vh', flexShrink: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
      padding: '5.5rem 7vw 3rem', overflowY: 'auto',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '4vw', alignItems: 'start', width: '100%' }}>
        {/* Left label */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span style={{
            fontFamily: 'Inter,sans-serif', fontWeight: 800,
            fontSize: 'clamp(5rem,9vw,8rem)', lineHeight: 1,
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
                display: 'grid', gridTemplateColumns: '36px 1fr auto auto',
                alignItems: 'center', gap: '1.2rem',
                padding: '1.4rem 0',
                borderBottom: '1px solid rgba(75,191,255,0.08)',
                borderTop: i === 0 ? '1px solid rgba(75,191,255,0.08)' : 'none',
                position: 'relative', overflow: 'hidden',
                transition: 'padding-left 0.35s',
              }}
              data-cursor={p.link ? 'View →' : ''}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.paddingLeft = '0.8rem'
                const bg = e.currentTarget.querySelector('.hov-bg') as HTMLElement
                if (bg) bg.style.transform = 'translateX(0)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.paddingLeft = '0'
                const bg = e.currentTarget.querySelector('.hov-bg') as HTMLElement
                if (bg) bg.style.transform = 'translateX(-100%)'
              }}
            >
              <div className="hov-bg" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg,rgba(75,191,255,0.04),transparent)',
                transform: 'translateX(-100%)', transition: 'transform 0.5s', pointerEvents: 'none',
              }} />
              <span style={{
                fontFamily: 'JetBrains Mono,monospace', fontSize: '0.85rem', fontWeight: 700,
                color: 'var(--blue)', textShadow: '0 0 15px rgba(75,191,255,0.6)',
                marginRight: '0.5rem'
              }}>{p.num}</span>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 'clamp(0.9rem,1.6vw,1.4rem)', color: 'var(--cream)' }}>{p.title}</div>
                  {p.tag && (
                    <span style={{
                      fontFamily: 'JetBrains Mono,monospace', fontSize: '0.45rem',
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: '#6FEA6F', background: 'rgba(111,234,111,0.08)',
                      border: '1px solid rgba(111,234,111,0.25)',
                      padding: '0.2rem 0.5rem', borderRadius: 4,
                      boxShadow: '0 0 10px rgba(111,234,111,0.15)',
                      flexShrink: 0
                    }}>{p.tag}</span>
                  )}
                </div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.68rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</div>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.52rem', color: 'var(--muted)', lineHeight: 2, textAlign: 'right', flexShrink: 0 }}>
                {p.tech.map((t, j) => <div key={j}>{t}</div>)}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', alignItems: 'center', flexShrink: 0 }}>
                {p.link && (
                  <button onClick={() => window.open(p.link, '_blank')} style={{
                    background: 'none', border: '1px solid rgba(75,191,255,0.25)',
                    color: 'var(--blue)', padding: '0.38rem 0.7rem',
                    cursor: 'none', transition: 'all 0.2s',
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
                    cursor: 'none', transition: 'all 0.2s',
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                  }}>
                    <FaGithub size={13} />
                    <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.48rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>GitHub</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
