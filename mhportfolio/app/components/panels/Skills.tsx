'use client'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaShieldAlt, FaMicrochip, FaKey, FaGitAlt, FaFlask, FaNetworkWired, FaProjectDiagram, FaCogs, FaFileAlt, FaServer, FaBrain } from 'react-icons/fa'
import { 
  SiReact, SiNextdotjs, SiHtml5, SiJavascript, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiPython, SiTensorflow, SiScikitlearn, SiGooglegemini,
  SiWireshark, SiC, SiJsonwebtokens, SiGithub, SiVercel, SiLinux, SiTypescript
} from 'react-icons/si'
type SkillLevel = 'Production' | 'Research Grade' | 'Research' | 'Shipped' | 'Daily Use' | 'Published'

const skills: { Icon: React.ElementType; name: string; items: string[]; level: SkillLevel }[] = [
  { Icon: FaReact,     name: 'Frontend',    items: ['React.js', 'Next.js', 'HTML5 / CSS3', 'JavaScript ES6+'],              level: 'Production' },
  { Icon: FaNodeJs,    name: 'Backend',     items: ['Node.js', 'Express.js', 'MongoDB', 'SQL · REST APIs'],                 level: 'Production' },
  { Icon: FaPython,    name: 'ML / AI',     items: ['Python', 'TensorFlow · PyTorch', 'Scikit-learn', 'Gemini API'],        level: 'Research Grade' },
  { Icon: FaShieldAlt, name: 'Security',    items: ['Wireshark', 'Intrusion Detection', 'Network Analysis', 'Anomaly Det.'],level: 'Research' },
  { Icon: FaMicrochip, name: 'IoT',         items: ['ESP32 · C', 'Sensor Networks', 'Embedded Systems', 'MOSFET Circuits'], level: 'Shipped' },
  { Icon: FaKey,       name: 'Auth & APIs', items: ['JWT · OAuth', 'OCR API', 'REST APIs', 'MVC Architecture'],             level: 'Production' },
  { Icon: FaGitAlt,    name: 'DevOps',      items: ['Git · GitHub', 'Vercel · Render', 'Linux · Postman', 'TypeScript'],    level: 'Daily Use' },
  { Icon: FaFlask,     name: 'Research',    items: ['Academic Writing', 'Data Analysis', 'Elsevier ICT Express', 'PPO · RL'],level: 'Published' },
]

const levelColors: Record<SkillLevel, string> = {
  'Production':     'var(--blue)',
  'Research Grade': '#a78bfa',
  'Research':       'var(--amber)',
  'Shipped':        'var(--green)',
  'Daily Use':      'var(--blue)',
  'Published':      'var(--green)',
}

const itemIcons: Record<string, React.ElementType> = {
  'React.js': SiReact, 'Next.js': SiNextdotjs, 'HTML5 / CSS3': SiHtml5, 'JavaScript ES6+': SiJavascript,
  'Node.js': SiNodedotjs, 'Express.js': SiExpress, 'MongoDB': SiMongodb, 'SQL · REST APIs': SiPostgresql,
  'Python': SiPython, 'TensorFlow · PyTorch': SiTensorflow, 'Scikit-learn': SiScikitlearn, 'Gemini API': SiGooglegemini,
  'Wireshark': SiWireshark, 'Intrusion Detection': FaShieldAlt, 'Network Analysis': FaNetworkWired, 'Anomaly Det.': FaProjectDiagram,
  'ESP32 · C': SiC, 'Sensor Networks': FaNetworkWired, 'Embedded Systems': FaMicrochip, 'MOSFET Circuits': FaCogs,
  'JWT · OAuth': SiJsonwebtokens, 'OCR API': FaFileAlt, 'REST APIs': FaServer, 'MVC Architecture': FaProjectDiagram,
  'Git · GitHub': SiGithub, 'Vercel · Render': SiVercel, 'Linux · Postman': SiLinux, 'TypeScript': SiTypescript,
  'Academic Writing': FaFileAlt, 'Data Analysis': FaProjectDiagram, 'Elsevier ICT Express': FaBrain, 'PPO · RL': FaBrain
}

const marqueeItems = ['React.js','Node.js','Python','TypeScript','MongoDB','TensorFlow','Express.js','Next.js','PyTorch','Scikit-learn','ESP32','JWT','REST APIs','Gemini API','Git','Vercel','Wireshark','Postman','SQL','Framer Motion']

export default function Skills() {
  return (
    <section id="skills" style={{
      width: '100%',
      display: 'flex', flexDirection: 'column',
      padding: 'clamp(4rem, 8vh, 5.5rem) clamp(1.5rem, 6vw, 5rem) clamp(2rem, 4vh, 3rem)',
      position: 'relative',
      background: `radial-gradient(circle at 10% 90%, var(--blue-glow) 0%, transparent 60%)`,
    }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem', position: 'relative', zIndex: 1, maxWidth: 1200, width: '100%', margin: '0 auto 1rem' }}>
        <div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Space Grotesk','Inter',sans-serif", fontWeight: 800, fontSize: 'clamp(1.6rem,3vw,2.8rem)', lineHeight: 1, letterSpacing: '-0.025em', color: 'var(--text)' }}>
            Craft &amp; <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Expertise</em>
          </motion.h2>
        </div>
        <motion.span initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--muted)', textTransform: 'uppercase' }}>
          08 domains
        </motion.span>
      </div>

      {/* Marquee */}
      <div style={{ overflow: 'hidden', position: 'relative', zIndex: 1, borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: '1.5rem', padding: '0.7rem 0', background: 'var(--blue-glow)', maxWidth: 1200, width: '100%', margin: '0 auto 1.5rem' }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 50s linear infinite' }}>
          {[...marqueeItems, ...marqueeItems].map((tech, i) => (
            <span key={i} style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: i % 3 === 0 ? 'var(--blue)' : i % 3 === 1 ? 'var(--muted)' : '#a78bfa', padding: '0 1.4rem', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '1.4rem' }}>
              {tech}
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border-strong)', display: 'inline-block', flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
        gap: 1,
        background: 'var(--border)', border: '1px solid var(--border)',
        position: 'relative', zIndex: 1,
        borderRadius: 10, overflow: 'hidden',
        maxWidth: 1200, width: '100%', margin: '0 auto',
      }}>
        {skills.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04, duration: 0.35 }}
            style={{ background: 'var(--bg)', padding: '1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', position: 'relative', transition: 'background 0.3s', overflow: 'hidden' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--surface2)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--bg)'}>

            {/* Icon + Name + Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: levelColors[s.level], opacity: 0.85 }}><s.Icon size={16} /></span>
                <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '0.88rem', color: 'var(--text)' }}>{s.name}</span>
              </div>
              <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: levelColors[s.level], background: `${levelColors[s.level]}14`, border: `1px solid ${levelColors[s.level]}40`, padding: '0.15rem 0.4rem', borderRadius: 4, flexShrink: 0 }}>{s.level}</span>
            </div>

            {/* Skill items as mini-pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {s.items.map((item, j) => {
                const ItemIcon = itemIcons[item]
                return (
                  <span key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.62rem', color: 'var(--text)', background: 'var(--input-bg)', border: '1px solid var(--border)', padding: '0.25rem 0.55rem', borderRadius: 6, whiteSpace: 'nowrap' }}>
                    {ItemIcon && <ItemIcon size={11} style={{ color: levelColors[s.level] }} />}
                    {item}
                  </span>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
