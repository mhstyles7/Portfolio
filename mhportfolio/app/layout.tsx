import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Md. Meheraj Hossain — Portfolio',
  description: 'Full-Stack Engineer & ML Researcher. CSE Graduate, BRAC University. Research published in Elsevier ICT Express.',
  keywords: 'Meheraj Hossain, Full Stack Developer, ML Engineer, BRAC University, Portfolio, Cybersecurity, IoT',
  authors: [{ name: 'Md. Meheraj Hossain' }],
  openGraph: {
    title: 'Md. Meheraj Hossain — Portfolio',
    description: 'Full-Stack Engineer & ML Researcher based in Dhaka, Bangladesh. Research published in Elsevier ICT Express.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
