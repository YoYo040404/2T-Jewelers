// data.jsx — content for 2T Jewelers microsite

const BIZ = {
  name: '2T Jewelers',
  tagline: 'Pittsburgh\u2019s heavyweight jeweler since 1994',
  address: '332 Fifth Ave, Pittsburgh, PA 15222',
  phone: '+1 412-281-7072',
  phoneShort: '(412) 281-7072',
  whatsapp: '+1 412-452-4343',
  whatsappShort: '(412) 452-4343',
  ig: '@2tjewelers',
  hours: 'Mon\u2013Sat 10\u20136 \u00b7 Sun by appt.',
  years: '30+ years downtown',
};

const ANNOUNCEMENTS = [
  'Custom Orders Welcome',
  'Text a Photo for a Quote',
  'Chains \u00b7 Pendants \u00b7 Watches \u00b7 Grillz',
  'DM or WhatsApp to Ask About a Piece',
];

const CATEGORIES = [
  { key: 'chains',    name: 'Chains',          sub: 'Cuban \u00b7 Rope \u00b7 Franco \u00b7 Tennis', count: 142, glyph: 'chain' },
  { key: 'pendants',  name: 'Pendants',        sub: 'Iced \u00b7 Crosses \u00b7 Letters \u00b7 Custom', count: 86, glyph: 'pendant' },
  { key: 'bracelets', name: 'Bracelets',       sub: 'Tennis \u00b7 Cuban \u00b7 ID \u00b7 Bangles', count: 64, glyph: 'bracelet' },
  { key: 'rings',     name: 'Rings',           sub: 'Solitaires \u00b7 Signet \u00b7 Pinky', count: 52, glyph: 'ring' },
  { key: 'earrings',  name: 'Earrings',        sub: 'Studs \u00b7 Hoops \u00b7 Screwback', count: 48, glyph: 'ear' },
  { key: 'watches',   name: 'Watches',         sub: 'Iced \u00b7 Two-Tone \u00b7 Dress', count: 37, glyph: 'watch' },
  { key: 'grillz',    name: 'Grillz',          sub: 'Solid \u00b7 Iced \u00b7 Custom Fit', count: 28, glyph: 'grillz' },
  { key: 'custom',    name: 'Custom Jewelry',  sub: 'Your idea \u2192 3D \u2192 Made in-house', count: null, glyph: 'custom', featured: true },
];

const MATERIAL_CHIPS = ['10K','14K','18K','925 Silver','Vermeil','Moissanite','Lab Diamond','Natural','VVS','Custom'];

const BEST_SELLERS = [
  { name: 'Miami Cuban Link',  material: '14K Solid Gold',  size: '12mm \u00b7 22"',  price: 'from $4,850', chips: ['14K','Solid Gold'], caption: 'CHAIN_01 \u00b7 MIAMI CUBAN' },
  { name: 'Iced Jesus Piece',  material: 'VVS Moissanite / 14K', size: '3.2" pendant', price: 'from $1,980', chips: ['14K','Moissanite','VVS'], caption: 'PENDANT_04 \u00b7 JESUS' },
  { name: 'Tennis Chain 5mm',  material: 'Lab Diamond / White Gold', size: '5mm \u00b7 20"', price: 'from $6,200', chips: ['14K','Lab Diamond'], caption: 'CHAIN_12 \u00b7 TENNIS' },
  { name: 'Two-Tone Watch',    material: 'Iced Bezel \u00b7 Two-tone', size: '41mm case', price: 'custom quote', chips: ['Iced','Two-Tone'], caption: 'WATCH_02 \u00b7 TWO-TONE' },
  { name: 'Baguette Cross',    material: 'Natural Diamond / 14K', size: '2.5" pendant', price: 'from $3,450', chips: ['14K','Natural'], caption: 'PENDANT_09 \u00b7 CROSS' },
  { name: 'Rope Chain 6mm',    material: '10K Solid Gold',  size: '6mm \u00b7 24"',  price: 'from $1,680', chips: ['10K','Solid Gold'], caption: 'CHAIN_07 \u00b7 ROPE' },
];

const CUSTOM_STEPS = [
  { n: 1, title: 'Send your idea', body: 'Photo, screenshot, sketch, or just a description over WhatsApp.' },
  { n: 2, title: '3D design (CAD)', body: 'We build your piece in CAD and adjust until it\u2019s right in real metal.' },
  { n: 3, title: 'Approve & deposit', body: 'Lock in metal, stones, and size. Small design fee, then we start.' },
  { n: 4, title: 'In-house production', body: 'Silver, gold, diamonds, moissanite or CZ \u2014 2 to 6 weeks typical.' },
  { n: 5, title: 'Pickup or ship', body: 'Pick up at the showroom or insured shipping nationwide.' },
];

const MATERIALS_LANES = [
  { k: '10K/14K', label: 'Solid Gold',       note: 'Real karat stamped \u00b7 10K, 14K, 18K available',    accent: 'gold' },
  { k: '925',     label: '925 Sterling',      note: 'Solid silver \u00b7 affordable statement pieces',      accent: 'ice'  },
  { k: 'PLTD',    label: 'Gold-Plated',      note: 'Vermeil over silver \u00b7 marked clearly, never mixed', accent: 'gold' },
  { k: 'MOIS',    label: 'Moissanite',        note: 'VVS clarity \u00b7 brilliant and affordable',         accent: 'ice'  },
  { k: 'LAB',     label: 'Lab Diamond',       note: 'Real diamond \u00b7 grown, not mined',                 accent: 'ice'  },
  { k: 'NAT',     label: 'Natural Diamond',   note: 'Mined \u00b7 certified for larger stones',             accent: 'gold' },
];

const TESTIMONIALS = [
  { name: 'Marcus T.',   city: 'Pittsburgh',   text: '30 years downtown means something. They built my Cuban exactly how I described it over text. Real weight, real gold, real shop.', stars: 5 },
  { name: 'Jasmine R.',  city: 'Cleveland',    text: 'Sent a photo on WhatsApp Sunday night, had a 3D render Monday. Picked up the pendant two weeks later. No runaround.', stars: 5 },
  { name: 'D. Williams', city: 'Pittsburgh',   text: 'Finally a jeweler that tells you straight whether it\u2019s moissanite, lab, or natural. Prices are clear. Grillz fit perfect.', stars: 5 },
  { name: 'A. Brooks',   city: 'Columbus',     text: 'Ordered a custom piece with my late pop\u2019s photo on it. They simplified the art so it actually looks good in metal. Means a lot.', stars: 5 },
];

const FAQS = [
  { q: 'How do I start a custom order?',
    a: 'Send a photo, screenshot, or description on WhatsApp at (412) 452-4343. We\u2019ll reply with a quote and a 3D render before any metal is cut.' },
  { q: 'Moissanite vs lab diamond vs natural \u2014 what\u2019s the difference?',
    a: 'Natural diamonds are mined. Lab diamonds are chemically identical, just grown. Moissanite is a different stone \u2014 brilliant, durable, and a fraction of the price. We mark every piece clearly.' },
  { q: 'Do you offer financing or layaway?',
    a: 'Yes. Layaway is available in-store with a 20% deposit. We also partner with financing for approved buyers \u2014 ask when you inquire.' },
  { q: 'Do you ship, or is it pickup only?',
    a: 'Both. Insured shipping nationwide, or pick up at 332 Fifth Ave in downtown Pittsburgh. Most orders ship within 2 business days.' },
  { q: 'How do grillz fittings work?',
    a: 'Come to the showroom for a mold, or we\u2019ll mail you a mold kit. Turnaround is typically 2\u20134 weeks after we receive the mold.' },
  { q: 'Can I text photos to get a quote?',
    a: 'Absolutely \u2014 that\u2019s the fastest way. WhatsApp is best for back-and-forth with photos and video.' },
];

const IG_TILES = [
  { caption: 'New drop \u00b7 Cuban 14K', tag: '#newdrop' },
  { caption: 'Custom pendant reveal',  tag: '#custom' },
  { caption: 'Tennis stack', tag: '#tennis' },
  { caption: 'Iced bezel watch', tag: '#watches' },
  { caption: 'Pickup day', tag: '#grateful' },
  { caption: 'Behind the CAD', tag: '#process' },
  { caption: 'Wrist shot', tag: '#ontherun' },
  { caption: 'Name pendant', tag: '#customname' },
];

window.BIZ = BIZ;
window.ANNOUNCEMENTS = ANNOUNCEMENTS;
window.CATEGORIES = CATEGORIES;
window.MATERIAL_CHIPS = MATERIAL_CHIPS;
window.BEST_SELLERS = BEST_SELLERS;
window.CUSTOM_STEPS = CUSTOM_STEPS;
window.MATERIALS_LANES = MATERIALS_LANES;
window.TESTIMONIALS = TESTIMONIALS;
window.FAQS = FAQS;
window.IG_TILES = IG_TILES;
