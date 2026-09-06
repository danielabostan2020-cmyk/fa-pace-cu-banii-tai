import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import { legal } from '@/components/legalConfig'

const title = 'Bine ai venit în EFT Prosper'
const description = 'Plata ta a fost confirmată. Iată ce urmează.'

export const metadata: Metadata = {
  title,
  description,
  // Pagina apare doar după plată — nu are ce căuta în rezultatele căutărilor.
  robots: { index: false, follow: false },
}

const pasi = [
  {
    n: '1',
    titlu: 'Verifică-ți emailul',
    text: 'Ți-am trimis pe adresa cu care ai plătit datele de acces în platformă. De obicei ajunge în câteva minute.',
  },
  {
    n: '2',
    titlu: 'Dacă nu îl găsești, uită-te în Spam',
    text: 'Emailurile cu date de acces ajung uneori în Spam sau în fila Promoții. Marchează-l ca „Nu este spam”, ca să primești și restul materialelor.',
  },
  {
    n: '3',
    titlu: 'Începe cu Testul Rănilor Financiare',
    text: 'Este primul pas din parcurs și îți arată exact care dintre cele 6 răni te blochează acum. De acolo știi cu ce modul să continui.',
  },
]

export default function EftProsperMultumescPage() {
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
            Mulțumesc. Ai făcut primul pas.
          </FadeIn>
          <FadeIn as="p" delay={2} className="ty-lede">
            Kitul EFT Prosper este al tău, cu acces pe viață. Îmi place mult că ești aici — hotărârea
            de a te uita la relația ta cu banii este partea cea mai grea, iar tu tocmai ai luat-o.
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
            Ai la dispoziție <strong>14 zile de garanție</strong>. Dacă simți că nu e pentru tine,
            îmi scrii un email și îți returnez toată suma, fără să îți cer explicații.
          </FadeIn>
        </div>
      </section>

      <Footer disclaimer="EFT Prosper este un program educațional și transformațional. Nu oferă consultanță financiară, fiscală, juridică, medicală sau psihoterapie individuală. Rezultatele individuale variază în funcție de contextul personal, nivelul de implicare și aplicarea practică." />
    </main>
  )
}
