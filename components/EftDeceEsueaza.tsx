import FadeIn from './FadeIn'

const motive = [
  {
    num: '01',
    title: 'Se adresează doar celor 5% din creier (Mintea Rațională)',
    text: 'Cursurile clasice te învață ce să faci matematic cu banii. Însă deciziile reale sunt conduse de subconștient (95%). Când există un conflict între o dorință logică („Vreau să câștig mai mult”) și o programare subconștientă de frică („Dacă am bani, voi fi exploatat/ă sau îi voi pierde”), subconștientul va câștiga întotdeauna.',
  },
  {
    num: '02',
    title: 'Tratează banii ca pe cifre, nu ca pe o stare de siguranță fizică',
    text: 'Un tabel în Excel nu are cum să îți liniștească palpitațiile sau strângerea din gât când deschizi aplicația băncii sau când trebuie să fixezi prețul pentru serviciile tale. Când corpul interpretează banii ca pe o amenințare, amigdala cerebrală preia controlul și deconectează mintea logică.',
  },
  {
    num: '03',
    title: 'Se bazează pe Voință — o resursă care se consumă rapid',
    text: 'În momentele de oboseală, presiune sau stres zilnic, voința cedează prima. Sistemul nervos revine automat la singurul mod pe care îl cunoaște pentru a te proteja: cumpărături impulsive (pentru un dop rapid de dopamină) sau izolare financiară.',
  },
  {
    num: '04',
    title: 'Alimentează un cerc vicios al Vinovăției și Rușinii',
    text: 'Când o „dietă financiară” eșuează, concluzia oferită de abordările clasice este că „nu ești suficient de disciplinat/ă”. Apare rușinea, care crește nivelul de cortizol și anxietate din corp. Iar pentru a scăpa de această durere emoțională, corpul te împinge... exact spre aceleași comportamente de autosabotaj.',
  },
]

export default function EftDeceEsueaza() {
  return (
    <section id="eft-esec" style={{ background: 'var(--violet-dark)' }}>
      <div className="container">
        <FadeIn as="span" className="section-label">De ce nu a funcționat până acum</FadeIn>
        <FadeIn as="h2" style={{ color: 'var(--cream)', marginBottom: 16, maxWidth: 640 }}>
          De ce logica, voința și aplicațiile de bugetare nu pot rezolva o problemă de sistem nervos?
        </FadeIn>
        <FadeIn as="p" style={{ color: 'rgba(255,249,242,0.75)', maxWidth: 700, marginBottom: 48 }}>
          Când ai încercat să-ți rezolvi provocările financiare doar prin educație clasică sau
          organizare, biologia ta a ales întotdeauna siguranța în fața logicii. Nu ai dus lipsă de
          informație sau intenții bune. Ai folosit pur și simplu o unealtă rațională pentru a
          încerca să vindeci o reacție profund somatică.
        </FadeIn>

        <div className="pillars-grid">
          {motive.map((m) => (
            <FadeIn key={m.num} className="pillar">
              <span className="pillar-title">{m.num} — {m.title}</span>
              <p>{m.text}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="survival-quote on-dark" style={{ marginTop: 48 }}>
          <p>
            💡 Soluția nu este mai multă rigoare. Soluția este Decondiționarea Somatică.
            <br />
            Pentru a schimba definitiv rezultatele financiare, trebuie mai întâi să îi transmiți
            sistemului tău nervos că este în siguranță atunci când primești, ai și păstrezi banii.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
