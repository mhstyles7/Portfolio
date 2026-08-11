'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExpandAlt, FaAward, FaCertificate, FaMedal } from 'react-icons/fa'

const certs = [
  {
    id: 1,
    title: 'Higher Secondary Certificate',
    subtitle: 'HSC — Science Group',
    org: 'Mirpur Cantonment Public School & College',
    year: '2020',
    grade: 'GPA 5.00 / 5.00',
    image: '/hsc certificate.jpg',
    icon: <FaCertificate size={18} />,
    accent: 'var(--blue)',
    tag: 'Academic',
  },
  {
    id: 2,
    title: 'Secondary School Certificate',
    subtitle: 'SSC — Science Group',
    org: 'Greenview High School and College',
    year: '2018',
    grade: 'GPA 5.00 / 5.00',
    image: '/ssc certificate.jpg',
    icon: <FaCertificate size={18} />,
    accent: 'var(--green)',
    tag: 'Academic',
  },
  {
    id: 3,
    title: 'Graphics Design',
    subtitle: 'Beginner Level · Extracurricular',
    org: 'BRAC University',
    year: '2022',
    grade: 'Extracurricular Activity',
    image: '/Graphics design.jpg',
    icon: <FaMedal size={18} />,
    accent: '#a78bfa',
    tag: 'Skill',
  },
  {
    id: 4,
    title: 'Competition Participant & Awardee',
    subtitle: 'IAM Digital Programme',
    org: 'Conducted by Dr. Mohammad Kaykobad, Professor of CSE, BUET · Mirpur Cantonment Public School & College',
    year: '2018',
    grade: 'Award',
    image: '/IAM Digital Programme.jpg',
    icon: <FaAward size={18} />,
    accent: '#f59e0b',
    tag: 'Award',
  },
]

export default function Certifications() {
  const [lightbox, setLightbox] = useState<typeof certs[0] | null>(null)

  return (
    <section id="certifications" style={{
      width: '100%',
      padding: 'clamp(4rem, 8vh, 7rem) clamp(1.5rem, 5vw, 3rem)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      background: `radial-gradient(circle at 80% 30%, var(--blue-glow) 0%, transparent 55%)`,
    }}>
      {/* Section header */}
      <div style={{ width: '100%', maxWidth: 1200, marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.8rem' }}>
          <span style={{ width: 20, height: 2, background: 'var(--blue)', display: 'block' }} />
          06 — Certifications & Awards
        </div>
        <h2 style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,3rem)', lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--text)', margin: 0 }}>
          Credentials &{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Recognition.</em>
        </h2>
      </div>

      {/* Cards grid */}
      <div style={{
        width: '100%', maxWidth: 1200,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.2rem',
      }}>
        {certs.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.55, ease: 'easeOut' }}
            style={{
              border: '1px solid var(--border)',
              borderRadius: 16,
              overflow: 'hidden',
              background: 'var(--card-bg)',
              display: 'flex', flexDirection: 'column',
              cursor: 'pointer',
              transition: 'transform 0.25s, box-shadow 0.25s',
              boxShadow: 'var(--shadow-lg)',
            }}
            whileHover={{ scale: 1.02, y: -4 }}
            onClick={() => setLightbox(c)}
          >
            {/* Certificate image preview */}
            <div style={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden', background: '#000', flexShrink: 0 }}>
              <Image
                src={c.image}
                alt={c.title}
                fill
                style={{ objectFit: 'cover', opacity: 0.85, transition: 'opacity 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
              />
              {/* Expand hint */}
              <div style={{
                position: 'absolute', top: '0.7rem', right: '0.7rem',
                background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)',
                padding: '0.35rem 0.6rem', borderRadius: 6,
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                fontFamily: 'JetBrains Mono,monospace', fontSize: '0.6rem',
                letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff',
              }}>
                <FaExpandAlt size={9} /> View
              </div>
              {/* Tag badge */}
              <div style={{
                position: 'absolute', bottom: '0.7rem', left: '0.7rem',
                background: c.accent, color: '#000',
                padding: '0.25rem 0.65rem', borderRadius: 100,
                fontFamily: 'JetBrains Mono,monospace', fontSize: '0.6rem',
                letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700,
              }}>
                {c.tag}
              </div>
            </div>

            {/* Card body */}
            <div style={{ padding: '1.1rem 1.2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', marginBottom: '0.6rem' }}>
                <span style={{ color: c.accent, flexShrink: 0, marginTop: '0.15rem' }}>{c.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.3, marginBottom: '0.2rem' }}>{c.title}</div>
                  <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: c.accent }}>{c.subtitle}</div>
                </div>
              </div>
              <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.82rem', color: 'var(--text)', lineHeight: 1.6, marginBottom: '0.7rem', flex: 1 }}>{c.org}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '0.6rem' }}>
                <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)' }}>{c.year}</span>
                <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--green)' }}>{c.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9000,
              background: 'rgba(0,0,0,0.88)',
              backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1.5rem',
              cursor: 'zoom-out',
            }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                overflow: 'hidden',
                maxWidth: 860,
                width: '100%',
                maxHeight: '90vh',
                display: 'flex', flexDirection: 'column',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                cursor: 'default',
              }}
            >
              {/* Lightbox header */}
              <div style={{
                padding: '1rem 1.4rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                borderBottom: '1px solid var(--border)',
                flexShrink: 0,
              }}>
                <div>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)' }}>{lightbox.title}</div>
                  <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: lightbox.accent, marginTop: '0.2rem' }}>{lightbox.org} · {lightbox.year}</div>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  style={{
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    color: 'var(--muted)', borderRadius: '50%',
                    width: 36, height: 36, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', cursor: 'pointer',
                    transition: 'all 0.2s', flexShrink: 0,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--text)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
                >
                  <FaTimes size={14} />
                </button>
              </div>

              {/* Full image */}
              <div style={{ position: 'relative', width: '100%', flex: 1, minHeight: 400, overflow: 'hidden' }}>
                <Image
                  src={lightbox.image}
                  alt={lightbox.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="860px"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
