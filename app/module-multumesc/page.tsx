import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import { legal } from '@/components/legalConfig'
import ModuleAcces from '@/components/ModuleAcces'

const title = 'Modulul tău te așteaptă'
const description = 'Plata a fost confirmată. Intră în modul de aici.'

export const metadata: Metadata = {
  title,
  description,
  // Se vede doar după plată — nu are ce căuta în rezultatele căutărilor.
  robots: { index: false, follow: false },
}

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
          <FadeIn as="h2" style={{ color: 'var(--violet-deep)', marginBottom: 14 }}>
            Intră în modulul tău
          </FadeIn>
          <ModuleAcces />

          <FadeIn className="ty-note">
            <p>
              <strong>La prima intrare îți faci un cont, și contează cum.</strong> Platforma îți
              cere o adresă de email și o parolă. Folosește <strong>exact adresa cu care ai
              plătit</strong> — după ea te recunoaște și îți deschide modulul. Cu altă adresă nu
              are de unde să știe că ai cumpărat.
            </p>
          </FadeIn>

          <FadeIn as="p" className="ty-intro" style={{ marginBottom: 32 }}>
            Nu te grăbi să începi azi. Modulul e al tău pe viață, dar alege-ți dinainte două ore
            liniștite — lucrul ăsta cere prezență, nu viteză.
          </FadeIn>

          <FadeIn className="ty-note">
            <p>
              <strong>Ceva nu merge?</strong> Scrie-mi la{' '}
              <a href={`mailto:${legal.email}`}>{legal.email}</a> și îți deschid accesul manual, în
              aceeași zi. Nu rămâi blocată.
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
