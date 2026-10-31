import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
// Fonturile sunt găzduite local (public/fonts), ca build-ul pe Vercel să nu depindă de Google Fonts
import './fonts.css'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.danielabostan.ro'),
  title: 'Fă pace cu banii tăi — Membership modular',
  description:
    'Membership modular pentru reconstrucția relației cu banii. 12 module, lucru somatic și emoțional, ghidaj live cu Daniela Bostan — EFT Practitioner.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
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
