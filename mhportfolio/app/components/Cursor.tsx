'use client'
import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  let rx = 0, ry = 0

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { clientX: mx, clientY: my } = e
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
      if (labelRef.current) {
        labelRef.current.style.left = (mx + 18) + 'px'
        labelRef.current.style.top  = (my - 10) + 'px'
      }
      requestAnimationFrame(() => {
        rx += (mx - rx) * 0.12
        ry += (my - ry) * 0.12
        if (ringRef.current) {
          ringRef.current.style.left = rx + 'px'
          ringRef.current.style.top  = ry + 'px'
        }
      })
    }

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const hoverable = target.closest('[data-cursor]') as HTMLElement | null
      const label = hoverable?.dataset.cursor || ''

      if (dotRef.current) {
        dotRef.current.style.transform = label ? 'translate(-50%,-50%) scale(1.5)' : 'translate(-50%,-50%) scale(1)'
      }
      if (ringRef.current) {
        ringRef.current.style.width  = label ? '54px' : '36px'
        ringRef.current.style.height = label ? '54px' : '36px'
        ringRef.current.style.borderColor = label ? 'rgba(75,191,255,0.8)' : 'rgba(75,191,255,0.5)'
      }
      if (labelRef.current) {
        labelRef.current.style.opacity = label ? '1' : '0'
        labelRef.current.textContent = label
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleHover)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleHover)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position:'fixed',zIndex:9999,pointerEvents:'none',
        width:8,height:8,borderRadius:'50%',
        background:'var(--blue)',
        transform:'translate(-50%,-50%)',
        boxShadow:'0 0 15px var(--blue)',
        mixBlendMode:'screen',
        transition:'transform 0.15s',
      }}/>
      <div ref={ringRef} style={{
        position:'fixed',zIndex:9998,pointerEvents:'none',
        width:36,height:36,borderRadius:'50%',
        border:'1px solid rgba(75,191,255,0.5)',
        transform:'translate(-50%,-50%)',
        transition:'width 0.25s,height 0.25s,border-color 0.25s',
      }}/>
      {/* Cursor label */}
      <div ref={labelRef} style={{
        position:'fixed',zIndex:9997,pointerEvents:'none',
        fontFamily:'JetBrains Mono,monospace',fontSize:'0.55rem',
        letterSpacing:'0.1em',textTransform:'uppercase',
        color:'var(--blue)',opacity:0,
        transition:'opacity 0.2s',
        whiteSpace:'nowrap',
      }}/>
    </>
  )
}
