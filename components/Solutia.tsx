import FadeIn from './FadeIn'

export default function Solutia() {
  return (
    <section id="solutia">
      <div className="container">
        <FadeIn as="span" className="section-label">Programul</FadeIn>
        <FadeIn as="h2">Un proces construit diferit</FadeIn>
        <FadeIn as="p" delay={1} className="program-subtitle">
          Un membership modular pentru reconstrucția identității tale financiare.
        </FadeIn>
        <FadeIn delay={2} className="body-text">
          <p>
            Stai în el modul după modul, până când noua versiune a ta, cea care știe să primească
            și să păstreze, devine normalitate. Termostatul tău financiar nu se resetează
            într-un weekend. Se resetează prin expunere repetată la un nou nivel de siguranță.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
