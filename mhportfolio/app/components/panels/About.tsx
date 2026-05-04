'use client'
import { motion } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'

const edu = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    inst: 'BRAC University',
    year: '2021 – 2026',
    grade: 'CGPA 3.61',
    note: 'Thesis published in Elsevier ICT Express',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    inst: 'Mirpur Cantonment Public School & College',
    year: '2020',
    grade: 'GPA 5.00',
    note: 'Science Group',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    inst: 'Greenview High School and College',
    year: '2018',
    grade: 'GPA 5.00',
    note: 'Science Group',
  },
]

const experience = [
  {
    role: 'Social Media Manager',
    org: 'Bangladesh Freight Forwarders Association (BAFFA)',
    duration: '6 Months',
    points: [
      'Managed digital content strategy and communications for executive leadership.',
      'Coordinated stakeholder engagement campaigns across platforms.',
      'Developed strong communication, leadership, and cross-functional collaboration skills.',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } }),
}

export default function About() {
  const isMobile = useIsMobile()

  return (
    <section style={{
      width: isMobile ? '100%' : '100vw',
      height: isMobile ? 'auto' : '100vh',
      flexShrink: 0,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      overflow: isMobile ? 'visible' : 'hidden',
      position: 'relative',
    }}>
      {/* Left — Bio */}
      <div style={{
        width: isMobile ? '100%' : '42%',
        background: 'var(--cream)', color: '#111',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: isMobile ? '4rem 6vw 2.5rem' : '5rem 4vw 3rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: '-3rem', left: '-1rem',
          fontFamily: 'Inter,sans-serif', fontWeight: 800,
          fontSize: '16rem', lineHeight: 1, color: 'rgba(0,0,0,0.04)',
          pointerEvents: 'none', userSelect: 'none', zIndex: 0,
        }}>03</div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} style={{ position: 'relative', zIndex: 1 }}>
          <motion.div custom={0} variants={fadeUp}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.7rem',
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--blue)', marginBottom: '1rem',
            }}>
              <span style={{ width: 20, height: 1, background: 'var(--blue)', display: 'block' }} />
              About Me
            </div>
            <h2 style={{
              fontFamily: 'Inter,sans-serif', fontWeight: 800,
              fontSize: 'clamp(2rem,3.5vw,3rem)',
              lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.2rem',
            }}>
              Engineer.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Researcher.</em>
            </h2>
          </motion.div>

          <motion.div custom={1} variants={fadeUp} style={{ fontSize: '0.8rem', lineHeight: 1.85, color: '#444', marginBottom: '1rem' }}>
            CSE graduate with a rare blend of <strong style={{ color: '#111' }}>production-grade full-stack development</strong>, frontier ML research, and hardware-integrated systems.
          </motion.div>

          <motion.div custom={2} variants={fadeUp} style={{ fontSize: '0.8rem', lineHeight: 1.85, color: '#444', marginBottom: '1.5rem' }}>
            My thesis <em style={{ color: '#111' }}>"A Cross-Dataset based Zero-Day Intrusion Detection System by Integrating Siamese Network and Reinforcement Learning"</em> has been{' '}
            <strong style={{ color: 'var(--blue)' }}>published in ICT Express</strong> (Elsevier, CiteScore: 10.8, IF: 4.2).
          </motion.div>

          <motion.div custom={3} variants={fadeUp}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['MERN Stack', 'ML / AI', 'Cybersecurity', 'IoT', 'Backend', 'Research'].map(t => (
                <span key={t} style={{
                  fontFamily: 'JetBrains Mono,monospace', fontSize: '0.48rem',
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  padding: '0.28rem 0.7rem', border: '1px solid rgba(0,0,0,0.15)',
                  color: '#555', cursor: 'default',
                }}>{t}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right — Education + Experience */}
      <div style={{
        flex: 1, background: 'var(--bg)',
        display: 'flex', flexDirection: 'column',
        padding: isMobile ? '3rem 6vw 4rem' : '5rem 4vw 3rem',
        overflowY: 'auto', gap: '2rem',
      }}>
        {/* Education */}
        <div>
          <div style={{
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--blue)', marginBottom: '1.2rem',
            display: 'flex', alignItems: 'center', gap: '0.7rem',
          }}>
            <span style={{ width: 20, height: 1, background: 'var(--blue)', display: 'block' }} />
            Education
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {edu.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                style={{ display: 'flex', gap: '1.2rem', paddingBottom: '1.4rem', paddingLeft: '0.2rem', position: 'relative' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 14 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: i === 0 ? 'var(--blue)' : 'rgba(75,191,255,0.3)',
                    border: '2px solid var(--blue)', flexShrink: 0,
                    boxShadow: i === 0 ? '0 0 12px rgba(75,191,255,0.5)' : 'none',
                    marginTop: 4,
                  }} />
                  {i < edu.length - 1 && (
                    <div style={{ flex: 1, width: 1, background: 'rgba(75,191,255,0.12)', minHeight: 36, marginTop: 4 }} />
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: '0.82rem', color: 'var(--cream)', marginBottom: '0.2rem' }}>{e.degree}</div>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.75rem', color: 'var(--blue)', marginBottom: '0.2rem' }}>{e.inst}</div>
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.2rem' }}>
                    <span>{e.year}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--muted)' }} />
                    <span style={{ color: '#6FEA6F' }}>{e.grade}</span>
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.46rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(75,191,255,0.5)' }}>{e.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience & Roles */}
        <div>
          <div style={{
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--blue)', marginBottom: '1rem',
            display: 'flex', alignItems: 'center', gap: '0.7rem',
          }}>
            <span style={{ width: 20, height: 1, background: 'var(--blue)', display: 'block' }} />
            Experience &amp; Roles
          </div>

          {experience.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                border: '1px solid rgba(75,191,255,0.12)',
                background: 'rgba(75,191,255,0.02)',
                padding: '1.2rem', position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: 'var(--blue)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.7rem' }}>
                <div>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '0.85rem', color: 'var(--cream)', marginBottom: '0.15rem' }}>{ex.role}</div>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.72rem', color: 'var(--blue)' }}>{ex.org}</div>
                </div>
                <span style={{
                  fontFamily: 'JetBrains Mono,monospace', fontSize: '0.48rem',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '0.22rem 0.65rem', border: '1px solid rgba(75,191,255,0.2)',
                  color: 'var(--muted)',
                }}>{ex.duration}</span>
              </div>
              <ul style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {ex.points.map((p, j) => (
                  <li key={j} style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.73rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
