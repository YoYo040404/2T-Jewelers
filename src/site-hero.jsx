// site.jsx — 2T Jewelers microsite. Renders mobile or desktop variant from same source.

// ───────── Small subcomponents ─────────

function Ticker({ items }) {
  // horizontal loop of short cues
  const row = [...items, ...items];
  return (
    <div style={{
      background: '#050403', borderBottom: '1px solid rgba(212,162,76,0.2)',
      overflow: 'hidden', height: 34, display: 'flex', alignItems: 'center',
    }}>
      <div className="t2-ticker-track" style={{
        display: 'flex', gap: 32, whiteSpace: 'nowrap',
        animation: 't2-ticker 32s linear infinite',
        fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'var(--fg-dim)', paddingLeft: 32,
      }}>
        {row.map((t, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--gold-2)' }} />
            <span style={{ color: i % 2 ? 'var(--fg)' : 'var(--fg-dim)' }}>{t}</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes t2-ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </div>
  );
}

function LogoMark({ size = 34 }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <img src="assets/logo.png" alt="2T Jewelers" style={{
        width: size, height: size, objectFit: 'cover', borderRadius: 2,
        border: '1px solid rgba(212,162,76,0.35)',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)',
      }} />
      <div style={{ lineHeight: 1 }}>
        <div className="serif gold-text" style={{ fontSize: size * 0.56, letterSpacing: 0.5 }}>2T Jewelers</div>
        <div className="label" style={{ color: 'var(--fg-mute)', fontSize: 9, marginTop: 4, letterSpacing: '0.24em' }}>EST. 1994 · PITTSBURGH</div>
      </div>
    </div>
  );
}

function Hero({ variant = 'mobile' }) {
  const isMobile = variant === 'mobile';
  return (
    <section data-screen-label={`${variant} · Hero`} style={{
      position: 'relative',
      padding: isMobile ? '24px 20px 36px' : '72px 64px 80px',
      overflow: 'hidden',
    }}>
      {/* video placeholder background */}
      <div className="shimmer-bg" style={{
        position: 'absolute', inset: 0, zIndex: 0,
      }} />
      {/* texture overlay — chains silhouette hinted */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(40% 30% at 80% 20%, rgba(242,210,122,0.18), transparent 60%),
          radial-gradient(35% 40% at 15% 90%, rgba(212,162,76,0.12), transparent 70%),
          repeating-linear-gradient(135deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 24px)
        `,
        mixBlendMode: 'screen',
      }} />
      {/* muted video chrome */}
      <div style={{
        position: 'absolute', top: isMobile ? 12 : 24, right: isMobile ? 12 : 24, zIndex: 2,
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '5px 10px', background: 'rgba(10,9,7,0.6)',
        border: '1px solid rgba(237,230,215,0.15)', borderRadius: 999,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: '#E25858', boxShadow: '0 0 8px #E25858' }} />
        <span className="label" style={{ color: 'var(--fg-dim)', fontSize: 9 }}>LOOP · MUTED</span>
      </div>

      <div style={{ position: 'relative', zIndex: 3, maxWidth: isMobile ? 'none' : 1100 }}>
        <div className="eyebrow" style={{ marginBottom: isMobile ? 14 : 22 }}>
          Pittsburgh · Est. 1994 · Downtown Showroom
        </div>
        <h1 className="serif" style={{
          margin: 0,
          fontSize: isMobile ? 44 : 104,
          lineHeight: isMobile ? 0.98 : 0.92,
          letterSpacing: '-0.02em',
          color: 'var(--fg)',
          textWrap: 'balance',
        }}>
          Heavy <span className="gold-text">gold</span>.<br/>
          Sharp <span className="gold-text">stones</span>.<br/>
          Built <span style={{ fontStyle: 'italic' }}>for you</span>.
        </h1>
        <p style={{
          maxWidth: isMobile ? 320 : 560,
          marginTop: isMobile ? 18 : 28,
          fontSize: isMobile ? 14.5 : 17,
          lineHeight: 1.55,
          color: 'var(--fg-dim)',
        }}>
          Thirty years on Fifth Ave. Cuban links, iced pendants, tennis chains,
          watches, grillz, and one-of-one custom pieces \u2014 made in-house, shipped worldwide,
          or picked up downtown.
        </p>

        <div style={{
          marginTop: isMobile ? 22 : 34,
          display: 'flex', gap: 10, flexWrap: 'wrap',
        }}>
          <button className="btn btn-primary">
            <span>Start a Custom Piece</span>
            {Ic.arrow(14)}
          </button>
          <button className="btn btn-ghost">Browse Collections</button>
        </div>

        {/* trust row */}
        <div style={{
          marginTop: isMobile ? 28 : 48,
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, max-content)',
          gap: isMobile ? 14 : 48,
          paddingTop: isMobile ? 20 : 28,
          borderTop: '1px solid var(--line)',
        }}>
          {[
            { n: '30+', l: 'Years downtown' },
            { n: '10K / 14K', l: 'Solid gold, stamped' },
            { n: 'VVS', l: 'Moissanite & lab diamond' },
            { n: '2–6 wk', l: 'Custom turnaround' },
          ].map((t, i) => (
            <div key={i}>
              <div className="serif gold-text" style={{ fontSize: isMobile ? 22 : 30, lineHeight: 1 }}>{t.n}</div>
              <div className="label" style={{ marginTop: 6, color: 'var(--fg-mute)' }}>{t.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustStrip({ variant }) {
  const isMobile = variant === 'mobile';
  const items = [
    { ic: Ic.diamond, t: 'Real materials, marked' },
    { ic: Ic.spark, t: 'Custom jewelry' },
    { ic: Ic.clock, t: 'Layaway available' },
    { ic: Ic.ship, t: 'Ships nationwide' },
    { ic: Ic.pin, t: 'Pittsburgh showroom' },
    { ic: Ic.shield, t: 'Repairs & resizing' },
  ];
  return (
    <section style={{
      background: 'var(--ink-1)',
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div style={{
        padding: isMobile ? '14px 16px' : '22px 64px',
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(6, 1fr)',
        gap: isMobile ? 10 : 0,
      }}>
        {items.map((it, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: isMobile ? '6px 0' : '0 12px',
            borderLeft: !isMobile && i > 0 ? '1px solid var(--line)' : 'none',
          }}>
            <span style={{ color: 'var(--gold-2)' }}>{it.ic(18)}</span>
            <span style={{
              fontSize: isMobile ? 11 : 12, letterSpacing: 0.02,
              color: 'var(--fg-dim)', whiteSpace: 'nowrap',
            }}>{it.t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Ticker = Ticker;
window.LogoMark = LogoMark;
window.Hero = Hero;
window.TrustStrip = TrustStrip;
