import FadeIn from './FadeIn'

const motive = [
  {
    num: '01',
    title: 'Lucrează direct pe sistemul nervos, nu doar pe mintea rațională',
    items: [
      'Trimiți semnale directe de siguranță către amigdală (centrul de alarmă al creierului).',
      'Reduci nivelul de cortizol (hormonul stresului).',
      'Îți recapeți claritatea mentală pentru a lua decizii financiare mature și conștiente, direct din starea de calm, nu din frică.',
    ],
    note: 'Validare Științifică: Tehnica EFT (Emotional Freedom Techniques) este susținută de peste 300 de studii clinice care demonstrează scăderea măsurabilă a nivelului de cortizol și reconfigurarea răspunsului la stres din creier.',
  },
  {
    num: '02',
    title: 'Fișele de „Red Flags” — diagnostic financiar și navigare somatică în timp real',
    items: [
      'Localizezi blocajul în 60 de secunde: identifici exact ce comportament, gând sau reacție corporală îți dă de gol rana financiară activă.',
      'Elimini rușinea și vinovăția: deciziile impulsive nu sunt „defecte de caracter”, ci reacții automate de auto-apărare ale unui sistem nervos supraîncărcat.',
      'Transformi anxietatea difuză în țintă precisă și măsori vindecarea în timp real.',
    ],
  },
  {
    num: '03',
    title: 'Sustenabil și adaptat la un sistem nervos deja aglomerat',
    items: [
      'Efort minim, impact maxim: protocoalele EFT și exercițiile zilnice durează între 10 și 15 minute.',
      'Integrare ușoară: concepute special pentru rutina ta de dimineață sau de seară, fără presiune suplimentară pe timpul sau energia ta.',
    ],
  },
]

const comparatie = [
  { before: 'Lucrează doar cu mintea conștientă (5% din creier).', after: 'Lucrează direct cu sistemul nervos și subconștientul (95%).' },
  { before: 'Îți cere să aplici „gândire pozitivă” peste o stare de panică.', after: 'Calmează mai întâi reacția fizică de alertă (amigdala).' },
  { before: 'Îți dă concepte teoretice frumoase, dar greu de aplicat sub stres.', after: 'Îți oferă un diagnostic în 60 sec și protocoale clare de 10-15 minute.' },
  { before: 'Generează frustrare când revii la vechile obiceiuri financiare.', after: 'Creează noi trasee neuronale și siguranță internă pe termen lung.' },
]

export default function EftDeceFunctioneaza() {
  return (
    <section id="eft-de-ce" style={{ background: 'var(--violet-dark)' }}>
      <div className="container">
        <FadeIn as="span" className="section-label">Mecanismul</FadeIn>
        <FadeIn as="h2" style={{ color: 'var(--cream)', marginBottom: 48, maxWidth: 640 }}>
          De ce funcționează EFT Prosper
        </FadeIn>

        <div className="pillars-grid" style={{ gridTemplateColumns: '1fr' }}>
          {motive.map((m) => (
            <FadeIn key={m.num} className="pillar">
              <span className="pillar-title">{m.num} — {m.title}</span>
              <ul style={{ listStyle: 'none' }}>
                {m.items.map((it) => (
                  <li key={it} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0 }}>—</span>
                    <span style={{ color: 'rgba(255,249,242,0.75)', fontSize: '0.9375rem', lineHeight: 1.7 }}>{it}</span>
                  </li>
                ))}
              </ul>
              {m.note && (
                <p style={{ marginTop: 8, fontStyle: 'italic', color: 'rgba(255,249,242,0.55)', fontSize: '0.85rem' }}>
                  💡 {m.note}
                </p>
              )}
            </FadeIn>
          ))}
        </div>

        <FadeIn as="h3" style={{ color: 'var(--cream)', marginTop: 64, marginBottom: 24 }}>
          Abordarea clasică vs. Abordarea EFT Prosper
        </FadeIn>
        <FadeIn className="transform-wrap">
          <div className="t-col-before">
            <div className="t-col-head before">Abordarea Clasică</div>
            {comparatie.map((row) => (
              <div key={row.before} className="t-row">{row.before}</div>
            ))}
          </div>
          <div className="t-col-after">
            <div className="t-col-head after">Abordarea EFT Prosper</div>
            {comparatie.map((row) => (
              <div key={row.after} className="t-row">{row.after}</div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
