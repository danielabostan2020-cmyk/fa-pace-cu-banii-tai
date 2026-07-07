import Image from 'next/image'
import FadeIn from './FadeIn'

const TEST_URL = '/test-rani-financiare.html'

export default function TestPoveste() {
  return (
    <>
      <section id="test-poveste" style={{ background: 'var(--bg-off)' }}>
        <div className="container">
          <FadeIn className="founder-story">
            <div className="founder-story-header">
              <span className="story-eyebrow">Povestea fondatoarei</span>
              <h3>Daniela Bostan — Terapeut Holistic, EFT Practitioner, Matrix Reimprinting</h3>
            </div>

            <div className="founder-story-body founder-story-body--flex">
              <div className="founder-photo">
                <Image
                  src="/daniela-alb.png"
                  alt="Daniela Bostan — Terapeut Holistic, EFT Practitioner, Matrix Reimprinting"
                  width={210}
                  height={310}
                  loading="lazy"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
                <div className="founder-photo-caption">
                  <strong>Daniela Bostan</strong>
                  <span>Terapeut Holistic, EFT Practitioner, Matrix Reimprinting</span>
                </div>
              </div>

              <div className="founder-text">
                <p>
                  N-am avut un drum liniar, o hartă clară și nici un trecut perfect. Am trecut prin
                  traume, perioade de epuizare și lipsuri, și de mai multe ori a trebuit să-mi
                  reconstruiesc viața de la zero. Știu cum e să muncești din greu și să simți că, în
                  ciuda eforturilor, banii nu ajung niciodată.
                </p>
                <p>
                  <span className="story-highlight">
                    Am descoperit că adevăratul blocaj nu era în ceea ce făceam, ci în ceea ce
                    simțeam și credeam despre bani și despre mine – aceste răni emoționale,
                    energetice și subconștiente legate de bani, valoare personală și abundență, care
                    mă țineau pe loc fără să știu.
                  </span>
                </p>
                <p>
                  Astăzi nu sunt aici să „învăț" pe cineva, ci să ghidez și să susțin femeile care
                  trec prin aceleași provocări ca și mine, să își vindece relația cu banii și să își
                  construiască o viață financiară mai liberă și mai autentică.
                </p>
                <p className="story-pivot">
                  Chestionarul pe care îl primești acum este primul pas – simplu și clar – spre
                  conștientizare și spre o relație nouă cu banii.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="test-closing" style={{ background: 'var(--violet-deep)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn as="h2" style={{ color: 'var(--cream)', marginBottom: 20 }}>
            Nu mai repeta aceleași tipare financiare.
          </FadeIn>
          <FadeIn
            as="p"
            style={{ color: 'rgba(255,249,242,0.62)', maxWidth: 520, margin: '0 auto' }}
          >
            Investește 5 minute din timpul tău și află ce te blochează. Acesta poate fi primul pas
            spre libertatea ta financiară.
          </FadeIn>
          <FadeIn delay={1} className="cta-group centered">
            <a href={TEST_URL} className="btn btn-gold">
              Începe testul gratuit →
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
