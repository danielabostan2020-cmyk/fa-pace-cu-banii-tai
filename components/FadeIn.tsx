'use client'

import React, { useEffect, useRef } from 'react'

interface FadeInProps extends React.HTMLAttributes<HTMLElement> {
  delay?: 0 | 1 | 2 | 3 | 4
  as?: string
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  as: tag = 'div',
  ...rest
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay > 0 ? ` delay-${delay}` : ''
  const cls = `fade-in${delayClass}${className ? ' ' + className : ''}`

  return React.createElement(tag, { ref, className: cls, ...rest }, children)
}
