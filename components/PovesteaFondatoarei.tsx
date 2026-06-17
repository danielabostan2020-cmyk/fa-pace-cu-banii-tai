import Image from 'next/image'
import FadeIn from './FadeIn'

export default function PovesteaFondatoarei() {
  return (
    <section id="povestea">
      <div className="container">
        <FadeIn className="founder-story">
          <div className="founder-story-header">
            <span className="story-eyebrow">Povestea fondatoarei</span>
            <h3>Daniela Bostan — EFT Practitioner &amp; Matrix Reimprinting Specialist</h3>
          </div>

          <div className="founder-story-body">
            <div className="founder-photo">
              <Image
                src="/daniela-alb.png"
                alt="Daniela Bostan — EFT Practitioner & Matrix Reimprinting Specialist"
                width={210}
                height={310}
                loading="lazy"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
              <div className="founder-photo-caption">
                <strong>Daniela Bostan</strong>
                <span>EFT Practitioner &amp; Matrix Reimprinting Specialist</span>
              </div>
            </div>

            <p>Copilăria mea a fost marcată de o tensiune ciudată legată de bani. Nu sufeream de lipsuri, dar exista o apăsare greu de explicat. O atmosferă rigidă în care subiectul banilor devenea instantaneu o sursă de neliniște și tăceri apăsătoare.</p>
            <p><span className="story-highlight">Corpul meu a învățat asta devreme. A învățat că banii înseamnă conflict, că a cere înseamnă a deranja, că siguranța financiară e pentru alții.</span></p>
            <p>Credința s-a sedimentat treptat, fără să o aleg: nu poți avea și bani, și liniște. Nu poți avea și succes, și echilibru. Alegi.</p>
            <p>Ani de zile am ales echilibrul. Și am plătit pentru asta, în sens propriu.</p>
            <p>Primele joburi: solicitante, prost plătite, cu sentimentul constant că așa trebuie să fie. Că munca grea și recompensa mică merg împreună. Că a cere mai mult ar fi arogant. Nepotrivit. Periculos.</p>
            <p>Când am trecut la propriul business, am dus cu mine tot pachetul. Vedeam în jurul meu oameni cu aceeași nișă, aceeași piață, aceeași perioadă și creșteau. Eu abia supraviețuiam. Și mă întrebam, în liniște, ce e greșit cu mine.</p>
            <p>Apoi au venit datoriile. Nu ale mele, în sens strict. Datorii preluate pentru că nu știam să spun nu, pentru că dacă nu ajut sunt egoistă, pentru că limita dintre generozitate și autosacrificiu nu era clară în mintea mea. Le-am plătit. Le-am plătit pe toate.</p>
            <p>Paradoxul care m-a oprit în loc: în lunile bune, banii tot dispăreau. Fără vacanțe, fără extravaganțe, fără o explicație logică. La sfârșitul lunii, zero. Uneori minus.</p>
            <p>Am început să mă uit nu la cifre, ci la ce se întâmpla în mine când luam decizii financiare. Ce simțeam când cumpăram. Ce simțeam când cineva cerea. Ce simțeam când contul creștea.</p>
            <p className="story-pivot">Acolo era răspunsul.</p>
            <p>Funcționam pe supraviețuire. Sistemul meu nervos luase deciziile financiare în locul meu, de ani de zile, fără ca eu să realizez.</p>
            <p>Anxietatea se transforma în cheltuială emoțională. Epuizarea devenea o nouă comandă plasată. Frica de abandon se traducea în bani cheltuiți pe care nu îi aveam.</p>
            <p>Nu alegeam eu să fac aceste lucruri. Funcționam din ele.</p>
            <p>Momentul de trezire nu a fost dramatic. A fost o constatare. Că problema nu e în buget. Că nu e în disciplină. <span className="story-highlight">Că e în corp, în tiparele pe care le-am moștenit, în loialitățile față de familie pe care nu le negociasem niciodată, în convingerea că nu poți fi și om bun, și om prosper în același timp.</span></p>
            <p>Am început să lucrez cu mine la rădăcină. EFT mai întâi, pentru că atinge exact intersecția dintre corp și credință. Apoi Matrix Reimprinting, pentru tiparele adânci, multe moștenite. Încet, lucrurile s-au reorganizat. Datoriile au scăzut. Banii au început să rămână. Deciziile au devenit conștiente.</p>
            <p>Dar mai important decât cifrele, a dispărut contracția. Aceea din piept când deschid aplicația băncii. Aceea din gât când spun un preț. Aceea din stomac la sfârșitul lunii.</p>
            <p>Azi lucrez cu femei din profesii de ajutor, terapeute, coach, practicieni, care recunosc povestea asta. <span className="story-pivot">Metoda mea nu e din cărți. E din ce am trăit, testat și rafinat, pe mine mai întâi, apoi cu ele.</span></p>
            <p>Știu cum arată blocajul din interior. Știu cum se simte în corp. Și știu că se poate elibera.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
