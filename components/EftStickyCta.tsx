'use client'

import { useEffect, useRef } from 'react'
import { EFT_STRIPE_LINK } from './eftProsperConfig'

export default function EftStickyCta() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const hero = document.getElementById('hero')
    const closing = document.getElementById('closing')

    const update = () => {
      if (!hero || !closing) return
      const heroBottom = hero.getBoundingClientRect().bottom
      const closingTop = closing.getBoundingClientRect().top
      const wh = window.innerHeight
      if (heroBottom > 80 || closingTop < wh - 80) {
        el.style.opacity = '0'
        el.style.pointerEvents = 'none'
      } else {
        el.style.opacity = '1'
        el.style.pointerEvents = 'auto'
      }
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div id="sticky-cta" ref={ref}>
      <a href={EFT_STRIPE_LINK}>Vreau acces, 297 RON — plată unică</a>
    </div>
  )
}
