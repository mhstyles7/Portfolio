'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiGooglescholar, SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'

const socials = [
  { href: 'https://github.com/mhstyles7', Icon: SiGithub,         label: 'GitHub',   color: 'var(--text)' },
  { href: 'https://www.linkedin.com/in/md-meheraj-hossain/', Icon: FaLinkedinIn,      label: 'LinkedIn', color: '#0a66c2' },
  { href: 'https://scholar.google.com/citations?user=wl2xVSQAAAAJ&hl=en', Icon: SiGooglescholar, label: 'Scholar',  color: '#4285F4' },
]

export default function Hero() {
  return (
    <section id="hero" style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '9rem clamp(1.5rem, 6vw, 5rem) clamp(2rem, 4vh, 3rem)',
      position: 'relative',
      overflow: 'visible',
      background: `radial-gradient(circle at 15% 50%, var(--blue-glow) 0%, transparent 50%)`,
    }}>
      {/* Centered Wrapper */}
      <div style={{
        display: 'flex', flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%', maxWidth: '1200px', margin: '0 auto',
        gap: 'clamp(2rem, 4vw, 6rem)', zIndex: 2,
        flexWrap: 'wrap',
      }}>

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ flex: '1 1 400px', minWidth: 0, position: 'relative', zIndex: 1, width: '100%' }}
      >
        <div className="hero-subtitle-container" style={{
          display: 'flex', alignItems: 'flex-start', gap: '0.8rem',
          fontFamily: 'JetBrains Mono,monospace', fontSize: '0.8rem',
          letterSpacing: '0.05em', textTransform: 'uppercase',
          color: 'var(--blue)', marginBottom: '1rem', flexWrap: 'nowrap',
          lineHeight: 1.6,
        }}>
          <span className="hero-subtitle-line" style={{ width: 24, height: 1, background: 'var(--blue)', boxShadow: `0 0 6px var(--blue)`, display: 'block', flexShrink: 0, marginTop: '0.65rem' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>CSE Graduate | Full-Stack Developer | AI &amp; Cybersecurity |</span>
            <span>| First Author, ICT Express (Elsevier)</span>
          </div>
        </div>

        <h1 style={{
          fontFamily: "'Sora', 'Inter', sans-serif", fontWeight: 800,
          fontSize: 'clamp(2.2rem, 5vw, 4.8rem)',
          lineHeight: 1.0, letterSpacing: '-0.01em',
          marginBottom: '0.6rem', color: 'var(--text)',
        }}>
          Md. Meheraj{' '}
          <span style={{ color: 'var(--blue)', textShadow: `0 0 60px var(--blue-glow)` }}>Hossain</span>
        </h1>

        {/* Q1 metric chip — right under the name */}
        <div className="chip-row" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.6rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--green)', border: '1px solid var(--green)',
            background: 'var(--green-glow)', padding: '0.28rem 0.7rem', borderRadius: 6,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 6px var(--green)', display: 'block', flexShrink: 0 }} />
            Q1 Published · IF 4.2 · ICT Express
          </span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.6rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--blue)', border: '1px solid var(--blue)',
            background: 'var(--blue-glow)', padding: '0.28rem 0.7rem', borderRadius: 6,
          }}>
            MERN · Python · ML
          </span>
        </div>

        <p style={{
          fontFamily: 'Inter,sans-serif', fontSize: '1rem',
          lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: 480, marginBottom: '1.5rem',
        }}>
          <strong style={{ color: 'var(--text)' }}>Fans Operations Engineer</strong>{' '}at Ismartu Technology BD Limited (R&amp;D).
          Full-Stack Developer specializing in AI &amp; Cybersecurity.{' '}
          First-author research <strong style={{ color: 'var(--green)' }}>published</strong> at{' '}
          <a href="https://doi.org/10.1016/j.icte.2026.05.001" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)', textDecoration: 'underline' }}>
            Elsevier ICT Express
          </a>
          {' '}— Dhaka, Bangladesh.
        </p>

        {/* CTA Buttons */}
        <div className="cta-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
          <a href="/Meheraj_CV.pdf" download="Md_Meheraj_Hossain_CV.pdf"
            aria-label="Download CV PDF"
            style={{
              background: 'var(--blue)', color: '#000',
              fontFamily: 'JetBrains Mono,monospace', fontWeight: 700,
              fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '0.85rem 2rem', cursor: 'pointer',
              border: 'none', transition: 'box-shadow 0.3s', display: 'inline-block',
              textDecoration: 'none', borderRadius: 6,
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px var(--blue-glow)`}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
          >Download CV ↓</a>

          <button
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            aria-label="Go to Contact section"
            style={{
              background: 'transparent', color: 'var(--text)',
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.8rem',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '0.85rem 2rem', cursor: 'pointer',
              border: '1px solid var(--border-strong)',
              transition: 'color 0.3s,border-color 0.3s,box-shadow 0.3s',
              display: 'inline-block', textDecoration: 'none', borderRadius: 6,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = 'var(--blue)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--blue)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 18px var(--blue-glow)`
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = 'var(--text)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
          >Contact Me →</button>
        </div>

        {/* Social links + Current role badge row */}
        <div className="socials-row" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {/* Social icons */}
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
              style={{
                width: 38, height: 38, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: s.label === 'GitHub' ? '1px solid var(--border)' : `1px solid ${s.color}40`,
                background: s.label === 'GitHub' ? 'var(--input-bg)' : `${s.color}15`,
                color: s.label === 'GitHub' ? 'var(--text)' : s.color,
                transition: 'all 0.25s', textDecoration: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = s.label === 'GitHub' ? 'var(--text)' : s.color
                ;(e.currentTarget as HTMLElement).style.color = s.label === 'GitHub' ? 'var(--bg)' : '#fff'
                ;(e.currentTarget as HTMLElement).style.boxShadow = s.label === 'GitHub' ? '0 0 15px var(--text)' : `0 0 15px ${s.color}80`
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = s.label === 'GitHub' ? 'var(--input-bg)' : `${s.color}15`
                ;(e.currentTarget as HTMLElement).style.color = s.label === 'GitHub' ? 'var(--text)' : s.color
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <s.Icon size={18} />
            </a>
          ))}

          <span style={{ width: 1, height: 28, background: 'var(--border)', flexShrink: 0 }} />

          {/* Current role badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.5rem 0.9rem',
            background: 'var(--blue-glow)',
            border: '1px solid var(--blue)',
            borderRadius: 8,
            backdropFilter: 'blur(12px)',
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', flexShrink: 0,
              boxShadow: '0 0 8px var(--green)', animation: 'heroPulse 2s ease-in-out infinite',
            }} />
            <div>
              <div style={{
                fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--muted)', marginBottom: '0.1rem',
              }}>Currently</div>
              <div style={{
                fontFamily: 'Inter,sans-serif', fontSize: '0.8rem',
                fontWeight: 600, color: 'var(--text)', lineHeight: 1.2,
              }}>
                Fans Ops Engineer <span style={{ color: 'var(--blue)' }}>@ Ismartu</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes heroPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(1.3)}}
        `}</style>
      </motion.div>

      {/* Photo — clean rounded rectangle with spinning glow */}
      <div style={{
        flexShrink: 0, position: 'relative',
        width: 'clamp(280px, 32vw, 420px)',
        height: 'clamp(360px, 55vh, 580px)',
        zIndex: 1,
        margin: '0 auto',
      }}>
        {/* Ambient glow behind the photo */}
        <div style={{
          position: 'absolute', inset: '-25px', borderRadius: 40,
          background: `radial-gradient(circle, var(--blue-glow) 0%, transparent 70%)`,
          pointerEvents: 'none',
          animation: 'ring-pulse 3s ease-in-out infinite',
        }} />

        {/* Spinning glow border container */}
        <div style={{
          position: 'absolute', inset: '-4px', borderRadius: 34,
          overflow: 'hidden', zIndex: 0,
        }}>
          <div className="hero-ring" style={{
            position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
            background: 'conic-gradient(from 0deg, var(--blue) 0%, transparent 35%, transparent 55%, var(--blue) 80%, var(--blue) 100%)',
            opacity: 0.7,
          }} />
        </div>

        {/* Mask to make border hollow */}
        <div style={{
          position: 'absolute', inset: '0px', borderRadius: 30,
          background: 'var(--bg)', zIndex: 1, pointerEvents: 'none',
        }} />

        {/* Photo */}
        <div style={{
          position: 'absolute', inset: '2px', borderRadius: 28,
          overflow: 'hidden', zIndex: 2,
          boxShadow: `inset 0 0 20px var(--blue-glow)`,
        }}>
          <Image
            src="/photo.jpg"
            alt="Md. Meheraj Hossain"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 18%', filter: 'contrast(1.1) brightness(0.95) saturate(1.05)' }}
            priority
          />
          {/* Lightened fade — was 0.6, now 0.25 so the photo is clean */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
            background: `linear-gradient(to bottom,transparent,var(--bg))`, zIndex: 2,
            opacity: 0.25,
          }} />
        </div>

        <style>{`
          .hero-ring { animation: ring-spin 7s linear infinite; }
          @media (max-width: 700px) {
            .hero-scroll-hint { display: none !important; }
          }
        `}</style>
      </div>
      {/* End Centered Wrapper */}
      </div>

      {/* Scroll hint — clickable, scrolls to Projects */}
      <button
        className="hero-scroll-hint"
        aria-label="Scroll to Projects section"
        onClick={() => {
          const el = document.getElementById('work')
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80
            window.scrollTo({ top, behavior: 'smooth' })
          }
        }}
        style={{
          position: 'absolute',
          bottom: '1.6rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex', alignItems: 'center', gap: '0.55rem',
          fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--blue)',
          background: 'var(--blue-glow)',
          border: '1px solid var(--border-strong)',
          borderRadius: 100,
          padding: '0.45rem 1.2rem',
          backdropFilter: 'blur(8px)',
          boxShadow: `0 0 18px var(--blue-glow)`,
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          transition: 'box-shadow 0.3s, background 0.3s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px var(--blue-glow)'
          ;(e.currentTarget as HTMLElement).style.background = 'rgba(75,191,255,0.18)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 18px var(--blue-glow)'
          ;(e.currentTarget as HTMLElement).style.background = 'var(--blue-glow)'
        }}
      >
        SCROLL
        <span style={{ animation: 'bounceY 0.9s ease-in-out infinite', display: 'inline-block' }}>↓</span>
        <style>{`@keyframes bounceY{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}`}</style>
      </button>
    </section>
  )
}
