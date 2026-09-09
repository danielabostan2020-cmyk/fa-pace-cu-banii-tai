import FadeIn from './FadeIn'
import { modules } from './moduleData'


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
      </div>
    </section>
  )
}
