import FadeIn from './FadeIn'
import { modules, moduleDisponibile, PRET_MODUL } from './moduleData'


export default function Module() {
  return (
    <section id="module">
      <div className="container-wide">
        <div className="container" style={{ padding: 0 }}>
          <FadeIn as="span" className="section-label">Traseul</FadeIn>
          <FadeIn as="h2">Traseul celor 12 module</FadeIn>
        </div>

        <div className="modules-grid" style={{ marginTop: '52px' }}>
          {modules.map((m, i) => (
            <FadeIn
              key={m.num}
              delay={((i % 3) as 0 | 1 | 2)}
              className="module-card"
            >
              <span className="module-num">Modul {m.num}</span>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </FadeIn>
          ))}
        </div>

        {/* Momentul în care cineva își recunoaște modulul e chiar aici, sub listă.
            Ținut discret intenționat: pagina principală vinde abonamentul, iar
            rândul ăsta e pentru cine oricum nu l-ar fi luat. Apare doar când
            există măcar un modul cu link de plată. */}
        {moduleDisponibile > 0 && (
          <div className="container" style={{ padding: 0 }}>
            <FadeIn as="p" className="module-single">
              Ți-ai recunoscut modulul în lista de mai sus? Îl poți lua și separat, fără
              abonament — {PRET_MODUL} lei, acces pe viață.{' '}
              <a href="/module.html">Vezi modulele individuale →</a>
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  )
}
