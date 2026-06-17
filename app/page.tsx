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
