import type { Metadata } from 'next'
import TestHero from '@/components/TestHero'
import TestBeneficii from '@/components/TestBeneficii'
import TestCta from '@/components/TestCta'
import TestTestimoniale from '@/components/TestTestimoniale'
import TestPoveste from '@/components/TestPoveste'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

const title = 'Test Rapid de Identificare a Rănilor Financiare'
const description =
  'Descoperă în doar 5 minute ce anume îți sabotează relația cu banii – și care este primul pas spre abundență și stabilitate financiară.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://danielabostan.ro/rani-financiare.html',
    type: 'website',
    images: ['https://danielabostan.ro/og-test-rani-financiare.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['https://danielabostan.ro/og-test-rani-financiare.png'],
  },
}

export default function TestRaniFinanciarePage() {
  return (
    <main>
      <TestHero />
      <TestBeneficii />
      <TestCta />
      <TestTestimoniale />
      <TestPoveste />
      <Footer
        disclaimer="Acest test este un instrument de autoevaluare și reflecție, cu scop informativ și educațional. Nu constituie consultanță financiară, psihologică sau terapeutică individuală, iar rezultatele nu înlocuiesc opinia unui specialist. Interpretările și recomandările sunt orientative și pot varia în funcție de contextul personal al fiecărei persoane."
      />
      <CookieBanner />
    </main>
  )
}
