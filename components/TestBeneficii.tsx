import FadeIn from './FadeIn'

const beneficii = [
  'Identifici rapid rana financiară dominantă care îți influențează deciziile și comportamentele legate de bani',
  'Primești recomandări personalizate pe baza răspunsurilor tale – clare, practice și ușor de aplicat',
  'Conștientizezi tiparele emoționale care îți afectează încrederea, meritul și capacitatea de a păstra banii',
  'Ai un plan de prim pas pe care îl poți face chiar azi pentru a începe vindecarea rănilor tale financiare',
  'Îți clarifici relația cu banii astfel încât să iei decizii cu mai mult calm, siguranță și autonomie',
]

export default function TestBeneficii() {
  return (
    <section id="test-beneficii" style={{ background: 'var(--bg-off)' }}>
      <div className="container">
        <FadeIn as="span" className="section-label">Despre test</FadeIn>
        <FadeIn as="h2" style={{ color: 'var(--violet-deep)', marginBottom: '28px' }}>
          Ce obții după completarea testului?
        </FadeIn>

        <FadeIn as="p" className="body-text" style={{ maxWidth: 680, marginBottom: 40 }}>
          Fă acest test rapid și află ce rană financiară te influențează cel mai mult. Primești
          imediat recomandări clare, concrete și adaptate situației tale – ca să înțelegi, să
          schimbi și să mergi mai departe cu încredere.
        </FadeIn>

        <div className="benefit-list">
          {beneficii.map((text, i) => (
            <FadeIn key={text} delay={(i % 3) as 0 | 1 | 2} className="benefit-item">
              <span className="benefit-num">{String(i + 1).padStart(2, '0')}</span>
              <p>{text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
