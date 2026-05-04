'use client'
import { useState, useRef } from 'react'

import { askGemini } from '../actions/chat'

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<{role:'bot'|'user',text:string}[]>([
    {role:'bot',text:"Hey! 👋 I'm Meheraj's AI. Ask me about his projects, research, skills, or anything!"}
  ])
  const [inp, setInp] = useState('')
  const [loading, setLoading] = useState(false)
  const [sugsVisible, setSugsVisible] = useState(true)
  const endRef = useRef<HTMLDivElement>(null)

  const playClick = () => {
    try {
      const ctx = new AudioContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain); gain.connect(ctx.destination)
      osc.frequency.setValueAtTime(600, ctx.currentTime)
      gain.gain.setValueAtTime(0.08, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)
      osc.start(); osc.stop(ctx.currentTime + 0.08)
    } catch {}
  }

  const chat = async (text: string) => {
    if(!text.trim()) return
    playClick()
    setInp('')
    setSugsVisible(false)
    setMsgs(m => [...m, {role:'user',text}])
    setLoading(true)
    try {
      const reply = await askGemini(text)
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
      <button
        onClick={() => { setOpen(o => !o); playClick() }}
        style={{
          position:'fixed',bottom:'2.5rem',right:'2.5rem',zIndex:8000,
          width:54,height:54,borderRadius:'50%',
          background:'var(--bg)',border:'1px solid rgba(75,191,255,0.3)',
          display:'flex',alignItems:'center',justifyContent:'center',
          boxShadow:'0 0 20px rgba(75,191,255,0.15),0 4px 20px rgba(0,0,0,0.5)',
          cursor:'none',transition:'box-shadow 0.3s,transform 0.3s'
        }}
        onMouseEnter={e => { (e.currentTarget).style.boxShadow='0 0 35px rgba(75,191,255,0.4),0 4px 30px rgba(0,0,0,0.5)'; (e.currentTarget).style.transform='scale(1.08)' }}
        onMouseLeave={e => { (e.currentTarget).style.boxShadow='0 0 20px rgba(75,191,255,0.15),0 4px 20px rgba(0,0,0,0.5)'; (e.currentTarget).style.transform='scale(1)' }}
      >
        <div style={{
          position:'absolute',inset:0,borderRadius:'50%',
          border:'1px solid var(--blue)',
          animation:'ping 2.8s ease-out infinite'
        }}/>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4BBFFF" strokeWidth="1.8">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <style>{`@keyframes ping{0%{transform:scale(1);opacity:.6}100%{transform:scale(1.7);opacity:0}}`}</style>
      </button>

      {/* Chat window */}
      <div style={{
        position:'fixed',bottom:'7.5rem',right:'2.5rem',zIndex:8000,
        width:360,
        background:'rgba(8,10,18,0.97)',
        border:'1px solid rgba(75,191,255,0.2)',
        backdropFilter:'blur(30px)',
        display:'flex',flexDirection:'column',
        transform:open?'translateY(0) scale(1)':'translateY(16px) scale(0.94)',
        opacity:open?1:0,pointerEvents:open?'all':'none',
        transition:'transform 0.4s cubic-bezier(.34,1.56,.64,1),opacity 0.3s',
        boxShadow:'0 20px 60px rgba(0,0,0,0.6),0 0 40px rgba(75,191,255,0.04)'
      }}>
        {/* Header */}
        <div style={{padding:'1.2rem 1.4rem',borderBottom:'1px solid rgba(75,191,255,0.1)',display:'flex',alignItems:'center',gap:'0.9rem'}}>
          <div style={{width:32,height:32,borderRadius:'50%',border:'1px solid rgba(75,191,255,0.3)',background:'rgba(75,191,255,0.08)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Inter,sans-serif',fontWeight:800,fontSize:'0.8rem',color:'var(--blue)'}}>M</div>
          <div style={{flex:1}}>
            <div style={{fontFamily:'Inter,sans-serif',fontWeight:700,fontSize:'0.82rem',color:'var(--cream)'}}>Meheraj's AI</div>
            <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.5rem',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--blue)',display:'flex',alignItems:'center',gap:'0.35rem',marginTop:'0.1rem'}}>
              <span style={{width:4,height:4,background:'var(--blue)',borderRadius:'50%',boxShadow:'0 0 5px var(--blue)',display:'block'}}/>
              Online · Ask anything
            </div>
          </div>
          <button onClick={() => setOpen(false)} style={{background:'none',border:'none',color:'var(--muted)',fontSize:'0.9rem',cursor:'none',transition:'color 0.2s'}}
            onMouseEnter={e => (e.currentTarget.style.color='var(--cream)')}
            onMouseLeave={e => (e.currentTarget.style.color='var(--muted)')}
          >✕</button>
        </div>

        {/* Messages */}
        <div style={{flex:1,overflowY:'auto',padding:'1rem',display:'flex',flexDirection:'column',gap:'0.7rem',maxHeight:300}}>
          {msgs.map((m,i) => (
            <div key={i} style={{
              maxWidth:'88%',padding:'0.7rem 1rem',
              fontSize:'0.8rem',lineHeight:1.65,
              borderRadius:m.role==='bot'?'0 10px 10px 10px':'10px 0 10px 10px',
              alignSelf:m.role==='bot'?'flex-start':'flex-end',
              background:m.role==='bot'?'rgba(75,191,255,0.05)':'rgba(75,191,255,0.12)',
              border:`1px solid rgba(75,191,255,${m.role==='bot'?0.1:0.2})`,
              color:'var(--cream)',fontFamily:'Inter,sans-serif'
            }}>{m.text}</div>
          ))}
          {loading && (
            <div style={{maxWidth:'88%',padding:'0.65rem 1rem',background:'rgba(75,191,255,0.05)',border:'1px solid rgba(75,191,255,0.1)',borderRadius:'0 10px 10px 10px',display:'flex',alignItems:'center',gap:4}}>
              {[0,1,2].map(i => (
                <span key={i} style={{width:5,height:5,background:'var(--blue)',borderRadius:'50%',display:'block',animation:`bounce ${0.75}s ease-in-out ${i*0.13}s infinite`}}/>
              ))}
            </div>
          )}
          <div ref={endRef}/>
          <style>{`@keyframes bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-7px)}}`}</style>
        </div>

        {/* Suggestions */}
        {sugsVisible && (
          <div style={{padding:'0.6rem 1rem',display:'flex',flexWrap:'wrap',gap:'0.35rem',borderTop:'1px solid rgba(75,191,255,0.06)'}}>
            {sugs.map(s => (
              <button key={s} onClick={() => chat(s)} style={{
                fontFamily:'JetBrains Mono,monospace',fontSize:'0.5rem',letterSpacing:'0.1em',
                textTransform:'uppercase',padding:'0.3rem 0.65rem',
                border:'1px solid rgba(75,191,255,0.1)',background:'none',
                color:'var(--muted)',cursor:'none',transition:'all 0.2s'
              }}
              onMouseEnter={e => { (e.currentTarget).style.borderColor='rgba(75,191,255,0.3)';(e.currentTarget).style.color='var(--blue)' }}
              onMouseLeave={e => { (e.currentTarget).style.borderColor='rgba(75,191,255,0.1)';(e.currentTarget).style.color='var(--muted)' }}
              >{s}</button>
            ))}
          </div>
        )}

        {/* Input */}
        <div style={{padding:'0.85rem 1rem',borderTop:'1px solid rgba(75,191,255,0.1)',display:'flex',gap:'0.5rem'}}>
          <input
            value={inp} onChange={e => setInp(e.target.value)}
            onKeyDown={e => e.key==='Enter' && chat(inp)}
            placeholder="Ask about Meheraj..."
            style={{
              flex:1,background:'rgba(75,191,255,0.03)',border:'1px solid rgba(75,191,255,0.1)',
              padding:'0.6rem 0.85rem',fontFamily:'JetBrains Mono,monospace',fontSize:'0.78rem',
              color:'var(--cream)',outline:'none',transition:'border-color 0.3s'
            }}
            onFocus={e => (e.target.style.borderColor='rgba(75,191,255,0.3)')}
            onBlur={e => (e.target.style.borderColor='rgba(75,191,255,0.1)')}
          />
          <button onClick={() => chat(inp)} style={{
            background:'none',border:'1px solid rgba(75,191,255,0.2)',
            padding:'0.6rem 0.85rem',color:'var(--blue)',fontSize:'0.75rem',
            cursor:'none',transition:'background 0.2s,color 0.2s'
          }}
          onMouseEnter={e => { (e.currentTarget).style.background='var(--blue)';(e.currentTarget).style.color='#000' }}
          onMouseLeave={e => { (e.currentTarget).style.background='none';(e.currentTarget).style.color='var(--blue)' }}
          >→</button>
        </div>
      </div>
    </>
  )
}
