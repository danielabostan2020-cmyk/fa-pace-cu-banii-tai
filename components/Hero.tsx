import Image from 'next/image'
import FadeIn from './FadeIn'

const STRIPE_MONTHLY = 'https://buy.stripe.com/cNi8wQ5EW5Nk2td9pK6Vq05'

export default function Hero() {
  return (
    <section id="hero" className="noise-layer">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text-col">
            <FadeIn className="hero-pills">
              <span className="pill-badge"><span className="pill-dot" />12 Module</span>
              <span className="pill-badge"><span className="pill-dot" />24 Sesiuni Live</span>
              <span className="pill-badge"><span className="pill-dot" />Garanție 14 Zile</span>
            </FadeIn>

            <FadeIn as="p" delay={1} className="hero-anxiety">
              Trăiești în anxietate financiară?
            </FadeIn>

            <FadeIn as="h1" delay={2} className="gradient-text">
              Fă pace cu banii tăi
            </FadeIn>

            <FadeIn as="p" delay={3} className="hero-subtitle">
              12 luni de transformare profundă. De la anxietate financiară la prosperitate
              sustenabilă, prin siguranță interioară.
            </FadeIn>

            <FadeIn delay={3} className="cta-group">
              <a href={STRIPE_MONTHLY} className="btn btn-gold">
                Vreau să încep transformarea
              </a>
            </FadeIn>

            <FadeIn as="p" delay={3} className="guarantee-note">
              Garanție 14 zile. Rambursare completă, fără condiții.
            </FadeIn>
          </div>

          <FadeIn delay={2} className="hero-photo-col">
            <Image
              src="/daniela-bostan.png"
              alt="Daniela Bostan — EFT Practitioner & Matrix Reimprinting Specialist"
              width={340}
              height={420}
              priority
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
