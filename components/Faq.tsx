'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

const faqs = [
  {
    q: 'Pot intra dacă programul a început deja?',
    a: 'Da. Membershipul este modular. Când te înscrii, intri direct pe modulul activ din luna respectivă. Fiecare modul este o unitate independentă și completă în sine.',
  },
  {
    q: 'Trebuie să încep cu Modulul 1?',
    a: 'Nu. Poți intra în orice punct al programului. Fiecare modul funcționează independent.',
  },
  {
    q: 'Primesc acces la modulele anterioare?',
    a: 'Primești acces la modulul activ al lunii în care te înscrii. Modulele anterioare nu sunt incluse automat în varianta lunară.',
  },
  {
    q: 'Pot renunța după un modul?',
    a: 'Da. Varianta lunară nu te obligă să continui. Poți opri oricând, fără penalizări.',
  },
  {
    q: 'Dacă nu pot participa live?',
    a: 'Toate sesiunile sunt înregistrate și rămân la tine permanent. Le poți urmări oricând, în ritmul tău.',
  },
  {
    q: 'Pot intra dacă am datorii?',
    a: 'Da. Programul lucrează explicit cu relația dintre identitate și datorie. Luna 6, Topografia Datoriei, adresează direct acest subiect.',
  },
  {
    q: 'Este programul terapie?',
    a: 'Nu. Este un program educațional și transformațional. Nu înlocuiește psihoterapia sau consilierea financiară.',
  },
  {
    q: 'Am nevoie de experiență cu EFT sau Matrix Reimprinting?',
    a: [
      'Nu. Toate procesele sunt explicate pas cu pas, de la zero.',
      'EFT (Emotional Freedom Techniques) combină psihologia cognitivă cu stimularea unor puncte de acupunctură prin bătăi ușoare cu degetele. Lucrezi simultan cu o emoție sau credință și cu corpul tău, ceea ce permite eliberarea tiparelor stocate somatic — nu doar la nivel mental.',
      'Matrix Reimprinting este o extensie a EFT, dezvoltată de Karl Dawson. Lucrează cu amintiri timpurii care au creat credințe sau tipare active și în prezent, permițând rescrierea lor la nivel subconștient. Este deosebit de util pentru tiparele moștenite și loialitățile transgeneraționale.',
    ],
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq">
      <div className="container">
        <FadeIn as="span" className="section-label">
          Întrebări
        </FadeIn>
        <FadeIn as="h2">Întrebări frecvente</FadeIn>
        <FadeIn className="faq-list">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button className="faq-trigger" onClick={() => setOpen(open === i ? null : i)}>
                {item.q}
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="faq-body">
                <div className="faq-a">
                  {Array.isArray(item.a)
                    ? item.a.map((para, j) => <p key={j}>{para}</p>)
                    : <p>{item.a}</p>}
                </div>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}
