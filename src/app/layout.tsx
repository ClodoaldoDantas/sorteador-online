import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

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
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
