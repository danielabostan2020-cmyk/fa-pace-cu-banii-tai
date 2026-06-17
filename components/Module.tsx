import FadeIn from './FadeIn'

const modules = [
  { num: 'Modul 1', title: 'Codul Meritului', desc: 'Eliminăm rușinea și vinovăția transmise din generație în generație. Recuperezi permisiunea profundă de a cere și de a primi.' },
  { num: 'Modul 2', title: 'Geografia Banilor', desc: 'Cartografiem cele 5 teritorii (Venit, Economiile, Datoriile, Obiectivele și Banii Toxici) pentru a opri deciziile luate din panică.' },
  { num: 'Modul 3', title: 'Anatomia Supraviețuirii', desc: 'Resetăm trauma financiară. Treci de la paralizia decizională la calm și stabilitate în relația cu banii.' },
  { num: 'Modul 4', title: 'Arheologia Loialității', desc: 'Te desprinzi de scenariul de greutate al familiei tale, fără să simți că îi trădezi. Câștigi libertatea de a depăși nivelul lor financiar.' },
  { num: 'Modul 5', title: 'Mecanica Stagnării', desc: 'Dizolvăm avantajele secundare ale subconștientului care te țin la aceleași venituri de ani de zile, dintr-o nevoie falsă de protecție.' },
  { num: 'Modul 6', title: 'Topografia Datoriei', desc: 'Decuplăm valoarea ta personală de soldul contului tău. Rupe ciclul în care datoria revine, indiferent cât plătești.' },
  { num: 'Modul 7', title: 'Fiziologia Expansiunii', desc: 'Înveți să îți setezi obiective financiare mari fără să activezi alarma în corp.' },
  { num: 'Modul 8', title: 'Metabolismul Eșecului', desc: 'Metabolizezi emoțional pierderile, falimentele sau investițiile proaste din trecut, recăpătând încrederea în deciziile tale din prezent.' },
  { num: 'Modul 9', title: 'Alchimia Meritului', desc: 'Dizolvăm pragul inferior care te face să te mulțumești cu puțin sau să te vinzi ieftin în fața clienților.' },
  { num: 'Modul 10', title: 'Ecologia Profitului', desc: 'Deconstruim mitul „muncă grea = bani mulți". Înveți cum profitul se poate măsura în valoare livrată cu tihnă, nu în ore de stres.' },
  { num: 'Modul 11', title: 'Arta de a Primi', desc: 'Corectăm incapacitatea de a reține banii. Înveți să lași surplusul din cont să rămână și să crească, fără să cheltuiești compulsiv.' },
  { num: 'Modul 12', title: 'Arhitectura Noii Identități', desc: 'Stabilizăm succesul obținut. Starea de prosperitate și siguranță emoțională devine noua ta normalitate.' },
]

export default function Module() {
  return (
    <section id="module">
      <div className="container-wide">
        <div className="container" style={{ padding: 0 }}>
          <FadeIn as="span" className="section-label">Traseul</FadeIn>
          <FadeIn as="h2">Traseul celor 12 module</FadeIn>
        </div>

        <div className="modules-grid" style={{ marginTop: '52px' }}>
          {modules.map((m, i) => (
            <FadeIn
              key={m.num}
              delay={((i % 3) as 0 | 1 | 2)}
              className="module-card"
            >
              <span className="module-num">{m.num}</span>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
