// Storage unit sizes for sizing page - based on urbanstash.co/sizing
export const sizes = [
  { category: 'Small', dimensions: '4 x 3 x 4 (12 sq ft)', for: 'Seasonal essentials' },
  { category: 'Small', dimensions: '4 x 4 x 4 (16 sq ft)', for: 'Luggage & gear' },
  { category: 'Small', dimensions: '4 x 5 x 4 (20 sq ft)', for: 'Closet overflow' },
  { category: 'Medium', dimensions: '4 x 6 x 7.5 (24 sq ft)', for: 'Apartment extras' },
  { category: 'Medium', dimensions: '5 x 7 x 7.5 (37 sq ft)', for: 'Furniture & bikes' },
  { category: 'Large', dimensions: '5 x 8 x 7.5 (40 sq ft)', for: 'Studio overflow' },
  { category: 'Large', dimensions: '5 x 10 x 7.5 (50 sq ft)', for: 'Moving storage' },
  { category: 'Large', dimensions: '10 x 8 x 7.5 (80 sq ft)', for: 'Full apartments' },
];

// Per-category enrichment: carousel items + tour video
export const categoryMeta = {
  Small: {
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1&rel=0&modestbranding=1',
    videoLabel: 'See inside a Small unit',
    items: [
      { label: 'Shoes & Sneakers',     img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&q=80' },
      { label: 'Seasonal Boxes',       img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&h=400&fit=crop&q=80' },
      { label: 'Luggage & Bags',       img: 'https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?w=400&h=400&fit=crop&q=80' },
      { label: 'Holiday Decorations',  img: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=400&fit=crop&q=80' },
      { label: 'Books & Documents',    img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=400&fit=crop&q=80' },
      { label: 'Sports Gear',          img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop&q=80' },
    ],
  },
  Medium: {
    videoUrl: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&rel=0&modestbranding=1',
    videoLabel: 'See inside a Medium unit',
    items: [
      { label: 'Bicycle',              img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80' },
      { label: 'Dresser & Drawers',    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&q=80' },
      { label: 'TV & Electronics',     img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f4834c?w=400&h=400&fit=crop&q=80' },
      { label: 'Moving Boxes',         img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&h=400&fit=crop&q=80' },
      { label: "Kids' Toys & Gear",    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop&q=80' },
      { label: 'Garden Tools',         img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80' },
    ],
  },
  Large: {
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&rel=0&modestbranding=1',
    videoLabel: 'See inside a Large unit',
    items: [
      { label: 'Sofa & Armchairs',     img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&q=80' },
      { label: 'Bed & Mattress',       img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop&q=80' },
      { label: 'Dining Set',           img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=400&fit=crop&q=80' },
      { label: 'Appliances',           img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&q=80' },
      { label: 'Full Apartment Move',  img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=400&fit=crop&q=80' },
      { label: 'Wardrobe & Clothing',  img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80' },
    ],
  },
};

export const whyStashItems = [
  { title: 'Right around the corner', desc: 'Storage in your neighborhood—no long drives, no hassle.' },
  { title: 'Your space, your rules', desc: 'Access your unit anytime using your phone.' },
  { title: 'Protected & monitored', desc: 'Secure facilities with 24/7 monitoring and smart access control. Protection plan included with every unit.' },
];

export const faqEntries = [
  {
    q: 'How do I reserve a storage unit online?',
    a: 'Browse locations, pick your size, and complete checkout in minutes. You can reserve without a credit card upfront at many locations.',
  },
  {
    q: 'Are my payments secure on your website?',
    a: 'Yes. Payments are processed through encrypted, industry-standard checkout. We never store your full card details on our servers.',
  },
  {
    q: 'When can I access my storage unit?',
    a: 'Access hours vary by location and are shown on each facility page. Many sites offer extended daily access with smart entry.',
  },
  {
    q: 'What size storage unit do I need?',
    a: 'Use our sizing guide to match square footage to what you are storing—from seasonal bins to full apartment moves.',
  },
  {
    q: 'Are all storage units the same height?',
    a: 'Ceiling height can vary by unit type and location. Details are listed when you select a specific unit.',
  },
  {
    q: 'Is there a minimum rental period?',
    a: 'Terms depend on location and promotion. You will see minimum stay and billing cadence before you confirm.',
  },
  {
    q: 'What security measures are in place?',
    a: 'Facilities use controlled access, monitoring, and individual unit security features. Coverage options may be available for your belongings.',
  },
  {
    q: 'Do unit sizes and layouts vary by location?',
    a: 'Yes. Each neighborhood location may offer a slightly different mix of sizes and layouts—always check availability for your chosen site.',
  },
  {
    q: 'How do I file an insurance claim?',
    a: 'If you have a protection plan, contact support with your unit details and documentation. We will walk you through the next steps.',
  },
];
