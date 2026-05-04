# Md. Meheraj Hossain — Professional Portfolio

> A high-performance, cinematic portfolio built with **Next.js 15**, **GSAP**, and **Framer Motion** — featuring a Gemini-powered AI assistant and a bespoke horizontal scroll experience.

[![Live Site](https://img.shields.io/badge/Live%20Site-Visit-4BBFFF?style=for-the-badge&logo=vercel)](https://mhportfolio.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/md-meheraj-hossain)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-333?style=for-the-badge&logo=github)](https://github.com/mhstyles7)

---

## ✨ Key Features

- **🤖 AI Chatbot** — Powered by **Gemini 2.5 Flash** via secure Next.js Server Actions. Knows Meheraj's projects, research, personality, and preferences.
- **🎬 Cinematic Horizontal Scroll** — GSAP `ScrollTrigger` pin with scrub creates a desktop experience where scrolling pans horizontally through 6 sections.
- **📱 Fully Responsive** — On mobile (≤ 768px), GSAP is completely disabled and sections stack vertically for native touch scrolling.
- **📊 Live Visitor Counter** — Real-time global visitor analytics via `counterapi.dev` displayed in the nav bar.
- **📬 Contact Form** — Anonymous messaging via Formspree, routed directly to inbox.
- **🖱️ Custom Cursor** — Magnetic dot + ring cursor with label hints, auto-disabled on touch devices.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Vanilla CSS — zero Tailwind |
| Animation | GSAP (ScrollTrigger, pin) + Framer Motion |
| AI | Google Gemini 2.5 Flash API |
| Icons | React Icons |
| Forms | Formspree |
| Deployment | Vercel |

---

## 📁 Project Structure

```
Portfolio/
└── mhportfolio/          # Next.js application root
    ├── app/
    │   ├── actions/      # Server Actions (Gemini API, secure)
    │   ├── components/   # Shared components (Nav, Chatbot, Cursor…)
    │   │   └── panels/   # Six full-panel sections
    │   ├── globals.css   # Global styles + CSS variables
    │   └── page.tsx      # Root page
    └── public/           # Static assets (photo, CV PDF)
```

---

## 🚀 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/mhstyles7/Portfolio.git
cd Portfolio/mhportfolio

# 2. Install dependencies
npm install

# 3. Add your Gemini API key
echo "GEMINI_API_KEY=your_key_here" > .env.local

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

> **Note:** The `.env.local` file is gitignored. Your API key will never be committed to the repository.

---

## 🌐 Deployment (Vercel)

1. Import this repo on [vercel.com](https://vercel.com)
2. Set **Root Directory** to `mhportfolio`
3. Set **Framework Preset** to `Next.js`
4. Add environment variable: `GEMINI_API_KEY` = your key
5. Deploy ✅

---

## 📄 License

Proprietary. Design and source code © 2026 Md. Meheraj Hossain. All rights reserved.
