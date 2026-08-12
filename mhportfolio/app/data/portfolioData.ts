// ============================================================
//  portfolioData.ts — SINGLE SOURCE OF TRUTH
//  The chatbot system prompt is generated from this file at
//  runtime, so any update here is instantly reflected in the
//  AI assistant's knowledge.
// ============================================================

export const OWNER = {
  name: 'Md. Meheraj Hossain',
  email: 'meherajhossainmahir@gmail.com',
  location: 'Dhaka, Bangladesh',
  cgpa: '3.61 / 4.00',
  university: 'BRAC University',
  graduationYear: '2026',
  degree: 'B.Sc. in Computer Science & Engineering',
}

// ── Projects ────────────────────────────────────────────────
export const projects = [
  {
    title: 'CollabBD — Bangladesh\'s Talent Network',
    type: 'Full-Stack',
    period: 'Apr 2026 – Present',
    tech: ['Next.js 16', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.IO'],
    live: 'https://collab-bd-server.vercel.app/',
    github: 'https://github.com/mhstyles7/CollabBD',
    desc: 'Full-stack talent marketplace connecting verified students, freelancers, and professionals with clients. Features local talent discovery, emergency task posting, and real-time messaging.',
    highlights: [
      'Verified trust system with admin-reviewed student ID verification',
      'Geospatial talent discovery with interactive map view',
      'Emergency task posting with real-time socket notifications',
      'Real-time 1-on-1 messaging & community rooms via Socket.IO',
      'Proposal system for workers to bid on jobs with custom budgets',
      'Enterprise-grade security: rate limiting, NoSQL injection protection, Helmet headers, JWT auth',
    ],
    architecture: 'Full-stack monorepo — Next.js 16 frontend, Node.js/Express REST API with MongoDB. Real-time communication via Socket.IO. Zod for schema validation and Multer for file uploads. Admin dashboard for moderation.',
  },
  {
    title: 'Trippy 2.0',
    type: 'Full-Stack',
    period: 'Mar 2026 – May 2026',
    tech: ['MERN', 'JWT', 'OCR API', 'VoiceFlow'],
    live: 'https://trippy-2-0.vercel.app/',
    github: 'https://github.com/mhstyles7/Trippy-2.0',
    desc: 'Travel marketplace rebuilt solo — JWT auth, OCR-powered NID verification, role-based traveler/provider dashboards.',
    highlights: [
      'OCR-powered NID verification for user identity validation',
      'VoiceFlow chatbot for automated customer support',
      'Dual-role dashboard system: Traveler & Service Provider',
      'Complete CRUD operations with real-time data sync',
    ],
    architecture: 'Full MERN stack — Express REST API with JWT-based authentication flow. OCR API integration for document verification. VoiceFlow SDK embedded for conversational AI. Deployed on Vercel (frontend) + Render (backend).',
  },
  {
    title: 'PothChola',
    type: 'Full-Stack',
    period: 'Dec 2025 – Feb 2026',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini API'],
    live: 'https://poth-chola.vercel.app',
    github: 'https://github.com/mhstyles7/PothChola',
    desc: 'Localized smart travel & cultural discovery — social posts, friend groups, shared itineraries, Gemini AI recommendations.',
    highlights: [
      'AI-powered travel recommendations via Gemini API integration',
      'Real-time social features: posts, friend groups, shared itineraries',
      'Role-based dashboards for travelers and local guides',
      'Responsive design with mobile-first approach',
    ],
    architecture: 'MERN stack architecture — React frontend deployed on Vercel, Node.js/Express REST API with MongoDB Atlas. Gemini API handles NLP-based recommendation engine. JWT auth with role-based access control.',
  },
  {
    title: 'Air Quality Monitor for Urban Homes',
    type: 'Hardware',
    period: 'Dec 2025 – Jan 2026',
    tech: ['ESP32', 'MOSFET', 'I2C/SPI', 'Wi-Fi'],
    live: 'https://youtube.com/shorts/9QiRM2_Dl7w',
    github: '',
    desc: 'Active indoor air monitoring using ESP32, MQ-series gas sensors (smoke/CO₂) and DHT11. Triggers exhaust fan via p-channel MOSFET and piezo buzzer on unsafe readings.',
    highlights: [
      'Multi-sensor fusion: MQ-series (CO₂/smoke) + DHT11 (temp/humidity)',
      'Automated actuator response via p-channel MOSFET switching',
      'SD card data logging for offline analysis',
      'Wi-Fi streaming for remote monitoring dashboard',
    ],
    architecture: 'ESP32 microcontroller as central hub. I2C/SPI buses for sensor communication. p-channel MOSFET circuit for high-side switching of exhaust fan. Wi-Fi module streams sensor data to web dashboard. Piezo buzzer for audible alerts.',
  },
  {
    title: 'Voltage Deviation Visualizer',
    type: 'Hardware',
    period: 'Mar 2024',
    tech: ['Op-Amps', 'Diodes', 'Analog', 'LEDs'],
    live: 'https://youtube.com/shorts/Ab4WL24I230',
    github: '',
    desc: 'Analog circuit that quantizes voltage deviations from a simulated pressure sensor into discrete levels, visualised via a colour-coded LED array using op-amps and diodes.',
    highlights: [
      'Op-amp comparator cascade for multi-level voltage quantization',
      'Color-coded LED bar graph for intuitive visual feedback',
      'Simulated pressure sensor interface with calibration',
      'Pure analog design — no microcontroller required',
    ],
    architecture: 'Signal conditioning stage with voltage divider and buffer. Comparator cascade using LM741 op-amps with precision reference voltages. Diode-based isolation for independent LED activation. Power supply regulation for stable operation.',
  },
]

// ── Experience ───────────────────────────────────────────────
export const experience = [
  {
    role: 'Fans Operations Engineer',
    org: 'Ismartu Technology BD Limited — R&D Center',
    duration: 'Aug 2026 – Present',
    points: ['Software Testing Department · Full-time'],
  },
  {
    role: 'Social Media Manager',
    org: 'Bangladesh Freight Forwarders Association (BAFFA)',
    duration: '6 Months',
    points: [
      'Managed digital content strategy and communications for executive leadership.',
      'Coordinated stakeholder engagement campaigns across platforms.',
      'Developed strong communication, leadership, and cross-functional collaboration skills.',
    ],
  },
]

// ── Education ────────────────────────────────────────────────
export const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    inst: 'BRAC University',
    year: '2021 – 2026',
    grade: 'CGPA 3.61/4.00',
    note: 'Thesis published in Elsevier ICT Express',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    inst: 'Mirpur Cantonment Public School & College',
    year: '2020',
    grade: 'GPA 5.00/5.00',
    note: 'Science Group',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    inst: 'Greenview High School and College',
    year: '2018',
    grade: 'GPA 5.00/5.00',
    note: 'Science Group',
  },
]

// ── Certifications & Awards ──────────────────────────────────
export const certifications = [
  {
    title: 'Higher Secondary Certificate',
    org: 'Mirpur Cantonment Public School & College',
    year: '2020',
    grade: 'GPA 5.00 / 5.00',
    tag: 'Academic',
  },
  {
    title: 'Secondary School Certificate',
    org: 'Greenview High School and College',
    year: '2018',
    grade: 'GPA 5.00 / 5.00',
    tag: 'Academic',
  },
  {
    title: 'Graphics Design',
    org: 'BRAC University',
    year: '2022',
    grade: 'Extracurricular Activity',
    tag: 'Skill',
  },
  {
    title: 'Competition Participant & Awardee — IAM Digital Programme',
    org: 'Conducted by Dr. Mohammad Kaykobad, Professor of CSE, BUET · Mirpur Cantonment Public School & College',
    year: '2018',
    grade: 'Award',
    tag: 'Award',
  },
]

// ── Research ─────────────────────────────────────────────────
export const research = {
  title: 'A Cross-Dataset Based Zero-Day Intrusion Detection System by Integrating Siamese Network and Reinforcement Learning',
  journal: 'ICT Express (Elsevier)',
  status: 'Published',
  doi: 'https://doi.org/10.1016/j.icte.2026.05.001',
  impactFactor: '4.2',
  citeScore: '10.8',
  role: 'First Author',
  keywords: ['Zero-Day', 'Cybersecurity', 'Reinforcement Learning', 'Anomaly Detection', 'Siamese Network', 'PPO', 'IoT Security'],
  metrics: {
    trainingAccuracy: '99.28%',
    unseenAttackAccuracy: '99.07%',
    zeroDayDetectionRate: '93.94%',
    detectionLatency: '0.50 ms',
    falsePositiveRate: '2.21%',
  },
  summary: 'Engineered a hybrid, self-learning Intrusion Detection System (IDS) combining Siamese Networks + Proximal Policy Optimization (PPO) Reinforcement Learning. Validated on two massive IoT datasets (CIC-IoT-2023 & CIC-BCCC-NRC-2024). Detects novel zero-day attacks without requiring prior attack signatures.',
  eventShowcase: {
    name: 'NSU Cybersecurity Center (NSU CSC) Showcase 2026',
    note: 'Presented Q1-indexed research and AI-powered cybersecurity platform at the inaugural NSU Cybersecurity Center Showcase, engaging with researchers, industry professionals, and government representatives.',
  },
}

// ── Skills ───────────────────────────────────────────────────
export const skills = {
  Frontend: '88%',
  Backend: '85%',
  'ML / AI': '78%',
  DevOps: '80%',
  favoriteLang: 'Python',
  favoriteFramework: 'React',
  stack: 'MERN (MongoDB, Express, React, Node.js)',
}

// ── Personality ──────────────────────────────────────────────
export const personality = {
  vibe: 'Ambivert, goes with the flow, can adjust to any type of person. Night owl.',
  workStyle: 'Prefers working alone, systematic debugging, likes working in a cafe (both remote and office are fine). Team culture must be friendly and helpful.',
  passions: 'Success excites him the most. Wants to be a Cybersecurity Specialist in 5 years (dream companies: Google, OpenAI) and solve security problems.',
  hobbies: "Gaming (Assassin's Creed, Monopoly board game), playing/watching Cricket. Hates reading books.",
  entertainment: "Music (anything except sad songs), TV Show (How I Met Your Mother), Movie (The Dictator).",
  food: "Mom's Polao Kurma with Borhani. Loves Dhaka street food, especially Tehari. Weird habit: delaying food. Drinks tea usually, but likes coffee more.",
  motto: '"Tit for tat". Deals with failure through prayer ("You can\'t control anything, believe in Allah\'s plan and just move on"). Success means happiness. Unpopular opinion: Marriage at 18-19 brings more peace than 25+.',
  trivia: 'Prefers Cats (no pets currently). Wants to travel to Japan. A productive day equals exhaustion. What he wishes he started earlier: good projects and competitions. Hardest thing built: the full pipeline for his thesis (taught him patience). Why CS? Just instinct. Alt career: BBS (Business). Favorite courses: Automata (CSE331) and ENG103.',
  ultimateFact: 'He is the best guy in the entire world.',
}

// ── Generate system prompt at runtime ────────────────────────
export function generateSystemPrompt(): string {
  const projectsText = projects.map(p =>
    `  • ${p.title} [${p.type}, ${p.period}]
      Tech: ${p.tech.join(', ')}
      ${p.live ? `Live: ${p.live}` : ''}${p.github ? ` | GitHub: ${p.github}` : ''}
      ${p.desc}
      Key highlights: ${p.highlights.join('; ')}`
  ).join('\n\n')

  const experienceText = experience.map(e =>
    `  • ${e.role} @ ${e.org} (${e.duration}): ${e.points.join(' ')}`
  ).join('\n')

  const educationText = education.map(e =>
    `  • ${e.degree} — ${e.inst} (${e.year}) · ${e.grade} · ${e.note}`
  ).join('\n')

  const certsText = certifications.map(c =>
    `  • ${c.title} — ${c.org} (${c.year}) · ${c.grade} [${c.tag}]`
  ).join('\n')

  const currentJob = experience.length > 0 ? experience[0] : null
  const jobLine = currentJob
    ? `Currently working as ${currentJob.role} at ${currentJob.org} (${currentJob.duration}). ${currentJob.points.join(' ')}`
    : 'Seeking roles in software engineering, ML engineering, backend development.'

  return `You are a friendly, concise AI assistant on Md. Meheraj Hossain's portfolio website. Answer questions about Meheraj in a warm, direct tone. Keep answers to 2-4 sentences, and feel free to use his favorite emojis like :3 or :V occasionally.

FULL NAME: ${OWNER.name}
EMAIL: ${OWNER.email}
LOCATION: ${OWNER.location}
PROFILE: Recent CSE graduate (CGPA ${OWNER.cgpa}), ${OWNER.university}, ${OWNER.location}. Full-stack developer (MERN) and ML researcher.
CURRENT STATUS: ${jobLine}

═══ PROJECTS (${projects.length} total) ═══
${projectsText}

═══ EXPERIENCE ═══
${experienceText}

═══ EDUCATION ═══
${educationText}

═══ CERTIFICATIONS & AWARDS ═══
${certsText}

═══ RESEARCH ═══
Title: ${research.title}
Journal: ${research.journal} · Status: ${research.status} · DOI: ${research.doi}
Impact Factor: ${research.impactFactor} · CiteScore: ${research.citeScore} · Role: ${research.role}
Keywords: ${research.keywords.join(', ')}
Metrics: Training Accuracy ${research.metrics.trainingAccuracy}, Unseen Attack Accuracy ${research.metrics.unseenAttackAccuracy}, Zero-Day Detection Rate ${research.metrics.zeroDayDetectionRate}, Detection Latency ${research.metrics.detectionLatency}, False-Positive Rate ${research.metrics.falsePositiveRate}
Summary: ${research.summary}
Event: ${research.eventShowcase.name} — ${research.eventShowcase.note}

═══ SKILLS ═══
Frontend: ${skills.Frontend} | Backend: ${skills.Backend} | ML/AI: ${skills['ML / AI']} | DevOps: ${skills.DevOps}
Favorite language: ${skills.favoriteLang} | Favorite framework: ${skills.favoriteFramework}
Primary stack: ${skills.stack}

═══ WEBSITE SECTIONS ═══
- Home: Intro, horizontal scroll navigation (GSAP).
- Work: ${projects.length} featured projects — full-stack and hardware builds.
- About: Education timeline + work experience.
- Skills: Proficiency grid.
- Research: Thesis details, NSU Showcase event gallery.
- Certifications & Awards: Academic certificates, extracurricular achievements.
- Contact: Anonymous message form via Formspree, social links (LinkedIn, GitHub, Facebook, Instagram).
- Features: Live Dhaka clock, visitor counter API, custom animated cursor, scroll progress bar.

═══ PERSONALITY & PREFERENCES ═══
Vibe: ${personality.vibe}
Work Style: ${personality.workStyle}
Passions: ${personality.passions}
Hobbies: ${personality.hobbies}
Entertainment: ${personality.entertainment}
Food: ${personality.food}
Motto/Values: ${personality.motto}
Trivia: ${personality.trivia}
Ultimate fact: ${personality.ultimateFact}

Be helpful and conversational. If asked a personal question, answer based on the facts above.`
}
