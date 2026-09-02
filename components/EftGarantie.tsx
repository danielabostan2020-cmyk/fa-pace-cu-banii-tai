import FadeIn from './FadeIn'

export default function EftGarantie() {
  return (
    <section id="garantie">
      <div className="container">
        <div className="garantie-inner">
          <FadeIn>
            <svg className="garantie-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M32 4L8 14v18c0 13.25 10.4 25.64 24 28 13.6-2.36 24-14.75 24-28V14L32 4z" fill="rgba(26,16,53,0.15)" stroke="rgba(26,16,53,0.5)" strokeWidth="2"/>
              <path d="M22 32l8 8 12-14" stroke="rgba(26,16,53,0.8)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </FadeIn>
          <div>
            <FadeIn as="h2">Garanția ta de Deplină Siguranță — 14 Zile Fără Riscuri</FadeIn>
            <FadeIn className="g-text">
              <p>
                Alege să testezi programul fără nicio presiune. Parcurge Testul Rănilor
                Financiare, ascultă protocoalele audio de Tapping și folosește Caietele de
                Journaling timp de 14 zile. Dacă simți că acest pachet nu este pentru tine sau nu
                îți oferă valoarea așteptată, trimite-mi un simplu email și îți voi returna 100%
                din sumă. Fără întrebări, fără complicații.
              </p>
              <p className="g-note">
                Aceasta este o garanție de potrivire, nu o garanție de rezultat financiar.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
