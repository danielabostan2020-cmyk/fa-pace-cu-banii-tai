'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'
import { eftFaqs } from './eftFaqData'

export default function EftFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="eft-faq" style={{ background: 'var(--bg-off)' }}>
      <div className="container">
        <FadeIn as="span" className="section-label">Întrebări</FadeIn>
        <FadeIn as="h2">Răspunsuri clare pentru ultimele tale ezitări</FadeIn>
        <FadeIn className="faq-list">
          {eftFaqs.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button
                className="faq-trigger"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`eft-faq-a-${i}`}
              >
                {item.q}
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="faq-body" id={`eft-faq-a-${i}`} role="region">
                <div className="faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}
