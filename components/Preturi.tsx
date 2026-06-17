import FadeIn from './FadeIn'

const STRIPE_MONTHLY = 'https://buy.stripe.com/cNi8wQ5EW5Nk2td9pK6Vq05'
const STRIPE_ANNUAL  = 'https://buy.stripe.com/6oU14o6J05Nk0l5gSc6Vq06'

const featuresMonthly = [
  'Modulul lunii',
  '2 întâlniri live de 90 de minute',
  'Înregistrările modulului',
  'Fișa de lucru',
  'Audio-ul ghidat',
  'Protocoalele modulului',
  'Suport WhatsApp',
  'Feedback pe exerciții',
]

const featuresAnnual = [
  'Toate cele 12 module (Codul Meritului → Arhitectura Noii Identități)',
  '24 întâlniri live de 90 de minute, vinerea la 19:00',
  'Înregistrările tuturor sesiunilor',
  'Fișe de lucru, audio-uri ghidate și protocoale EFT',
  'Suport WhatsApp + feedback pe exerciții',
]

export default function Preturi() {
  return (
    <section id="preturi">
      <div className="container">
        <FadeIn as="span" className="section-label" style={{ textAlign: 'center', display: 'block' }}>
          Accesul
        </FadeIn>
        <FadeIn as="h2">Investiția ta</FadeIn>

        <div className="pricing-grid" style={{ marginTop: '56px' }}>
          <FadeIn className="pricing-card">
            <h3>Varianta lunară</h3>
            <div className="price-value">
              197 <sub>RON</sub>
            </div>
            <p className="price-cadence">/ lună</p>
            <ul className="features-list">
              {featuresMonthly.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a
              href={STRIPE_MONTHLY}
              className="btn btn-gold"
              style={{ display: 'block', textAlign: 'center', width: '100%' }}
            >
              Vreau să încep, 197 RON / lună
            </a>
            <p className="pricing-note-small">Poți renunța după un modul. Nu ești obligată să continui.</p>
            <p className="pricing-note-small" style={{ marginTop: '8px' }}>
              Garanție 14 zile. Rambursare completă, fără condiții.
            </p>
          </FadeIn>

          <FadeIn delay={1} className="pricing-card featured">
            <span className="rec-badge">Recomandat</span>
            <h3>Parcursul complet</h3>
            <div className="price-value">
              1.970 <sub>RON</sub>
            </div>
            <p className="price-cadence">/ an · toate cele 12 module</p>
            <div className="savings-banner">
              Prețul normal: 2.364 RON &nbsp;·&nbsp;{' '}
              <strong>Economisești 394 RON — 2 module gratuite</strong>
            </div>
            <ul className="features-list">
              {featuresAnnual.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a
              href={STRIPE_ANNUAL}
              className="btn btn-gold"
              style={{ display: 'block', textAlign: 'center', width: '100%' }}
            >
              Aleg parcursul complet, 1.970 RON / an
            </a>
            <p className="pricing-note-small" style={{ marginTop: '14px' }}>
              Garanție 14 zile. Rambursare completă, fără condiții.
            </p>
          </FadeIn>
        </div>

        <FadeIn as="p" className="pricing-philosophy">
          Relația cu banii nu se schimbă profund într-o lună. O lună poate aduce conștientizare.
          Trei luni pot crea bază. Șase luni pot scoate la suprafață rădăcinile blocajului.
          Douăsprezece luni pot stabiliza o identitate financiară nouă.
        </FadeIn>
      </div>
    </section>
  )
}
