'use client'
import { motion } from 'framer-motion'
import { SiGooglescholar, SiResearchgate, SiOrcid } from 'react-icons/si'
import { FaDownload, FaExternalLinkAlt, FaMicrochip } from 'react-icons/fa'

const researchProfiles = [
  { href: 'https://scholar.google.com/citations?user=wl2xVSQAAAAJ&hl=en', icon: <SiGooglescholar size={16} />, label: 'Scholar', color: '#4285F4' },
  { href: 'https://www.researchgate.net/profile/Md-Meheraj-Hossain', icon: <SiResearchgate size={16} />, label: 'ResearchGate', color: '#00CCBB' },
  { href: 'https://orcid.org/0009-0009-0796-3751', icon: <SiOrcid size={16} />, label: 'ORCID', color: '#A6CE39' },
]

export default function Research() {
  return (
    <section id="research" style={{
      width: '100%',
      padding: 'clamp(4rem, 8vh, 7rem) clamp(1.5rem, 5vw, 3rem)',
      display: 'flex', justifyContent: 'center',
      background: 'var(--bg)',
    }}>
      <div style={{
        maxWidth: 1200, width: '100%',
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
        borderRadius: 24, border: '1px solid var(--border)', overflow: 'hidden',
        background: 'var(--card-bg)',
        boxShadow: 'var(--shadow-lg)',
      }}>

      {/* ── Left column ── */}
      <div style={{
        flex: '1 1 500px',
        padding: 'clamp(4rem, 8vh, 5rem) clamp(1.5rem, 4vw, 6rem)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
        borderRight: '1px solid var(--border)',
        position: 'relative',
        background: 'radial-gradient(circle at 40% 60%, var(--blue-glow) 0%, transparent 70%)',
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

          {/* Section label */}
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <span style={{ width: 20, height: 2, background: 'var(--blue)', display: 'block' }} />
            05 — Research
          </div>

          {/* ── DOI — highlighted, above title ── */}
          <a
            href="https://doi.org/10.1016/j.icte.2026.05.001"
            target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              marginBottom: '1rem',
              padding: '0.65rem 1.3rem',
              background: 'linear-gradient(135deg, var(--blue) 0%, #0058a3 100%)',
              border: 'none',
              borderRadius: 8,
              fontFamily: 'JetBrains Mono,monospace', fontSize: '0.72rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#fff', fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 4px 18px var(--blue-glow)',
              transition: 'box-shadow 0.25s, transform 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px var(--blue-glow)'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 18px var(--blue-glow)'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            }}
          >
            <FaExternalLinkAlt size={11} />
            DOI: 10.1016/j.icte.2026.05.001
          </a>

          {/* Status + profiles row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.7rem', marginBottom: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ width: 7, height: 7, background: 'var(--green)', borderRadius: '50%', boxShadow: '0 0 8px var(--green)', animation: 'pulse 2s infinite', flexShrink: 0 }} />
              <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--green)', border: '1px solid var(--green-glow)', padding: '0.35rem 0.8rem', borderRadius: 6 }}>ICT Express · Elsevier · ✓ Published</span>
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {researchProfiles.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.35rem 0.6rem', border: '1px solid var(--border)', borderRadius: 7, background: 'transparent', color: 'var(--muted)', transition: 'all 0.25s', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = s.color; (e.currentTarget as HTMLElement).style.borderColor = s.color; (e.currentTarget as HTMLElement).style.background = `${s.color}15` }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}>
                  {s.icon}
                  <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem', letterSpacing: '0.07em', textTransform: 'uppercase' }}>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Title */}
          <h2 style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: 'clamp(1.05rem,2vw,1.7rem)', lineHeight: 1.25, letterSpacing: '-0.015em', marginBottom: '0.9rem', color: 'var(--text)' }}>
            A Cross-Dataset Based Zero-Day Intrusion Detection System by Integrating{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Siamese Network and Reinforcement Learning</em>
          </h2>

        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>

          {/* Executive Summary / The Challenge & Solution */}
          <div style={{ marginBottom: '1.2rem' }}>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '0.5rem', textAlign: 'justify' }}>
              <strong style={{ color: 'var(--text)' }}>The Challenge:</strong> Signature-based intrusion detection fails against zero-day attacks in IoT networks because they rely on known attack patterns.
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--muted)', textAlign: 'justify' }}>
              <strong style={{ color: 'var(--text)' }}>My Solution:</strong> I engineered a hybrid, self-learning Intrusion Detection System (IDS) that dynamically identifies and mitigates novel exploits without relying on prior attack signatures.
            </p>
          </div>

          {/* Core Contributions */}
          <div style={{ padding: '1rem 1.2rem', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 10, marginBottom: '1.2rem', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)' }}>
            <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaMicrochip size={12} /> Core Architecture &amp; Contributions
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                 <span style={{ color: 'var(--green)', marginTop: '0.2rem', fontSize: '0.7rem' }}>✦</span>
                 <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.85rem', color: 'var(--text)', lineHeight: 1.6 }}><strong>Unsupervised Anomaly Detection:</strong> Built multi-model pipelines (PCA, Autoencoder, Isolation Forest) to isolate abnormal IoT traffic from benign network behavior.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                 <span style={{ color: 'var(--blue)', marginTop: '0.2rem', fontSize: '0.7rem' }}>✦</span>
                 <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.85rem', color: 'var(--text)', lineHeight: 1.6 }}><strong>Cross-Dataset Siamese Filtering:</strong> Developed a non-parametric Siamese distance analyzer to extract structurally rare zero-day attack candidates across diverse environments.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                 <span style={{ color: 'var(--amber)', marginTop: '0.2rem', fontSize: '0.7rem' }}>✦</span>
                 <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.85rem', color: 'var(--text)', lineHeight: 1.6 }}><strong>Adaptive PPO RL Agent:</strong> Engineered a Proximal Policy Optimization (PPO) reinforcement learning agent that autonomously learns optimal defense policies via environmental feedback.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                 <span style={{ color: '#a78bfa', marginTop: '0.2rem', fontSize: '0.7rem' }}>✦</span>
                 <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.85rem', color: 'var(--text)', lineHeight: 1.6 }}><strong>Scalable Evaluation:</strong> Validated the architecture on massive datasets (CIC-IoT-2023 &amp; CIC-BCCC-NRC-2024), proving high cross-dataset generalization and real-time operational capability.</span>
              </div>
            </div>
          </div>

          {/* Keywords */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
            {['Zero-Day', 'Cybersecurity', 'Reinforcement Learning', 'Anomaly Detection', 'Siamese Network', 'PPO', 'IoT Security'].map(t => (
              <span key={t} style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.22rem 0.55rem', background: 'var(--blue-glow)', border: '1px solid var(--border)', color: 'var(--blue)', borderRadius: 4 }}>{t}</span>
            ))}
          </div>

          {/* Download button */}
          <a href="/Q1 paper_ICT Express.pdf" download="Hossain_et_al_ICT_Express_2025.pdf"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border-strong)', background: 'transparent', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.6rem 1.2rem', color: 'var(--muted)', textDecoration: 'none', transition: 'all 0.2s', borderRadius: 8, marginBottom: '1rem' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--blue)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--blue)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 14px var(--blue-glow)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
            <FaDownload size={12} /> Download Paper
          </a>

          {/* Research Domain — at bottom */}
          <div style={{ padding: '0.6rem 0.9rem', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 8, display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700, flexShrink: 0 }}>Research Domain:</span>
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.84rem', color: 'var(--text)' }}>Cybersecurity · Machine Learning · Intrusion Detection · IoT Security</span>
          </div>

        </motion.div>
        <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.35}}`}</style>
      </div>

      {/* ── Right column — metrics ── */}
      <div style={{
        flex: '1 1 360px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(3rem, 6vh, 5.5rem) clamp(1.5rem, 4vw, 4rem)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Ghost watermark */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter,sans-serif', fontWeight: 800, fontStyle: 'italic', fontSize: 'clamp(6rem, 18vw, 18rem)', color: 'var(--blue-glow)', pointerEvents: 'none', userSelect: 'none', opacity: 0.12 }}>RL</div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 420 }}>
          {/* Hero metric */}
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, type: 'spring' }} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: 'clamp(2.6rem,5.5vw,4.5rem)', lineHeight: 1, color: 'var(--blue)', textShadow: '0 0 50px var(--blue-glow)' }}>99.28%</div>
            <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text)', marginTop: '0.5rem' }}>Training Accuracy</div>
          </motion.div>

          {/* 4 sub-metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
            {[
              { v: '99.07%', l: 'Unseen Attack\nAccuracy' },
              { v: '93.94%', l: 'Zero-Day\nDetection Rate' },
              { v: '0.50 ms', l: 'Detection\nLatency' },
              { v: '2.21%',  l: 'False-Positive\nRate' },
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}
                style={{ textAlign: 'center', padding: '0.9rem', border: '1px solid var(--border)', borderRadius: 10, background: 'var(--blue-glow)', backdropFilter: 'blur(8px)' }}>
                <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: 'clamp(1.3rem,2.5vw,2rem)', color: 'var(--blue)', textShadow: '0 0 24px var(--blue-glow)' }}>{m.v}</div>
                <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)', marginTop: '0.35rem', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{m.l}</div>
              </motion.div>
            ))}
          </div>

          {/* Author + journal note */}
          <div style={{ marginTop: '1rem', padding: '0.6rem 0.9rem', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--input-bg)', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.62rem', letterSpacing: '0.06em', color: 'var(--muted)', lineHeight: 1.7 }}>
            <span style={{ color: 'var(--text)', fontWeight: 700 }}>First Author</span> — Md. Meheraj Hossain et al.
            &nbsp;·&nbsp;<span style={{ color: 'var(--blue)' }}>ICT Express (Elsevier)</span>
            &nbsp;·&nbsp;IF 4.2 · CiteScore 10.8
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
