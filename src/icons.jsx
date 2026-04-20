// icons.jsx — small stroked icon set for 2T Jewelers
const Ic = {
  wa: (s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.1.2 2.2 3.4 5.4 4.8.7.3 1.3.5 1.8.7.7.2 1.4.2 2 .1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.5.8 3.2 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
    </svg>
  ),
  phone: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7 13 13 0 00.7 2.8 2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5 13 13 0 002.8.7 2 2 0 011.8 2z"/></svg>,
  ig: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>,
  chat: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  pin: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  clock: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  ship: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M1 3h13v13H1z"/><path d="M14 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/></svg>,
  shield: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></svg>,
  diamond: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M10 3L8 9l4 12M14 3l2 6-4 12"/></svg>,
  spark: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>,
  arrow: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  plus: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M12 5v14M5 12h14"/></svg>,
  minus: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M5 12h14"/></svg>,
  search: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>,
  menu: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M3 7h18M3 12h18M3 17h18"/></svg>,
  bag: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M5 7h14l-1 14H6z"/><path d="M9 7a3 3 0 016 0"/></svg>,
  star: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .6-5.3 4.7L18 22l-6-3.8L6 22l1.3-7.7L2 9.6 9 9z"/></svg>,
  check: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M5 12l5 5 9-11"/></svg>,
  crown: (s = 16) => <svg width={s} height={s} viewBox="0 0 24 24" className="ic"><path d="M3 7l4 4 5-7 5 7 4-4-2 12H5z"/></svg>,
};

// Tiny category glyphs — geometric jewelry iconography
const Glyph = {
  chain: (s=44)=>(
    <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="14" y="22" width="14" height="20" rx="7"/>
      <rect x="26" y="22" width="14" height="20" rx="7"/>
      <rect x="38" y="22" width="14" height="20" rx="7"/>
    </svg>
  ),
  pendant: (s=44)=>(
    <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M10 18 Q32 6 54 18"/>
      <circle cx="32" cy="38" r="12"/>
      <path d="M32 26v24M20 38h24"/>
    </svg>
  ),
  bracelet: (s=44)=>(
    <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4">
      <ellipse cx="32" cy="32" rx="22" ry="14"/>
      <path d="M10 32c4-4 10-6 22-6s18 2 22 6"/>
    </svg>
  ),
  ring: (s=44)=>(
    <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="32" cy="40" r="14"/>
      <path d="M24 28l4-8h8l4 8"/>
      <path d="M30 20l2-4 2 4"/>
    </svg>
  ),
  ear: (s=44)=>(
    <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="24" cy="24" r="6"/><circle cx="24" cy="40" r="3"/>
      <circle cx="44" cy="24" r="6"/><circle cx="44" cy="40" r="3"/>
      <path d="M24 30v6M44 30v6"/>
    </svg>
  ),
  watch: (s=44)=>(
    <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="20" y="20" width="24" height="24" rx="4"/>
      <path d="M24 20v-6h16v6M24 44v6h16v-6M32 28v6l4 2"/>
    </svg>
  ),
  grillz: (s=44)=>(
    <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M10 26h44l-4 14H14z"/>
      <path d="M18 26v14M26 26v14M34 26v14M42 26v14"/>
    </svg>
  ),
  custom: (s=44)=>(
    <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M16 48l6-18 24-18 6 6-18 24-18 6z"/>
      <path d="M40 18l6 6"/>
      <path d="M20 42l4 4"/>
    </svg>
  ),
};

window.Ic = Ic;
window.Glyph = Glyph;
