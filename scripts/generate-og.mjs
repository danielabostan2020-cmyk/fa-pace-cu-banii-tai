/**
 * Generează imaginile Open Graph (1200×630) din același șablon vizual.
 *
 *   node scripts/generate-og.mjs            → regenerează tot
 *   node scripts/generate-og.mjs index      → doar cardul cerut
 *
 * Randarea se face cu Chrome/Edge în mod headless, ca să folosească exact
 * fonturile de brand (Cormorant Garamond + Poppins) de la Google Fonts.
 * Are nevoie de conexiune la internet pentru fonturi.
 */

import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, writeFileSync, rmSync, copyFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const ROOT = resolve(import.meta.dirname, '..')

/** Cardurile OG. Adaugă aici o intrare nouă când apare o pagină nouă. */
const CARDS = {
  index: {
    out: 'og-fa-pace-cu-banii-tai.png',
    label: 'Membership modular',
    title: 'Fă pace cu banii tăi',
    subtitle:
      '12 luni de transformare profundă — de la anxietate financiară la prosperitate sustenabilă, prin siguranță interioară.',
    portrait: 'daniela-alb.png',
    portraitPosition: 'center 18%',
  },
}

const BROWSERS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
]

function findBrowser() {
  const found = BROWSERS.find((p) => existsSync(p))
  if (!found) throw new Error('Nu am găsit Chrome sau Edge. Instalează unul dintre ele.')
  return found
}

function html(card) {
  const portraitPath = join(ROOT, 'public', card.portrait).replace(/\\/g, '/')
  const portraitData = readFileSync(join(ROOT, 'public', card.portrait)).toString('base64')
  const mime = card.portrait.endsWith('.webp') ? 'image/webp' : 'image/png'
  if (!existsSync(portraitPath)) throw new Error(`Lipsește portretul: ${portraitPath}`)

  return `<!doctype html>
<html lang="ro"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: linear-gradient(135deg, #2D1F5E 0%, #241858 45%, #1A1035 100%);
    position: relative;
    font-family: 'Poppins', sans-serif;
  }
  /* aura caldă în colțul din stânga-jos, ca pe paginile de vânzare */
  body::before {
    content: ''; position: absolute; left: -180px; bottom: -220px;
    width: 620px; height: 620px; border-radius: 50%;
    background: radial-gradient(circle, rgba(196,120,90,0.30) 0%, rgba(196,120,90,0) 70%);
  }
  body::after {
    content: ''; position: absolute; right: 120px; top: -260px;
    width: 640px; height: 640px; border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.13) 0%, rgba(201,168,76,0) 70%);
  }
  .wrap {
    position: relative; z-index: 1; height: 100%;
    display: flex; align-items: center; gap: 56px; padding: 0 64px;
  }
  .text { flex: 1; min-width: 0; }
  .pill {
    display: inline-flex; align-items: center; gap: 9px;
    border: 1px solid rgba(201,168,76,0.42); border-radius: 999px;
    padding: 9px 20px; margin-bottom: 30px;
  }
  .pill i { width: 7px; height: 7px; border-radius: 50%; background: #C9A84C; }
  .pill span {
    font-size: 14px; font-weight: 600; letter-spacing: 0.17em;
    text-transform: uppercase; color: #C9A84C;
  }
  h1 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 700; font-size: 82px; line-height: 1.08;
    letter-spacing: -0.015em; margin-bottom: 26px;
    background: linear-gradient(135deg, #FFF9F2 0%, #E8D9A8 55%, #C9A84C 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .sub {
    font-size: 21px; line-height: 1.62; font-weight: 400;
    color: rgba(255,249,242,0.74); max-width: 620px; margin-bottom: 38px;
  }
  .by { font-size: 17px; color: rgba(255,249,242,0.42); }
  .by b { color: #C9A84C; font-weight: 600; }
  .photo {
    width: 348px; height: 502px; flex: none;
    border-radius: 12px; overflow: hidden;
    box-shadow: 0 24px 70px rgba(14,9,36,0.5);
    border: 1px solid rgba(255,249,242,0.10);
  }
  .photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
</style></head>
<body>
  <div class="wrap">
    <div class="text">
      <div class="pill"><i></i><span>${card.label}</span></div>
      <h1>${card.title}</h1>
      <p class="sub">${card.subtitle}</p>
      <p class="by"><b>Daniela Bostan</b> · EFT Practitioner, Matrix Reimprinting</p>
    </div>
    <div class="photo">
      <img src="data:${mime};base64,${portraitData}" style="object-position:${card.portraitPosition}" alt="">
    </div>
  </div>
</body></html>`
}

function render(key, card) {
  const dir = mkdtempSync(join(tmpdir(), 'og-'))
  const page = join(dir, 'card.html')
  writeFileSync(page, html(card), 'utf8')

  execFileSync(
    findBrowser(),
    [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--window-size=1200,630',
      '--virtual-time-budget=6000',
      `--screenshot=${join(dir, 'shot.png')}`,
      `file:///${page.replace(/\\/g, '/')}`,
    ],
    { stdio: 'pipe' }
  )

  const dest = join(ROOT, 'public', card.out)
  copyFileSync(join(dir, 'shot.png'), dest)
  rmSync(dir, { recursive: true, force: true })
  console.log(`✓ ${key} → public/${card.out}`)
}

const only = process.argv[2]
for (const [key, card] of Object.entries(CARDS)) {
  if (only && only !== key) continue
  render(key, card)
}
