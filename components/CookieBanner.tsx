'use client'

import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }
  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div id="cookie-banner" role="dialog" aria-label="Notificare cookie-uri">
      <p>
        Această pagină folosește cookie-uri esențiale pentru funcționare. Nu colectăm date de
        marketing fără acordul tău.
      </p>
      <div className="cookie-btns">
        <button className="cookie-accept" onClick={accept}>
          Accept
        </button>
        <button className="cookie-decline" onClick={decline}>
          Refuz
        </button>
      </div>
    </div>
  )
}
