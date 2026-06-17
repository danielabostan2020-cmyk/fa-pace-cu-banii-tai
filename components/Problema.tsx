import FadeIn from './FadeIn'

export default function Problema() {
  return (
    <section id="problema">
      <div className="container">
        <FadeIn as="span" className="section-label">De ce se întâmplă</FadeIn>
        <FadeIn as="h2">Există o oboseală specifică a succesului fără acumulare</FadeIn>

        <FadeIn className="body-text">
          <p>Stresul financiar nu mai este o excepție, ci o realitate pentru multe femei. Inflație persistentă. Taxe în creștere. Venituri incerte.</p>
          <p>Anxietatea nu te consumă doar emoțional. Îți limitează și opțiunile.</p>
          <p>Zgomotul surd al anxietății care te urmărește prin aplicațiile de banking spune ceva despre fragilitatea sistemului tău nervos, nu despre absența banilor. Încasezi bani și, în loc să respiri ușurată, deschizi o altă filă. Te gândești imediat la taxe. La cheltuieli. La ce ai de plătit. Ai senzația ciudată că dintr-o clipă în alta totul s-ar putea prăbuși.</p>
          <p>Pentru multe femei care au afacerea lor, problema nu este că nu știu ce au de făcut. Problema este că, atunci când vine vorba de bani, corpul reacționează înaintea minții: îngheță, evită, se strânge, amână, acceptă mai puțin sau dă înapoi exact când ar putea să crească.</p>
          <p>Primul gând e că nu ai destulă disciplină, dar nu e mereu așa de simplu. De cele mai multe ori, e doar un vechi mecanism de protecție.</p>
          <p>Tiparele astea trăiesc în corp, nu numai în minte. De aceea afirmațiile pozitive și cursurile de mindset clasic eșuează. Ca să le rescriem, trebuie să lucrăm la fundație, nu la simptome.</p>
        </FadeIn>

        <FadeIn className="survival-quote">
          <p>„Funcționam pe supraviețuire. Sistemul meu nervos luase deciziile financiare în locul meu, de ani de zile, fără ca eu să realizez."</p>
        </FadeIn>
      </div>
    </section>
  )
}
