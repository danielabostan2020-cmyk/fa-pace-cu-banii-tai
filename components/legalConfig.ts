/**
 * Datele de identificare ale vânzătorului, folosite în Politica de confidențialitate
 * și în Termeni și condiții.
 *
 * ⚠️ CÂMPURILE MARCATE CU „COMPLETEAZĂ" TREBUIE ÎNLOCUITE ÎNAINTE DE PUBLICARE.
 * Sunt obligatorii legal (OUG 34/2014, Legea 365/2002, GDPR art. 13) și, atâta timp
 * cât conțin textul „COMPLETEAZĂ", paginile legale afișează un avertisment vizibil.
 */

export const legal = {
  /** Denumirea exactă din certificatul de înregistrare (ex. „Bostan Daniela PFA") */
  entitate: 'BOSTAN GH DANIELA PERSOANĂ FIZICĂ AUTORIZATĂ',
  /** Codul unic de înregistrare / CIF */
  cui: '52797873',
  /** Nr. de ordine în Registrul Comerțului sau nr. din Registrul Comerțului pentru PFA */
  regCom: 'F2025043030009',
  /** Sediul social / profesional, așa cum apare în acte */
  sediu: 'Fundătura Fabricii nr. 18, Târgu Neamț, județul Neamț',
  email: 'contact@danielabostan.ro',
  /** Opțional. Lasă string gol dacă nu vrei să afișezi un telefon. */
  telefon: '',
  site: 'https://www.danielabostan.ro',
  /** Regimul de TVA, afisat langa preturi. Alege una dintre cele doua variante. */
  tva: 'Toate prețurile sunt finale. Nu sunt plătitoare de TVA.',
  /** Data ultimei revizuiri, afișată în capul fiecărei pagini legale */
  actualizat: '3 septembrie 2026',
} as const

/** true dacă a rămas măcar un câmp necompletat */
export const legalIncomplet = Object.values(legal).some(
  (v) => typeof v === 'string' && v.startsWith('COMPLETEAZĂ')
)
