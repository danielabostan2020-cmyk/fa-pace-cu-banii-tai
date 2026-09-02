import Image from 'next/image'
import FadeIn from './FadeIn'
import { EFT_STRIPE_LINK } from './eftProsperConfig'

export default function EftHero() {
  return (
    <section id="hero" className="noise-layer">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text-col">
            <FadeIn className="hero-pills">
              <span className="pill-badge"><span className="pill-dot" />EFT Prosper — Kitul Rănilor Financiare</span>
            </FadeIn>

            <FadeIn as="h1" delay={1} className="gradient-text">
              Oprește autosabotajul financiar acolo unde începe cu adevărat: în sistemul tău nervos
            </FadeIn>

            <FadeIn as="p" delay={2} className="hero-subtitle">
              Dacă mindset-ul clasic și afirmațiile pozitive nu au funcționat, este pentru că
              anxietatea financiară nu se rezolvă în minte, ci în corp. Descoperă protocoalele
              somatice ghidate de 10-15 minute pe zi, create special pentru a dezamorsa frica,
              vinovăția și blocajele care îți opresc prosperitatea.
            </FadeIn>

            <FadeIn delay={3} className="cta-group">
              <a href={EFT_STRIPE_LINK} className="btn btn-gold">
                Vreau acces la Kitul Rănilor Financiare →
              </a>
            </FadeIn>

            <FadeIn delay={3} className="hero-trust">
              <span>🔒 297 RON — plată unică, fără costuri ascunse sau abonament</span>
              <span>♾️ Acces imediat și pe viață la toate protocoalele și caietele de lucru</span>
              <span>🛡️ Garanție 100% de returnare a banilor, timp de 14 zile</span>
            </FadeIn>
          </div>

          <FadeIn delay={2} className="hero-photo-col">
            <Image
              src="/daniela-eft-prosper.webp"
              alt="Daniela Bostan — EFT Practitioner, Matrix Reimprinting"
              width={340}
              height={512}
              priority
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
            <span className="pill-badge" style={{ marginTop: 16, display: 'inline-flex' }}>
              <span className="pill-dot" />Protocoale somatice: 10-15 min/zi
            </span>
          </FadeIn>
        </div>

        <div className="grid-2" style={{ marginTop: 56 }}>
          <FadeIn delay={3} className="survival-quote on-dark">
            <p>
              „Am descoperit credințe și blocaje în locuri absolut inedite — în veci nu m-aș fi
              gândit că de acolo mi se trag autosabotorii financiari.”
              <br />
              <span style={{ fontStyle: 'normal', fontSize: '0.8rem', opacity: 0.6 }}>
                — Clientă, Ședință Individuală de Diagnoză
              </span>
            </p>
          </FadeIn>
          <FadeIn delay={4} className="survival-quote on-dark">
            <p>
              „Valoarea oferită este mult peste preț. Se lucrează intensiv și profund la nivel
              corporal, scoțând la suprafață lucruri pe care mintea rațională le ascunde.”
              <br />
              <span style={{ fontStyle: 'normal', fontSize: '0.8rem', opacity: 0.6 }}>
                — Membră în comunitate
              </span>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
