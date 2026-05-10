'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section style={{
      width: isMobile ? '100%' : '100vw',
      height: isMobile ? 'auto' : '100vh',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '5rem 6vw 3rem' : '0 4vw',
      position: 'relative',
      overflow: isMobile ? 'visible' : 'hidden',
    }}>
      <div style={{
        position: 'absolute', right: '-2vw', bottom: '5%',
        fontFamily: 'Inter,sans-serif', fontWeight: 800,
        fontSize: '22vw', lineHeight: 1, color: 'rgba(75,191,255,0.018)',
        pointerEvents: 'none', userSelect: 'none', zIndex: 0,
      }}>01</div>

      {/* Centered Wrapper */}
      <div style={{
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        width: '100%', maxWidth: '1200px', margin: '0 auto',
        gap: isMobile ? '2rem' : '4rem', zIndex: 2,
      }}>

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ flex: 1, minWidth: 0, position: 'relative', zIndex: 1, width: '100%' }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.8rem',
          fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--blue)', marginBottom: '1rem',
        }}>
          <span style={{ width: 28, height: 1, background: 'var(--blue)', boxShadow: '0 0 6px var(--blue)', display: 'block' }} />
          CSE Graduate · BRAC University · Dhaka
        </div>

        <h1 style={{
          fontFamily: 'Inter,sans-serif', fontWeight: 800,
          fontSize: isMobile ? 'clamp(2rem,10vw,3rem)' : 'clamp(2rem,4.5vw,4.5rem)',
          lineHeight: 1.05, letterSpacing: '-0.03em',
          marginBottom: '1rem',
        }}>
          Md. Meheraj{' '}
          <span style={{ color: 'var(--blue)', textShadow: '0 0 60px rgba(75,191,255,0.3)' }}>Hossain.</span>
        </h1>

        <p style={{
          fontFamily: 'Inter,sans-serif', fontSize: '1rem',
          lineHeight: 1.8, color: 'var(--muted)', maxWidth: 480, marginBottom: '1.2rem',
        }}>
          <strong style={{ color: 'var(--cream)' }}>Full-Stack Engineer &amp; ML Researcher</strong> — specializing in applied machine learning, cybersecurity, and building production-grade web platforms.{' '}
          First-author research <strong style={{ color: '#6FEA6F' }}>published</strong> at{' '}
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
              textDecoration: 'none',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(75,191,255,0.5)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = 'none'}
          >Download CV ↓</a>

          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            aria-label="Go to Contact section"
            style={{
              background: 'transparent', color: 'var(--cream)',
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.8rem',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '0.85rem 2rem', cursor: 'pointer',
              border: '1px solid rgba(75,191,255,0.4)',
              transition: 'color 0.3s,border-color 0.3s,box-shadow 0.3s',
              display: 'inline-block', textDecoration: 'none',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = 'var(--blue)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(75,191,255,0.65)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 18px rgba(75,191,255,0.15)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = 'var(--cream)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(75,191,255,0.4)'
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
              paddingBottom: '0.5rem', borderBottom: '1px solid rgba(75,191,255,0.08)',
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem',
              letterSpacing: '0.1em', textTransform: 'uppercase', maxWidth: 400,
            }}>
              <span style={{ color: 'var(--muted)' }}>{r.k}</span>
              <span style={{ color: r.k === 'Status' || r.k === 'Research' ? 'var(--blue)' : 'var(--cream)' }}>{r.v}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Photo */}
      <div style={{
        flexShrink: 0, position: 'relative',
        width: isMobile ? '100%' : 'clamp(220px,24vw,360px)',
        height: isMobile ? '380px' : 'clamp(300px,50vh,500px)',
        zIndex: 1,
      }}>
        {(['tl','tr','bl','br'] as const).map(c => (
          <div key={c} style={{
            position: 'absolute', width: 20, height: 20, zIndex: 3,
            top:    c.startsWith('t') ? 0 : 'auto', bottom: c.startsWith('b') ? 0 : 'auto',
            left:   c.endsWith('l')   ? 0 : 'auto', right:  c.endsWith('r')   ? 0 : 'auto',
            borderTop:    c.startsWith('t') ? '2px solid var(--blue)' : 'none',
            borderBottom: c.startsWith('b') ? '2px solid var(--blue)' : 'none',
            borderLeft:   c.endsWith('l')   ? '2px solid var(--blue)' : 'none',
            borderRight:  c.endsWith('r')   ? '2px solid var(--blue)' : 'none',
            boxShadow: '0 0 10px rgba(75,191,255,0.4)',
          }} />
        ))}

        <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
          <Image
            src="/photo.jpg"
            alt="Md. Meheraj Hossain"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 18%', filter: 'contrast(1.1) brightness(0.95) saturate(1.05)' }}
            priority
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
            background: 'linear-gradient(to bottom,transparent,rgba(5,5,7,0.7))', zIndex: 2,
          }} />
        </div>

        <div style={{
          position: 'absolute', bottom: -16, right: -18, zIndex: 4,
          background: 'rgba(5,5,7,0.92)', border: '1px solid rgba(75,191,255,0.25)',
          backdropFilter: 'blur(16px)', padding: '0.6rem 0.9rem',
          display: 'flex', alignItems: 'center', gap: '0.6rem',
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%', background: '#6FEA6F', flexShrink: 0,
            boxShadow: '0 0 8px #6FEA6F',
            animation: 'pulseGreen 2s ease-in-out infinite',
          }} />
          <div>
            <strong style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', color: '#6FEA6F', display: 'block' }}>Open to Work</strong>
            <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>Available Now</span>
          </div>
        </div>

        <div style={{
          position: 'absolute', top: -16, left: -18, zIndex: 4,
          background: 'rgba(5,5,7,0.92)', border: '1px solid rgba(75,191,255,0.25)',
          backdropFilter: 'blur(16px)', padding: '0.6rem 0.9rem',
          animation: 'float 4s ease-in-out infinite 2s',
        }}>
          <strong style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', color: 'var(--blue)', display: 'block' }}>BRAC Univ.</strong>
          <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>CSE Graduate</span>
        </div>

        <style>{`
          @keyframes pulseGreen { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }
          @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        `}</style>
      </div>
      {/* End Centered Wrapper */}
      </div>

      {/* Scroll hint — desktop only, centered at absolute bottom as glowing pill */}
      {!isMobile && (
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
          background: 'rgba(75,191,255,0.06)',
          border: '1px solid rgba(75,191,255,0.22)',
          borderRadius: 100,
          padding: '0.45rem 1.2rem',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 0 18px rgba(75,191,255,0.18), inset 0 0 12px rgba(75,191,255,0.05)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}>
          SCROLL
          <span style={{ animation: 'bounceX 0.9s ease-in-out infinite', display: 'inline-block' }}>→</span>
          <style>{`@keyframes bounceX{0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}`}</style>
        </div>
      )}
    </section>
  )
}
