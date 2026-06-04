import type { Metadata } from 'next'
import './globals.css'
import ConstellationBg from './components/ConstellationBg'

export const metadata: Metadata = {
  metadataBase: new URL('https://mhportfolio.vercel.app'),
  title: 'Md. Meheraj Hossain — Portfolio',
  description: 'Full-Stack Engineer & ML Researcher. CSE Graduate, BRAC University. Research published in Elsevier ICT Express.',
  keywords: 'Meheraj Hossain, Full Stack Developer, ML Engineer, BRAC University, Portfolio, Cybersecurity, IoT',
  authors: [{ name: 'Md. Meheraj Hossain' }],
  openGraph: {
    title: 'Md. Meheraj Hossain — Portfolio',
    description: 'Full-Stack Engineer & ML Researcher based in Dhaka, Bangladesh. Research published in Elsevier ICT Express.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Md. Meheraj Hossain — Full-Stack Engineer & ML Researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Meheraj Hossain — Portfolio',
    description: 'Full-Stack Engineer & ML Researcher. Research published in Elsevier ICT Express.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script to set theme BEFORE first paint — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body style={{ position: 'relative' }} suppressHydrationWarning>
        <ConstellationBg />
        <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
      </body>
    </html>
  )
}
