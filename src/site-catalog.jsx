function Header({ variant }) {
  const isMobile = variant === 'mobile';
  const links = [
    { label: 'Collections', href: '#collections' },
    { label: 'Spotlight', href: '#spotlight' },
    { label: 'Custom', href: '#custom' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Inquiry', href: '#inquiry' },
  ];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(10,9,7,0.82)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--line)', padding: isMobile ? '10px 14px' : '12px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
      <LogoMark size={isMobile ? 30 : 34} />
      {!isMobile && <nav style={{ display: 'flex', gap: 24 }}>{links.map(l => <a key={l.label} href={l.href} style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-dim)', textDecoration: 'none' }}>{l.label}</a>)}</nav>}
      <a href="#inquiry" className="btn btn-primary btn-sm">Start Inquiry</a>
    </header>
  );
}

function SectionTitle({ eyebrow, title, sub, variant }) {
  const isMobile = variant === 'mobile';
  return <div style={{ marginBottom: isMobile ? 24 : 40 }}>{eyebrow && <div className="eyebrow" style={{ marginBottom: 10 }}>{eyebrow}</div>}<h2 className="serif" style={{ margin: 0, fontSize: isMobile ? 32 : 54, lineHeight: 1 }}>{title}</h2>{sub && <p style={{ marginTop: 14, maxWidth: 640, color: 'var(--fg-dim)', fontSize: isMobile ? 14 : 15.5, lineHeight: 1.55 }}>{sub}</p>}</div>;
}

function CategoryCard({ cat, variant }) {
  const isMobile = variant === 'mobile';
  return <a href="#inquiry" style={{ display: 'block', position: 'relative', overflow: 'hidden', background: 'var(--ink-2)', border: '1px solid var(--line)', textDecoration: 'none', color: 'var(--fg)' }}><div className="ph" style={{ height: isMobile ? 150 : 220, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(242,210,122,0.28)' }}>{Glyph[cat.glyph](isMobile ? 56 : 84)}<span className="ph-caption">{cat.name.toUpperCase()}_PHOTO</span></div><div style={{ padding: isMobile ? '14px 16px' : '20px 22px', borderTop: '1px solid var(--line)' }}><div className="serif" style={{ fontSize: isMobile ? 20 : 26 }}>{cat.name}</div><div style={{ fontSize: 11.5, color: 'var(--fg-mute)', marginTop: 6 }}>{cat.sub}</div></div></a>;
}

function Categories({ variant }) {
  const isMobile = variant === 'mobile';
  return (
    <section id="collections" style={{ padding: isMobile ? '48px 16px' : '88px 40px', background: 'var(--ink-0)' }}>
      <SectionTitle variant={variant} eyebrow="Featured Collections" title={<>The <span className="gold-text">catalog</span>.</>} sub="Use these categories as your starting point, then continue to inquiry for quote and availability." />
      <div style={{ display: 'grid', gap: isMobile ? 10 : 14, gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)' }}>{CATEGORIES.filter(c => !c.featured).map(c => <CategoryCard key={c.key} cat={c} variant={variant} />)}</div>
    </section>
  );
}

function ProductCard({ p, variant, cardStyle = 'editorial' }) {
  const isMobile = variant === 'mobile';
  const isCommerce = cardStyle === 'commerce';
  return <a href="#inquiry" style={{ display: 'block', border: '1px solid var(--line)', textDecoration: 'none', color: 'var(--fg)', padding: isCommerce ? 0 : (isMobile ? 10 : 12), backgroundColor: isCommerce ? 'var(--ink-2)' : 'rgba(255,255,255,0.012)' }}><div className="ph" style={{ aspectRatio: '1 / 1.05' }}><span className="ph-caption">{p.caption}</span></div><div style={{ padding: isCommerce ? (isMobile ? '14px' : '18px') : (isMobile ? '14px 2px 2px' : '14px 4px 4px') }}><div className="serif" style={{ fontSize: isMobile ? 17 : 20 }}>{p.name}</div><div style={{ marginTop: 6, color: 'var(--fg-mute)', fontSize: 11.5 }}>{p.material} · {p.size}</div><div style={{ marginTop: 8, color: 'var(--gold-1)', fontSize: 12.5, fontWeight: 600 }}>{p.price}</div></div></a>;
}

function BestSellers({ variant, cardStyle }) {
  const isMobile = variant === 'mobile';
  return (
    <section id="spotlight" style={{ padding: isMobile ? '48px 16px' : '88px 40px', background: 'var(--ink-1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <SectionTitle variant={variant} eyebrow="Spotlight" title={<>Featured <span className="gold-text">pieces</span>.</>} sub="Representative product cards with inquiry-first pricing and specs." />
      <div style={{ display: 'grid', gap: isMobile ? 12 : 18, gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(3,1fr)' }}>{BEST_SELLERS.map((p, i) => <ProductCard key={i} p={p} variant={variant} cardStyle={cardStyle} />)}</div>
    </section>
  );
}

window.Header = Header;
window.SectionTitle = SectionTitle;
window.Categories = Categories;
window.BestSellers = BestSellers;
window.ProductCard = ProductCard;
