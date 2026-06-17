import FadeIn from './FadeIn'

const testimoniale = [
  {
    theme: 'Rezultat imediat',
    quote: 'Frica legată de situația mea financiară s-a diminuat. Mulțumesc, Daniela, pentru darul tău, timpul și dedicația ta. E mare nevoie de educație și lucru pe tipare limitative.',
    attr: '— M.A., terapeută',
  },
  {
    theme: 'Profunzimea lucrului',
    quote: 'Am simțit cu adevărat cât de profund ai lucrat și cât de atent ai citit din câmp, ghidând procesul cu blândețe, claritate și prezență. M-am simțit în siguranță în spațiul pe care l-ai creat, iar eliberarea pe care am trăit-o a fost una profundă.',
    attr: '— C.D., coach, Cluj',
  },
  {
    theme: 'Schimbarea concretă',
    quote: 'Am decis și am ales conștient să schimb povestea. Avem responsabilitatea și puterea de a ne schimba alegerile, poveștile, viața.',
    attr: '— A.M., consilieră',
  },
  {
    theme: 'Modul de lucru',
    quote: 'Mi-a plăcut mult modul în care ai ghidat această întâlnire: partea introductivă s-a îmbinat atât de natural cu partea practică. Ghidarea blândă, intuitivă, eficientă. În timpul acestei sesiuni am avut parte de o eliberare profundă. Corpul meu este mult mai ușor și mai revigorat.',
    attr: '— S.C., coach de carieră, Brașov',
  },
]

export default function Testimoniale() {
  return (
    <section id="testimoniale">
      <div className="container">
        <FadeIn as="span" className="section-label">Voci din program</FadeIn>
        <FadeIn as="h2">Ce spun participantele</FadeIn>

        <div className="testi-grid">
          {testimoniale.map((t, i) => (
            <FadeIn key={t.theme} delay={(i % 3) as 0 | 1 | 2} className="testi-card">
              <div className="testi-stars">
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
