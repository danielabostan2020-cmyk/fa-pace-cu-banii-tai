import Image from 'next/image'
import FadeIn from './FadeIn'

const TEST_URL = '/test-rani-financiare.html'

export default function TestHero() {
  return (
    <section id="test-hero" className="noise-layer">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text-col">
            <FadeIn className="hero-pills">
              <span className="pill-badge"><span className="pill-dot" />Gratuit</span>
              <span className="pill-badge"><span className="pill-dot" />5 minute</span>
            </FadeIn>

            <FadeIn as="p" delay={1} className="hero-anxiety">
              Test Rapid de Identificare a
            </FadeIn>

            <FadeIn as="h1" delay={2} className="gradient-text">
              Rănilor Financiare
            </FadeIn>

            <FadeIn as="p" delay={3} className="hero-subtitle">
              Descoperă în doar 5 minute ce anume îți sabotează relația cu banii – și care este
              primul pas spre abundență și stabilitate financiară.
            </FadeIn>

            <FadeIn as="p" delay={3} className="hero-byline">
              Daniela Bostan · Practician EFT, Matrix Reimprinting
            </FadeIn>

            <FadeIn delay={3} className="cta-group">
              <a href={TEST_URL} className="btn btn-gold">
                Începe testul gratuit →
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={2} className="hero-photo-col">
            <Image
              src="/daniela-bostan.png"
              alt="Daniela Bostan — Practician EFT, Matrix Reimprinting"
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
