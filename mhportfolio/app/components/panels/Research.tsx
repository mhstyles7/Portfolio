'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { SiGooglescholar, SiResearchgate, SiOrcid } from 'react-icons/si'
import { FaDownload, FaExternalLinkAlt, FaMicrochip, FaTimes, FaExpandAlt, FaFileAlt, FaLaptopCode, FaMicrophone, FaUniversity, FaHandshake } from 'react-icons/fa'

const researchProfiles = [
  { href: 'https://scholar.google.com/citations?user=wl2xVSQAAAAJ&hl=en', icon: <SiGooglescholar size={16} />, label: 'Scholar', color: '#4285F4' },
  { href: 'https://www.researchgate.net/profile/Md-Meheraj-Hossain', icon: <SiResearchgate size={16} />, label: 'ResearchGate', color: '#00CCBB' },
  { href: 'https://orcid.org/0009-0009-0796-3751', icon: <SiOrcid size={16} />, label: 'ORCID', color: '#A6CE39' },
]

export default function Research() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null)

  return (
    <section id="research" style={{
      width: '100%',
      padding: 'clamp(4rem, 8vh, 7rem) clamp(1.5rem, 5vw, 3rem)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem',
    }}>
      {/* Section Header */}
      <div style={{ maxWidth: 1200, width: '100%' }}>
        <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <span style={{ width: 20, height: 1, background: 'var(--blue)', display: 'block' }} /> 05 — Research
        </div>
        <h2 style={{ fontFamily: 'Inter,sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 0.95, letterSpacing: '-0.04em', color: 'var(--text)' }}>
          Published <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Work.</em>
        </h2>
      </div>

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

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

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
                  ; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 18px var(--blue-glow)'
                  ; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
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
                    style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.35rem 0.6rem', border: `1px solid ${s.color}40`, borderRadius: 7, background: `${s.color}15`, color: s.color, transition: 'all 0.25s', textDecoration: 'none' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${s.color}30` }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${s.color}15` }}>
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
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text)', marginBottom: '0.5rem', textAlign: 'justify' }}>
                <strong style={{ color: 'var(--text)' }}>The Challenge:</strong> Signature-based intrusion detection fails against zero-day attacks in IoT networks because they rely on known attack patterns.
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text)', textAlign: 'justify' }}>
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
                  <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.85rem', color: 'var(--text)', lineHeight: 1.6 }}><strong>Unsupervised Anomaly Detection:</strong> Built multi-model pipelines (PCA, Autoencoder) to isolate abnormal IoT traffic from benign network behavior.</span>
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
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                border: 'none',
                background: 'linear-gradient(135deg, var(--green) 0%, #008f11 100%)',
                boxShadow: '0 4px 18px var(--green-glow)',
                fontFamily: 'JetBrains Mono,monospace', fontSize: '0.72rem',
                letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700,
                padding: '0.65rem 1.3rem', color: '#fff',
                textDecoration: 'none', transition: 'box-shadow 0.25s, transform 0.2s', borderRadius: 8, marginBottom: '1rem'
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px var(--green-glow)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 18px var(--green-glow)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
              <FaDownload size={13} /> Download Paper
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
                { v: '2.21%', l: 'False-Positive\nRate' },
              ].map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}
                  style={{ textAlign: 'center', padding: '0.9rem', border: '1px solid var(--border)', borderRadius: 10, background: 'var(--blue-glow)', backdropFilter: 'blur(8px)' }}>
                  <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: 'clamp(1.3rem,2.5vw,2rem)', color: 'var(--blue)', textShadow: '0 0 24px var(--blue-glow)' }}>{m.v}</div>
                  <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)', marginTop: '0.35rem', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{m.l}</div>
                </motion.div>
              ))}
            </div>

            {/* Author + journal note */}
            <div style={{ marginTop: '1rem', padding: '0.6rem 0.9rem', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--input-bg)', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.62rem', letterSpacing: '0.06em', color: 'var(--text)', lineHeight: 1.7 }}>
              <span style={{ color: 'var(--text)', fontWeight: 700 }}>First Author</span> — Md. Meheraj Hossain et al.
              &nbsp;·&nbsp;<span style={{ color: 'var(--blue)' }}>ICT Express (Elsevier)</span>
              &nbsp;·&nbsp;IF 4.2 · CiteScore 10.8
            </div>
          </div>
        </div>
      </div>

      {/* ── NEW: NSU Cybersecurity Center Showcase ── */}
      <div id="nsu-showcase" style={{
        scrollMarginTop: '120px',
        maxWidth: 1200, width: '100%',
        borderRadius: 24, border: '1px solid var(--border)', overflow: 'hidden',
        background: 'var(--card-bg)',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex', flexDirection: 'column'
      }}>
        {/* Hero Section */}
        <div style={{
          position: 'relative',
          width: '100%', minHeight: '40vh',
          display: 'flex', alignItems: 'flex-end',
          padding: 'clamp(2rem, 5vw, 4rem)',
        }}>
          {/* Premium Mesh Gradient Background */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 0,
            background: 'var(--surface)',
            overflow: 'hidden'
          }}>
            {/* Base rich gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)' }} />
            {/* Glowing orbs */}
            <div style={{
              position: 'absolute', top: '-20%', right: '-10%', width: '60%', height: '140%',
              background: 'radial-gradient(circle, rgba(75,191,255,0.15) 0%, transparent 60%)',
              filter: 'blur(40px)', mixBlendMode: 'screen'
            }} />
            <div style={{
              position: 'absolute', bottom: '-30%', left: '-10%', width: '50%', height: '100%',
              background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 60%)',
              filter: 'blur(50px)', mixBlendMode: 'screen'
            }} />
          </div>
          
          {/* Subtle Grid overlay */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 1,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px', opacity: 1
          }} />
          
          {/* Gradient Overlay to fade into content */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: 'linear-gradient(to top, var(--card-bg) 0%, transparent 100%)',
          }} />
          
          {/* Title & Subtitle */}
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 850 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                <span style={{ width: 20, height: 2, background: 'var(--blue)', display: 'block' }} />
                Event Showcase
              </div>
              <h3 style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--text)', lineHeight: 1.15, marginBottom: '1rem', textShadow: '0 2px 24px var(--blue-glow)' }}>
                North South University Cybersecurity Center (NSU CSC) Showcase 2026
              </h3>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Presented our Q1-indexed research and AI-powered cybersecurity platform during the inaugural NSU Cybersecurity Center Showcase.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: 'clamp(2rem, 5vw, 4rem)' }}>
          
          {/* Left Col: About & Highlights */}
          <div style={{ flex: '1 1 450px', paddingRight: 'clamp(0px, 4vw, 3rem)' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h4 style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text)', marginBottom: '1rem' }}>About the Event</h4>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.7, marginBottom: '2.5rem', textAlign: 'justify' }}>
                Selected to present our published Q1-indexed cybersecurity research and AI-powered platform at the inaugural NSU Cybersecurity Center Showcase, engaging with researchers, industry professionals, and government representatives.
              </p>
              
              <h4 style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text)', marginBottom: '1.2rem' }}>Highlights</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: <FaFileAlt size={14} />,    text: 'Presented Q1-indexed research paper' },
                  { icon: <FaLaptopCode size={14} />, text: 'Demonstrated AI-powered cybersecurity platform' },
                  { icon: <FaMicrophone size={14} />, text: 'Discussed research with professors and cybersecurity professionals' },
                  { icon: <FaUniversity size={14} />, text: 'Presented during the inauguration of NSU CSC' },
                  { icon: <FaHandshake size={14} />,  text: 'Received encouraging feedback from researchers and government representatives' },
                ].map((hl, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '0.8rem 1.2rem', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 10 }}>
                    <span style={{ color: 'var(--blue)', marginTop: '0.15rem', flexShrink: 0 }}>{hl.icon}</span>
                    <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.5 }}>{hl.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Col: Video */}
          <div style={{ flex: '1 1 350px', marginTop: 'clamp(2.5rem, 5vw, 0px)' }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ width: '100%', height: '100%', minHeight: 400, borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--bg)', boxShadow: 'var(--shadow-lg)' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/km0UOh83MNY"
                title="NSU CSC Showcase Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ minHeight: 500 }}
              ></iframe>
            </motion.div>
          </div>
          
        </div>

        {/* Gallery Section */}
        <div style={{ padding: '0 clamp(2rem, 5vw, 4rem) clamp(2rem, 5vw, 4rem)' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text)', marginBottom: '1.5rem' }}>Event Gallery</h4>
            
            {/* Image Grid / Scroll */}
            <div style={{ 
              display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem', 
              scrollSnapType: 'x mandatory', scrollbarWidth: 'thin'
            }}>
              {[
                '/nsucsc cover.jpg',
                '/NSU Cybersecurity Center Project showcase (1).png',
                '/NSU Cybersecurity Center Project showcase (2).jpg',
                '/NSU Cybersecurity Center Project showcase (2).png',
                '/NSU Cybersecurity Center Project showcase (3).jpg',
                '/NSU Cybersecurity Center Project showcase (4).JPG',
                '/NSU Cybersecurity Center Project showcase  (1).JPG',
                '/NSU Cybersecurity Center Project showcase  (1).jpeg',
                '/NSU Cybersecurity Center Project showcase  (2).jpg',
              ].map((src, i) => (
                <div key={i}
                  onClick={() => setLightboxImg(src)}
                  style={{
                    flex: '0 0 auto', width: 'clamp(250px, 35vw, 350px)', aspectRatio: '4/3', 
                    borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)',
                    scrollSnapAlign: 'start', position: 'relative', background: 'var(--surface2)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={e => {
                    const overlay = e.currentTarget.querySelector('.expand-overlay') as HTMLElement;
                    if (overlay) overlay.style.opacity = '1';
                  }}
                  onMouseLeave={e => {
                    const overlay = e.currentTarget.querySelector('.expand-overlay') as HTMLElement;
                    if (overlay) overlay.style.opacity = '0';
                  }}
                >
                  <Image src={src} alt={`NSU CSC Event ${i+1}`} fill sizes="(max-width: 768px) 80vw, 350px" style={{ objectFit: 'cover' }} />
                  <div className="expand-overlay" style={{
                    position: 'absolute', top: '0.7rem', right: '0.7rem',
                    background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)',
                    padding: '0.35rem 0.6rem', borderRadius: 6,
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    fontFamily: 'JetBrains Mono,monospace', fontSize: '0.6rem',
                    letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff',
                    opacity: 0, transition: 'opacity 0.2s', pointerEvents: 'none',
                  }}>
                    <FaExpandAlt size={9} /> View
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxImg(null)}
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
                position: 'relative',
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                overflow: 'hidden',
                maxWidth: 1000,
                width: '100%',
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
                  <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)' }}>Event Gallery</div>
                  <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', marginTop: '0.2rem' }}>NSU Cybersecurity Center Showcase</div>
                </div>
                <button
                  onClick={() => setLightboxImg(null)}
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
              <div style={{ position: 'relative', width: '100%', height: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#000' }}>
                <Image
                  src={lightboxImg}
                  alt="Gallery Lightbox"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
