/**
 * Cele 12 module ale membershipului „Fă pace cu banii tăi".
 *
 * Sursă unică: alimentează și secțiunea „Traseul celor 12 module" de pe pagina
 * principală (`Module.tsx`), și pagina-catalog unde se cumpără individual
 * (`app/module/page.tsx`). Dacă schimbi un titlu, se schimbă în ambele locuri.
 *
 * ⚠️ `stripe` gol înseamnă „încă nu se poate cumpăra": modulul apare în catalog
 * cu eticheta „În curând", fără buton. Așa putem publica pagina imediat și
 * activa modulele pe rând, pe măsură ce creezi linkurile în Stripe.
 */

export type Modul = {
  num: number
  title: string
  desc: string
  /** Linkul de plată din Stripe. Gol = modulul nu e încă de vânzare. */
  stripe: string
}

/** Prețul unui modul cumpărat separat, în lei. */
export const PRET_MODUL = 197

export const modules: Modul[] = [
  {
    num: 1,
    title: 'Codul Meritului',
    desc: 'Eliminăm rușinea și vinovăția transmise din generație în generație. Recuperezi permisiunea profundă de a cere și de a primi.',
    stripe: '',
  },
  {
    num: 2,
    title: 'Geografia Banilor',
    desc: 'Cartografiem cele 5 teritorii (Venit, Economiile, Datoriile, Obiectivele și Banii Toxici) pentru a opri deciziile luate din panică.',
    stripe: '',
  },
  {
    num: 3,
    title: 'Anatomia Supraviețuirii',
    desc: 'Resetăm trauma financiară. Treci de la paralizia decizională la calm și stabilitate în relația cu banii.',
    stripe: '',
  },
  {
    num: 4,
    title: 'Arheologia Loialității',
    desc: 'Te desprinzi de scenariul de greutate al familiei tale, fără să simți că îi trădezi. Câștigi libertatea de a depăși nivelul lor financiar.',
    stripe: '',
  },
  {
    num: 5,
    title: 'Mecanica Stagnării',
    desc: 'Dizolvăm avantajele secundare ale subconștientului care te țin la aceleași venituri de ani de zile, dintr-o nevoie falsă de protecție.',
    stripe: '',
  },
  {
    num: 6,
    title: 'Topografia Datoriei',
    desc: 'Decuplăm valoarea ta personală de soldul contului tău. Rupe ciclul în care datoria revine, indiferent cât plătești.',
    stripe: '',
  },
  {
    num: 7,
    title: 'Fiziologia Expansiunii',
    desc: 'Înveți să îți setezi obiective financiare mari fără să activezi alarma în corp.',
    stripe: '',
  },
  {
    num: 8,
    title: 'Metabolismul Eșecului',
    desc: 'Metabolizezi emoțional pierderile, falimentele sau investițiile proaste din trecut, recăpătând încrederea în deciziile tale din prezent.',
    stripe: '',
  },
  {
    num: 9,
    title: 'Alchimia Meritului',
    desc: 'Dizolvăm pragul inferior care te face să te mulțumești cu puțin sau să te vinzi ieftin în fața clienților.',
    stripe: '',
  },
  {
    num: 10,
    title: 'Ecologia Profitului',
    desc: 'Deconstruim mitul „muncă grea = bani mulți". Înveți cum profitul se poate măsura în valoare livrată cu tihnă, nu în ore de stres.',
    stripe: '',
  },
  {
    num: 11,
    title: 'Arta de a Primi',
    desc: 'Corectăm incapacitatea de a reține banii. Înveți să lași surplusul din cont să rămână și să crească, fără să cheltuiești compulsiv.',
    stripe: '',
  },
  {
    num: 12,
    title: 'Arhitectura Noii Identități',
    desc: 'Stabilizăm succesul obținut. Starea de prosperitate și siguranță emoțională devine noua ta normalitate.',
    stripe: '',
  },
]

/** Ce primești când cumperi un modul separat. */
export const continutModul = [
  'Înregistrările complete ale modulului',
  'Fișa de lucru a modulului',
  'Audio-ul ghidat',
  'Protocoalele de lucru',
  'Acces pe viață, în ritmul tău',
]

/** Ce NU primești — rămâne motivul pentru care cineva se abonează. */
export const doarInMembership = [
  'Cele 2 întâlniri live de 90 de minute ale modulului',
  'Suportul pe WhatsApp',
  'Feedback de la mine pe exercițiile tale',
]

/** Câte module se pot cumpăra chiar acum. */
export const moduleDisponibile = modules.filter((m) => m.stripe !== '').length
