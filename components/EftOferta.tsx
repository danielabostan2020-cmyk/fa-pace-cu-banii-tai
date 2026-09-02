import FadeIn from './FadeIn'
import { EFT_STRIPE_LINK } from './eftProsperConfig'

const continut = [
  '🧭 Testul Rănilor Financiare: diagnosticul de start care îți arată exact care dintre cele 6 răni te blochează acum',
  '🗺️ Modulul 0: Fundația & Harta Vizuală a Punctelor EFT + Emoțiile Asociate',
  '💔 Modulul 1: Rana Valorii Personale Legate de Bani',
  '🏋️‍♀️ Modulul 2: Rana Banilor Obținuți cu Greu',
  '🫣 Modulul 3: Rana Rușinii Financiare',
  '🛑 Modulul 4: Rana Demonizării Banilor (Conflictul moral cu abundența)',
  '🔒 Modulul 5: Rana Obsesiei pentru Siguranță (Control compulsiv prin restricție)',
  '💸 Modulul 6: Rana Banilor Care Dispar (Instabilitate ciclică și autosabotaj)',
  '🧘‍♀️ Modulul 7: Integrare, Consolidare & Sustenabilitate',
  '📋 Setul de Fișiere „Red Flags”: scanerul tău de diagnostic somatic în 60 sec',
  '📓 Caietele de Journaling Somatic: ghidajul de chirurgie subconștientă per modul',
  '🎁 Bonus 1: Meditație Audio de Reglare Rapidă a Sistemului Nervos',
  '🎁 Bonus 2: Acces permanent la Comunitatea Privată din Platformă',
]

export default function EftOferta() {
  return (
    <section id="eft-oferta" style={{ background: 'var(--white)' }}>
      <div className="container">
        <FadeIn as="span" className="section-label" style={{ textAlign: 'center', display: 'block' }}>
          Oferta finală
        </FadeIn>
        <FadeIn as="h2" style={{ color: 'var(--violet-deep)', textAlign: 'center', marginBottom: 12 }}>
          Reclamă-ți libertatea financiară și liniștea interioară chiar astăzi
        </FadeIn>
        <FadeIn as="p" className="body-text" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 48px' }}>
          Nu mai lăsa un sistem nervos în alertă să ia deciziile financiare în locul tău. Treci de
          la anxietate și autosabotaj la claritate, siguranță și prosperitate dinamică.
        </FadeIn>

        <FadeIn className="pricing-card featured" style={{ maxWidth: 560, margin: '0 auto' }}>
          <span className="rec-badge">Kitul EFT Prosper</span>
          <h3>Iată tot ce primești astăzi</h3>
          <ul className="features-list">
            {continut.map((f) => <li key={f}>{f}</li>)}
          </ul>
          <div className="price-value" style={{ textAlign: 'center' }}>
            297 <sub>RON</sub>
          </div>
          <p className="price-cadence" style={{ textAlign: 'center' }}>
            Plată unică — fără abonamente lunare, fără taxe ascunse
          </p>
          <a
            href={EFT_STRIPE_LINK}
            className="btn btn-gold"
            style={{ display: 'block', textAlign: 'center', width: '100%' }}
          >
            Vreau acces imediat la Kitul EFT Prosper →
          </a>
          <p className="pricing-note-small" style={{ textAlign: 'center', marginTop: 14 }}>
            ♾️ Acces pe viață · 📱 Telefon, tabletă și laptop · 🔐 Plată 100% securizată
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
