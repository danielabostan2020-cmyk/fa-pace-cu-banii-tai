import type { Metadata } from 'next'
import { Cormorant_Garamond, Lora, Poppins } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-lora',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Fă pace cu banii tăi — Membership modular',
  description:
    'Membership modular pentru reconstrucția relației cu banii. 12 module, lucru somatic și emoțional, ghidaj live cu Daniela Bostan — EFT Practitioner.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ro"
      className={`${cormorant.variable} ${lora.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
