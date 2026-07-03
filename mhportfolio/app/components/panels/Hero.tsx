'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(5rem, 8vh, 7rem) clamp(1.5rem, 6vw, 5rem) clamp(2rem, 4vh, 3rem)',
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
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.8rem',
          fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--blue)', marginBottom: '1rem',
        }}>
          <span style={{ width: 28, height: 1, background: 'var(--blue)', boxShadow: `0 0 6px var(--blue)`, display: 'block' }} />
          CSE Graduate · BRAC University · Dhaka
        </div>

        <h1 style={{
          fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 4.5rem)',
          lineHeight: 1.05, letterSpacing: '-0.03em',
          marginBottom: '1rem', color: 'var(--text)',
        }}>
          Md. Meheraj{' '}
          <span style={{ color: 'var(--blue)', textShadow: `0 0 60px var(--blue-glow)` }}>Hossain</span>
        </h1>

        <p style={{
          fontFamily: 'Inter,sans-serif', fontSize: '1rem',
          lineHeight: 1.8, color: 'var(--muted)', maxWidth: 480, marginBottom: '1.2rem',
        }}>
          <strong style={{ color: 'var(--text)' }}>Full-Stack Engineer &amp; ML Researcher</strong> — specializing in applied machine learning, cybersecurity, and building production-grade web platforms.{' '}
          First-author research <strong style={{ color: 'var(--green)' }}>published</strong> at{' '}
          <a href="https://doi.org/10.1016/j.icte.2026.05.001" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)', textDecoration: 'underline' }}>
            Elsevier ICT Express
          </a>.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            { k: 'Role',     v: 'Engineer + Researcher' },
            { k: 'Stack',    v: 'MERN · Python · ML' },
            { k: 'Research', v: 'ICT Express (Elsevier)' },
            { k: 'Status',   v: 'Available ✦' },
          ].map(r => (
            <div key={r.k} style={{
              display: 'flex', justifyContent: 'space-between',
              paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)',
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem',
              letterSpacing: '0.1em', textTransform: 'uppercase', maxWidth: 400,
            }}>
              <span style={{ color: 'var(--muted)' }}>{r.k}</span>
              <span style={{ color: r.k === 'Status' || r.k === 'Research' ? 'var(--blue)' : 'var(--text)' }}>{r.v}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Photo — rounded rectangle with spinning glow */}
      <div style={{
        flexShrink: 0, position: 'relative',
        width: 'clamp(260px, 26vw, 380px)',
        height: 'clamp(340px, 48vh, 500px)',
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
          {/* Spinning gradient */}
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
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
            background: `linear-gradient(to bottom,transparent,var(--bg))`, zIndex: 2,
            opacity: 0.6,
          }} />
        </div>

        {/* Open to Work badge */}
        <div style={{
          position: 'absolute', bottom: -15, left: -20, zIndex: 4,
          background: 'var(--nav-bg)', border: `1px solid var(--green-glow)`,
          backdropFilter: 'blur(16px)', padding: '0.6rem 0.9rem',
          display: 'flex', alignItems: 'center', gap: '0.6rem', borderRadius: 8,
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', flexShrink: 0,
            boxShadow: `0 0 8px var(--green)`, animation: 'pulseGreen 2s ease-in-out infinite',
          }} />
          <div>
            <strong style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', color: 'var(--green)', display: 'block' }}>Open to Work</strong>
            <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>Available Now</span>
          </div>
        </div>

        {/* BRAC badge */}
        <div style={{
          position: 'absolute', top: -15, right: -20, zIndex: 4,
          background: 'var(--nav-bg)', border: '1px solid var(--border-strong)',
          backdropFilter: 'blur(16px)', padding: '0.6rem 0.9rem',
          animation: 'float 4s ease-in-out infinite 2s', borderRadius: 8,
        }}>
          <strong style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', color: 'var(--blue)', display: 'block' }}>BRAC Univ.</strong>
          <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>CSE Graduate</span>
        </div>

        <style>{`
          .hero-ring { animation: ring-spin 7s linear infinite; }
          @keyframes pulseGreen { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }
          @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        `}</style>
      </div>
      {/* End Centered Wrapper */}
      </div>

      {/* Scroll hint */}
      <div style={{
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
        pointerEvents: 'none',
      }}>
        SCROLL
        <span style={{ animation: 'bounceY 0.9s ease-in-out infinite', display: 'inline-block' }}>↓</span>
        <style>{`@keyframes bounceY{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}`}</style>
      </div>
    </section>
  )
}
