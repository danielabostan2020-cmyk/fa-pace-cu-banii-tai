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
  /** Adresa cursului în DoCourse, partea de după /course/. Gol = nu e încă înregistrat. */
  curs: string
}

/** Prețul unui modul cumpărat separat, în lei. */
export const PRET_MODUL = 197

export const modules: Modul[] = [
  {
    num: 1,
    title: 'Codul Meritului',
    desc: 'Eliminăm rușinea și vinovăția transmise din generație în generație. Recuperezi permisiunea profundă de a cere și de a primi.',
    stripe: 'https://buy.stripe.com/7sYdRa1oG7Vs8RB8lG6Vq09',
    curs: 'codul-meritului-fata-in-fata-cu-vina-rusinea-si-banii',
  },
  {
    num: 2,
    title: 'Harta Banilor',
    desc: 'Cartografiem cele 5 teritorii (Venit, Economiile, Datoriile, Obiectivele și Banii Toxici) pentru a opri deciziile luate din panică.',
    stripe: 'https://buy.stripe.com/14A9AUaZg1x49VF9pK6Vq0a',
    curs: 'harta-banilor',
  },
  {
    num: 3,
    title: 'Anatomia Supraviețuirii',
    desc: 'Resetăm trauma financiară. Treci de la paralizia decizională la calm și stabilitate în relația cu banii.',
    stripe: 'https://buy.stripe.com/4gM9AU2sKejQ6Jt59u6Vq0b',
    curs: 'anatomia-supravietuirii-protocol-de-vindecare-a-traumei-financiare',
  },
  {
    num: 4,
    title: 'Arheologia Loialității',
    desc: 'Te desprinzi de scenariul de greutate al familiei tale, fără să simți că îi trădezi. Câștigi libertatea de a depăși nivelul lor financiar.',
    stripe: 'https://buy.stripe.com/bJe6oI7N4grY3xh45q6Vq0c',
    curs: 'arheologia-loialitatii-returnarea-poverilor-familiale',
  },
  {
    num: 5,
    title: 'Mecanica Stagnării',
    desc: 'Dizolvăm avantajele secundare ale subconștientului care te țin la aceleași venituri de ani de zile, dintr-o nevoie falsă de protecție.',
    stripe: 'https://buy.stripe.com/9B6dRa0kCb7E4Bl59u6Vq0d',
    curs: 'mecanica-stagnarii-deconstructia-avantajelor-secundare',
  },
  {
    num: 6,
    title: 'Topografia Datoriei',
    desc: 'Decuplăm valoarea ta personală de soldul contului tău. Rupe ciclul în care datoria revine, indiferent cât plătești.',
    stripe: '',
    curs: '',
  },
  {
    num: 7,
    title: 'Fiziologia Expansiunii',
    desc: 'Înveți să îți setezi obiective financiare mari fără să activezi alarma în corp.',
    stripe: '',
    curs: '',
  },
  {
    num: 8,
    title: 'Metabolismul Eșecului',
    desc: 'Metabolizezi emoțional pierderile, falimentele sau investițiile proaste din trecut, recăpătând încrederea în deciziile tale din prezent.',
    stripe: 'https://buy.stripe.com/14AcN61oGdfM9VFbxS6Vq0e',
    curs: 'metabolismul-esecului-si-al-pierderilor',
  },
  {
    num: 9,
    title: 'Alchimia Meritului',
    desc: 'Dizolvăm pragul inferior care te face să te mulțumești cu puțin sau să te vinzi ieftin în fața clienților.',
    stripe: '',
    curs: '',
  },
  {
    num: 10,
    title: 'Ecologia Profitului',
    desc: 'Deconstruim mitul „muncă grea = bani mulți". Înveți cum profitul se poate măsura în valoare livrată cu tihnă, nu în ore de stres.',
    stripe: '',
    curs: '',
  },
  {
    num: 11,
    title: 'Arta de a Primi',
    desc: 'Corectăm incapacitatea de a reține banii. Înveți să lași surplusul din cont să rămână și să crească, fără să cheltuiești compulsiv.',
    stripe: '',
    curs: '',
  },
  {
    num: 12,
    title: 'Arhitectura Noii Identități',
    desc: 'Stabilizăm succesul obținut. Starea de prosperitate și siguranță emoțională devine noua ta normalitate.',
    stripe: '',
    curs: '',
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

/** Adresa completă a cursului în DoCourse. */
export const linkCurs = (m: Modul) => `https://docourse.ro/course/${m.curs}`

/**
 * Modulele pe care cineva le poate cumpăra ȘI în care poate intra după plată.
 * Pagina de mulțumire le listează pe astea — cumpărătoarea își alege modulul ei.
 * E sigur să fie publice: DoCourse blochează pe oricine nu a plătit (verificat
 * pe 2026-10-01, cu un cont gratuit nou, pe toate cursurile).
 */
export const moduleCuAcces = modules.filter((m) => m.stripe !== '' && m.curs !== '')
