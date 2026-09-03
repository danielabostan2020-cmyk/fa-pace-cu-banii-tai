import type { Metadata } from 'next'
import EftHero from '@/components/EftHero'
import EftAgitare from '@/components/EftAgitare'
import EftDeceEsueaza from '@/components/EftDeceEsueaza'
import EftPoveste from '@/components/EftPoveste'
import EftModule from '@/components/EftModule'
import EftDeceFunctioneaza from '@/components/EftDeceFunctioneaza'
import EftTestimoniale from '@/components/EftTestimoniale'
import EftCumFunctioneaza from '@/components/EftCumFunctioneaza'
import EftPentruCine from '@/components/EftPentruCine'
import EftFaq from '@/components/EftFaq'
import EftOferta from '@/components/EftOferta'
import EftGarantie from '@/components/EftGarantie'
import EftClosing from '@/components/EftClosing'
import Footer from '@/components/Footer'
import EftStickyCta from '@/components/EftStickyCta'
import CookieBanner from '@/components/CookieBanner'
import { eftFaqs } from '@/components/eftFaqData'

const title = 'EFT Prosper — Kitul Rănilor Financiare'
const description =
  'Eliberează blocajele subconștiente, vindecă rănile financiare profunde și redobândește-ți siguranța interioară de a atrage și păstra banii — prin metoda eliberării somatice EFT Prosper.'

const url = '/eft-prosper.html'
const ogImage = '/og-eft-prosper.png'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: 'website',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: eftFaqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function EftProsperPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EftHero />
      <EftAgitare />
      <EftDeceEsueaza />
      <EftPoveste />
      <EftModule />
      <EftDeceFunctioneaza />
      <EftTestimoniale />
      <EftCumFunctioneaza />
      <EftPentruCine />
      <EftFaq />
      <EftOferta />
      <EftGarantie />
      <EftClosing />
      <Footer disclaimer="EFT Prosper — Kitul Rănilor Financiare este un program educațional și de coaching somatic. Nu constituie consultanță financiară, fiscală, juridică, medicală sau psihoterapie individuală și nu înlocuiește un specialist acreditat. Rezultatele individuale variază în funcție de contextul personal, nivelul de implicare și aplicarea practică. Achiziționarea kitului nu garantează rezultate financiare specifice." />
      <div className="sticky-spacer" />
      <EftStickyCta />
      <CookieBanner />
    </main>
  )
}
