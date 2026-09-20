import type { Metadata } from 'next'
import { Cormorant_Garamond, Lora, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
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
  metadataBase: new URL('https://www.danielabostan.ro'),
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
      <body>
        {children}
        {/* Numără vizitele pe toate paginile. Fără cookie-uri și fără date
            personale — vezi secțiunea 5 din politica de confidențialitate.
            Trebuie activat și din panoul Vercel: Project → Analytics. */}
        <Analytics />
      </body>
    </html>
  )
}
