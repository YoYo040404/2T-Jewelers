// site-catalog.jsx — Categories, best-sellers, materials, custom

function Header({ variant, onMenu }) {
  const isMobile = variant === 'mobile';
  const links = ['Shop', 'Custom', 'Best Sellers', 'Reviews', 'FAQ', 'Instagram', 'Contact'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'rgba(10,9,7,0.82)',
      backdropFilter: 'blur(12px) saturate(140%)',
      WebkitBackdropFilter: 'blur(12px) saturate(140%)',
      borderBottom: '1px solid var(--line)',
      padding: isMobile ? '12px 16px' : '14px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
    }}>
      <LogoMark size={isMobile ? 30 : 36} />
      {!isMobile && (
        <nav style={{ display: 'flex', gap: 26 }}>
          {links.map(l => (
            <a key={l} href="#" style={{
              fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--fg-dim)', textDecoration: 'none', fontWeight: 500,
            }} onMouseOver={e => e.currentTarget.style.color = 'var(--gold-1)'}
               onMouseOut={e => e.currentTarget.style.color = 'var(--fg-dim)'}>{l}</a>
          ))}
        </nav>
      )}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {!isMobile && (
          <button className="btn btn-sm btn-ghost">{Ic.search(14)}</button>
        )}
        <button className="btn btn-primary btn-sm" style={{ gap: 8 }}>
          {Ic.wa(14)}<span>WhatsApp</span>
        </button>
        {isMobile && (
          <button onClick={onMenu} style={{
            width: 38, height: 38, border: '1px solid var(--line-strong)',
            background: 'transparent', color: 'var(--fg)', borderRadius: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Ic.menu(16)}</button>
        )}
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, title, sub, variant }) {
  const isMobile = variant === 'mobile';
  return (
    <div style={{ marginBottom: isMobile ? 24 : 44 }}>
      {eyebrow && <div className="eyebrow" style={{ marginBottom: 10 }}>{eyebrow}</div>}
      <h2 className="serif" style={{
        margin: 0, fontSize: isMobile ? 34 : 58, lineHeight: 1,
        letterSpacing: '-0.01em', color: 'var(--fg)', textWrap: 'balance',
      }}>{title}</h2>
      {sub && <p style={{
        marginTop: 14, maxWidth: 620, color: 'var(--fg-dim)',
        fontSize: isMobile ? 14 : 15.5, lineHeight: 1.55,
      }}>{sub}</p>}
    </div>
  );
}

function CategoryCard({ cat, variant, large = false }) {
  const isMobile = variant === 'mobile';
  const h = large ? (isMobile ? 200 : 340) : (isMobile ? 150 : 220);
  return (
    <a href="#" style={{
      display: 'block', position: 'relative', overflow: 'hidden',
      background: 'var(--ink-2)', border: '1px solid var(--line)',
      textDecoration: 'none', color: 'var(--fg)',
    }}
    onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(212,162,76,0.5)'}
    onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(212,162,76,0.14)'}>
      <div className="ph" style={{ height: h, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(242,210,122,0.28)' }}>
        {Glyph[cat.glyph](isMobile ? 56 : 84)}
        <span className="ph-caption">{cat.name.toUpperCase().replace(/ /g,'_')}_PHOTO</span>
      </div>
      <div style={{
        padding: isMobile ? '14px 16px' : '20px 22px',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        borderTop: '1px solid var(--line)',
      }}>
        <div>
          <div className="serif" style={{ fontSize: isMobile ? 20 : 26, lineHeight: 1 }}>{cat.name}</div>
          <div style={{ fontSize: 11.5, color: 'var(--fg-mute)', marginTop: 6, letterSpacing: 0.04 }}>{cat.sub}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--gold-2)' }}>
          {cat.count !== null && <span className="mono" style={{ fontSize: 11, color: 'var(--fg-mute)' }}>{String(cat.count).padStart(3,'0')}</span>}
          {Ic.arrow(14)}
        </div>
      </div>
      {cat.featured && (
        <div style={{
          position: 'absolute', top: 10, left: 10,
          padding: '4px 8px', background: 'var(--gold-grad)', color: '#1A1308',
          fontSize: 9.5, letterSpacing: '0.18em', fontWeight: 700, textTransform: 'uppercase',
        }}>One-of-One</div>
      )}
    </a>
  );
}

function Categories({ variant }) {
  const isMobile = variant === 'mobile';
  const cols = isMobile ? 2 : 4;
  // custom is large
  const regular = CATEGORIES.filter(c => !c.featured);
  const featured = CATEGORIES.find(c => c.featured);
  return (
    <section data-screen-label={`${variant} · Categories`} style={{
      padding: isMobile ? '48px 16px' : '96px 40px',
      background: 'var(--ink-0)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: isMobile ? 24 : 44, gap: 24, flexWrap: 'wrap' }}>
        <SectionTitle variant={variant} eyebrow="Shop by Category" title={<>The <span className="gold-text">catalog</span>.</>} sub="From everyday chains to one-of-one custom builds \u2014 everything we do, in plain categories." />
        {!isMobile && <button className="btn btn-ghost btn-sm">View All {Ic.arrow(12)}</button>}
      </div>

      <div style={{ display: 'grid', gap: isMobile ? 12 : 16, gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {regular.map(c => <CategoryCard key={c.key} cat={c} variant={variant} />)}
      </div>

      {/* custom featured wide */}
      <div style={{ marginTop: isMobile ? 12 : 16 }}>
        <a href="#" style={{
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr',
          gap: 0, background: 'var(--ink-2)',
          border: '1px solid var(--line-strong)', textDecoration: 'none', color: 'var(--fg)',
          overflow: 'hidden', position: 'relative',
        }}>
          <div className="ph" style={{ height: isMobile ? 200 : 300, position: 'relative', color: 'rgba(242,210,122,0.3)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            {Glyph.custom(isMobile ? 64 : 110)}
            <span className="ph-caption">CUSTOM_HERO_PHOTO</span>
          </div>
          <div style={{ padding: isMobile ? '22px 18px' : '44px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Custom Jewelry · One-of-One</div>
            <div className="serif" style={{ fontSize: isMobile ? 28 : 42, lineHeight: 1 }}>
              From a <span className="gold-text">photo, sketch, or idea</span> — to a real piece.
            </div>
            <p style={{ marginTop: 14, color: 'var(--fg-dim)', fontSize: 14, lineHeight: 1.55, maxWidth: 460 }}>
              Send it on WhatsApp. We CAD it in 3D, you approve it, we make it. Silver, gold, diamonds, moissanite, or CZ.
            </p>
            <div style={{ marginTop: 22, display: 'flex', gap: 10, flexWrap:'wrap' }}>
              <span className="chip gold dot">2–6 week turnaround</span>
              <span className="chip">Design fee · refundable toward piece</span>
              <span className="chip">WhatsApp-first</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

// Product card
function ProductCard({ p, variant, cardStyle = 'editorial' }) {
  const isMobile = variant === 'mobile';
  const isCommerce = cardStyle === 'commerce';
  return (
    <a href="#" style={{
      display: 'block', background: isCommerce ? 'var(--ink-2)' : 'transparent',
      border: isCommerce ? '1px solid var(--line)' : 'none',
      textDecoration: 'none', color: 'var(--fg)', position: 'relative',
    }}
    onMouseOver={e => { if (isCommerce) e.currentTarget.style.borderColor = 'rgba(212,162,76,0.4)'; }}
    onMouseOut={e => { if (isCommerce) e.currentTarget.style.borderColor = 'rgba(212,162,76,0.14)'; }}>
      <div className="ph" style={{ aspectRatio: '1 / 1.05', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(242,210,122,0.22)' }}>
          {Glyph.pendant(isMobile ? 60 : 84)}
        </div>
        <span className="ph-caption">{p.caption}</span>
        <div style={{ position: 'absolute', top: 10, right: 10, display: 'flex', gap: 6 }}>
          {p.chips.slice(0, 2).map((c, i) => <span key={i} className={`chip ${c.includes('Gold') || c === '14K' || c === '10K' ? 'gold' : 'ice'}`} style={{ fontSize: 9, padding: '3px 7px' }}>{c}</span>)}
        </div>
      </div>
      <div style={{ padding: isCommerce ? (isMobile ? '14px 14px' : '18px 18px') : '14px 0 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
          <div className="serif" style={{ fontSize: isMobile ? 17 : 20, lineHeight: 1.1 }}>{p.name}</div>
          <div style={{ whiteSpace: 'nowrap', color: p.price.includes('custom') ? 'var(--ice)' : 'var(--gold-1)', fontSize: 12.5, fontWeight: 600, letterSpacing: 0.02 }}>{p.price}</div>
        </div>
        <div style={{ marginTop: 6, color: 'var(--fg-mute)', fontSize: 11.5, letterSpacing: 0.04 }}>{p.material} · {p.size}</div>
      </div>
    </a>
  );
}

function BestSellers({ variant, cardStyle }) {
  const isMobile = variant === 'mobile';
  const cols = isMobile ? 2 : 3;
  return (
    <section data-screen-label={`${variant} · Best Sellers`} style={{
      padding: isMobile ? '48px 16px' : '96px 40px',
      background: 'var(--ink-1)',
      borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: isMobile ? 24 : 44 }}>
        <SectionTitle variant={variant} eyebrow="Spotlight" title={<>Best <span className="gold-text">sellers</span>.</>} sub="Pieces moving out the showroom this month. Everything here is ready to ship or size." />
        {!isMobile && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {MATERIAL_CHIPS.slice(0, 6).map(c => <span key={c} className="chip">{c}</span>)}
            <span className="chip gold">+ {MATERIAL_CHIPS.length - 6} more</span>
          </div>
        )}
      </div>

      {isMobile && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, overflowX: 'auto', paddingBottom: 4 }} className="t2-scroll">
          {MATERIAL_CHIPS.map(c => <span key={c} className="chip">{c}</span>)}
        </div>
      )}

      <div style={{ display: 'grid', gap: isMobile ? 14 : 20, gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {BEST_SELLERS.map((p, i) => <ProductCard key={i} p={p} variant={variant} cardStyle={cardStyle} />)}
      </div>
    </section>
  );
}

window.Header = Header;
window.SectionTitle = SectionTitle;
window.Categories = Categories;
window.BestSellers = BestSellers;
window.ProductCard = ProductCard;
