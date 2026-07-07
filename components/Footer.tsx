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
          <p className="footer-legal">
            <a href="#">Politică de confidențialitate</a>
            &nbsp;·&nbsp;
            <a href="#">Termeni și condiții</a>
          </p>
        </div>
      </footer>
    </>
  )
}
