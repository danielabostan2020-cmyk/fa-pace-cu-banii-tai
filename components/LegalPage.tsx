import Footer from './Footer'
import { legal, legalIncomplet } from './legalConfig'

export default function LegalPage({
  titlu,
  intro,
  children,
}: {
  titlu: string
  intro: string
  children: React.ReactNode
}) {
  return (
    <main>
      <section className="legal-hero">
        <div className="container">
          <a className="legal-back" href="/">
            ← Înapoi la site
          </a>
          <h1>{titlu}</h1>
          <p className="legal-intro">{intro}</p>
          <p className="legal-updated">Ultima actualizare: {legal.actualizat}</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="container">
          {legalIncomplet && (
            <p className="legal-warning">
              <strong>Document în lucru.</strong> Datele de identificare ale vânzătorului nu
              sunt încă completate. Această pagină nu trebuie făcută publică în forma actuală.
            </p>
          )}
          {children}
        </div>
      </section>

      <Footer disclaimer="Acest document are caracter informativ și contractual și se aplică serviciilor educaționale oferite prin danielabostan.ro. Nu constituie consultanță juridică." />
    </main>
  )
}
