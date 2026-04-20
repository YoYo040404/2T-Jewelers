function Ticker({ items }) {
  const row = [...items, ...items];
  return (
    <div style={{ background: '#050403', borderBottom: '1px solid rgba(212,162,76,0.2)', overflow: 'hidden', height: 36, display: 'flex', alignItems: 'center' }}>
      <div className="t2-ticker-track" style={{ display: 'flex', gap: 32, whiteSpace: 'nowrap', animation: 't2-ticker 32s linear infinite', fontFamily: 'var(--sans)', fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-dim)', paddingLeft: 32 }}>
        {row.map((t, i) => <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}><span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--gold-2)' }} /><span style={{ color: i % 2 ? 'var(--fg)' : 'var(--fg-dim)' }}>{t}</span></span>)}
      </div>
      <style>{`@keyframes t2-ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </div>
  );
}

function LogoMark({ size = 34 }) {
  return (
    <a href="#top" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
      <img src="assets/logo.png" alt="2T Jewelers" style={{ width: size, height: size, objectFit: 'cover', borderRadius: 2, border: '1px solid rgba(212,162,76,0.35)', boxShadow: '0 0 0 1px rgba(0,0,0,0.6)' }} />
      <div style={{ lineHeight: 1 }}>
        <div className="serif gold-text" style={{ fontSize: size * 0.56, letterSpacing: 0.5 }}>2T Jewelers</div>
        <div className="label" style={{ color: 'var(--fg-mute)', fontSize: 9, marginTop: 4, letterSpacing: '0.24em' }}>SHOWCASE · CUSTOM · INQUIRY</div>
      </div>
    </a>
  );
}

function Hero({ variant = 'mobile' }) {
  const isMobile = variant === 'mobile';
  return (
    <section id="top" style={{ position: 'relative', padding: isMobile ? '20px 16px 32px' : '56px 56px 72px', overflow: 'hidden' }}>
      <div className="shimmer-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: `radial-gradient(40% 30% at 80% 20%, rgba(242,210,122,0.16), transparent 60%), radial-gradient(35% 40% at 15% 90%, rgba(212,162,76,0.1), transparent 70%)` }} />
      <div style={{ position: 'relative', zIndex: 3, maxWidth: isMobile ? 'none' : 1100 }}>
        <div className="eyebrow" style={{ marginBottom: isMobile ? 14 : 20 }}>Inquiry-First Microsite · Product-Led</div>
        <h1 className="serif" style={{ margin: 0, fontSize: isMobile ? 38 : 78, lineHeight: isMobile ? 0.98 : 0.92, letterSpacing: '-0.02em', textWrap: 'balance' }}>
          Heavy <span className="gold-text">gold</span>.<br/>Sharp <span className="gold-text">stones</span>.<br/>Built to <span style={{ fontStyle: 'italic' }}>stand out</span>.
        </h1>
        <p style={{ maxWidth: isMobile ? 340 : 560, marginTop: isMobile ? 16 : 24, fontSize: isMobile ? 14 : 16, lineHeight: 1.6, color: 'var(--fg-dim)' }}>
          Chains, pendants, watches, grillz, and one-of-one custom concepts. Share your reference and continue in a clear inquiry flow.
        </p>
        <div style={{ marginTop: isMobile ? 20 : 30, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a href="#inquiry" className="btn btn-primary"><span>Start Inquiry</span>{Ic.arrow(14)}</a>
          <a href="#collections" className="btn btn-ghost">Browse Collections</a>
        </div>
      </div>
    </section>
  );
}

function TrustStrip({ variant }) {
  const isMobile = variant === 'mobile';
  const items = ['Inquiry-first process','Custom-friendly workflow','Clear material options','Product-focused guidance'];
  return (
    <section style={{ background: 'var(--ink-1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ padding: isMobile ? '14px 16px' : '20px 64px', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? 10 : 0 }}>
        {items.map((t, i) => <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: isMobile ? '6px 0' : '0 12px', borderLeft: !isMobile && i > 0 ? '1px solid var(--line)' : 'none' }}><span style={{ color: 'var(--gold-2)' }}>{Ic.spark(16)}</span><span style={{ fontSize: isMobile ? 11 : 12, color: 'var(--fg-dim)' }}>{t}</span></div>)}
      </div>
    </section>
  );
}

window.Ticker = Ticker;
window.LogoMark = LogoMark;
window.Hero = Hero;
window.TrustStrip = TrustStrip;
