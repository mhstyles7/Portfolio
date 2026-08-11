'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'

const EMAIL = 'meherajhossainmahir@gmail.com'
const socials = [
  { href: 'https://linkedin.com/in/md-meheraj-hossain', icon: <FaLinkedin size={16} />, label: 'LinkedIn', color: '#0A66C2' },
  { href: 'https://github.com/mhstyles7', icon: <FaGithub size={16} />, label: 'GitHub', color: 'var(--text)' },
  { href: 'https://www.facebook.com/majinmahir/', icon: <FaFacebook size={16} />, label: 'Facebook', color: '#1877F2' },
  { href: 'https://www.instagram.com/this_is_meheraj/', icon: <FaInstagram size={16} />, label: 'Instagram', color: '#E1306C' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'err'|'limit'>('idle')
  const [msgCount, setMsgCount] = useState(0)

  useEffect(() => {
    const storedData = localStorage.getItem('anon_msg_data');
    if (storedData) {
      try {
        const msgData = JSON.parse(storedData);
        if (Date.now() - msgData.firstMsgTime <= 24*60*60*1000) setMsgCount(msgData.count);
      } catch (e) {}
    }
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const now = Date.now();
    const storedData = localStorage.getItem('anon_msg_data');
    let msgData = storedData ? JSON.parse(storedData) : { count: 0, firstMsgTime: now };
    if (now - msgData.firstMsgTime > 24*60*60*1000) msgData = { count: 0, firstMsgTime: now };
    if (msgData.count >= 3) { setStatus('limit'); return; }
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mlgzjeap', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: form.name || 'Anonymous', email: form.email || 'anonymous@anon.com', message: form.msg }) })
      if (res.ok) { msgData.count += 1; localStorage.setItem('anon_msg_data', JSON.stringify(msgData)); setMsgCount(msgData.count); setStatus('ok'); }
      else setStatus('err');
    } catch { setStatus('err') }
  }

  return (
    <section id="contact" style={{
      width: '100%',
      display: 'flex', flexDirection: 'column',
      position: 'relative',
      background: `radial-gradient(ellipse at 50% 80%, var(--blue-glow) 0%, transparent 65%)`,
    }}>
      <div style={{ padding: 'clamp(4rem, 8vh, 7rem) clamp(1.5rem, 5vw, 3rem)', display: 'flex', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <div style={{
          maxWidth: 1200, width: '100%',
          display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
          borderRadius: 24, border: '1px solid var(--border)', overflow: 'hidden',
          background: 'var(--card-bg)',
          boxShadow: 'var(--shadow-lg)',
        }}>
      {/* Left */}
      <div style={{
        flex: '1 1 400px',
        padding: 'clamp(4rem, 8vh, 5rem) clamp(1.5rem, 4vw, 7rem)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        borderRight: '1px solid var(--border)',
        position: 'relative', overflow: 'hidden',
      }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <span style={{ width: 20, height: 1, background: 'var(--blue)', display: 'block' }} /> 06 — Let's Connect
          </div>
          <h2 style={{ fontFamily: 'Inter,sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem,6vw,5.5rem)', lineHeight: 0.92, letterSpacing: '-0.04em', marginBottom: '1.8rem', color: 'var(--text)' }}>
            Say <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Hello.</em>
          </h2>
          <a href={`mailto:${EMAIL}`} aria-label="Send email" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.8rem', letterSpacing: '0.06em', color: 'var(--blue)', textDecoration: 'none', marginBottom: '2rem', padding: '0.55rem 0.9rem', border: '1px solid var(--border-strong)', background: 'var(--input-bg)', transition: 'background 0.2s, box-shadow 0.2s', borderRadius: 6 }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--blue-glow)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px var(--blue-glow)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--input-bg)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
            <FaEnvelope size={13} /> {EMAIL}
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <div style={{ marginBottom: '0.6rem', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>Find me on</div>
          <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label} aria-label={`Visit ${s.label}`}
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1rem', 
                  border: s.label === 'GitHub' ? '1px solid var(--border)' : `1px solid ${s.color}40`, 
                  background: s.label === 'GitHub' ? 'var(--input-bg)' : `${s.color}15`, 
                  color: s.label === 'GitHub' ? 'var(--text)' : s.color, 
                  transition: 'all 0.25s', textDecoration: 'none', cursor: 'pointer', borderRadius: 8 
                }}
                onMouseEnter={e => { 
                  (e.currentTarget as HTMLElement).style.background = s.label === 'GitHub' ? 'var(--text)' : s.color; 
                  (e.currentTarget as HTMLElement).style.color = s.label === 'GitHub' ? 'var(--bg)' : '#fff'; 
                  (e.currentTarget as HTMLElement).style.boxShadow = s.label === 'GitHub' ? '0 0 15px var(--text)' : `0 0 15px ${s.color}80`; 
                }}
                onMouseLeave={e => { 
                  (e.currentTarget as HTMLElement).style.background = s.label === 'GitHub' ? 'var(--input-bg)' : `${s.color}15`; 
                  (e.currentTarget as HTMLElement).style.color = s.label === 'GitHub' ? 'var(--text)' : s.color; 
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none'; 
                }}>
                {s.icon}
                <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Right — Form */}
      <div style={{
        flex: '1 1 400px',
        padding: 'clamp(3rem, 6vh, 5rem) clamp(1.5rem, 4vw, 7rem)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <span style={{ width: 20, height: 1, background: 'var(--blue)', display: 'block' }} /> Send a Message
          </div>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '0.5rem' }}>
            Drop me a note — name and email are optional. Your message goes straight to my inbox.
          </p>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.78rem', color: msgCount >= 3 ? '#ff5555' : 'var(--blue)', marginBottom: '1.5rem' }}>
            Messages sent today: {msgCount} / 3
          </div>
          {status === 'ok' ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ border: '1px solid var(--green-glow)', background: 'var(--blue-glow)', padding: '2rem', textAlign: 'center', borderRadius: 10 }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✦</div>
              <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.95rem', color: 'var(--green)', letterSpacing: '0.1em' }}>Message received. Thank you!</div>
            </motion.div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', maxWidth: 480 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.9rem' }}>
                {[{ key: 'name', placeholder: 'Name (optional)', type: 'text' }, { key: 'email', placeholder: 'Email (optional)', type: 'email' }].map(f => (
                  <input key={f.key} type={f.type} placeholder={f.placeholder} value={(form as any)[f.key]}
                    onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                    style={{ background: 'var(--input-bg)', border: '1px solid var(--input-border)', padding: '0.75rem 1rem', fontFamily: 'Inter,sans-serif', fontSize: '1rem', color: 'var(--text)', outline: 'none', width: '100%', transition: 'border-color 0.25s', borderRadius: 6 }}
                    onFocus={e => (e.target.style.borderColor = 'var(--input-focus)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--input-border)')} />
                ))}
              </div>
              <textarea placeholder="Your message..." required value={form.msg} onChange={e => setForm(prev => ({ ...prev, msg: e.target.value }))} rows={5}
                style={{ background: 'var(--input-bg)', border: '1px solid var(--input-border)', padding: '0.75rem 1rem', fontFamily: 'Inter,sans-serif', fontSize: '1rem', color: 'var(--text)', outline: 'none', width: '100%', resize: 'vertical', transition: 'border-color 0.25s', borderRadius: 6 }}
                onFocus={e => (e.target.style.borderColor = 'var(--input-focus)')}
                onBlur={e => (e.target.style.borderColor = 'var(--input-border)')} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button type="submit" disabled={status === 'sending'}
                  style={{ background: 'var(--blue)', color: '#000', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, padding: '0.8rem 2rem', cursor: 'pointer', border: 'none', transition: 'box-shadow 0.3s', opacity: status === 'sending' ? 0.65 : 1, borderRadius: 6 }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 24px var(--blue-glow)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
                {status === 'err' && <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.8rem', color: '#ff5555' }}>Failed — try emailing directly.</span>}
                {status === 'limit' && <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.8rem', color: '#ff5555' }}>Limit reached (3 msgs / 24h).</span>}
              </div>
            </form>
          )}
        </motion.div>
        </div>
        </div>
      </div>
      {/* Footer */}
      <footer style={{
        width: '100%',
        background: 'var(--footer-bg)', borderTop: '1px solid var(--border)',
        padding: '2rem clamp(1.5rem, 5vw, 5rem)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem', zIndex: 10,
        fontFamily: 'JetBrains Mono,monospace', fontSize: '0.85rem',
        letterSpacing: '0.08em', color: 'var(--muted)', textTransform: 'uppercase',
        fontWeight: 600,
      }}>
        <span>© 2026 <span style={{ color: 'var(--blue)' }}>Md. Meheraj Hossain</span>. All rights reserved.</span>
        <span>Built with Next.js · <span style={{ color: 'var(--blue)' }}>Dhaka, Bangladesh</span></span>
      </footer>
    </section>
  )
}
