'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'

const socials = [
  { href: 'https://linkedin.com/in/md-meheraj-hossain',         icon: <FaLinkedin  size={16} />, label: 'LinkedIn',  color: '#0A66C2' },
  { href: 'https://github.com/mhstyles7',                       icon: <FaGithub    size={16} />, label: 'GitHub',    color: '#ffffff' },
  { href: 'https://www.facebook.com/majinmahir/',               icon: <FaFacebook  size={16} />, label: 'Facebook',  color: '#1877F2' },
  { href: 'https://www.instagram.com/this_is_meheraj/',         icon: <FaInstagram size={16} />, label: 'Instagram', color: '#E1306C' },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', msg: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mlgzjeap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name || 'Anonymous', email: form.email || 'anonymous@anon.com', message: form.msg }),
      })
      setStatus(res.ok ? 'ok' : 'err')
    } catch { setStatus('err') }
  }

  return (
    <section style={{
      width: isMobile ? '100%' : '100vw',
      height: isMobile ? 'auto' : '100vh',
      flexShrink: 0,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      overflowY: 'auto',
      background: 'radial-gradient(ellipse at 50% 80%, rgba(75,191,255,0.05) 0%, transparent 65%)',
    }}>
      {/* Left — Heading + socials */}
      <div style={{
        width: isMobile ? '100%' : '45%',
        padding: isMobile ? '4rem 6vw 2rem' : '5rem 4vw 3rem 7vw',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        borderRight: isMobile ? 'none' : '1px solid rgba(75,191,255,0.08)',
        borderBottom: isMobile ? '1px solid rgba(75,191,255,0.08)' : 'none',
      }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem',
            letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--blue)',
            marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem',
          }}>
            <span style={{ width: 20, height: 1, background: 'var(--blue)', display: 'block' }} />
            06 — Let's Connect
          </div>

          <h2 style={{
            fontFamily: 'Inter,sans-serif', fontWeight: 800,
            fontSize: 'clamp(2.5rem,6vw,5.5rem)',
            lineHeight: 0.92, letterSpacing: '-0.03em', marginBottom: '1.5rem',
          }}>
            Say{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--blue)', textShadow: '0 0 60px rgba(75,191,255,0.3)' }}>Hello.</em>
          </h2>

          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', maxWidth: 360, marginBottom: '2rem', lineHeight: 1.85 }}>
            Seeking internships and entry-level roles in software engineering, ML engineering, and backend development.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <div style={{ marginBottom: '0.6rem', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>Find me on</div>
          <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                title={s.label}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.65rem 1rem',
                  border: '1px solid rgba(75,191,255,0.15)',
                  background: 'transparent',
                  color: 'var(--muted)',
                  transition: 'all 0.25s', textDecoration: 'none', cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = s.color
                  ;(e.currentTarget as HTMLElement).style.borderColor = s.color
                  ;(e.currentTarget as HTMLElement).style.background = `${s.color}12`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--muted)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(75,191,255,0.15)'
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                }}
              >
                {s.icon}
                <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right — Anonymous message form */}
      <div style={{
        flex: 1, padding: isMobile ? '3rem 6vw 5rem' : '5rem 7vw 3rem 4vw',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div style={{
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem',
            letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--blue)',
            marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.7rem',
          }}>
            <span style={{ width: 20, height: 1, background: 'var(--blue)', display: 'block' }} />
            Send a Message
          </div>

          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.8rem' }}>
            Drop me a note — name and email are optional. Your message goes straight to my inbox.
          </p>

          {status === 'ok' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              style={{
                border: '1px solid rgba(111,234,111,0.3)',
                background: 'rgba(111,234,111,0.05)',
                padding: '2rem', textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✦</div>
              <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem', color: '#6FEA6F', letterSpacing: '0.1em' }}>Message received. Thank you!</div>
            </motion.div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', maxWidth: 480 }}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0.9rem' }}>
                {[
                  { key: 'name',  placeholder: 'Name (optional)',  type: 'text'  },
                  { key: 'email', placeholder: 'Email (optional)', type: 'email' },
                ].map(f => (
                  <input key={f.key} type={f.type} placeholder={f.placeholder} value={(form as any)[f.key]}
                    onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                    style={{
                      background: 'rgba(75,191,255,0.03)', border: '1px solid rgba(75,191,255,0.12)',
                      padding: '0.75rem 1rem', fontFamily: 'Inter,sans-serif', fontSize: '0.8rem',
                      color: 'var(--cream)', outline: 'none', width: '100%', transition: 'border-color 0.25s',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(75,191,255,0.45)')}
                    onBlur={e  => (e.target.style.borderColor = 'rgba(75,191,255,0.12)')}
                  />
                ))}
              </div>
              <textarea
                placeholder="Your message..." required value={form.msg}
                onChange={e => setForm(prev => ({ ...prev, msg: e.target.value }))}
                rows={5}
                style={{
                  background: 'rgba(75,191,255,0.03)', border: '1px solid rgba(75,191,255,0.12)',
                  padding: '0.75rem 1rem', fontFamily: 'Inter,sans-serif', fontSize: '0.8rem',
                  color: 'var(--cream)', outline: 'none', width: '100%', resize: 'vertical',
                  transition: 'border-color 0.25s',
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(75,191,255,0.45)')}
                onBlur={e  => (e.target.style.borderColor = 'rgba(75,191,255,0.12)')}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button type="submit" disabled={status === 'sending'}
                  style={{
                    background: 'var(--blue)', color: '#000',
                    fontFamily: 'JetBrains Mono,monospace', fontSize: '0.6rem',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    fontWeight: 700, padding: '0.8rem 2rem', cursor: 'pointer',
                    border: 'none', transition: 'box-shadow 0.3s',
                    opacity: status === 'sending' ? 0.65 : 1,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 24px rgba(75,191,255,0.5)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
                {status === 'err' && (
                  <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.6rem', color: '#ff5555' }}>
                    Failed — try emailing directly.
                  </span>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
