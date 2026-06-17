import FadeIn from './FadeIn'

export default function CostulStagnarii() {
  return (
    <section id="costul-stagnarii" className="noise-layer">
      <div className="container">
        <FadeIn as="span" className="section-label">Perspectiva reală</FadeIn>
        <FadeIn as="h2">Cât costă să rămâi unde ești</FadeIn>

        <FadeIn className="price-callout">
          <span>
            197 RON pe lună înseamnă 6,6 RON pe zi — mai puțin decât o cafea la bar.
          </span>
        </FadeIn>

        <FadeIn className="body-text">
          <p>
            Dar prețul real pentru încă un an în care stagnezi nu e în bani. E în vacanța pe
            care ai tăiat-o de pe listă. E în energia pe care o pierzi zilnic în această
            anxietate, în loc să o folosești ca să crești. E în cercul ăsta vicios: o lună bună,
            una slabă, an după an, și aceeași mirare dureroasă — de ce te întorci mereu în
            același punct exact când începea să fie bine?
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
