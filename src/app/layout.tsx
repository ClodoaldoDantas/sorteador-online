import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.scss'

const sora = Sora({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata: Metadata = {
  title: 'Sorteador Online',
  description: 'Rápido, fácil e confiável, experimente agora!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={sora.className}>{children}</body>
    </html>
  )
}
