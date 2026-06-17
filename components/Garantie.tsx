import FadeIn from './FadeIn'

export default function Garantie() {
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
            <FadeIn as="h2">Garanție 14 zile</FadeIn>
            <FadeIn className="g-text">
              <p>
                Poți intra în primul modul și poți vedea cum rezonezi cu procesul. Dacă în
                primele 14 zile simți că nu este potrivit, îți returnez investiția.
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
