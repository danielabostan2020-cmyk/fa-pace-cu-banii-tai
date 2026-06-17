import FadeIn from './FadeIn'

export default function TestimonialeTimurii() {
  return (
    <section id="testi-timpurii">
      <div className="container">
        <FadeIn as="span" className="section-label">Voci din program</FadeIn>
        <FadeIn as="h2">Ce spun participantele</FadeIn>

        <div className="testi-grid">
          <FadeIn className="testi-card">
            <div className="testi-stars">
              {[...Array(5)].map((_, i) => <span key={i} className="testi-star" />)}
            </div>
            <span className="testi-theme">Descoperirea blocajelor</span>
            <p className="testi-quote">
              Am descoperit credințe și blocaje în locuri absolut inedite, în veci nu m-aș fi
              putut gândi că de acolo mi se trag niște autosabotori. Daniela e blândă, nu
              încurajează statutul de victimă și e susținătoare.
            </p>
            <span className="testi-attr">— R.P., practician holistică, Timișoara</span>
          </FadeIn>

          <FadeIn delay={1} className="testi-card">
            <div className="testi-stars">
              {[...Array(5)].map((_, i) => <span key={i} className="testi-star" />)}
            </div>
            <span className="testi-theme">Valoarea programului</span>
            <p className="testi-quote">
              Valoarea oferită e mult peste prețul acestui abonament. Se lucrează intensiv,
              personalizat, se scot la suprafață ce nici cu gândul nu gândești. Este un spațiu
              sigur, intim. Daniela e foarte implicată și dedicată, dincolo de profesionalism.
            </p>
            <span className="testi-attr">— L.B., nutriționistă, București</span>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
