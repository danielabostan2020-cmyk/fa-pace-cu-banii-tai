import FadeIn from './FadeIn'

const forItems = [
  '🩺 Ești coach, terapeută, consultantă sau practicantă în profesii de ajutor: muncești mult, oferi multă valoare, dar veniturile tale rămân oscilante sau sub nivelul pe care îl meriți cu adevărat.',
  '🔄 Te lovești repetat de același plafon financiar: ai încercat deja cărți de mindset, aplicații de bugetare și reguli de disciplină, dar revii involuntar la aceleași obiceiuri de autosabotaj.',
  '🫀 Simți blocajul financiar direct în corp: o strângere în piept când stabilești prețurile, un nod în gât când ceri bani sau o stare de îngheț când deschizi aplicația băncii.',
  '🌿 Ești gata să lucrezi la rădăcină, nu doar la suprafață: ești dispusă să îți privești tiparele financiare cu onestitate și să înlocuiești frica cu siguranța somatică.',
]

const notForItems = [
  '🪄 Cauți o soluție magică peste noapte: vrei rezultate fără nicio implicare din partea ta. EFT Prosper este o unealtă practică de recondiționare neuro-somatică, nu un truc miraculos.',
  '🏥 Ai nevoie de terapie clinică sau consultanță de investiții: te confrunți cu traume severe neprocesate sau cauți sfaturi bursiere/fiscale — domenii separate, care necesită profesioniști dedicați.',
  '⏱️ Nu ești dispusă să aloci 10-15 minute pe zi: nu dorești să îți acorzi câteva minute de prezență pentru a observa și elibera ce simte corpul tău în raport cu banii.',
]

export default function EftPentruCine() {
  return (
    <>
      <section id="eft-pentru-cine" style={{ background: 'var(--lavender)' }}>
        <div className="container">
          <FadeIn as="span" className="section-label">Potrivire</FadeIn>
          <FadeIn as="h2">EFT Prosper ESTE pentru tine dacă:</FadeIn>
          <FadeIn className="fit-list">
            {forItems.map((item) => (
              <div key={item} className="fit-item">{item}</div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section id="eft-pentru-cine-nu">
        <div className="container">
          <FadeIn as="span" className="section-label">Claritate</FadeIn>
          <FadeIn as="h2">Acest kit NU este pentru tine dacă:</FadeIn>
          <FadeIn as="p" className="exclusion-intro">
            Un filtru clar de rezonanță și asumare. Nu promovăm promisiuni nerealiste — ne
            adresăm femeilor pregătite să își recupereze siguranța financiară din interior.
          </FadeIn>
          <FadeIn className="exclusion-list">
            {notForItems.map((item) => (
              <div key={item} className="exclusion-item">{item}</div>
            ))}
          </FadeIn>
        </div>
      </section>
    </>
  )
}
