'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { useIsMobile } from '../../hooks/useIsMobile'

const EMAIL = 'meherajhossainmahir@gmail.com'

const socials = [
  { href: 'https://linkedin.com/in/md-meheraj-hossain',         icon: <FaLinkedin  size={16} />, label: 'LinkedIn',  color: '#0A66C2' },
  { href: 'https://github.com/mhstyles7',                       icon: <FaGithub    size={16} />, label: 'GitHub',    color: '#ffffff' },
  { href: 'https://www.facebook.com/majinmahir/',               icon: <FaFacebook  size={16} />, label: 'Facebook',  color: '#1877F2' },
  { href: 'https://www.instagram.com/this_is_meheraj/',         icon: <FaInstagram size={16} />, label: 'Instagram', color: '#E1306C' },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', msg: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err' | 'limit'>('idle')
  const [msgCount, setMsgCount] = useState(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    const storedData = localStorage.getItem('anon_msg_data');
    if (storedData) {
      try {
        const msgData = JSON.parse(storedData);
        const now = Date.now();
        if (now - msgData.firstMsgTime <= 24 * 60 * 60 * 1000) {
          setMsgCount(msgData.count);
        }
      } catch (e) {}
    }
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()

    const now = Date.now();
    const storedData = localStorage.getItem('anon_msg_data');
    let msgData = storedData ? JSON.parse(storedData) : { count: 0, firstMsgTime: now };
    
    // Reset if 24 hours passed
    if (now - msgData.firstMsgTime > 24 * 60 * 60 * 1000) {
      msgData = { count: 0, firstMsgTime: now };
    }
    
    if (msgData.count >= 3) {
      setStatus('limit');
      return;
    }

    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mlgzjeap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name || 'Anonymous', email: form.email || 'anonymous@anon.com', message: form.msg }),
      })
      if (res.ok) {
        msgData.count += 1;
        localStorage.setItem('anon_msg_data', JSON.stringify(msgData));
        setMsgCount(msgData.count);
        setStatus('ok');
      } else {
        setStatus('err');
      }
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
      position: 'relative',
      background: 'radial-gradient(ellipse at 50% 80%, rgba(75,191,255,0.05) 0%, transparent 65%)',
    }}>
      {/* Left — Heading + socials */}
      <div style={{
        width: isMobile ? '100%' : '45%',
        padding: isMobile ? '4rem 6vw 2rem' : '5rem 4vw 3rem 7vw',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        borderRight: isMobile ? 'none' : '1px solid rgba(75,191,255,0.08)',
        borderBottom: isMobile ? '1px solid rgba(75,191,255,0.08)' : 'none',
        position: 'relative', overflow: 'hidden',
      }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem',
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

          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 400, marginBottom: '1.2rem', lineHeight: 1.85 }}>
            Seeking internships and entry-level roles in software engineering, ML engineering, and backend development.
          </p>

          {/* Visible email address */}
          <a href={`mailto:${EMAIL}`}
            aria-label="Send email to Meheraj"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.8rem',
              letterSpacing: '0.06em', color: 'var(--blue)',
              textDecoration: 'none', marginBottom: '2rem',
              padding: '0.55rem 0.9rem',
              border: '1px solid rgba(75,191,255,0.2)',
              background: 'rgba(75,191,255,0.04)',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(75,191,255,0.1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(75,191,255,0.15)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(75,191,255,0.04)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
          >
            <FaEnvelope size={13} />
            {EMAIL}
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <div style={{ marginBottom: '0.6rem', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>Find me on</div>
          <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                title={s.label}
                aria-label={`Visit ${s.label} profile`}
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
                <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</span>
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
            fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem',
            letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--blue)',
            marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.7rem',
          }}>
            <span style={{ width: 20, height: 1, background: 'var(--blue)', display: 'block' }} />
            Send a Message
          </div>

          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '0.5rem' }}>
            Drop me a note — name and email are optional. Your message goes straight to my inbox.
          </p>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.78rem', color: msgCount >= 3 ? '#ff5555' : 'var(--blue)', marginBottom: '1.5rem' }}>
            Messages sent today: {msgCount} / 3
          </div>

          {status === 'ok' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              style={{
                border: '1px solid rgba(111,234,111,0.3)',
                background: 'rgba(111,234,111,0.05)',
                padding: '2rem', textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✦</div>
              <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.95rem', color: '#6FEA6F', letterSpacing: '0.1em' }}>Message received. Thank you!</div>
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
                      padding: '0.75rem 1rem', fontFamily: 'Inter,sans-serif', fontSize: '1rem',
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
                  padding: '0.75rem 1rem', fontFamily: 'Inter,sans-serif', fontSize: '1rem',
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
                    fontFamily: 'JetBrains Mono,monospace', fontSize: '0.8rem',
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
                  <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.8rem', color: '#ff5555' }}>
                    Failed — try emailing directly.
                  </span>
                )}
                {status === 'limit' && (
                  <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.8rem', color: '#ff5555' }}>
                    Limit reached (3 msgs / 24h).
                  </span>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>

      {/* Footer placed at the bottom of the last section */}
      <footer style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%',
        background: 'var(--bg)', borderTop: '1px solid rgba(75,191,255,0.1)',
        padding: '1.2rem 5vw',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem', zIndex: 10,
        fontFamily: 'JetBrains Mono,monospace', fontSize: '0.52rem',
        letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase',
      }}>
        <span>© 2026 <span style={{ color: 'var(--blue)' }}>Md. Meheraj Hossain</span></span>
        <span>Built with Next.js · <span style={{ color: 'var(--blue)' }}>Dhaka, Bangladesh</span></span>
        <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
          <a href="/Meheraj_CV.pdf" target="_blank" rel="noreferrer"
            style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
          >View CV ↗</a>
        </div>
      </footer>
    </section>
  )
}
