import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { legal } from '@/components/legalConfig'

const title = 'Termeni și condiții'
const description =
  'Condițiile în care poți cumpăra și folosi programele educaționale de pe danielabostan.ro: comandă, plată, livrare, garanție și drepturi.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/termeni-conditii.html' },
  openGraph: {
    title,
    description,
    url: '/termeni-conditii.html',
    type: 'website',
  },
}

export default function TermeniConditiiPage() {
  return (
    <LegalPage
      titlu={title}
      intro="Ce cumperi, cum îl primești, în ce condiții poți renunța și ce ne datorăm una alteia. Scris pe înțeles, fără capcane."
    >
      <h2>1. Cine îți vinde</h2>
      <p>
        Programele de pe acest site sunt oferite de <strong>{legal.entitate}</strong>, cu sediul în{' '}
        {legal.sediu}, CUI {legal.cui}, înregistrată la Registrul Comerțului sub nr.{' '}
        {legal.regCom}, denumită în continuare „Vânzătorul" sau „eu".
      </p>
      <p>
        Contact: <a href={`mailto:${legal.email}`}>{legal.email}</a>
        {legal.telefon ? `, telefon ${legal.telefon}` : ''}.
      </p>
      <p>
        Prin plasarea unei comenzi confirmi că ai citit și accepți acești termeni. Dacă nu ești de
        acord cu ei, te rog să nu faci comanda.
      </p>

      <h2>2. Ce cumperi</h2>
      <p>
        Vând <strong>produse digitale educaționale</strong>: cursuri înregistrate, protocoale audio
        de EFT (Tapping), caiete de lucru și materiale scrise, livrate online prin platforma
        DoCourse. Descrierea completă a fiecărui program se află pe pagina lui de prezentare.
      </p>
      <p className="legal-callout">
        <strong>Foarte important.</strong> Programele mele au scop educațional și de dezvoltare
        personală. <strong>Nu</strong> constituie consultanță financiară, fiscală sau juridică,
        <strong> nu</strong> sunt psihoterapie, tratament medical sau înlocuitor pentru acestea.
        Dacă treci printr-o problemă medicală sau psihică, te rog să te adresezi unui specialist.
        Nu garantez rezultate financiare de niciun fel — ce obții depinde de contextul tău și de
        cât aplici.
      </p>

      <h2>3. Prețuri și plată</h2>
      <ul>
        <li>Prețurile sunt afișate în lei (RON) pe pagina fiecărui program.</li>
        <li>{legal.tva}</li>
        <li>
          Plata se face integral, în avans, prin card bancar, folosind procesatorul{' '}
          <strong>Stripe</strong>. Nu am acces la datele cardului tău.
        </li>
        <li>
          Factura îți este emisă și trimisă pe emailul cu care ai făcut comanda. Dacă ai nevoie de
          factură pe firmă, scrie-mi datele în maximum 5 zile de la plată.
        </li>
        <li>
          Pot modifica prețurile oricând, dar modificarea nu afectează comenzile deja plătite.
        </li>
      </ul>

      <h2>4. Cum se încheie contractul</h2>
      <p>
        Contractul dintre noi se consideră încheiat în momentul în care plata ta este confirmată de
        Stripe și primești emailul de confirmare din partea mea. Îmi rezerv dreptul de a refuza sau
        anula o comandă, cu returnarea integrală a sumei, în cazuri justificate — de exemplu o
        eroare vizibilă de preț sau o suspiciune de fraudă.
      </p>

      <h2>5. Livrare și acces</h2>
      <ul>
        <li>
          Primești pe email datele de acces în platformă în mod normal <strong>imediat</strong>{' '}
          după confirmarea plății și în cel mult <strong>24 de ore</strong>.
        </li>
        <li>
          Dacă emailul întârzie, verifică folderul Spam sau Promoții. Dacă tot nu-l găsești,
          scrie-mi la <a href={`mailto:${legal.email}`}>{legal.email}</a> și rezolv.
        </li>
        <li>
          Ai nevoie de un dispozitiv cu conexiune la internet și un browser actualizat. Costurile
          de internet sunt ale tale.
        </li>
        <li>
          Accesul la materiale este acordat pe durată nelimitată, atât timp cât platforma
          funcționează. Dacă vreodată voi închide platforma, te anunț cu cel puțin 60 de zile
          înainte, ca să îți poți descărca materialele descărcabile.
        </li>
      </ul>

      <h2>6. Dreptul de retragere și garanția de 14 zile</h2>
      <p>
        Conform art. 16 lit. m) din OUG 34/2014, dreptul legal de retragere în 14 zile{' '}
        <strong>nu se aplică</strong> conținutului digital livrat imediat, atunci când cumpărătoarea
        a cerut expres începerea livrării și a confirmat că își pierde acest drept. Bifând acordul
        la finalizarea comenzii, îți dai acest consimțământ.
      </p>
      <p className="legal-callout">
        <strong>Îți ofer însă mai mult decât cere legea.</strong> Din proprie voință îți acord o{' '}
        <strong>garanție contractuală de 14 zile</strong>: dacă în primele 14 zile de la cumpărare
        simți că programul nu este pentru tine, îmi scrii un email la{' '}
        <a href={`mailto:${legal.email}`}>{legal.email}</a> și îți returnez{' '}
        <strong>100% din sumă</strong>, fără să îți cer explicații.
      </p>
      <p>Condițiile acestei garanții, ca să fie clare pentru amândouă:</p>
      <ul>
        <li>Cererea trebuie trimisă pe email în termen de 14 zile calendaristice de la plată.</li>
        <li>
          Banii se întorc pe același card, în maximum 14 zile de la primirea cererii. Termenul
          efectiv de creditare depinde de banca ta.
        </li>
        <li>
          Odată cu returnarea sumei, accesul tău în platformă încetează, iar dreptul de a folosi
          materialele se stinge.
        </li>
        <li>
          Este o garanție de potrivire, nu de rezultat financiar. Nu poate fi cerută de mai multe
          ori pentru același program.
        </li>
      </ul>

      <h2>7. Drepturi de autor</h2>
      <p>
        Toate materialele — texte, înregistrări video și audio, caiete de lucru, teste, structura și
        designul site-ului — îmi aparțin și sunt protejate de Legea 8/1996 privind dreptul de autor.
      </p>
      <p>Cumpărând un program, primești o licență personală, neexclusivă și netransferabilă. Poți:</p>
      <ul>
        <li>parcurge materialele pentru uzul tău personal;</li>
        <li>
          descărca și tipări caietele de lucru pentru tine, păstrând mențiunile de copyright.
        </li>
      </ul>
      <p>Nu poți:</p>
      <ul>
        <li>împărtăși contul sau datele de acces cu altcineva;</li>
        <li>copia, distribui, revinde, publica sau încărca materialele oriunde altundeva;</li>
        <li>
          folosi conținutul pentru a-ți construi propriul program, curs sau material comercial;
        </li>
        <li>înregistra sau reproduce sesiunile live, dacă programul include așa ceva.</li>
      </ul>
      <p>
        Încălcarea acestor reguli duce la suspendarea imediată a accesului, fără returnarea sumei,
        și îmi rezerv dreptul de a acționa în justiție.
      </p>

      <h2>8. Comunitatea privată</h2>
      <p>
        Unele programe includ acces într-o comunitate privată. Acolo se aplică o singură regulă de
        fond: <strong>ce se spune în grup rămâne în grup</strong>. Îți cer respect față de celelalte
        participante și confidențialitate asupra a ceea ce împărtășesc ele. Pot elimina din
        comunitate, fără returnarea sumei, orice persoană care hărțuiește, face spam, face reclamă
        sau divulgă în afară ce s-a discutat în grup.
      </p>

      <h2>9. Răspundere</h2>
      <p>
        Îmi asum să livrez programele așa cum sunt descrise pe paginile lor. Nu răspund pentru
        deciziile financiare, profesionale sau personale pe care le iei pe baza materialelor, nici
        pentru rezultatele pe care le obții sau nu le obții. Nu răspund pentru întreruperi cauzate
        de furnizori terți (platforma de curs, procesatorul de plăți, găzduirea) sau de forță
        majoră, dar mă implic să le rezolv cât pot de repede.
      </p>
      <p>
        În limita permisă de lege, răspunderea mea totală față de tine nu poate depăși suma pe care
        ai plătit-o pentru programul în cauză.
      </p>

      <h2>10. Reclamații și soluționarea disputelor</h2>
      <p>
        Dacă ceva nu e în regulă, scrie-mi întâi mie la{' '}
        <a href={`mailto:${legal.email}`}>{legal.email}</a> — răspund în maximum 5 zile lucrătoare
        și, în experiența mea, aproape orice se rezolvă aici.
      </p>
      <p>Dacă nu ajungem la o înțelegere, te poți adresa:</p>
      <ul>
        <li>
          <strong>ANPC</strong> — Autoritatea Națională pentru Protecția Consumatorilor,{' '}
          <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer">
            anpc.ro
          </a>
          . Formular de reclamație:{' '}
          <a
            href="https://anpc.ro/ce-este-sal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SAL — soluționare alternativă a litigiilor
          </a>
          .
        </li>
        <li>
          <strong>Platforma SOL</strong> a Comisiei Europene, pentru soluționarea online a
          litigiilor:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            ec.europa.eu/consumers/odr
          </a>
          .
        </li>
      </ul>

      <h2>11. Date personale</h2>
      <p>
        Modul în care îți prelucrez datele este descris pe larg în{' '}
        <a href="/politica-confidentialitate.html">Politica de confidențialitate</a>, care face
        parte din acești termeni.
      </p>

      <h2>12. Modificări</h2>
      <p>
        Pot actualiza acești termeni oricând. Versiunea aplicabilă comenzii tale este cea publicată
        pe site în momentul plății, iar data ultimei actualizări e afișată în capul paginii.
      </p>

      <h2>13. Legea aplicabilă</h2>
      <p>
        Acestor termeni li se aplică legea română. Eventualele litigii se soluționează pe cale
        amiabilă, iar dacă nu e posibil, de instanțele competente de la sediul Vânzătorului, fără a
        îți afecta drepturile pe care legislația privind protecția consumatorilor ți le acordă în
        calitate de consumator.
      </p>
    </LegalPage>
  )
}
