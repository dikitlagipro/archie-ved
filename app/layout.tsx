import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Archie Prima · PM Portfolio',
  description: 'Product Manager who uses AI to ship smarter. Enterprise Products @ Populix. Jakarta, Indonesia.',
  openGraph: {
    title: 'Archie Prima · PM Portfolio',
    description: 'PM who bridges tech roots and customer empathy — using AI tools to ship faster, think clearer, and build products people actually love.',
    url: 'https://archie-ved.online',
    siteName: 'Archie Prima',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
