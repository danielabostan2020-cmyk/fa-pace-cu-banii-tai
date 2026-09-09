import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import {
  modules,
  continutModul,
  doarInMembership,
  moduleDisponibile,
  PRET_MODUL,
} from '@/components/moduleData'

const title = 'Module individuale'
const description = `Cumpără separat oricare dintre cele 12 module din „Fă pace cu banii tăi". ${PRET_MODUL} lei modulul, acces pe viață.`

const url = '/module.html'
const ogImage = '/og-fa-pace-cu-banii-tai.png'

export const metadata: Metadata = {
  title: `Module individuale — ${PRET_MODUL} lei modulul`,
  description,
  alternates: { canonical: url },
  // Cât timp niciun modul nu are link de plată, pagina nu are ce căuta în Google.
  robots: moduleDisponibile > 0 ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: { title, description, url, type: 'website', images: [ogImage] },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
}

export default function ModulePage() {
  const nimicDisponibil = moduleDisponibile === 0

  return (
    <main>
      <section className="mod-hero">
        <div className="container">
          <FadeIn as="span" className="section-label">
            Fă pace cu banii tăi
          </FadeIn>
          <FadeIn as="h1" delay={1} className="gradient-text">
            Ia doar modulul de care ai nevoie acum
          </FadeIn>
          <FadeIn as="p" delay={2} className="mod-lede">
            Nu toată lumea are nevoie de tot parcursul deodată. Dacă știi deja ce te blochează —
            datoria care revine, teama de a cere mai mult, banii care dispar — poți lua exact
            modulul acela și lucra pe el, în ritmul tău.
          </FadeIn>
          <FadeIn as="p" delay={3} className="mod-price">
            {PRET_MODUL} lei modulul · plată unică · acces pe viață
          </FadeIn>
        </div>
      </section>

      <section className="mod-what">
        <div className="container">
          <div className="mod-what-grid">
            <FadeIn className="mod-box mod-box-in">
              <h2>Ce primești</h2>
              <ul>
                {continutModul.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={1} className="mod-box mod-box-out">
              <h2>Ce rămâne în membership</h2>
              <ul>
                {doarInMembership.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="mod-box-note">
                Lucrul în grup și ghidajul meu direct se întâmplă doar în membership. Dacă simți
                că ai nevoie de ele, <a href="/">vezi parcursul complet</a>.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mod-list-sec">
        <div className="container-wide">
          <div className="container" style={{ padding: 0 }}>
            <FadeIn as="span" className="section-label">
              Cele 12 module
            </FadeIn>
            <FadeIn as="h2" style={{ color: 'var(--violet-deep)', marginBottom: 14 }}>
              Alege-l pe al tău
            </FadeIn>
            {nimicDisponibil && (
              <FadeIn as="p" className="mod-soon-all">
                Modulele se deschid pe rând la vânzare individuală. Scrie-mi la{' '}
                <a href="mailto:contact@danielabostan.ro">contact@danielabostan.ro</a> și îți spun
                când e gata cel care te interesează.
              </FadeIn>
            )}
          </div>

          <div className="mod-grid">
            {modules.map((m, i) => (
              <FadeIn
                key={m.num}
                delay={(i % 3) as 0 | 1 | 2}
                className={`mod-card${m.stripe ? '' : ' is-soon'}`}
              >
                <span className="mod-num">Modul {m.num}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                {m.stripe ? (
                  <a className="btn btn-gold mod-buy" href={m.stripe}>
                    Cumpără, {PRET_MODUL} lei
                  </a>
                ) : (
                  <span className="mod-soon">În curând</span>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mod-closing">
        <div className="container">
          <FadeIn as="h2">Vrei tot parcursul, nu doar o bucată?</FadeIn>
          <FadeIn as="p" delay={1} className="mod-closing-text">
            Membershipul îți dă toate cele 12 module, cele 24 de întâlniri live și sprijinul meu
            pe drum. Dacă știi că vrei schimbarea întreagă, acolo e locul tău.
          </FadeIn>
          <FadeIn delay={2} className="cta-group centered">
            <a href="/" className="btn btn-gold">
              Vezi membershipul „Fă pace cu banii tăi" →
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </main>
  )
}
