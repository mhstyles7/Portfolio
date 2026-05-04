'use client'
import { useEffect, useRef, useState } from 'react'

export default function Loader() {
  const [pct, setPct] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let current = 0
    const iv = setInterval(() => {
      current += Math.random() * 12 + 4
      if (current >= 100) {
        current = 100
        clearInterval(iv)
        setTimeout(() => {
          setExiting(true)
          setTimeout(() => setHidden(true), 700)
        }, 400)
      }
      setPct(Math.floor(current))
    }, 60)
    return () => clearInterval(iv)
  }, [])

  if (hidden) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 8000,
      background: '#000',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '2rem',
      transition: 'opacity 0.7s ease, transform 0.7s ease',
      opacity: exiting ? 0 : 1,
      transform: exiting ? 'translateY(-20px)' : 'none',
      pointerEvents: exiting ? 'none' : 'all',
      overflow: 'hidden'
    }}>
      {/* scanlines */}
      <div style={{
        position:'absolute',inset:0,
        background:'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.3) 2px,rgba(0,0,0,0.3) 4px)',
        pointerEvents:'none'
      }}/>

      {/* Top bar */}
      <div style={{position:'absolute',top:'2.5rem',left:'3rem',right:'3rem',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{display:'flex',alignItems:'center',gap:'0.5rem',fontFamily:'JetBrains Mono,monospace',fontSize:'0.6rem',letterSpacing:'0.2em',color:'#ff3232'}}>
          <span style={{width:7,height:7,background:'#ff3232',borderRadius:'50%',display:'block',animation:'blink 1s steps(1) infinite'}}/>
          REC
        </div>
        <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.6rem',letterSpacing:'0.2em',color:'rgba(75,191,255,0.7)'}}>
          MHOSSAIN_PORTFOLIO_V2
        </div>
      </div>

      {/* Name */}
      <div style={{
        fontFamily:'Inter,sans-serif',fontWeight:800,
        fontSize:'clamp(4rem,12vw,9rem)',
        letterSpacing:'-0.02em',lineHeight:1,
        color:'#F2EDE4',textAlign:'center',
        position:'relative',
        animation:'glitch 4s infinite'
      }}>
        MEHERAJ
      </div>

      {/* Progress bars */}
      <div style={{width:'min(340px,80vw)',display:'flex',flexDirection:'column',gap:'0.6rem'}}>
        {[
          {label:'LOADING', pct, color:'var(--blue)'},
          {label:'SIGNAL', pct:88, color:'#C8A96A'},
          {label:'AUDIO', pct:100, color:'#6FEA6F'},
        ].map(b => (
          <div key={b.label} style={{display:'flex',alignItems:'center',gap:'1rem'}}>
            <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.5rem',letterSpacing:'0.15em',color:'rgba(75,191,255,0.6)',width:60}}>{b.label}</span>
            <div style={{flex:1,height:2,background:'rgba(255,255,255,0.07)',overflow:'hidden'}}>
              <div style={{height:'100%',width:b.pct+'%',background:b.color,boxShadow:`0 0 6px ${b.color}`,transition:'width 0.05s linear'}}/>
            </div>
            <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.5rem',color:b.color,width:30,textAlign:'right'}}>{b.pct}%</span>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div style={{position:'absolute',bottom:'2.5rem',left:'3rem',right:'3rem',display:'flex',justifyContent:'space-between',fontFamily:'JetBrains Mono,monospace',fontSize:'0.5rem',letterSpacing:'0.15em',color:'rgba(255,255,255,0.2)'}}>
        <span>DHAKA, BD</span>
        <span>BRAC UNIVERSITY · CSE</span>
        <span>2026</span>
      </div>

      <style>{`
        @keyframes glitch {
          0%,94%,100%{transform:translate(0)}
          95%{transform:translate(-3px,1px)}
          96%{transform:translate(2px,-1px)}
          97%{transform:translate(-2px,2px)}
        }
        @keyframes blink {0%,49%{opacity:1}50%,100%{opacity:0}}
      `}</style>
    </div>
  )
}
