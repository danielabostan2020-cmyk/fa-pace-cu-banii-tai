import FadeIn from './FadeIn'

const module0si7 = [
  {
    icon: '🗺️',
    title: 'Modulul 0: Fundația & Harta Vizuală a Punctelor EFT',
    desc: 'Bazele neurobiologice ale tehnicii EFT, harta completă a punctelor meridiane și conectarea lor directă cu emoțiile ancorate în corp. Îți construiești cadrul de siguranță somatică pentru tot parcursul.',
  },
]

const module7 = {
  icon: '🧘‍♀️',
  title: 'Modulul 7: Integrare, Consolidare & Sustenabilitate',
  desc: 'Ancorarea noilor tipare somatice pe termen lung și crearea unui plan individual de menținere a clarității financiare în viața de zi cu zi.',
}

const raniModules = [
  {
    icon: '💔',
    title: 'Modulul 1: Rana Valorii Personale Legate de Bani',
    tipar: '„Valorez cât câștig.” Identitatea ta este strâns legată de cifra din cont. Când veniturile scad, te simți neînsemnat/ă, incompetent/ă sau copleșit/ă de rușine.',
    transformare: 'Îți decuplezi stima de sine de fluctuarea veniturilor și îți recapeți valoarea personală inerentă, indiferent de contextul financiar.',
  },
  {
    icon: '🏋️‍♀️',
    title: 'Modulul 2: Rana Banilor Obținuți cu Greu',
    tipar: '„Trebuie să muncești din greu ca să meriți.” Epuizarea fizică și mentală a devenit singura dovadă legitimă a muncii tale.',
    transformare: 'Reconfigurezi sistemul nervos pentru a primi prosperitate cu ușurință, eliminând asocierea dintre suferință, efort extrem și merit.',
  },
  {
    icon: '🫣',
    title: 'Modulul 3: Rana Rușinii Financiare',
    tipar: '„Sunt o rușine dacă nu mă descurc cu banii.” Situația financiară este trăită ca un defect secret.',
    transformare: 'Eliberezi rușinea greșelilor din trecut, elimini frica de a fi judecat/ă și capeți claritatea de a-ți gestiona banii cu demnitate.',
  },
  {
    icon: '🛑',
    title: 'Modulul 4: Rana Demonizării Banilor',
    tipar: '„Banii sunt murdari, bogații sunt răi.” Un conflict moral subconștient te ține la distanță de venituri mai mari.',
    transformare: 'Rezolvi conflictul de loialitate și îți dai permisiunea să fii o persoană bună, integră și, în același timp, prosperă.',
  },
  {
    icon: '🔒',
    title: 'Modulul 5: Rana Obsesiei pentru Siguranță Financiară',
    tipar: '„Doar economisesc, nu mă ating de ei.” Control compulsiv exercitat prin restricție extremă.',
    transformare: 'Treci de la starea de contractare și zgârcenie defensivă la un sentiment autentic de siguranță interioară și fluență financiară.',
  },
  {
    icon: '💸',
    title: 'Modulul 6: Rana Banilor Care Dispar',
    tipar: '„Banii vin și pleacă.” Instabilitate ciclică — de îndată ce acumulezi o sumă, apare o urgență care face ca banii să se evapore rapid.',
    transformare: 'Dezamorsezi autosabotajul declanșat de teama că banii atrag invidie sau pierderi, învățând să păstrezi și să crești banii în siguranță.',
  },
]

const instrumente = [
  { icon: '🎬', title: 'Lecție Video Teoretică', desc: 'Înțelegi mecanismul neurobiologic al rănii specifice și cum ți-a afectat deciziile.' },
  { icon: '🎧', title: 'Protocol EFT Ghidat (Video & Audio)', desc: 'Sesiune practică de ghidaj somatic pentru eliberarea blocajului direct din corp.' },
  { icon: '📄', title: 'Ghid PDF Descărcabil', desc: 'Fișele de „Red Flags” (diagnostic în 60 secunde) și sinteza modulului.' },
  { icon: '📓', title: 'Caiet de Journaling Somatic', desc: 'Prompturi de profunzime pentru rescrierea credințelor subconștiente.' },
]

const bonusuri = [
  { icon: '🎁', title: 'Bonus 1: Meditație Audio de Reglare Rapidă a Sistemului Nervos', desc: 'Un protocol audio de urgență pe care îl poți asculta oricând simți stări acute de anxietate, panică sau presiune financiară.' },
  { icon: '🎁', title: 'Bonus 2: Acces Dedicat în Comunitatea Privată din Platformă', desc: 'Un spațiu securizat și susținător în care poți pune întrebări, împărtăși conștientizările și primi ghidaj pe parcursul procesului tău.' },
]

export default function EftModule() {
  return (
    <section id="eft-module" style={{ background: 'var(--white)' }}>
      <div className="container-wide">
        <div className="container" style={{ padding: 0 }}>
          <FadeIn as="span" className="section-label">Arhitectura kitului</FadeIn>
          <FadeIn as="h2" style={{ color: 'var(--violet-deep)' }}>
            Arhitectura completă a vindecării tale financiare
          </FadeIn>
          <FadeIn as="p" className="body-text" style={{ maxWidth: 700, marginTop: 12, marginBottom: 44 }}>
            Un parcurs structurat pas cu pas, conceput pentru a identifica, dezamorsa și rescrie
            somatic cele 6 răni financiare care îți blochează prosperitatea.
          </FadeIn>
        </div>

        <div className="container" style={{ padding: 0, marginBottom: 24 }}>
          {module0si7.map((m) => (
            <FadeIn key={m.title} className="module-card">
              <span className="md-icon">{m.icon}</span>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </FadeIn>
          ))}
        </div>

        <div className="grid-2">
          {raniModules.map((m, i) => (
            <FadeIn key={m.title} delay={(i % 2) as 0 | 1} className="module-card">
              <span className="md-icon">{m.icon}</span>
              <h3>{m.title}</h3>
              <div className="md-row">
                <span className="md-label">Tiparul actual</span>
                <p className="md-text">{m.tipar}</p>
              </div>
              <div className="md-row">
                <span className="md-label">Transformarea</span>
                <p className="md-text">{m.transformare}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="container" style={{ padding: 0, marginTop: 24 }}>
          <FadeIn className="module-card">
            <span className="md-icon">{module7.icon}</span>
            <h3>{module7.title}</h3>
            <p>{module7.desc}</p>
          </FadeIn>
        </div>

        <div className="container" style={{ padding: 0, marginTop: 64 }}>
          <FadeIn as="h3" style={{ color: 'var(--violet-deep)', marginBottom: 24 }}>
            Ce primești în fiecare dintre cele 6 module principale
          </FadeIn>
        </div>
        <div className="grid-2" style={{ marginBottom: 64 }}>
          {instrumente.map((it, i) => (
            <FadeIn key={it.title} delay={(i % 2) as 0 | 1} className="module-card">
              <span className="md-icon">{it.icon}</span>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </FadeIn>
          ))}
        </div>

        <div className="container" style={{ padding: 0, marginBottom: 24 }}>
          <FadeIn as="h3" style={{ color: 'var(--violet-deep)', marginBottom: 24 }}>
            Bonusuri incluse în pachet
          </FadeIn>
        </div>
        <div className="grid-2">
          {bonusuri.map((b, i) => (
            <FadeIn key={b.title} delay={(i % 2) as 0 | 1} className="module-card">
              <span className="md-icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
