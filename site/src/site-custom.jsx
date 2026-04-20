// site-custom.jsx — custom process, materials, testimonials, IG, FAQ, contact

function CustomProcess({ variant }) {
  const isMobile = variant === 'mobile';
  return (
    <section data-screen-label={`${variant} · Custom`} style={{
      padding: isMobile ? '48px 16px' : '120px 40px',
      background: 'var(--ink-0)', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(60% 40% at 80% 0%, rgba(212,162,76,0.08), transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative' }}>
        <SectionTitle variant={variant} eyebrow="Custom · WhatsApp-First" title={<>From your <span className="gold-text">idea</span> to a real piece — in five steps.</>} sub="Photo, screenshot, sketch, or a few words. We'll turn it into a CAD render, quote it, and build it." />

        <div style={{
          display: 'grid', gap: isMobile ? 12 : 0,
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(5, 1fr)',
          border: !isMobile ? '1px solid var(--line)' : 'none',
        }}>
          {CUSTOM_STEPS.map((s, i) => (
            <div key={s.n} style={{
              padding: isMobile ? '18px' : '28px',
              background: isMobile ? 'var(--ink-2)' : 'transparent',
              border: isMobile ? '1px solid var(--line)' : 'none',
              borderRight: !isMobile && i < 4 ? '1px solid var(--line)' : undefined,
              position: 'relative',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
                <div className="serif gold-text" style={{ fontSize: 36, lineHeight: 1 }}>0{s.n}</div>
                <div className="label" style={{ color: 'var(--fg-mute)' }}>Step {s.n}</div>
              </div>
              <div className="serif" style={{ fontSize: isMobile ? 19 : 20, lineHeight: 1.15, marginBottom: 8 }}>{s.title}</div>
              <div style={{ color: 'var(--fg-dim)', fontSize: 13, lineHeight: 1.55 }}>{s.body}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: isMobile ? 24 : 40, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="btn btn-primary"><span>{Ic.wa(14)}</span><span>Send Your Idea on WhatsApp</span></button>
          <button className="btn btn-ghost">View Recent Custom Work</button>
        </div>

        {/* recent custom gallery */}
        <div style={{ marginTop: isMobile ? 28 : 48, display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: isMobile ? 10 : 14 }}>
          {['NAME_PLATE_14K','PHOTO_PENDANT','LOGO_MEDALLION','INITIAL_STACK'].map((t, i) => (
            <div key={i} className="ph" style={{ aspectRatio: '1/1' }}>
              <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(242,210,122,0.28)' }}>
                {[Glyph.custom, Glyph.pendant, Glyph.ring, Glyph.chain][i](isMobile ? 44 : 62)}
              </div>
              <span className="ph-caption">CUSTOM_{String(i+1).padStart(2,'0')} · {t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Materials({ variant }) {
  const isMobile = variant === 'mobile';
  return (
    <section data-screen-label={`${variant} · Materials`} style={{
      padding: isMobile ? '48px 16px' : '96px 40px',
      background: 'var(--ink-1)',
      borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
    }}>
      <SectionTitle variant={variant} eyebrow="What It's Actually Made Of" title={<>No guessing. No <span className="gold-text">blur</span>.</>} sub="Every piece is marked. Here's how we tell them apart — and why the price is what it is." />

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(6, 1fr)', gap: isMobile ? 10 : 14 }}>
        {MATERIALS_LANES.map((m, i) => (
          <div key={i} style={{
            padding: isMobile ? '16px' : '22px',
            background: 'var(--ink-2)', border: '1px solid var(--line)',
            display: 'flex', flexDirection: 'column', gap: 10, minHeight: isMobile ? 140 : 180,
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 46, height: 26, padding: '0 8px',
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em',
              color: m.accent === 'gold' ? '#1A1308' : 'var(--ink-0)',
              background: m.accent === 'gold' ? 'var(--gold-grad)' : 'linear-gradient(180deg, #F3F6F9, #AEB6BF)',
              fontWeight: 700, alignSelf: 'flex-start',
            }}>{m.k}</div>
            <div className="serif" style={{ fontSize: isMobile ? 17 : 20, lineHeight: 1.1 }}>{m.label}</div>
            <div style={{ color: 'var(--fg-dim)', fontSize: 12, lineHeight: 1.5 }}>{m.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials({ variant }) {
  const isMobile = variant === 'mobile';
  return (
    <section data-screen-label={`${variant} · Reviews`} style={{
      padding: isMobile ? '48px 16px' : '96px 40px',
      background: 'var(--ink-0)',
    }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap: 20, marginBottom: isMobile ? 24 : 44 }}>
        <SectionTitle variant={variant} eyebrow="From the showroom" title={<>Real people, real <span className="gold-text">pickups</span>.</>} sub={null} />
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 2, color: 'var(--gold-1)' }}>{[1,2,3,4,5].map(i => <span key={i}>{Ic.star(14)}</span>)}</div>
          <span className="mono" style={{ fontSize: 11, color: 'var(--fg-dim)' }}>Client feedback highlights</span>
        </div>
      </div>

      <div style={{ display: 'grid', gap: isMobile ? 12 : 16, gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)' }}>
        {TESTIMONIALS.map((r, i) => (
          <div key={i} style={{
            padding: isMobile ? '18px' : '24px',
            background: 'var(--ink-2)', border: '1px solid var(--line)',
            display: 'flex', flexDirection: 'column', gap: 14, minHeight: isMobile ? 0 : 240,
          }}>
            <div style={{ display: 'flex', gap: 2, color: 'var(--gold-1)' }}>{Array.from({length: r.stars}).map((_,k) => <span key={k}>{Ic.star(12)}</span>)}</div>
            <div className="serif" style={{ fontSize: isMobile ? 16 : 17, lineHeight: 1.35, color: 'var(--fg)' }}>&ldquo;{r.text}&rdquo;</div>
            <div style={{ marginTop: 'auto', paddingTop: 10, borderTop: '1px solid var(--line)', display:'flex', justifyContent:'space-between', fontSize: 11.5, color: 'var(--fg-mute)', letterSpacing: 0.06, textTransform:'uppercase' }}>
              <span>{r.name}</span><span>{r.city}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Instagram({ variant }) {
  const isMobile = variant === 'mobile';
  const tiles = isMobile ? IG_TILES.slice(0, 6) : IG_TILES;
  return (
    <section data-screen-label={`${variant} · Instagram`} style={{
      padding: isMobile ? '48px 16px' : '96px 40px',
      background: 'var(--ink-1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: isMobile ? 20 : 32 }}>
        <SectionTitle variant={variant} eyebrow={`Instagram · ${BIZ.ig}`} title={<>Fresh off the <span className="gold-text">bench</span>.</>} sub={null} />
        <button className="btn btn-ghost btn-sm">{Ic.ig(14)}<span>Follow on Instagram</span></button>
      </div>
      <div style={{ display: 'grid', gap: isMobile ? 6 : 10, gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)' }}>
        {tiles.map((t, i) => (
          <div key={i} className="ph" style={{ aspectRatio: '1 / 1', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems:'flex-end', padding: 10 }}>
              <div style={{ fontSize: 10, fontFamily: 'var(--mono)', color: 'var(--fg-dim)', background: 'rgba(10,9,7,0.6)', padding: '3px 6px', border: '1px solid rgba(255,255,255,0.06)' }}>
                {t.tag}
              </div>
            </div>
            <div style={{ position:'absolute', top:10, right:10, color: 'rgba(242,210,122,0.8)' }}>{Ic.ig(14)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ({ variant }) {
  const isMobile = variant === 'mobile';
  const [open, setOpen] = React.useState(0);
  return (
    <section data-screen-label={`${variant} · FAQ`} style={{
      padding: isMobile ? '48px 16px' : '96px 40px',
      background: 'var(--ink-0)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: isMobile ? 24 : 64, alignItems:'flex-start' }}>
        <div>
          <SectionTitle variant={variant} eyebrow="Good questions" title={<>Before you <span className="gold-text">ask</span>.</>} sub="If it isn't here, just text. We'll respond as quickly as possible during active support hours." />
          <button className="btn btn-primary btn-sm" style={{ marginTop: 8 }}>{Ic.wa(14)}<span>Text Us a Question</span></button>
        </div>
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', padding: isMobile ? '16px 4px' : '22px 4px',
                  background: 'transparent', border: 'none', color: 'var(--fg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  textAlign: 'left', cursor: 'pointer',
                }}>
                  <span className="serif" style={{ fontSize: isMobile ? 17 : 20, lineHeight: 1.2 }}>{f.q}</span>
                  <span style={{ color: 'var(--gold-2)', flexShrink: 0 }}>{isOpen ? Ic.minus(16) : Ic.plus(16)}</span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 4px 20px', color: 'var(--fg-dim)', fontSize: 14, lineHeight: 1.6, maxWidth: 640 }}>
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact({ variant }) {
  const isMobile = variant === 'mobile';
  return (
    <section data-screen-label={`${variant} · Contact`} style={{
      padding: isMobile ? '48px 16px' : '110px 40px',
      background: 'var(--ink-1)',
      borderTop: '1px solid var(--line)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(50% 60% at 20% 10%, rgba(212,162,76,0.12), transparent 70%)',
        pointerEvents:'none',
      }} />
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 28 : 64 }}>
        <div>
          <SectionTitle variant={variant} eyebrow="Inquiry · No pressure" title={<>Send us a <span className="gold-text">photo</span>.</>} sub="WhatsApp is fastest. Attach a reference, a screenshot, or just describe it. We'll quote it back with a render." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
            <a href="#" className="btn btn-wa" style={{ justifyContent: 'flex-start' }}>
              {Ic.wa(16)}<span>WhatsApp {BIZ.whatsappShort}</span>
            </a>
            <a href={`tel:${BIZ.phone.replace(/\s|\+|-/g,'')}`} className="btn btn-ghost" style={{ justifyContent: 'flex-start' }}>
              {Ic.phone(16)}<span>Call {BIZ.phoneShort}</span>
            </a>
            <a href="#" className="btn btn-ghost" style={{ justifyContent: 'flex-start' }}>
              {Ic.ig(16)}<span>DM on Instagram {BIZ.ig}</span>
            </a>
          </div>

          <div style={{ marginTop: 28, padding: '18px', border: '1px solid var(--line)', background: 'var(--ink-2)' }}>
            <div className="label" style={{ color: 'var(--fg-mute)', marginBottom: 10 }}>Showroom</div>
            <div className="serif" style={{ fontSize: 20, lineHeight: 1.2 }}>{BIZ.address}</div>
            <div style={{ marginTop: 10, color: 'var(--fg-dim)', fontSize: 13 }}>{BIZ.hours}</div>
            <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
              <span className="chip gold dot">Inquiry-first support</span>
              <span className="chip">Pickup details on request</span>
            </div>
          </div>
        </div>

        {/* form */}
        <form onSubmit={(e) => { e.preventDefault(); alert('In the live site this would fire the WhatsApp deep-link with your message attached.'); }} style={{
          padding: isMobile ? '20px' : '32px', background: 'var(--ink-2)', border: '1px solid var(--line-strong)',
          display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          <div className="eyebrow">Short Inquiry Form</div>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span className="label" style={{ color: 'var(--fg-mute)' }}>Your name</span>
            <input className="t2-input" placeholder="First name" />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span className="label" style={{ color: 'var(--fg-mute)' }}>Phone / WhatsApp</span>
            <input className="t2-input" placeholder="(___) ___-____" />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span className="label" style={{ color: 'var(--fg-mute)' }}>What are you looking for?</span>
            <textarea className="t2-input" rows={isMobile ? 3 : 4} placeholder="Cuban chain, custom pendant with a photo, grillz fitting…" />
          </label>
          <div style={{ display:'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Ready to buy','Custom piece','Price check','Repair'].map(t => (
              <label key={t} style={{ display:'inline-flex', alignItems:'center', gap: 6, padding: '6px 10px', border: '1px solid var(--line)', fontSize: 11.5, color:'var(--fg-dim)', cursor:'pointer', letterSpacing: 0.04, textTransform:'uppercase' }}>
                <input type="checkbox" style={{ accentColor: '#D4A24C' }} />{t}
              </label>
            ))}
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: 6 }}>{Ic.wa(14)}<span>Send via WhatsApp</span></button>
          <div style={{ fontSize: 11.5, color: 'var(--fg-mute)' }}>No account required. We reply as quickly as possible during active support hours.</div>

          <style>{`
            .t2-input { width: 100%; background: #0A0907; color: var(--fg); border: 1px solid var(--line); padding: 12px 14px; font-family: var(--sans); font-size: 14px; border-radius: 0; outline: none; transition: border-color 120ms ease; }
            .t2-input:focus { border-color: var(--gold-2); }
            .t2-input::placeholder { color: var(--fg-mute); }
          `}</style>
        </form>
      </div>
    </section>
  );
}

function FinalCTA({ variant }) {
  const isMobile = variant === 'mobile';
  return (
    <section data-screen-label={`${variant} · Final CTA`} style={{
      padding: isMobile ? '60px 16px' : '140px 40px',
      background: 'var(--ink-0)', position: 'relative', overflow: 'hidden',
      textAlign: 'center',
    }}>
      <div className="shimmer-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      <div style={{ position: 'relative' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>Ready or custom — start the conversation</div>
        <h2 className="serif" style={{
          fontSize: isMobile ? 44 : 96, lineHeight: 0.95,
          letterSpacing: '-0.02em', margin: 0, textWrap: 'balance',
        }}>
          Text a photo.<br/>
          <span className="gold-text">We'll quote it back.</span>
        </h2>
        <div style={{ marginTop: 32, display: 'inline-flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn btn-primary">{Ic.wa(14)}<span>WhatsApp {BIZ.whatsappShort}</span></button>
          <button className="btn btn-ghost">{Ic.phone(14)}<span>Call {BIZ.phoneShort}</span></button>
        </div>
      </div>
    </section>
  );
}

function Footer({ variant }) {
  const isMobile = variant === 'mobile';
  const cols = [
    { h: 'Shop', items: ['Chains','Pendants','Bracelets','Rings','Earrings','Watches','Grillz','Custom'] },
    { h: 'Service', items: ['Custom Jewelry','Repairs & Resize','Layaway','Shipping','Grillz Fittings','Appraisals'] },
    { h: 'About', items: ['The Showroom','Materials Guide','Reviews','FAQ','Care','Policy'] },
  ];
  return (
    <footer style={{ background: 'var(--ink-1)', borderTop: '1px solid var(--line-strong)', padding: isMobile ? '36px 16px 120px' : '72px 40px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr 1fr 1fr', gap: isMobile ? 28 : 40 }}>
        <div>
          <LogoMark size={40} />
          <p style={{ marginTop: 18, color: 'var(--fg-dim)', fontSize: 13, maxWidth: 340, lineHeight: 1.55 }}>
            Chains, pendants, watches, grillz, and one-of-one custom pieces with clear inquiry-first guidance.
          </p>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, color: 'var(--fg-dim)' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>{Ic.pin(14)}{BIZ.address}</div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>{Ic.phone(14)}{BIZ.phone}</div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', color: '#25D366' }}>{Ic.wa(14)}<span style={{ color: 'var(--fg-dim)' }}>WhatsApp {BIZ.whatsapp}</span></div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>{Ic.clock(14)}{BIZ.hours}</div>
          </div>
        </div>
        {cols.map(col => (
          <div key={col.h}>
            <div className="label" style={{ color: 'var(--gold-2)', marginBottom: 14 }}>{col.h}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.items.map(i => <a key={i} href="#" style={{ color: 'var(--fg-dim)', textDecoration: 'none', fontSize: 13 }} onMouseOver={e=>e.currentTarget.style.color='var(--fg)'} onMouseOut={e=>e.currentTarget.style.color='var(--fg-dim)'}>{i}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: isMobile ? 28 : 56, paddingTop: 20, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 11, color: 'var(--fg-mute)', letterSpacing: 0.06, textTransform: 'uppercase' }}>
        <span>© 2026 2T Jewelers</span>
        <span>Privacy · Terms · Care · Policy</span>
      </div>
    </footer>
  );
}

function StickyMobileCTA({ show }) {
  if (!show) return null;
  return (
    <div style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 80,
      padding: '10px 12px calc(10px + env(safe-area-inset-bottom, 0px))',
      background: 'rgba(10,9,7,0.94)', backdropFilter: 'blur(14px)',
      borderTop: '1px solid rgba(212,162,76,0.25)',
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8,
    }}>
      <a href="#" className="btn btn-wa btn-sm" style={{ padding: '10px 8px', fontSize: 11 }}>{Ic.wa(14)}<span>WhatsApp</span></a>
      <a href="#" className="btn btn-ghost btn-sm" style={{ padding: '10px 8px', fontSize: 11 }}>{Ic.phone(14)}<span>Call</span></a>
      <a href="#" className="btn btn-ghost btn-sm" style={{ padding: '10px 8px', fontSize: 11 }}>{Ic.ig(14)}<span>DM</span></a>
    </div>
  );
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
