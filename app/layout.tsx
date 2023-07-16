import './styles/globals.css'
import './styles/editor.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calendext',
  description:
    'Cutting-edge event management app built with Next.js v13. Easily schedule and personalize your own events with our intuitive and modern interface. Experience seamless event creation, editing, and management.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  )
}
