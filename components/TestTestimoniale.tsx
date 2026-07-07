import FadeIn from './FadeIn'

const testimoniale = [
  {
    theme: 'Oana, 44 ani',
    quote:
      'Am făcut quiz-ul din curiozitate și mi-am dat seama exact ce anume mă blochează. În 5 minute am înțeles de ce, din punct de vedere financiar, rămân pe loc, deși muncesc mult. A fost ca și cum cineva a aprins lumina în cameră.',
    attr: 'profesionistă într-un mediu corporatist',
  },
  {
    theme: 'Andreea, 41 ani',
    quote:
      'Nu credeam că un chestionar atât de simplu poate să-mi arate ceva nou. Dar m-am recunoscut în descriere 100%. Acum știu pe ce să lucrez și mă simt mult mai încrezătoare că pot schimba relația mea cu banii.',
    attr: 'coach & freelancer creativ',
  },
  {
    theme: 'Anca, 49 ani',
    quote:
      'Mi-am dat seama că banii vin și pleacă la mine exact cum zice testul. Mereu apare o cheltuială neașteptată și nu rămân cu nimic. Și asta e povestea vieții mele. Acum am înțeles că nu e doar ghinion, ci un tipar pe care pot să-l schimb.',
    attr: 'antreprenoare în domeniul serviciilor',
  },
]

export default function TestTestimoniale() {
  return (
    <section id="test-testimoniale">
      <div className="container">
        <FadeIn as="span" className="section-label">Testimoniale</FadeIn>
        <FadeIn as="h2">Ce spun cele care au făcut testul</FadeIn>

        <div className="testi-grid testi-grid-3">
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
