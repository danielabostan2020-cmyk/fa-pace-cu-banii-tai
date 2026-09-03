import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { legal } from '@/components/legalConfig'

const title = 'Politică de confidențialitate'
const description =
  'Cum sunt colectate, folosite și protejate datele tale personale pe danielabostan.ro, conform Regulamentului (UE) 2016/679 (GDPR).'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/politica-confidentialitate.html' },
  openGraph: {
    title,
    description,
    url: '/politica-confidentialitate.html',
    type: 'website',
  },
}

export default function PoliticaConfidentialitatePage() {
  return (
    <LegalPage
      titlu={title}
      intro="Datele tale sunt ale tale. Mai jos scrie exact ce colectez, de ce, cui ajung și cum le poți șterge oricând."
    >
      <h2>1. Cine este operatorul de date</h2>
      <p>
        Operatorul care decide de ce și cum sunt prelucrate datele tale este{' '}
        <strong>{legal.entitate}</strong>, cu sediul în {legal.sediu}, CUI {legal.cui},
        înregistrată la Registrul Comerțului sub nr. {legal.regCom}.
      </p>
      <p>
        Pentru orice întrebare legată de datele tale, scrie la{' '}
        <a href={`mailto:${legal.email}`}>{legal.email}</a>
        {legal.telefon ? ` sau sună la ${legal.telefon}` : ''}. Răspund în cel mult 30 de zile,
        termenul prevăzut de GDPR.
      </p>

      <h2>2. Ce date colectez și de ce</h2>

      <h3>a) Când completezi Testul Rănilor Financiare</h3>
      <p>
        Îți cer <strong>prenumele și adresa de email</strong>, împreună cu bifa ta explicită de
        acord. Le folosesc ca să îți trimit rezultatele testului și, ulterior, materiale
        educaționale și oferte legate de relația cu banii.
      </p>
      <ul>
        <li>
          <strong>Temeiul legal:</strong> consimțământul tău (art. 6 alin. 1 lit. a GDPR), dat
          prin bifarea căsuței. Îl poți retrage oricând.
        </li>
        <li>
          <strong>Cât păstrez datele:</strong> până când te dezabonezi sau ceri ștergerea.
        </li>
      </ul>
      <p>
        Răspunsurile tale la întrebările testului sunt calculate direct în browserul tău și{' '}
        <strong>nu ajung la mine</strong>. Nu știu ce ai bifat la fiecare întrebare.
      </p>

      <h3>b) Când cumperi un program</h3>
      <p>
        Plata se face prin <strong>Stripe</strong>. Datele cardului tău sunt introduse pe pagina
        securizată Stripe și <strong>nu trec niciodată prin acest site</strong> — nu le văd, nu le
        stochez. De la Stripe primesc numele, adresa de email și confirmarea plății, de care am
        nevoie ca să îți dau accesul la curs și să emit factura.
      </p>
      <ul>
        <li>
          <strong>Temeiul legal:</strong> executarea contractului (art. 6 alin. 1 lit. b) și
          obligația legală de a păstra documentele contabile (art. 6 alin. 1 lit. c).
        </li>
        <li>
          <strong>Cât păstrez datele:</strong> documentele fiscale se păstrează 10 ani, conform
          legislației contabile din România. Acest termen nu poate fi scurtat la cerere.
        </li>
      </ul>

      <h3>c) Când îmi scrii pe email</h3>
      <p>
        Păstrez corespondența cât timp e nevoie ca să îți răspund și să pot dovedi ce am discutat
        — de regulă maximum 3 ani. Temeiul legal este interesul meu legitim de a ține evidența
        relației cu clientele (art. 6 alin. 1 lit. f).
      </p>

      <h2>3. Ce NU fac</h2>
      <ul>
        <li>Nu vând, nu închiriez și nu fac schimb de date cu nimeni.</li>
        <li>
          Nu folosesc Google Analytics, Facebook Pixel sau alte instrumente de urmărire
          publicitară pe acest site.
        </li>
        <li>
          Nu construiesc profiluri automate și nu iau decizii automate care să te afecteze
          juridic.
        </li>
        <li>Nu cer și nu prelucrez intenționat date privind sănătatea ta.</li>
      </ul>

      <h2>4. Cui ajung datele tale</h2>
      <p>
        Lucrez cu câțiva furnizori care prelucrează date în numele meu, fiecare cu propriile
        garanții de securitate:
      </p>
      <ul>
        <li>
          <strong>Newsman</strong> (România) — platforma de email prin care îți trimit rezultatele
          testului și newsletterul.
        </li>
        <li>
          <strong>Stripe</strong> (Stripe Payments Europe Ltd., Irlanda) — procesarea plăților.
        </li>
        <li>
          <strong>DoCourse</strong> — platforma pe care se livrează cursurile și unde îți creezi
          contul de acces.
        </li>
        <li>
          <strong>Vercel</strong> (Vercel Inc., SUA) — găzduirea acestui site. Transferul este
          acoperit de clauzele contractuale standard aprobate de Comisia Europeană.
        </li>
      </ul>
      <p>
        Datele pot fi comunicate și autorităților publice, dar numai când legea mă obligă (de
        exemplu ANAF sau o instanță).
      </p>

      <h2>5. Cookie-uri și stocare locală</h2>
      <p>
        Acest site <strong>nu folosește cookie-uri de marketing sau de analiză</strong>. Singurul
        lucru salvat în browserul tău este preferința ta privind bannerul de cookie-uri, ținută în
        memoria locală a browserului (<code>localStorage</code>), ca să nu te întreb de fiecare
        dată. Poți șterge oricând această informație din setările browserului.
      </p>
      <p>
        Fonturile folosite pe site sunt servite de pe propriul server, nu de la Google, deci vizita
        ta nu este semnalată către terți.
      </p>
      <p>
        Platformele Stripe și DoCourse folosesc propriile cookie-uri, necesare funcționării lor, în
        momentul în care ajungi pe paginile lor. Politicile lor se aplică acolo.
      </p>

      <h2>6. Drepturile tale</h2>
      <p>Conform GDPR, ai următoarele drepturi, pe care le poți exercita gratuit:</p>
      <ul>
        <li>
          <strong>Acces</strong> — să afli ce date am despre tine și să primești o copie.
        </li>
        <li>
          <strong>Rectificare</strong> — să corectezi datele greșite sau incomplete.
        </li>
        <li>
          <strong>Ștergere</strong> („dreptul de a fi uitată”) — cu excepția datelor pe care sunt
          obligată legal să le păstrez, cum sunt facturile.
        </li>
        <li>
          <strong>Restricționare</strong> — să ceri oprirea temporară a prelucrării.
        </li>
        <li>
          <strong>Portabilitate</strong> — să primești datele într-un format pe care îl poți duce
          altundeva.
        </li>
        <li>
          <strong>Opoziție</strong> — să te opui prelucrării întemeiate pe interesul legitim.
        </li>
        <li>
          <strong>Retragerea consimțământului</strong> — oricând, fără să fie afectată prelucrarea
          de dinainte. Pentru newsletter e de ajuns linkul de dezabonare din subsolul oricărui
          email.
        </li>
      </ul>
      <p>
        Scrie la <a href={`mailto:${legal.email}`}>{legal.email}</a> ca să îți exerciți oricare
        dintre aceste drepturi.
      </p>

      <h2>7. Dacă nu ești mulțumită de răspunsul meu</h2>
      <p>
        Ai dreptul să depui plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor
        cu Caracter Personal (ANSPDCP), B-dul G-ral. Gheorghe Magheru nr. 28-30, sector 1,
        București, email{' '}
        <a href="mailto:anspdcp@dataprotection.ro">anspdcp@dataprotection.ro</a>,{' '}
        <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">
          dataprotection.ro
        </a>
        . Ai dreptul și de a te adresa justiției.
      </p>

      <h2>8. Securitate</h2>
      <p>
        Site-ul folosește conexiune criptată HTTPS. Accesul la platformele de email și de plată
        este protejat prin parole unice și autentificare în doi pași. Niciun sistem nu e perfect,
        dar dacă apare o breșă care îți pune datele în pericol, te anunț și anunț ANSPDCP în termen
        de 72 de ore, așa cum cere legea.
      </p>

      <h2>9. Copii</h2>
      <p>
        Serviciile mele se adresează adulților. Nu colectez cu bună știință date de la persoane sub
        16 ani. Dacă afli că un copil mi-a trimis date, scrie-mi și le șterg imediat.
      </p>

      <h2>10. Modificări</h2>
      <p>
        Pot actualiza această politică atunci când se schimbă serviciile sau legislația. Versiunea
        valabilă este întotdeauna cea de pe această pagină, cu data actualizării afișată sus. La
        modificări importante, anunț și pe email abonatele.
      </p>
    </LegalPage>
  )
}
