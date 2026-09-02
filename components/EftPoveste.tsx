import Image from 'next/image'
import FadeIn from './FadeIn'

export default function EftPoveste() {
  return (
    <section id="eft-poveste" style={{ background: '#EAE6F3' }}>
      <div className="container">
        <FadeIn className="founder-story">
          <div className="founder-story-header">
            <span className="story-eyebrow">Despre Daniela Bostan</span>
            <h3>EFT Practitioner &amp; Matrix Reimprinting Specialist</h3>
          </div>

          <div className="founder-story-body founder-story-body--flex">
            <div className="founder-photo">
              <Image
                src="/daniela-alb.webp"
                alt="Daniela Bostan — EFT Practitioner, Matrix Reimprinting Specialist"
                width={210}
                height={310}
                loading="lazy"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
              <div className="founder-photo-caption">
                <strong>Daniela Bostan</strong>
                <span>EFT Practitioner, Matrix Reimprinting Specialist</span>
              </div>
            </div>

            <div className="founder-text">
              <p className="story-highlight">
                „Banii din cont nu îți definesc valoarea ca om. În schimb, îți arată cu o
                sinceritate brutală cum ai învățat să te raportezi la siguranță, merit și iubire.”
              </p>

              <p>
                Copilăria mea a fost marcată de o tensiune ciudată legată de bani. Nu sufeream de
                lipsuri materiale extreme, dar exista o apăsare greu de explicat — o atmosferă
                rigidă în care subiectul banilor devenea instantaneu o sursă de neliniște și
                tăceri grele. Corpul meu a învățat asta de foarte devreme: că banii înseamnă
                conflict și presiune, că a cere înseamnă a deranja, că siguranța financiară este o
                iluzie rezervată doar altora.
              </p>

              <p>
                În subconștientul meu s-a sedimentat o credință profundă: „Nu poți avea și bani,
                și liniște. Nu poți avea și succes, și echilibru. Trebuie să alegi.” Ani de zile
                am ales echilibrul și liniștea. Și am plătit pentru asta — în cel mai propriu
                sens.
              </p>

              <p>
                Primele mele joburi au fost solicitante și prost plătite, dar aveam sentimentul
                constant că așa trebuie să fie. Când am trecut la propriul business, am dus tot
                acest pachet cu mine. Vedeam în jurul meu colegi pe aceeași nișă care creșteau, în
                timp ce eu abia supraviețuiam. Mă întrebam în tăcere: „Ce este greșit cu mine?”
              </p>

              <p>
                Apoi au venit datoriile. Nu ale mele în sens strict, ci datorii preluate pentru că
                nu știam să spun „NU”. Le-am plătit pe toate — cu prețul propriei mele liniști.
                Apoi am lovit un zid: chiar și în lunile bune, banii tot dispăreau. Fără vacanțe
                scumpe, fără extravaganțe, fără o explicație logică. La sfârșitul lunii — soldul
                era zero. Uneori minus.
              </p>

              <p>
                Atunci am încetat să mă mai uit doar la cifre și am început să observ ce se
                întâmpla în corpul meu. Răspunsul a fost un șoc: funcționam 100% pe modul de
                supraviețuire. Sistemul meu nervos lua deciziile financiare în locul meu.
              </p>

              <p className="story-highlight">
                Momentul meu de trezire a fost o constatare simplă: problema nu era în buget și
                nici în lipsa mea de disciplină. Era ancorată în corp. Am început să lucrez
                intensiv pe propriile mele răni folosind EFT (Emotional Freedom Techniques) și
                Matrix Reimprinting — singurele metode care adresează simultan corpul, emoțiile și
                credințele subconștiente.
              </p>

              <p>
                Treptat, întreaga mea realitate financiară s-a reorganizat. Datoriile au dispărut,
                banii au început să vină mai ușor și — cel mai important — au început să rămână.
                Însă cea mai mare victorie nu a fost cifra din cont, ci dispariția contracției
                fizice: a dispărut strângerea din piept când deschideam aplicația băncii, nodul
                din gât când trebuia să spun prețul serviciilor mele, greutatea din stomac de la
                fiecare sfârșit de lună.
              </p>

              <p className="story-pivot">
                Astăzi nu îți ofer o teorie din cărți. Metoda din EFT Prosper este exact procesul
                pe care l-am trăit, l-am testat și l-am rafinat mai întâi pe mine, iar apoi pe
                sutele de femei pe care le-am ghidat să își recupereze liniștea și libertatea
                financiară.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
