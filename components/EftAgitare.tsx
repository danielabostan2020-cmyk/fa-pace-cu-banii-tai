import FadeIn from './FadeIn'

const symptome = [
  {
    icon: '💸',
    title: 'Banii se evaporă inexplicabil',
    desc: 'Indiferent cât de mult crești încasările sau veniturile, la finalul lunii ajungi din nou pe zero sau la limită.',
  },
  {
    icon: '🫀',
    title: 'Senzitivitate fizică la plăți',
    desc: 'Simți un nod în stomac sau o apăsare în piept de fiecare dată când trebuie să plătești ceva — chiar și atunci când îți permiți acel lucru.',
  },
  {
    icon: '🧠',
    title: 'Banii asociați cu pericolul',
    desc: 'În profunzime, asociezi banii cu presiunea, conflictul sau teama subconștientă că vei deveni o persoană rea sau respinsă dacă vei avea mai mult.',
  },
  {
    icon: '🔄',
    title: 'Epuizare din încercări repetate',
    desc: 'Treci de la episoade de control strict și bugete rigide direct la cumpărături impulsive sau amânarea deciziilor importante.',
  },
]

export default function EftAgitare() {
  return (
    <section id="eft-agitare" style={{ background: 'var(--bg-off)' }}>
      <div className="container">
        <FadeIn as="span" className="section-label">Recunoști tiparul?</FadeIn>
        <FadeIn as="h2" style={{ color: 'var(--violet-deep)', marginBottom: 16, maxWidth: 640 }}>
          Te recunoști în acest cerc vicios al banilor?
        </FadeIn>
        <FadeIn as="p" className="body-text" style={{ maxWidth: 700, marginBottom: 40 }}>
          Adevărul pe care cursurile clasice de educație financiară îl ignoră este simplu:
          deciziile tale financiare nu sunt luate de mintea conștientă, ci de reacțiile automate
          ale sistemului tău nervos. Dacă te confrunți cu una sau mai multe dintre aceste stări,
          problema nu este la nivel de cunoștințe, ci la nivel de siguranță corporală.
        </FadeIn>

        <div className="grid-2">
          {symptome.map((s, i) => (
            <FadeIn key={s.title} delay={(i % 2) as 0 | 1} className="module-card">
              <span className="md-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn as="p" className="body-text" style={{ maxWidth: 700, marginTop: 40 }}>
          Tragerea de timp, disciplina impusă prin forța voinței și restricțiile financiare oferă
          doar o iluzie de control. Este o luptă de uzură împotriva propriei biologii — o luptă
          care se încheie de fiecare dată cu oboseală și frustrare.
        </FadeIn>
      </div>
    </section>
  )
}
