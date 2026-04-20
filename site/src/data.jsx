// data.jsx — content for 2T Jewelers microsite

const BIZ = {
  name: '2T Jewelers',
  tagline: 'Custom chains, pendants, watches, and grillz',
  address: 'Showroom details shared on inquiry',
  phone: '+1 (000) 000-0000',
  phoneShort: '(000) 000-0000',
  whatsapp: '+1 (000) 000-0000',
  whatsappShort: '(000) 000-0000',
  ig: '@2tjewelers',
  hours: 'Hours shared when you inquire',
  years: 'Trusted local service',
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
  { n: 2, title: '3D design (CAD)', body: 'We shape the concept in CAD and refine details before production.' },
  { n: 3, title: 'Approve details', body: 'Confirm material, stones, and size so the build plan is locked in.' },
  { n: 4, title: 'Production', body: 'Your piece moves into production with updates shared during the process.' },
  { n: 5, title: 'Delivery options', body: 'Pickup and shipping options are confirmed with your final quote.' },
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
  { name: 'Client A.', city: 'Verified Inquiry', text: 'Clean communication and fast updates. The custom process felt clear from idea to final piece.', stars: 5 },
  { name: 'Client B.', city: 'Verified Inquiry', text: 'Shared a reference and got practical guidance on materials and sizing right away.', stars: 5 },
  { name: 'Client C.', city: 'Verified Inquiry', text: 'The team explained options in plain language and helped narrow the design quickly.', stars: 5 },
  { name: 'Client D.', city: 'Verified Inquiry', text: 'Strong quality feel and a smooth pickup experience. I\u2019d start another piece here.', stars: 5 },
];

const FAQS = [
  { q: 'How do I start a custom order?',
    a: 'Send a photo, screenshot, or short description on WhatsApp. We\u2019ll follow up with next steps and an initial quote range.' },
  { q: 'Moissanite vs lab diamond vs natural \u2014 what\u2019s the difference?',
    a: 'Natural diamonds are mined. Lab diamonds are chemically identical, just grown. Moissanite is a different stone \u2014 brilliant, durable, and a fraction of the price. We mark every piece clearly.' },
  { q: 'Do you offer financing or layaway?',
    a: 'Payment options may vary by project. Ask when you inquire and we\u2019ll share what\u2019s currently available.' },
  { q: 'Do you ship, or is it pickup only?',
    a: 'Pickup and shipping options depend on the piece and timeline. We\u2019ll confirm the best option when we quote your request.' },
  { q: 'How do grillz fittings work?',
    a: 'We\u2019ll guide you through fitting options during inquiry and recommend the method that fits your location and timeline.' },
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
