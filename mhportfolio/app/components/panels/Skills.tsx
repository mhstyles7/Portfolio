'use client'
import { motion } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'

type SkillLevel = 'Production' | 'Research Grade' | 'Research' | 'Shipped' | 'Daily Use' | 'Published'

const skills: { icon: string; name: string; items: string; level: SkillLevel; pct: number }[] = [
  { icon: '⬡', name: 'Frontend',    items: 'React.js · HTML5 · CSS3\nJavaScript ES6+',                   level: 'Production',    pct: 88 },
  { icon: '◈', name: 'Backend',     items: 'Node.js · Express\nMongoDB · SQL · REST',                     level: 'Production',    pct: 85 },
  { icon: '◉', name: 'ML / AI',     items: 'Python · TensorFlow\nPyTorch · Scikit-learn\nGemini API',      level: 'Research Grade', pct: 78 },
  { icon: '◎', name: 'Security',    items: 'Wireshark\nIntrusion Detection\nNetwork Analysis',             level: 'Research',      pct: 70 },
  { icon: '⬟', name: 'IoT',         items: 'ESP32 · C\nSensor Networks\nEmbedded Systems',                 level: 'Shipped',       pct: 72 },
  { icon: '◇', name: 'Auth & APIs', items: 'JWT · OCR\nOAuth · REST APIs\nMVC Architecture',               level: 'Production',    pct: 83 },
  { icon: '▣', name: 'DevOps',      items: 'Git · GitHub\nVercel · Render\nLinux · Postman',               level: 'Daily Use',     pct: 80 },
  { icon: '◆', name: 'Research',    items: 'Academic Writing\nData Analysis\nElsevier ICT Express',        level: 'Published',     pct: 82 },
]

const levelColors: Record<SkillLevel, string> = {
  'Production':    'var(--blue)',
  'Research Grade':'#a78bfa',
  'Research':      '#f59e0b',
  'Shipped':       '#6FEA6F',
  'Daily Use':     'var(--blue)',
  'Published':     '#6FEA6F',
}

export default function Skills() {
  const isMobile = useIsMobile()

  return (
    <section style={{
      width: isMobile ? '100%' : '100vw',
      height: isMobile ? 'auto' : '100vh',
      flexShrink: 0,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: isMobile ? '4rem 6vw 3rem' : '5rem 6vw 2rem',
      overflowY: 'auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,3.4rem)', lineHeight: 1, letterSpacing: '-0.025em' }}
          >
            Craft &amp;<br /><em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Expertise</em>
          </motion.h2>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.48rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(75,191,255,0.4)', marginTop: '0.5rem' }}>
            % = self-assessed proficiency
          </div>
        </div>
        <motion.span
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.52rem', letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}
        >04 — 08 domains</motion.span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
        gap: 1, background: 'rgba(75,191,255,0.06)',
        border: '1px solid rgba(75,191,255,0.08)',
      }}>
        {skills.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            style={{
              background: 'var(--bg)', padding: isMobile ? '1rem' : '1.2rem',
              display: 'flex', flexDirection: 'column', gap: '0.5rem',
              minHeight: isMobile ? 110 : 130, position: 'relative',
              transition: 'background 0.35s', overflow: 'hidden',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--surface2)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg)'}
          >
            <div style={{ fontSize: '1rem', opacity: 0.5 }}>{s.icon}</div>
            <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: isMobile ? '0.78rem' : '0.85rem', color: 'var(--cream)' }}>{s.name}</div>
            <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.52rem', color: 'var(--muted)', lineHeight: 1.8, whiteSpace: 'pre-line', flex: 1 }}>{s.items}</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.44rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: levelColors[s.level] }}>{s.level}</span>
                <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.44rem', color: 'rgba(255,255,255,0.3)' }}>{s.pct}%</span>
              </div>
              <div style={{ height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.07, ease: 'easeOut' }}
                  style={{
                    height: '100%',
                    background: levelColors[s.level],
                    boxShadow: `0 0 6px ${levelColors[s.level]}`,
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
