const BIZ = {
  name: '2T Jewelers',
  tagline: 'Inquiry-first jewelry showcase',
  ig: '@2tjewelers',
  contactNote: 'Use the inquiry section below and include a photo reference for fastest response.',
};

const ANNOUNCEMENTS = [
  'Inquiry-First Showcase',
  'Custom Orders Welcome',
  'Chains · Pendants · Watches · Grillz',
  'Send a photo reference to start',
];

const CATEGORIES = [
  { key: 'chains', name: 'Chains', sub: 'Cuban · Rope · Franco · Tennis', count: 142, glyph: 'chain' },
  { key: 'pendants', name: 'Pendants', sub: 'Iced · Crosses · Letters · Custom', count: 86, glyph: 'pendant' },
  { key: 'bracelets', name: 'Bracelets', sub: 'Tennis · Cuban · ID · Bangles', count: 64, glyph: 'bracelet' },
  { key: 'rings', name: 'Rings', sub: 'Solitaires · Signet · Pinky', count: 52, glyph: 'ring' },
  { key: 'earrings', name: 'Earrings', sub: 'Studs · Hoops · Screwback', count: 48, glyph: 'ear' },
  { key: 'watches', name: 'Watches', sub: 'Iced · Two-Tone · Dress', count: 37, glyph: 'watch' },
  { key: 'grillz', name: 'Grillz', sub: 'Solid · Iced · Custom Fit', count: 28, glyph: 'grillz' },
  { key: 'custom', name: 'Custom Jewelry', sub: 'Your idea → CAD → built', count: null, glyph: 'custom', featured: true },
];

const MATERIAL_CHIPS = ['10K','14K','18K','925 Silver','Vermeil','Moissanite','Lab Diamond','Natural'];

const BEST_SELLERS = [
  { name: 'Miami Cuban Link', material: '14K Solid Gold', size: '12mm · 22"', price: 'Quote on inquiry', chips: ['14K','Solid Gold'], caption: 'CHAIN_01 · MIAMI CUBAN' },
  { name: 'Iced Jesus Piece', material: 'VVS Moissanite / 14K', size: '3.2" pendant', price: 'Quote on inquiry', chips: ['14K','Moissanite'], caption: 'PENDANT_04 · JESUS' },
  { name: 'Tennis Chain 5mm', material: 'Lab Diamond / White Gold', size: '5mm · 20"', price: 'Quote on inquiry', chips: ['14K','Lab Diamond'], caption: 'CHAIN_12 · TENNIS' },
  { name: 'Two-Tone Watch', material: 'Iced bezel · two-tone', size: '41mm case', price: 'Custom quote', chips: ['Iced','Two-Tone'], caption: 'WATCH_02 · TWO-TONE' },
  { name: 'Baguette Cross', material: 'Natural Diamond / 14K', size: '2.5" pendant', price: 'Quote on inquiry', chips: ['14K','Natural'], caption: 'PENDANT_09 · CROSS' },
  { name: 'Rope Chain 6mm', material: '10K Solid Gold', size: '6mm · 24"', price: 'Quote on inquiry', chips: ['10K','Solid Gold'], caption: 'CHAIN_07 · ROPE' },
];

const CUSTOM_STEPS = [
  { n: 1, title: 'Send your reference', body: 'Photo, screenshot, sketch, or a short description in the inquiry form.' },
  { n: 2, title: 'Concept review', body: 'We align on style direction, dimensions, and options for materials or stones.' },
  { n: 3, title: 'Quote range', body: 'You receive a clear estimate range before moving forward.' },
  { n: 4, title: 'Build planning', body: 'Once approved, the piece enters scheduling and production planning.' },
  { n: 5, title: 'Completion handoff', body: 'Final delivery or pickup details are shared when your piece is ready.' },
];

const MATERIALS_LANES = [
  { k: '10K/14K', label: 'Solid Gold', note: 'Karat options listed clearly per piece.', accent: 'gold' },
  { k: '925', label: 'Sterling Silver', note: 'Solid silver for everyday and statement pieces.', accent: 'ice' },
  { k: 'PLTD', label: 'Gold-Plated', note: 'Plated options are always labeled plainly.', accent: 'gold' },
  { k: 'MOIS', label: 'Moissanite', note: 'Brilliant, durable, and value-focused option.', accent: 'ice' },
  { k: 'LAB', label: 'Lab Diamond', note: 'Diamond option with modern sourcing path.', accent: 'ice' },
  { k: 'NAT', label: 'Natural Diamond', note: 'Natural diamond option based on project goals.', accent: 'gold' },
];

const TESTIMONIALS = [
  { name: 'Client A.', city: 'Verified Inquiry', text: 'Fast response and clear recommendations made the process easy to follow.', stars: 5 },
  { name: 'Client B.', city: 'Verified Inquiry', text: 'Shared one screenshot and got practical options right away.', stars: 5 },
  { name: 'Client C.', city: 'Verified Inquiry', text: 'Good communication through every step of the custom request.', stars: 5 },
  { name: 'Client D.', city: 'Verified Inquiry', text: 'Strong finish quality and a smooth overall inquiry flow.', stars: 5 },
];

const FAQS = [
  { q: 'How do I start a custom order?', a: 'Use the inquiry section and include a photo reference. We will follow up with next steps.' },
  { q: 'Do you offer different stone options?', a: 'Yes. Options can include moissanite, lab diamond, and natural diamond depending on your request.' },
  { q: 'Can I request a quote before committing?', a: 'Yes. We share estimate ranges during inquiry so you can decide with clear expectations.' },
  { q: 'Do you handle repairs or resizing?', a: 'Some projects may qualify. Add it to your inquiry details and we will confirm availability.' },
  { q: 'Can I send inspiration photos?', a: 'Yes — that is the recommended way to start for the fastest and clearest response.' },
];

const IG_TILES = [
  { caption: 'New drop · Cuban stack', tag: '#newdrop' },
  { caption: 'Custom pendant reveal', tag: '#custom' },
  { caption: 'Tennis stack', tag: '#tennis' },
  { caption: 'Two-tone watch detail', tag: '#watches' },
  { caption: 'Pickup moment', tag: '#pickup' },
  { caption: 'CAD prep', tag: '#process' },
  { caption: 'Wrist shot', tag: '#dailywear' },
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
