import { moduleDisponibile } from './moduleData'

const defaultDisclaimer =
  'Fă pace cu banii tăi este un program educațional și transformațional. Programul nu ' +
  'oferă consultanță financiară, fiscală, juridică, medicală sau psihoterapie ' +
  'individuală. Rezultatele individuale variază în funcție de contextul personal, ' +
  'nivelul de implicare și aplicarea practică. Participarea la program nu garantează ' +
  'creșteri de venit sau rezultate financiare specifice.'

export default function Footer({ disclaimer = defaultDisclaimer }: { disclaimer?: string }) {
  return (
    <>
      <section id="nota-legala">
        <div className="container">
          <p>{disclaimer}</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>
            © 2026 Daniela Bostan &nbsp;·&nbsp;{' '}
            <a href="mailto:contact@danielabostan.ro">contact@danielabostan.ro</a>
          </p>
          <p className="footer-nav">
            {moduleDisponibile > 0 && (
              <>
                <a href="/module.html">Module individuale</a>
                &nbsp;·&nbsp;
              </>
            )}
            <a href="/eft-prosper.html">Kitul EFT Prosper</a>
            &nbsp;·&nbsp;
            <a href="/rani-financiare.html">Testul Rănilor Financiare</a>
          </p>
          <p className="footer-legal">
            <a href="/politica-confidentialitate.html">Politică de confidențialitate</a>
            &nbsp;·&nbsp;
            <a href="/termeni-conditii.html">Termeni și condiții</a>
          </p>
          <p className="footer-legal">
            <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
              ANPC — Soluționarea Alternativă a Litigiilor
            </a>
            &nbsp;·&nbsp;
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Soluționarea Online a Litigiilor
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
