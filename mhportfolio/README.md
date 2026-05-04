# Meheraj Hossain — Professional Portfolio

A high-performance, visually striking interactive portfolio built with **Next.js 15**, **Framer Motion**, and **GSAP**. Designed to showcase full-stack development expertise and machine learning research.

## ✨ Key Features
- **Custom AI Chatbot:** Integrated with Google's latest **Gemini 2.5 Flash** model via secure Server Actions. The AI has a custom system prompt and acts as a personal assistant, answering questions about skills, hobbies, and projects.
- **GSAP Horizontal Scroll:** A bespoke horizontal scroll architecture tied to mouse-wheel events, creating a seamless, cinematic navigation experience across different panel sections (Hero, Work, About, Skills, Research, Contact).
- **Live Visitor Analytics:** Integrated with `counterapi.dev` for a real-time, global visitor counter displayed dynamically in the navigation bar.
- **Formspree Contact Integration:** Fully functioning contact form routing anonymous messages directly to email.
- **Responsive & Polished:** Custom desktop cursor, mobile-friendly overlay hamburger menu, and a slick permanent dark-mode UI with sleek glassmorphism effects.

## 🛠 Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules / Raw CSS (Zero Tailwind, fully custom `globals.css` with CSS variables)
- **Animation:** GSAP (ScrollTrigger, ScrollToPlugin) & Framer Motion
- **Icons:** React Icons
- **AI:** Google Gemini API (`@google/generative-ai` / direct REST fetch)

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mhstyles7/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your Gemini API key for the chatbot:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📄 License
This project is proprietary. Design and source code belong to Md. Meheraj Hossain.

