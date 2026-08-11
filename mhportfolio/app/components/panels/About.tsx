'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const edu = [
  { degree: 'B.Sc. in Computer Science & Engineering', inst: 'BRAC University', year: '2021 – 2026', grade: 'CGPA 3.61/4.00', note: 'Thesis published in Elsevier ICT Express', logo: '/bracu_logo.svg' },
  { degree: 'Higher Secondary Certificate (HSC)', inst: 'Mirpur Cantonment Public School & College', year: '2020', grade: 'GPA 5.00/5.00', note: 'Science Group', logo: '/mcpsc_logo.svg' },
  { degree: 'Secondary School Certificate (SSC)', inst: 'Greenview High School and College', year: '2018', grade: 'GPA 5.00/5.00', note: 'Science Group', logo: '/greenview_logo.svg' },
]

const experience = [
  { role: 'Fans Operations Engineer', org: 'Ismartu Technology BD Limited — R&D Center', duration: 'Aug 2026 – Present', logo: '/ismartu.svg', points: ['Software Testing Department · Full-time'] },
  { role: 'Social Media Manager', org: 'Bangladesh Freight Forwarders Association (BAFFA)', duration: '6 Months', logo: '/Baffa.svg', points: ['Managed digital content strategy and communications for executive leadership.', 'Coordinated stakeholder engagement campaigns across platforms.', 'Developed strong communication, leadership, and cross-functional collaboration skills.'] },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } }),
}

export default function About() {
  return (
    <section id="about" style={{
      width: '100%',
      padding: 'clamp(4rem, 8vh, 7rem) clamp(1.5rem, 5vw, 3rem)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem',
      position: 'relative',
      background: `radial-gradient(circle at 50% 50%, var(--blue-glow) 0%, transparent 60%)`,
    }}>
      {/* Section Header */}
      <div style={{ maxWidth: 1200, width: '100%' }}>
        <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <span style={{ width: 20, height: 1, background: 'var(--blue)', display: 'block' }} /> 03 — Background
        </div>
        <h2 style={{ fontFamily: 'Inter,sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 0.95, letterSpacing: '-0.01em', color: 'var(--text)' }}>
          My <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Journey.</em>
        </h2>
      </div>

      <div style={{
        maxWidth: 1200, width: '100%',
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
        borderRadius: 24, border: '1px solid var(--border)', overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)',
      }}>
      {/* Left — Experience */}
      <div style={{
        flex: '1 1 400px', minWidth: 320,
        background: 'var(--surface)', color: 'var(--text)',
        display: 'flex', flexDirection: 'column',
        padding: 'clamp(3rem, 6vh, 5rem) clamp(1.5rem, 4vw, 4rem)',
        position: 'relative', overflow: 'hidden', gap: '2rem'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <span style={{ width: 20, height: 1, background: 'var(--blue)', display: 'block' }} /> Experience &amp; Leadership
          </div>
          {experience.map((ex, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ border: '1px solid var(--border)', background: 'var(--blue-glow)', padding: '1.2rem', position: 'relative', overflow: 'hidden', display: 'flex', gap: '1.2rem', borderRadius: 10 }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: 'var(--blue)' }} />
              {ex.logo && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 48, marginTop: '0.2rem' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
                    background: i === 0 ? '#000' : '#ffffff',
                    border: i === 0 ? '2px solid var(--blue)' : '1px solid var(--border)',
                    boxShadow: i === 0 ? '0 0 12px var(--blue-glow)' : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden', position: 'relative',
                  }}>
                    <Image src={ex.logo} alt={ex.org} fill style={{ objectFit: 'contain', padding: '6px' }} />
                  </div>
                </div>
              )}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.7rem' }}>
                  <div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '0.15rem' }}>{ex.role}</div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', color: 'var(--blue)' }}>{ex.org}</div>
                  </div>
                  <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.35rem 0.8rem', border: '1px solid var(--blue)', color: 'var(--blue)', background: 'var(--blue-glow)', borderRadius: 6, fontWeight: 700 }}>{ex.duration}</span>
                </div>
                <ul style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', margin: 0 }}>
                  {ex.points.map((p, j) => <li key={j} style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.7 }}>{p}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Right — Education */}
      <div style={{
        flex: '1 1 400px', minWidth: 0,
        background: 'var(--card-bg)',
        display: 'flex', flexDirection: 'column',
        padding: 'clamp(3rem, 6vh, 5rem) clamp(1.5rem, 4vw, 4rem)',
        position: 'relative',
      }}>
        <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <span style={{ width: 20, height: 1, background: 'var(--blue)', display: 'block' }} /> Education
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {edu.map((e, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} style={{ display: 'flex', gap: '1.2rem', paddingBottom: '1.4rem', paddingLeft: '0.2rem', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 44 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', flexShrink: 0, background: '#ffffff', border: `1px solid ${i === 0 ? 'var(--blue)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: i === 0 ? '0 0 14px var(--blue-glow)' : 'none', overflow: 'hidden', position: 'relative' }}>
                  <Image src={e.logo} alt={e.inst} fill style={{ objectFit: 'contain', padding: '6px' }} />
                </div>
                {i < edu.length - 1 && <div style={{ flex: 1, width: 1, background: 'var(--border)', minHeight: 28, marginTop: 4 }} />}
              </div>
              <div style={{ flex: 1, paddingTop: '0.3rem' }}>
                <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: '1rem', color: 'var(--text)', marginBottom: '0.2rem' }}>{e.degree}</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', color: 'var(--blue)', marginBottom: '0.2rem' }}>{e.inst}</div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '0.2rem' }}>
                  <span>{e.year}</span><span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--muted)' }} /><span style={{ color: 'var(--green)' }}>{e.grade}</span>
                </div>
                <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', opacity: 0.7 }}>{e.note}</div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
