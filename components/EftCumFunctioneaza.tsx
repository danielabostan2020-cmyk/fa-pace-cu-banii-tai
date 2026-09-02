import FadeIn from './FadeIn'

const pasi = [
  {
    title: 'Identifici Rana Dominantă prin Testul Rănilor Financiare',
    text: 'Chiar de la începutul programului, parcurgi Testul Rănilor Financiare pentru a afla cu precizie chirurgicală care dintre cele 6 răni îți blochează cel mai mult veniturile, liniștea sau capacitatea de a păstra banii în prezent.',
  },
  {
    title: 'Aplici Protocolul EFT Specific Rănii Tale',
    text: 'Urmărești o scurtă explicație despre mecanismul rănii, iar apoi parcurgi protocolul audio/video de Tapping (10-15 minute). Trimiți semnale directe de siguranță către amigdală, dezamorsând frica și tensiunea fizică direct din corpul tău.',
  },
  {
    title: 'Oprești Pilotul Automat în Viața Reală cu Fișele „Red Flags”',
    text: 'Localizezi blocajul în 60 de secunde, recunoști semnalul de alarmă înainte să faci o achiziție din vinovăție sau să te contractezi când fixezi un preț, și vezi progresul cu ochii tăi — bifele dispar una câte una.',
  },
  {
    title: 'Extragi „Muniția” Subconștientă prin Journaling Somatic',
    text: 'Prin etichetare afectivă, descarci presiunea pe hârtie și creezi frazele exacte pentru Tapping — vorbele, amintirile și credințele moștenite care fac eliberarea mai rapidă și mai precisă.',
  },
]

export default function EftCumFunctioneaza() {
  return (
    <section id="eft-cum-functioneaza" style={{ background: 'var(--white)' }}>
      <div className="container">
        <FadeIn as="span" className="section-label">Sistemul</FadeIn>
        <FadeIn as="h2" style={{ color: 'var(--violet-deep)', marginBottom: 16, maxWidth: 640 }}>
          Parcursul tău simplu de recondiționare financiară
        </FadeIn>
        <FadeIn as="p" className="body-text" style={{ maxWidth: 700, marginBottom: 24 }}>
          Fără teorie sterilă și fără presiunea unui calendar impus. Un sistem clar, conceput să
          se integreze natural în 10-15 minute pe zi.
        </FadeIn>

        <div className="steps-list">
          {pasi.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 4) as 0 | 1 | 2 | 3} className="step-item">
              <span className="step-num">{i + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
