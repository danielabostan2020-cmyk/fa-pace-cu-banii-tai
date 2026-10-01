'use client'

import { useEffect, useState } from 'react'
import FadeIn from './FadeIn'
import { moduleCuAcces, linkCurs } from './moduleData'

/**
 * Lista de intrare în cursuri de pe pagina de mulțumire.
 *
 * Linkul de plată din Stripe poate trimite spre `?m=<slug>`. Dacă eticheta e
 * recunoscută, arătăm doar modulul cumpărat — un singur buton, fără alegere.
 * Altfel arătăm toate modulele și cumpărătoarea îl alege pe al ei.
 *
 * Citirea se face după montare, nu la build: site-ul e static, deci pagina
 * livrată e aceeași pentru toată lumea, iar adresa se vede abia în browser.
 * Până atunci e afișată lista completă, deci pagina e corectă și fără JavaScript.
 */
export default function ModuleAcces() {
  const [ales, setAles] = useState<string | null>(null)

  useEffect(() => {
    const cerut = new URLSearchParams(window.location.search).get('m')
    if (cerut && moduleCuAcces.some((m) => m.slug === cerut)) setAles(cerut)
  }, [])

  const lista = ales ? moduleCuAcces.filter((m) => m.slug === ales) : moduleCuAcces

  return (
    <>
      <FadeIn as="p" className="ty-intro">
        {ales
          ? 'Apasă aici și se deschide. Prima dată îți va cere să-ți faci un cont.'
          : 'Alege din lista de mai jos modulul pe care tocmai l-ai cumpărat.'}
      </FadeIn>

      <div className="ty-courses">
        {lista.map((m, i) => (
          <FadeIn key={m.num} delay={(i % 2) as 0 | 1}>
            <a className="ty-course" href={linkCurs(m)} target="_blank" rel="noopener">
              <span className="ty-course-name">{m.title}</span>
              <span className="ty-course-go" aria-hidden="true">
                Intră →
              </span>
            </a>
          </FadeIn>
        ))}
      </div>
    </>
  )
}
