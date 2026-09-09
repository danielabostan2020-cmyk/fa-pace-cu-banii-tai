/**
 * Generează imaginile Open Graph (1200×630) din același șablon vizual.
 *
 *   node scripts/generate-og.mjs            → regenerează tot
 *   node scripts/generate-og.mjs test       → doar cardul cerut
 *
 * Randarea se face cu Chrome/Edge în mod headless, ca să folosească exact
 * fonturile de brand (Cormorant Garamond + Poppins) de la Google Fonts.
 * Are nevoie de conexiune la internet pentru fonturi.
 *
 * Două așezări:
 *
 *   'split'    — text în stânga, portret în card pe dreapta. Arată bine în
 *                previzualizarea mare, de lățime întreagă, dintr-o postare.
 *
 *   'centered' — totul strâns în banda centrală de 600px. Facebook taie
 *                previzualizările din COMENTARII aproape pătrat, păstrând
 *                mijlocul imaginii (x 285→915 din 1200). O compoziție 'split'
 *                tăiată așa arată jumătăți de cuvinte; una 'centered' rămâne
 *                întreagă. Daniela pune linkurile în comentarii, deci cardurile
 *                pe care le distribuie acolo folosesc așezarea asta.
 */

import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, writeFileSync, rmSync, copyFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const ROOT = resolve(import.meta.dirname, '..')

/** Lățimea care supraviețuiește unui decupaj pătrat din centru. */
const SAFE_WIDTH = 600

/** Cardurile OG. Adaugă aici o intrare nouă când apare o pagină nouă. */
const CARDS = {
  index: {
    out: 'og-fa-pace-cu-banii-tai.png',
    layout: 'split',
    label: 'Membership modular',
    title: 'Fă pace cu banii tăi',
    subtitle:
      '12 luni de transformare profundă — de la anxietate financiară la prosperitate sustenabilă, prin siguranță interioară.',
    portrait: 'daniela-alb.png',
    portraitPosition: 'center 18%',
  },

  test: {
    out: 'og-test-rani-financiare-v2.png',
    layout: 'centered',
    label: 'Test gratuit · 5 minute',
    title: 'Testul Rănilor<br>Financiare',
    subtitle: 'Descoperă ce îți sabotează relația cu banii',
    portrait: 'daniela-bostan.jpg',
    portraitPosition: 'center 15%',
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

function portraitDataUri(file) {
  const path = join(ROOT, 'public', file)
  if (!existsSync(path)) throw new Error(`Lipsește portretul: ${path}`)
  const mime = file.endsWith('.webp') ? 'image/webp' : file.endsWith('.jpg') ? 'image/jpeg' : 'image/png'
  return `data:${mime};base64,${readFileSync(path).toString('base64')}`
}

const SHARED_CSS = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden; position: relative;
    background: linear-gradient(135deg, #2D1F5E 0%, #241858 45%, #1A1035 100%);
    font-family: 'Poppins', sans-serif;
  }
  body::before {
    content: ''; position: absolute; left: -180px; bottom: -220px;
    width: 620px; height: 620px; border-radius: 50%;
    background: radial-gradient(circle, rgba(196,120,90,0.30) 0%, rgba(196,120,90,0) 70%);
  }
  .label {
    font-size: 14px; font-weight: 600; letter-spacing: 0.17em;
    text-transform: uppercase; color: #C9A84C;
  }
  h1 {
    font-family: 'Cormorant Garamond', serif; font-weight: 700;
    letter-spacing: -0.015em;
    background: linear-gradient(135deg, #FFF9F2 0%, #E8D9A8 55%, #C9A84C 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .by { font-size: 17px; color: rgba(255,249,242,0.42); }
  .by b { color: #C9A84C; font-weight: 600; }
`

function splitHtml(card) {
  return `<style>
  ${SHARED_CSS}
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
  h1 { font-size: 82px; line-height: 1.08; margin-bottom: 26px; }
  .sub {
    font-size: 21px; line-height: 1.62; color: rgba(255,249,242,0.74);
    max-width: 620px; margin-bottom: 38px;
  }
  .photo {
    width: 348px; height: 502px; flex: none;
    border-radius: 12px; overflow: hidden;
    box-shadow: 0 24px 70px rgba(14,9,36,0.5);
    border: 1px solid rgba(255,249,242,0.10);
  }
  .photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
</style>
<div class="wrap">
  <div class="text">
    <div class="pill"><i></i><span class="label">${card.label}</span></div>
    <h1>${card.title}</h1>
    <p class="sub">${card.subtitle}</p>
    <p class="by"><b>Daniela Bostan</b> · EFT Practitioner, Matrix Reimprinting</p>
  </div>
  <div class="photo">
    <img src="${portraitDataUri(card.portrait)}" style="object-position:${card.portraitPosition}" alt="">
  </div>
</div>`
}

function centeredHtml(card) {
  return `<style>
  ${SHARED_CSS}
  body::after {
    content: ''; position: absolute; left: 50%; top: -300px; margin-left: -340px;
    width: 680px; height: 680px; border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.16) 0%, rgba(201,168,76,0) 70%);
  }
  .wrap {
    position: relative; z-index: 1; height: 100%;
    width: ${SAFE_WIDTH}px; margin: 0 auto;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center;
  }
  .avatar {
    width: 152px; height: 152px; border-radius: 50%; overflow: hidden;
    border: 2px solid rgba(201,168,76,0.55);
    box-shadow: 0 18px 50px rgba(14,9,36,0.55);
    margin-bottom: 26px;
  }
  .avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .label { margin-bottom: 16px; }
  h1 { font-size: 74px; line-height: 1.06; margin-bottom: 20px; }
  .sub { font-size: 20px; line-height: 1.5; color: rgba(255,249,242,0.76); margin-bottom: 26px; }
  .rule { width: 64px; height: 1px; background: rgba(201,168,76,0.5); margin-bottom: 22px; }
</style>
<div class="wrap">
  <div class="avatar">
    <img src="${portraitDataUri(card.portrait)}" style="object-position:${card.portraitPosition}" alt="">
  </div>
  <span class="label">${card.label}</span>
  <h1>${card.title}</h1>
  <p class="sub">${card.subtitle}</p>
  <div class="rule"></div>
  <p class="by"><b>Daniela Bostan</b> · EFT Practitioner</p>
</div>`
}

function html(card) {
  const body = card.layout === 'centered' ? centeredHtml(card) : splitHtml(card)
  return `<!doctype html>
<html lang="ro"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
</head><body>${body}</body></html>`
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

  copyFileSync(join(dir, 'shot.png'), join(ROOT, 'public', card.out))
  rmSync(dir, { recursive: true, force: true })
  console.log(`✓ ${key} → public/${card.out}`)
}

const only = process.argv[2]
for (const [key, card] of Object.entries(CARDS)) {
  if (only && only !== key) continue
  render(key, card)
}
