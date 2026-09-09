import type { Metadata } from 'next'
import TestHero from '@/components/TestHero'
import TestBeneficii from '@/components/TestBeneficii'
import TestCta from '@/components/TestCta'
import TestTestimoniale from '@/components/TestTestimoniale'
import TestPoveste from '@/components/TestPoveste'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

// Titlul lung e pentru Google; cel scurt e pentru rețele sociale. Facebook taie
// titlul unei previzualizări din comentariu pe la 30 de caractere, iar linkurile
// se distribuie tocmai în comentarii — un titlu lung s-ar tăia fix unde contează.
const title = 'Testul Rănilor Financiare — test gratuit, 5 minute'
const shortTitle = 'Testul Rănilor Financiare'
const description =
  'Descoperă în doar 5 minute ce anume îți sabotează relația cu banii – și care este primul pas spre abundență și stabilitate financiară.'
const shortDescription = 'Află care dintre cele 6 răni financiare te blochează acum.'

const url = '/rani-financiare.html'
const ogImage = '/og-test-rani-financiare-v2.png'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title: shortTitle,
    description: shortDescription,
    url,
    type: 'website',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: shortTitle,
    description: shortDescription,
    images: [ogImage],
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
