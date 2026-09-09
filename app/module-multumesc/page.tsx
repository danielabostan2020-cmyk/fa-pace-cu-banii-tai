import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import { legal } from '@/components/legalConfig'

const title = 'Modulul tău e pe drum'
const description = 'Plata a fost confirmată. Iată ce urmează.'

export const metadata: Metadata = {
  title,
  description,
  // Se vede doar după plată — nu are ce căuta în rezultatele căutărilor.
  robots: { index: false, follow: false },
}

const pasi = [
  {
    n: '1',
    titlu: 'Verifică-ți emailul',
    text: 'Ți-am trimis pe adresa cu care ai plătit datele de acces la modul. De obicei ajunge în câteva minute.',
  },
  {
    n: '2',
    titlu: 'Dacă nu îl găsești, uită-te în Spam',
    text: 'Emailurile cu date de acces ajung uneori în Spam sau în fila Promoții. Marchează-l ca „Nu este spam”, ca să primești și restul materialelor.',
  },
  {
    n: '3',
    titlu: 'Rezervă-ți timpul înainte să începi',
    text: 'Modulul e al tău pe viață, deci nu te grăbește nimeni. Dar alege-ți dinainte două ore liniștite — lucrul ăsta cere prezență, nu viteză.',
  },
]

export default function ModuleMultumescPage() {
  return (
    <main>
      <section className="ty-hero noise-layer">
        <div className="container">
          <FadeIn>
            <svg
              className="ty-check"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="32" cy="32" r="29" stroke="var(--gold)" strokeWidth="2" opacity="0.55" />
              <path
                d="M20 33.5l8.5 8.5L45 24"
                stroke="var(--gold)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </FadeIn>
          <FadeIn as="span" className="section-label" style={{ display: 'block' }}>
            Plata a fost confirmată
          </FadeIn>
          <FadeIn as="h1" delay={1} className="gradient-text">
            Mulțumesc. Modulul e al tău.
          </FadeIn>
          <FadeIn as="p" delay={2} className="ty-lede">
            Ai ales exact bucata de care ai nevoie acum, și asta spune ceva bun despre cât de
            limpede te vezi. Ai acces pe viață — îl poți relua oricând, de câte ori simți nevoia.
          </FadeIn>
        </div>
      </section>

      <section className="ty-body">
        <div className="container">
          <FadeIn as="h2" style={{ color: 'var(--violet-deep)', marginBottom: 36 }}>
            Ce urmează
          </FadeIn>

          <div className="ty-steps">
            {pasi.map((p, i) => (
              <FadeIn key={p.n} delay={(i % 2) as 0 | 1} className="ty-step">
                <span className="ty-step-n">{p.n}</span>
                <div>
                  <h3>{p.titlu}</h3>
                  <p>{p.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="ty-note">
            <p>
              <strong>Nu a ajuns niciun email după 24 de ore?</strong> Scrie-mi la{' '}
              <a href={`mailto:${legal.email}`}>{legal.email}</a> și îți deschid accesul manual. Nu
              rămâi blocată.
            </p>
          </FadeIn>

          <FadeIn as="p" className="ty-guarantee">
            Dacă pe parcurs simți că vrei tot traseul, cu întâlnirile live și cu ghidajul meu
            direct, <a href="/">membershipul te așteaptă</a>.
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
