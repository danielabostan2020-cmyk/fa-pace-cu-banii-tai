import FadeIn from './FadeIn'

export default function FrazaOglinda() {
  return (
    <section id="fraza-oglinda" className="noise-layer">
      <div className="container">
        <FadeIn className="quote-wrap">
          <span className="quote-mark" aria-hidden="true">&ldquo;</span>
          <div className="quote-text">
            <p>
              Banii din cont nu îți definesc valoarea ta ca om. În schimb, îți arată cu o
              sinceritate brutală cum ai învățat să te raportezi la siguranță, merit, iubire.
            </p>
            <p>
              Dacă nu-ți place ce vezi în această oglindă, e inutil să dai cu ruj peste imagine.
              Ca să schimbi ce reflectă ea, e nevoie să schimbi mai întâi ceea ce se află în
              spatele imaginii: relația ta cu tine.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
