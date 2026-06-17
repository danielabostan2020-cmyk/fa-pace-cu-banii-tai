import FadeIn from './FadeIn'

const forItems = [
  'Pentru femeia care știe că problema nu este doar lipsa banilor.',
  'Care muncește mult, dar câștigurile ei nu reflectă asta.',
  'Care nu se simte în siguranță nici atunci când are mai mulți bani.',
  'Care deschide aplicația de banking cu strângere de inimă.',
  'Care vrea stabilitate și siguranță, nu doar cifre mai mari.',
  'Care a încercat cursuri, cărți, tehnici — și tot simte că ceva nu se leagă.',
  'Care este pregătită să lucreze cu sine, modul după modul, cu răbdare și onestitate.',
]

const notForItems = [
  'Nu pentru femeia care caută o soluție rapidă și nedureroasă.',
  'Nu pentru cea care vrea să înțeleagă intelectual, fără să simtă și să lucreze.',
  'Nu pentru cea care nu este pregătită să se uite onest la ea însăși, modul după modul.',
]

export default function PentruCine() {
  return (
    <>
      <section id="pentru-cine-este" style={{ background: 'var(--lavender)' }}>
        <div className="container">
          <FadeIn as="span" className="section-label">Potrivire</FadeIn>
          <FadeIn as="h2">Pentru cine este</FadeIn>
          <FadeIn className="fit-list">
            {forItems.map((item) => (
              <div key={item} className="fit-item">{item}</div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section id="pentru-cine-nu">
        <div className="container">
          <FadeIn as="span" className="section-label">Claritate</FadeIn>
          <FadeIn as="h2">Acest spațiu nu este pentru oricine</FadeIn>
          <FadeIn as="p" className="exclusion-intro">
            Procesul cere disponibilitate reală, asumare și maturitate emoțională.
          </FadeIn>
          <FadeIn className="exclusion-list">
            {notForItems.map((item) => (
              <div key={item} className="exclusion-item">{item}</div>
            ))}
            <div className="exclusion-item exclusion-closing">
              Pentru cea care este aici — care a citit până la acest rând și se recunoaște —
              spațiul acesta a fost construit pentru ea.
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
