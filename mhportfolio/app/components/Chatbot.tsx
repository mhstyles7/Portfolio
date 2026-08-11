'use client'
import { useState, useRef } from 'react'
import { askGemini } from '../actions/chat'
import { FaRobot } from 'react-icons/fa'

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<{role:'bot'|'user',text:string}[]>([
    {role:'bot',text:"Hi! I'm Meheraj's AI assistant. Ask me about his projects, research, skills, or background."}
  ])
  const [inp, setInp] = useState('')
  const [loading, setLoading] = useState(false)
  const [sugsVisible, setSugsVisible] = useState(true)
  const endRef = useRef<HTMLDivElement>(null)

  const chat = async (text: string) => {
    if(!text.trim()) return
    setInp('')
    setSugsVisible(false)
    const newMsgs = [...msgs, {role:'user' as const, text}]
    setMsgs(newMsgs)
    setLoading(true)
    try {
      const reply = await askGemini(newMsgs)
      setMsgs(m => [...m, {role:'bot',text:reply}])
    } catch {
      setMsgs(m => [...m, {role:'bot',text:"Something went wrong. Please try again!"}])
    }
    setLoading(false)
    setTimeout(() => endRef.current?.scrollIntoView({behavior:'smooth'}), 100)
  }

  const sugs = ["His projects","Thesis research","Tech skills","Open to work?"]

  return (
    <>
      {/* FAB */}
      <button onClick={() => setOpen(o => !o)} aria-label={open ? 'Close AI chat' : 'Open AI chat'}
        className="chatbot-fab"
        style={{
          position:'fixed', bottom:'2rem', right:'2rem', zIndex:8000,
          borderRadius: 30, background:'var(--blue-glow)', border:'1px solid var(--blue)',
          display:'flex', alignItems:'center', gap: '0.55rem', padding: '0.65rem 1.1rem',
          boxShadow:'0 0 20px var(--blue-glow)', cursor:'pointer', transition:'all 0.3s'
        }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow='0 0 35px var(--blue-glow)'; e.currentTarget.style.transform='scale(1.05)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow='0 0 20px var(--blue-glow)'; e.currentTarget.style.transform='scale(1)' }}>
        <div style={{ position:'absolute', inset:0, borderRadius:30, border:'1px solid var(--blue)', animation:'ping 2.8s ease-out infinite' }}/>
        <FaRobot size={18} color="var(--blue)" />
        <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text)', whiteSpace: 'nowrap' }}>Let's talk!</span>
        <style>{`@keyframes ping{0%{transform:scale(1);opacity:.6}100%{transform:scale(1.3);opacity:0}}`}</style>
      </button>

      {/* Chat window */}
      <div className="chatbot-window" style={{ position:'fixed', bottom:'7rem', right:'1rem', zIndex:8000, width:'min(360px, calc(100vw - 2rem))', background:'var(--nav-bg)', border:'1px solid var(--border-strong)', backdropFilter:'blur(30px)', display:'flex', flexDirection:'column', transform:open?'translateY(0) scale(1)':'translateY(16px) scale(0.94)', opacity:open?1:0, pointerEvents:open?'all':'none', transition:'transform 0.4s cubic-bezier(.34,1.56,.64,1),opacity 0.3s', boxShadow:'var(--shadow-xl)', borderRadius: 12 }}>
        {/* Header */}
        <div style={{ padding:'1rem 1.2rem', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', gap:'0.8rem' }}>
          {/* AI avatar with brain icon */}
          <div style={{
            width: 38, height: 38, borderRadius: 10, flexShrink: 0,
            background: 'linear-gradient(135deg, var(--blue-glow) 0%, var(--surface2) 100%)',
            border: '1px solid var(--blue)',
            boxShadow: '0 0 12px var(--blue-glow)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <FaRobot size={20} color="var(--blue)" />
          </div>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:'Inter,sans-serif', fontWeight:700, fontSize:'0.88rem', color:'var(--text)' }}>Meheraj's AI</div>
            <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.52rem', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--blue)', display:'flex', alignItems:'center', gap:'0.35rem', marginTop:'0.1rem' }}>
              <span style={{ width:5, height:5, background:'var(--green)', borderRadius:'50%', boxShadow:'0 0 5px var(--green)', display:'block' }}/>
              Online · Ask anything
            </div>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close chat"
            style={{ background:'none', border:'none', color:'var(--text)', fontSize:'1rem', cursor:'pointer', transition:'color 0.2s', lineHeight:1, padding:'0.2rem' }}
            onMouseEnter={e => (e.currentTarget.style.color='var(--blue)')}
            onMouseLeave={e => (e.currentTarget.style.color='var(--text)')}>✕</button>
        </div>

        {/* Messages */}
        <div style={{ flex:1, overflowY:'auto', padding:'1rem', display:'flex', flexDirection:'column', gap:'0.7rem', maxHeight:300 }}>
          {msgs.map((m,i) => (
            <div key={i} style={{ maxWidth:'88%', padding:'0.7rem 1rem', fontSize:'0.82rem', lineHeight:1.65, borderRadius:m.role==='bot'?'0 10px 10px 10px':'10px 0 10px 10px', alignSelf:m.role==='bot'?'flex-start':'flex-end', background:m.role==='bot'?'var(--blue-glow)':'var(--input-bg)', border:`1px solid var(--border)`, color:'var(--text)', fontFamily:'Inter,sans-serif' }}>{m.text}</div>
          ))}
          {loading && (
            <div style={{ maxWidth:'88%', padding:'0.65rem 1rem', background:'var(--blue-glow)', border:'1px solid var(--border)', borderRadius:'0 10px 10px 10px', display:'flex', alignItems:'center', gap:4 }}>
              {[0,1,2].map(i => <span key={i} style={{ width:5, height:5, background:'var(--blue)', borderRadius:'50%', display:'block', animation:`bounce ${0.75}s ease-in-out ${i*0.13}s infinite` }}/>)}
            </div>
          )}
          <div ref={endRef}/>
          <style>{`@keyframes bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-7px)}}`}</style>
        </div>

        {/* Suggestions */}
        {sugsVisible && (
          <div style={{ padding:'0.6rem 1rem', display:'flex', flexWrap:'wrap', gap:'0.4rem', borderTop:'1px solid var(--border)' }}>
            {sugs.map(s => (
              <button key={s} onClick={() => chat(s)}
                style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.55rem', letterSpacing:'0.1em', textTransform:'uppercase', padding:'0.35rem 0.7rem', border:'1px solid var(--border-strong)', background:'var(--surface2)', color:'var(--text)', cursor:'pointer', transition:'all 0.2s', borderRadius: 6 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='var(--blue)'; e.currentTarget.style.color='var(--blue)'; e.currentTarget.style.background='var(--blue-glow)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border-strong)'; e.currentTarget.style.color='var(--text)'; e.currentTarget.style.background='var(--surface2)' }}>{s}</button>
            ))}
          </div>
        )}

        {/* Input */}
        <div style={{ padding:'0.85rem 1rem', borderTop:'1px solid var(--border)', display:'flex', gap:'0.5rem' }}>
          <input value={inp} onChange={e => setInp(e.target.value)} onKeyDown={e => e.key==='Enter' && chat(inp)} placeholder="Ask about Meheraj..."
            style={{ flex:1, background:'var(--input-bg)', border:'1px solid var(--input-border)', padding:'0.6rem 0.85rem', fontFamily:'JetBrains Mono,monospace', fontSize:'0.78rem', color:'var(--text)', outline:'none', transition:'border-color 0.3s', borderRadius: 6 }}
            onFocus={e => (e.target.style.borderColor='var(--input-focus)')} onBlur={e => (e.target.style.borderColor='var(--input-border)')} />
          <button onClick={() => chat(inp)}
            style={{ background:'var(--blue)', border:'none', padding:'0.6rem 1rem', color:'#000', fontWeight:700, fontSize:'0.8rem', cursor:'pointer', transition:'box-shadow 0.2s', borderRadius: 6 }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow='0 0 18px var(--blue-glow)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow='none' }}>→</button>
        </div>
      </div>
    </>
  )
}
