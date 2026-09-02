import FadeIn from './FadeIn'

const testimoniale = [
  {
    theme: 'Autosabotori descoperiți',
    quote: 'Am descoperit credințe și blocaje în locuri absolut inedite, în veci nu m-aș fi putut gândi că de acolo mi se trag niște autosabotori. Daniela este blândă, nu încurajează statutul de victimă și este extrem de susținătoare.',
    attr: '— Clientă, Ședință Individuală de Diagnoză',
  },
  {
    theme: 'Eliberare în siguranță',
    quote: 'Am simțit cu adevărat cât de profund ai lucrat și cât de atent ai citit din câmp, ghidând procesul cu claritate și prezență. M-am simțit în siguranță în spațiul pe care l-ai creat, iar eliberarea pe care am trăit-o a fost una profundă.',
    attr: '— Clientă, Ședință Individuală',
  },
  {
    theme: 'Valoare peste preț',
    quote: 'Valoarea oferită e mult peste preț. Se lucrează intensiv, personalizat, se scot la suprafață lucruri la care nici cu gândul nu te gândești. Este un spațiu sigur și intim. Daniela e foarte implicată și dedicată, dincolo de profesionalism.',
    attr: '— Membră în comunitate',
  },
  {
    theme: 'Anxietate diminuată',
    quote: 'Frica legată de situația mea financiară s-a diminuat considerabil. Mulțumesc, Daniela, pentru dedicația ta. E mare nevoie de educație și lucru pe programe limitative.',
    attr: '— Participantă, Sesiune de Grup',
  },
  {
    theme: 'Ghidare eficientă',
    quote: 'Mi-a plăcut mult modul în care ai ghidat întâlnirea. Partea introductivă s-a îmbinat atât de natural cu cea practică. Ghidare intuitivă și eficientă. În timpul sesiunii am avut parte de o eliberare profundă: corpul meu este mult mai ușor și revigorat.',
    attr: '— Participantă, Sesiune de Grup',
  },
]

export default function EftTestimoniale() {
  return (
    <section id="eft-testimoniale" style={{ background: 'var(--bg-off)' }}>
      <div className="container-wide">
        <div className="container" style={{ padding: 0 }}>
          <FadeIn as="span" className="section-label">Dovadă socială</FadeIn>
          <FadeIn as="h2" style={{ color: 'var(--violet-deep)', marginBottom: 44 }}>
            Rezultate reale din comunitate
          </FadeIn>
        </div>

        <div className="testi-grid testi-grid-3">
          {testimoniale.map((t, i) => (
            <FadeIn key={t.theme} delay={(i % 3) as 0 | 1 | 2} className="testi-card">
              <div className="testi-stars" aria-hidden="true">
                {[...Array(5)].map((_, j) => <span key={j} className="testi-star" />)}
              </div>
              <span className="testi-theme">{t.theme}</span>
              <p className="testi-quote">{t.quote}</p>
              <span className="testi-attr">{t.attr}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
