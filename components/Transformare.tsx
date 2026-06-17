import FadeIn from './FadeIn'

const rows = [
  { before: { label: 'Anxietate constantă', detail: 'Verifici contul cu frică.' }, after: { label: 'Siguranță', detail: 'Deschizi aplicația de banking cu calm și claritate.' } },
  { before: { label: 'Epuizare', detail: 'Muncești mult, dar banii dispar.' }, after: { label: 'Eficiență', detail: 'Câștigurile rămân și cresc în sistemul tău.' } },
  { before: { label: 'Îngheț', detail: 'Te blochezi când trebuie să ceri mai mult.' }, after: { label: 'Acțiune', detail: 'Negociezi și ceri valoarea reală cu încredere.' } },
  { before: { label: 'Sabotaj', detail: 'Cheltuieli impulsive când ai surplus.' }, after: { label: 'Acumulare', detail: 'Te bucuri de surplus și îl direcționezi spre creștere.' } },
  { before: { label: 'Goană', detail: 'Alergi mereu după stabilitate.' }, after: { label: 'Sustenabilitate', detail: 'Susții stabilitatea și creșterea în timp.' } },
]

export default function Transformare() {
  return (
    <section id="transformare">
      <div className="container">
        <FadeIn as="span" className="section-label">Înainte și în proces</FadeIn>
        <FadeIn as="h2">Transformarea ta</FadeIn>

        <FadeIn className="transform-wrap">
          <div className="t-col-before">
            <div className="t-col-head before">Înainte</div>
            {rows.map((r) => (
              <div key={r.before.label} className="t-row">
                <span className="t-label">{r.before.label}</span>
                <span className="t-detail">{r.before.detail}</span>
              </div>
            ))}
          </div>
          <div className="t-col-after">
            <div className="t-col-head after">În proces</div>
            {rows.map((r) => (
              <div key={r.after.label} className="t-row">
                <span className="t-label">{r.after.label}</span>
                <span className="t-detail">{r.after.detail}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
