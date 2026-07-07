import FadeIn from './FadeIn'

const TEST_URL = '/test-rani-financiare.html'

export default function TestCta() {
  return (
    <section id="test-cta" style={{ background: 'var(--violet-dark)', textAlign: 'center' }}>
      <div className="container">
        <FadeIn as="h2" style={{ color: 'var(--cream)', marginBottom: '20px' }}>
          Completează testul de mai jos
        </FadeIn>
        <FadeIn
          as="p"
          style={{ color: 'rgba(255,249,242,0.62)', maxWidth: 560, margin: '0 auto' }}
        >
          Ești la un pas de o descoperire importantă despre relația ta cu banii. Acest test îți
          oferă claritate asupra rănii tale financiare și primul pas concret spre schimbare.
        </FadeIn>
        <FadeIn delay={1} className="cta-group centered">
          <a href={TEST_URL} className="btn btn-gold">
            Începe testul gratuit →
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
