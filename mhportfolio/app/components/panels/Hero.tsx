'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToWork = () => {
    const d = document.getElementById('scroll-driver')
    if (d) window.scrollTo({ top: d.offsetTop + document.documentElement.clientWidth, behavior: 'smooth' })
  }

  return (
    <section style={{
      width: '100vw', height: '100vh', flexShrink: 0,
      display: 'flex', alignItems: 'center',
      padding: '5rem 7vw 2rem', justifyContent: 'space-between',
      position: 'relative', overflowY: 'auto', gap: '3vw',
      flexWrap: 'wrap',
    }}>
      {/* Subtle BG number — moved right and toned down so it doesn't overlap */}
      <div style={{
        position: 'absolute', right: '-2vw', bottom: '5%',
        fontFamily: 'Inter,sans-serif', fontWeight: 800,
        fontSize: '22vw', lineHeight: 1, color: 'rgba(75,191,255,0.018)',
        pointerEvents: 'none', userSelect: 'none', zIndex: 0,
      }}>01</div>

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ flex: 1, minWidth: 0, position: 'relative', zIndex: 1 }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.8rem',
          fontFamily: 'JetBrains Mono,monospace', fontSize: '0.58rem',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--blue)', marginBottom: '1.5rem',
        }}>
          <span style={{ width: 28, height: 1, background: 'var(--blue)', boxShadow: '0 0 6px var(--blue)', display: 'block' }} />
          CSE Graduate · BRAC University · Dhaka
        </div>

        <h1 style={{
          fontFamily: 'Inter,sans-serif', fontWeight: 800,
          fontSize: 'clamp(2.4rem,5.5vw,5.5rem)',
          lineHeight: 1.05, letterSpacing: '-0.03em',
          marginBottom: '1.5rem',
        }}>
          Md. Meheraj{' '}
          <span style={{ color: 'var(--blue)', textShadow: '0 0 60px rgba(75,191,255,0.3)' }}>Hossain.</span>
        </h1>

        <p style={{
          fontFamily: 'Inter,sans-serif', fontSize: '0.92rem',
          lineHeight: 1.9, color: 'var(--muted)', maxWidth: 420, marginBottom: '2rem',
        }}>
          <strong style={{ color: 'var(--cream)' }}>Full-Stack Engineer &amp; ML Researcher</strong> — building intelligent systems and human-centered products.{' '}
          Research <strong style={{ color: '#6FEA6F' }}>published</strong> at{' '}
          <a href="#" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)', textDecoration: 'underline' }}>
            Elsevier ICT Express
          </a>.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <button
            onClick={scrollToWork}
            style={{
              background: 'var(--blue)', color: '#000',
              fontFamily: 'JetBrains Mono,monospace', fontWeight: 700,
              fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '0.85rem 2rem', cursor: 'none',
              border: 'none', transition: 'box-shadow 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 30px rgba(75,191,255,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
          >View Work ↗</button>

          <a href="/Meheraj_CV.pdf" download="Md_Meheraj_Hossain_CV.pdf"
            style={{
              background: 'transparent', color: 'var(--muted)',
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.6rem',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '0.85rem 2rem', cursor: 'none',
              border: '1px solid rgba(75,191,255,0.2)',
              transition: 'color 0.3s,border-color 0.3s', display: 'inline-block',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--blue)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(75,191,255,0.5)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(75,191,255,0.2)' }}
          >Download CV</a>
        </div>

        {/* Meta rows */}
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
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem',
              letterSpacing: '0.1em', textTransform: 'uppercase', maxWidth: 340,
            }}>
              <span style={{ color: 'var(--muted)' }}>{r.k}</span>
              <span style={{ color: r.k === 'Status' || r.k === 'Research' ? 'var(--blue)' : 'var(--cream)' }}>{r.v}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Photo */}
      <div style={{ flexShrink: 0, position: 'relative', width: 'clamp(220px,24vw,360px)', height: 'clamp(300px,50vh,500px)', zIndex: 1 }}>
        {/* Corner accents */}
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
            style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'contrast(1.08) brightness(0.92)' }}
            priority
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
            background: 'linear-gradient(to bottom,transparent,rgba(5,5,7,0.7))', zIndex: 2,
          }} />
        </div>

        {/* Availability badge — pulsing dot */}
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
            <strong style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.72rem', color: '#6FEA6F', display: 'block' }}>Open to Work</strong>
            <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.48rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>Available Now</span>
          </div>
        </div>

        {/* University badge */}
        <div style={{
          position: 'absolute', top: -16, left: -18, zIndex: 4,
          background: 'rgba(5,5,7,0.92)', border: '1px solid rgba(75,191,255,0.25)',
          backdropFilter: 'blur(16px)', padding: '0.6rem 0.9rem',
          animation: 'float 4s ease-in-out infinite 2s',
        }}>
          <strong style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.72rem', color: 'var(--blue)', display: 'block' }}>BRAC Univ.</strong>
          <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.48rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>CSE Graduate</span>
        </div>

        <style>{`
          @keyframes pulseGreen { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }
          @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        `}</style>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '2rem', right: '5vw',
        display: 'flex', alignItems: 'center', gap: '0.8rem',
        fontFamily: 'JetBrains Mono,monospace', fontSize: '0.5rem',
        letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
      }}>
        SCROLL <span style={{ animation: 'bounceX 0.9s ease-in-out infinite' }}>→</span>
        <style>{`@keyframes bounceX{0%,100%{transform:translateX(0)}50%{transform:translateX(7px)}}`}</style>
      </div>
    </section>
  )
}
