import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Problema from '@/components/Problema'
import TestimonialeTimurii from '@/components/TestimonialeTimurii'
import FrazaOglinda from '@/components/FrazaOglinda'
import Solutia from '@/components/Solutia'
import Module from '@/components/Module'
import CeLucrezi from '@/components/CeLucrezi'
import CePrimesti from '@/components/CePrimesti'
import Transformare from '@/components/Transformare'
import CostulStagnarii from '@/components/CostulStagnarii'
import PentruCine from '@/components/PentruCine'
import Preturi from '@/components/Preturi'
import Garantie from '@/components/Garantie'
import Testimoniale from '@/components/Testimoniale'
import Faq from '@/components/Faq'
import PovesteaFondatoarei from '@/components/PovesteaFondatoarei'
import Closing from '@/components/Closing'
import Footer from '@/components/Footer'
import StickyCta from '@/components/StickyCta'
import CookieBanner from '@/components/CookieBanner'

const title = 'Fă pace cu banii tăi — Membership modular'
const description =
  '12 luni de transformare profundă: de la anxietate financiară la prosperitate sustenabilă, prin siguranță interioară. 12 module, 24 de sesiuni live, garanție 14 zile.'

const url = '/'
const ogImage = '/og-fa-pace-cu-banii-tai.png'

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

export default function Home() {
  return (
    <main>
      <Hero />
      <Problema />
      <TestimonialeTimurii />
      <FrazaOglinda />
      <Solutia />
      <Module />
      <CeLucrezi />
      <CePrimesti />
      <Transformare />
      <CostulStagnarii />
      <PentruCine />
      <Preturi />
      <Garantie />
      <Testimoniale />
      <Faq />
      <PovesteaFondatoarei />
      <Closing />
      <Footer />
      <div className="sticky-spacer" />
      <StickyCta />
      <CookieBanner />
    </main>
  )
}
