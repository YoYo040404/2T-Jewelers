function CustomProcess({ variant }) {
  const isMobile = variant === 'mobile';
  return (
    <section id="custom" style={{ padding: isMobile ? '48px 16px' : '100px 40px', background: 'var(--ink-0)' }}>
      <SectionTitle variant={variant} eyebrow="Custom Orders" title={<>From your <span className="gold-text">reference</span> to real jewelry.</>} sub="A clear, inquiry-first process built for custom requests." />
      <div style={{ display: 'grid', gap: isMobile ? 12 : 0, gridTemplateColumns: isMobile ? '1fr' : 'repeat(5,1fr)', border: !isMobile ? '1px solid var(--line)' : 'none' }}>{CUSTOM_STEPS.map((s, i) => <div key={s.n} style={{ padding: isMobile ? '18px' : '26px', background: isMobile ? 'var(--ink-2)' : 'transparent', border: isMobile ? '1px solid var(--line)' : 'none', borderRight: !isMobile && i < 4 ? '1px solid var(--line)' : undefined }}><div className="serif gold-text" style={{ fontSize: 30 }}>0{s.n}</div><div className="serif" style={{ fontSize: 19 }}>{s.title}</div><div style={{ color: 'var(--fg-dim)', fontSize: 13 }}>{s.body}</div></div>)}</div>
      <div style={{ marginTop: 24 }}><a href="#inquiry" className="btn btn-primary">Start Custom Inquiry</a></div>
    </section>
  );
}

function Materials({ variant }) {
  const isMobile = variant === 'mobile';
  return <section style={{ padding: isMobile ? '48px 16px' : '88px 40px', background: 'var(--ink-1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}><SectionTitle variant={variant} eyebrow="Materials" title={<>Clear options, no <span className="gold-text">guesswork</span>.</>} sub="Material labels and stone options can be reviewed during inquiry." /><div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(6,1fr)', gap: isMobile ? 10 : 14 }}>{MATERIALS_LANES.map((m, i) => <div key={i} style={{ padding: isMobile ? '16px' : '22px', background: 'var(--ink-2)', border: '1px solid var(--line)' }}><div className="label" style={{ color: 'var(--gold-2)', marginBottom: 8 }}>{m.k}</div><div className="serif" style={{ fontSize: isMobile ? 17 : 20 }}>{m.label}</div><div style={{ color: 'var(--fg-dim)', fontSize: 12 }}>{m.note}</div></div>)}</div></section>;
}

function Testimonials({ variant }) {
  const isMobile = variant === 'mobile';
  return <section id="reviews" style={{ padding: isMobile ? '48px 16px' : '88px 40px', background: 'var(--ink-0)' }}><SectionTitle variant={variant} eyebrow="Social Proof" title={<>Feedback from real <span className="gold-text">inquiries</span>.</>} /><div style={{ display: 'grid', gap: isMobile ? 12 : 16, gridTemplateColumns: isMobile ? '1fr' : 'repeat(4,1fr)' }}>{TESTIMONIALS.map((r, i) => <div key={i} style={{ padding: isMobile ? '18px' : '24px', background: 'var(--ink-2)', border: '1px solid var(--line)' }}><div style={{ color: 'var(--gold-1)' }}>{Array.from({ length: r.stars }).map((_, k) => <span key={k}>{Ic.star(12)}</span>)}</div><div className="serif" style={{ fontSize: isMobile ? 16 : 17, marginTop: 10 }}>&ldquo;{r.text}&rdquo;</div><div style={{ marginTop: 12, fontSize: 11.5, color: 'var(--fg-mute)', textTransform: 'uppercase' }}>{r.name} · {r.city}</div></div>)}</div></section>;
}

function Instagram({ variant }) {
  const isMobile = variant === 'mobile';
  const tiles = isMobile ? IG_TILES.slice(0, 6) : IG_TILES;
  return <section id="social" style={{ padding: isMobile ? '48px 16px' : '88px 40px', background: 'var(--ink-1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}><SectionTitle variant={variant} eyebrow="Instagram" title={<>Latest style <span className="gold-text">moments</span>.</>} sub="Visual placeholders are wired for future real feed/media updates." /><div style={{ display: 'grid', gap: isMobile ? 6 : 10, gridTemplateColumns: isMobile ? 'repeat(3,1fr)' : 'repeat(4,1fr)' }}>{tiles.map((t, i) => <a key={i} href="#inquiry" className="ph" style={{ aspectRatio: '1 / 1', textDecoration: 'none', display: 'block' }}><span className="ph-caption">{t.tag}</span></a>)}</div></section>;
}

function FAQ({ variant }) {
  const isMobile = variant === 'mobile';
  const [open, setOpen] = React.useState(0);
  return <section id="faq" style={{ padding: isMobile ? '48px 16px' : '88px 40px', background: 'var(--ink-0)' }}><SectionTitle variant={variant} eyebrow="FAQ" title={<>Before you <span className="gold-text">inquire</span>.</>} /><div style={{ borderTop: '1px solid var(--line)' }}>{FAQS.map((f, i) => <div key={i} style={{ borderBottom: '1px solid var(--line)' }}><button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', padding: isMobile ? '16px 4px' : '22px 4px', background: 'transparent', border: 'none', color: 'var(--fg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span className="serif" style={{ fontSize: isMobile ? 17 : 20 }}>{f.q}</span><span style={{ color: 'var(--gold-2)' }}>{open === i ? Ic.minus(16) : Ic.plus(16)}</span></button>{open === i && <div style={{ padding: '0 4px 18px', color: 'var(--fg-dim)', fontSize: 14 }}>{f.a}</div>}</div>)}</div></section>;
}

function Contact({ variant }) {
  const isMobile = variant === 'mobile';
  const [sent, setSent] = React.useState(false);
  return (
    <section id="inquiry" style={{ padding: isMobile ? '48px 16px' : '100px 40px', background: 'var(--ink-1)', borderTop: '1px solid var(--line)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 28 : 64 }}>
        <div>
          <SectionTitle variant={variant} eyebrow="Inquiry" title={<>Share a <span className="gold-text">photo reference</span>.</>} sub={BIZ.contactNote} />
          <a href="#top" className="btn btn-ghost">Back to top</a>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ padding: isMobile ? '20px' : '30px', background: 'var(--ink-2)', border: '1px solid var(--line-strong)', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <label><span className="label" style={{ color: 'var(--fg-mute)' }}>Name</span><input className="t2-input" placeholder="Your name" required /></label>
          <label><span className="label" style={{ color: 'var(--fg-mute)' }}>Preferred contact</span><input className="t2-input" placeholder="Email, Instagram handle, or phone" required /></label>
          <label><span className="label" style={{ color: 'var(--fg-mute)' }}>What piece are you looking for?</span><textarea className="t2-input" rows={4} placeholder="Share your idea, style, and target budget range" required /></label>
          <button type="submit" className="btn btn-primary">Submit Inquiry</button>
          {sent && <div style={{ color: 'var(--gold-1)', fontSize: 12 }}>Inquiry captured on the front-end. Connect this form to your preferred CRM, email, or messaging destination in the next phase.</div>}
        </form>
      </div>
      <style>{`.t2-input{width:100%;background:#0A0907;color:var(--fg);border:1px solid var(--line);padding:12px 14px;font-family:var(--sans);font-size:14px}.t2-input:focus{outline:none;border-color:var(--gold-2)}.t2-input::placeholder{color:var(--fg-mute)}`}</style>
    </section>
  );
}

function FinalCTA({ variant }) {
  const isMobile = variant === 'mobile';
  return <section style={{ padding: isMobile ? '60px 16px' : '120px 40px', textAlign: 'center', background: 'var(--ink-0)' }}><h2 className="serif" style={{ fontSize: isMobile ? 42 : 86, lineHeight: 0.95, margin: 0 }}>Ready to start?<br/><span className="gold-text">Open inquiry now.</span></h2><div style={{ marginTop: 28 }}><a href="#inquiry" className="btn btn-primary">Start Inquiry</a></div></section>;
}

function Footer({ variant }) {
  const isMobile = variant === 'mobile';
  return <footer style={{ background: 'var(--ink-1)', borderTop: '1px solid var(--line-strong)', padding: isMobile ? '36px 16px 110px' : '64px 40px 32px' }}><LogoMark size={36} /><p style={{ color: 'var(--fg-dim)', maxWidth: 420 }}>Inquiry-first showcase for custom and catalog jewelry. Final media, copy, and business details can be layered in next phase.</p><div style={{ marginTop: 20, fontSize: 11, color: 'var(--fg-mute)', letterSpacing: 0.06, textTransform: 'uppercase' }}>© 2026 2T Jewelers</div></footer>;
}

function StickyMobileCTA({ show }) {
  if (!show) return null;
  return <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 80, padding: '10px 12px calc(10px + env(safe-area-inset-bottom, 0px))', background: 'rgba(10,9,7,0.94)', borderTop: '1px solid rgba(212,162,76,0.25)', display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}><a href="#inquiry" className="btn btn-primary btn-sm" style={{ width: '100%' }}>Start Inquiry</a></div>;
}

window.CustomProcess = CustomProcess;
window.Materials = Materials;
window.Testimonials = Testimonials;
window.Instagram = Instagram;
window.FAQ = FAQ;
window.Contact = Contact;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
window.StickyMobileCTA = StickyMobileCTA;
