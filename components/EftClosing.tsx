import FadeIn from './FadeIn'
import { EFT_STRIPE_LINK } from './eftProsperConfig'

export default function EftClosing() {
  return (
    <section id="closing" className="noise-layer">
      <div className="container">
        <FadeIn as="span" className="section-label" style={{ textAlign: 'center', display: 'block' }}>
          Un ultim gând de la Daniela Bostan
        </FadeIn>
        <FadeIn as="p" className="closing-text">
          „Schimbarea reală nu se întâmplă când te stresezi mai mult sau când te cerți pentru
          greșelile din trecut. Schimbarea începe în momentul în care corpul tău înțelege că este
          în siguranță să primească, să aibă și să păstreze mai mult.”
        </FadeIn>
        <FadeIn delay={1} className="cta-group centered">
          <a href={EFT_STRIPE_LINK} className="btn btn-gold">
            Vreau acces la Kitul EFT Prosper, 297 RON →
          </a>
        </FadeIn>
        <FadeIn as="p" delay={2} className="guarantee-note" style={{ textAlign: 'center' }}>
          Garanție 14 zile. Rambursare completă, fără condiții.
        </FadeIn>
      </div>
    </section>
  )
}
