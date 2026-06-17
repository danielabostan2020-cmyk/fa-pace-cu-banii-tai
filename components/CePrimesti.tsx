import FadeIn from './FadeIn'

const STRIPE_MONTHLY = 'https://buy.stripe.com/cNi8wQ5EW5Nk2td9pK6Vq05'
const STRIPE_ANNUAL  = 'https://buy.stripe.com/6oU14o6J05Nk0l5gSc6Vq06'

export default function CePrimesti() {
  return (
    <section id="ce-primesti">
      <div className="container">
        <FadeIn as="span" className="section-label">Structura programului</FadeIn>
        <FadeIn as="h2">Ce primești</FadeIn>

        <FadeIn className="body-text">
          <p>
            Două sesiuni live pe modul, vinerea de la 19:00, câte 90 de minute fiecare. Lucrezi
            aplicat, pui întrebări și înțelegi cum se manifestă același tipar la femei diferite.
            Participarea live contează: acolo apar clarificările pe care nu le găsești singură în
            text.
          </p>
          <p>
            Între sesiuni ai fișe de lucru, audio-uri ghidate și protocoale EFT pe care le
            folosești în ritmul tău. Dacă o sesiune atinge ceva și ai nevoie să continui procesul,
            ai cu ce. Dacă te prinde o reacție financiară dificilă în mijlocul săptămânii, ai un
            instrument concret la îndemână, nu doar o întrebare fără răspuns.
          </p>
          <p>
            Toate înregistrările sesiunilor modulului plătit rămân la tine. Le poți revedea
            oricând simți că ai nevoie de o recalibrare.
          </p>
          <p>
            Suport în grupul WhatsApp dedicat și feedback pe exercițiile modulului curent. Nu
            lucrezi în izolare cu ce iese la suprafață în proces.
          </p>
        </FadeIn>

        <FadeIn className="cta-group" style={{ marginTop: '40px' }}>
          <a href={STRIPE_MONTHLY} className="btn btn-gold">
            Vreau să încep, 197 RON / lună
          </a>
          <a href={STRIPE_ANNUAL} className="btn btn-outline-gold">
            Aleg parcursul complet, 1.970 RON / an
          </a>
        </FadeIn>

        <FadeIn as="p" className="guarantee-note dark">
          Garanție 14 zile. Rambursare completă, fără condiții.
        </FadeIn>
      </div>
    </section>
  )
}
