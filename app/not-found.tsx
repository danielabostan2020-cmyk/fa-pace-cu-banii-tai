import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { legal } from '@/components/legalConfig'

export const metadata: Metadata = {
  title: 'Pagina nu a fost găsită',
  robots: { index: false, follow: false },
}

const drumuri = [
  {
    href: '/',
    titlu: 'Fă pace cu banii tăi',
    text: 'Membershipul de 12 luni — lucru somatic și emoțional cu relația ta cu banii.',
  },
  {
    href: '/eft-prosper.html',
    titlu: 'Kitul EFT Prosper',
    text: 'Protocoalele de Tapping pentru cele 6 răni financiare. Acces pe viață.',
  },
  {
    href: '/rani-financiare.html',
    titlu: 'Testul Rănilor Financiare',
    text: 'Cinci minute care îți arată care dintre cele 6 răni te blochează acum. Gratuit.',
  },
]

export default function NotFound() {
  return (
    <main>
      <section className="nf-hero">
        <div className="container">
          <span className="section-label">Adresă negăsită</span>
          <h1 className="gradient-text">Pagina asta nu mai e aici</h1>
          <p className="nf-lede">
            Fie adresa are o greșeală de scriere, fie pagina s-a mutat de când ai salvat linkul.
            Oricare ar fi, nu ai greșit cu nimic — hai să te duc unde voiai să ajungi.
          </p>
        </div>
      </section>

      <section className="nf-body">
        <div className="container">
          <div className="nf-links">
            {drumuri.map((d) => (
              <a key={d.href} className="nf-link" href={d.href}>
                <h2>{d.titlu}</h2>
                <p>{d.text}</p>
                <span className="nf-go">Deschide →</span>
              </a>
            ))}
          </div>

          <p className="nf-help">
            Ai ajuns aici dintr-un email sau dintr-un link pe care ți l-am trimis eu? Scrie-mi la{' '}
            <a href={`mailto:${legal.email}`}>{legal.email}</a> și îți trimit adresa corectă.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
