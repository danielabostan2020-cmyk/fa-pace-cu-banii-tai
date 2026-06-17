import FadeIn from './FadeIn'

const STRIPE_MONTHLY = 'https://buy.stripe.com/cNi8wQ5EW5Nk2td9pK6Vq05'
const STRIPE_ANNUAL  = 'https://buy.stripe.com/6oU14o6J05Nk0l5gSc6Vq06'

export default function Closing() {
  return (
    <section id="closing" className="noise-layer">
      <div className="container">
        <FadeIn as="p" className="closing-text">
          Dacă ai citit până aici, știi deja că problema nu ești tu. Știi că ai muncit. Știi că
          ai încercat. Știi că ceva mai adânc decât disciplina sau strategia te-a ținut în
          același loc.
        </FadeIn>
        <FadeIn as="p" delay={1} className="closing-text">
          Programul acesta îți oferă șansa să devii, în sfârșit, tu, fără tiparele care au decis
          până acum cât îți este permis să ai, să ceri, să primești.
        </FadeIn>
        <FadeIn
          as="p"
          delay={2}
          className="closing-text gradient-text"
          style={{ fontSize: '1.2rem', fontStyle: 'normal', fontWeight: 600 }}
        >
          Locul tău este aici. Momentul potrivit este acum.
        </FadeIn>
        <FadeIn delay={3} className="cta-group centered">
          <a href={STRIPE_MONTHLY} className="btn btn-gold">
            Vreau să încep, 197 RON / lună
          </a>
          <a href={STRIPE_ANNUAL} className="btn btn-outline-light">
            Aleg parcursul complet, 1.970 RON / an
          </a>
        </FadeIn>
        <FadeIn as="p" delay={3} className="guarantee-note" style={{ textAlign: 'center' }}>
          Garanție 14 zile. Rambursare completă, fără condiții.
        </FadeIn>
      </div>
    </section>
  )
}
