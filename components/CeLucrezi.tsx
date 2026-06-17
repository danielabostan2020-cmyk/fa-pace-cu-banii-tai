import FadeIn from './FadeIn'

const pillars = [
  {
    title: 'Cu istoria ta financiară',
    text: 'Mesajele moștenite despre bani, muncă și sacrificiu. Loialitățile transgeneraționale care îți decid care e plafonul tău. Traumele și șocurile financiare rămase active. Rușinea și vinovăția din jurul banilor și al meritului.',
  },
  {
    title: 'Cu corpul tău',
    text: 'Cum reacționezi somatic în momentele financiare concrete: îngheț, evitare, contracție, retragere. Strategiile cognitive nu schimbă nimic atâta vreme cât corpul răspunde înaintea oricărui gând.',
  },
  {
    title: 'Cu identitatea ta',
    text: 'Ce câștigi inconștient rămânând în același loc. Dificultatea de a primi, de a cere, de a păstra. Credința „nu merit mai mult" și cum o rescrii la rădăcină, nu la suprafață.',
  },
  {
    title: 'Cu reconstrucția',
    text: 'Obiective financiare setate din siguranță, nu din presiune. Recuperarea după eșecuri și promisiuni încălcate față de tine. Construirea unei identități financiare care se susține în timp.',
  },
]

export default function CeLucrezi() {
  return (
    <section id="ce-lucrezi" className="noise-layer">
      <div className="container">
        <FadeIn as="span" className="section-label">Conținutul procesului</FadeIn>
        <FadeIn as="h2">Ce vei lucra în program</FadeIn>

        <div className="pillars-grid" style={{ marginTop: '52px' }}>
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 4) as 0 | 1 | 2 | 3} className="pillar">
              <p className="pillar-title">{p.title}</p>
              <p>{p.text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
