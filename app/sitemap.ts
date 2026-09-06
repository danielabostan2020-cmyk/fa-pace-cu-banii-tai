import type { MetadataRoute } from 'next'

// Necesar cu `output: 'export'` — altfel build-ul refuză ruta ca fiind dinamică.
export const dynamic = 'force-static'

const BASE = 'https://www.danielabostan.ro'

/**
 * Lista paginilor pe care vrem să le găsească Google.
 *
 * Adresele se scriu cu `.html`, fiindcă site-ul e servit static, fără clean URLs
 * (vezi vercel.json). Pagina de mulțumire lipsește intenționat: are `noindex`,
 * fiindcă se vede doar după plată.
 *
 * `lastModified` se scrie de mână, nu din data build-ului: altfel fiecare deploy
 * i-ar spune lui Google că s-au schimbat toate paginile, chiar dacă n-am atins
 * niciuna. Actualizează data doar când chiar modifici conținutul paginii.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/`,
      lastModified: '2026-09-06',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE}/eft-prosper.html`,
      lastModified: '2026-09-06',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/rani-financiare.html`,
      lastModified: '2026-09-06',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/termeni-conditii.html`,
      lastModified: '2026-09-03',
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE}/politica-confidentialitate.html`,
      lastModified: '2026-09-03',
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}
