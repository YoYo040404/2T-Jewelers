// site-shell.jsx — composes the microsite at mobile or desktop width

function Microsite({ variant = 'mobile', cardStyle = 'editorial', stickyCTA = true }) {
  return (
    <div className="t2" style={{ background: 'var(--ink-0)', color: 'var(--fg)' }}>
      <Ticker items={ANNOUNCEMENTS} />
      <Header variant={variant} />
      <Hero variant={variant} />
      <TrustStrip variant={variant} />
      <Categories variant={variant} />
      <BestSellers variant={variant} cardStyle={cardStyle} />
      <CustomProcess variant={variant} />
      <Materials variant={variant} />
      <Testimonials variant={variant} />
      <Instagram variant={variant} />
      <FAQ variant={variant} />
      <Contact variant={variant} />
      <FinalCTA variant={variant} />
      <Footer variant={variant} />
      {variant === 'mobile' && <StickyMobileCTA show={stickyCTA} />}
    </div>
  );
}

window.Microsite = Microsite;
