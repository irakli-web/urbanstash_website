// Fake location data based on urbanstash.co
export const locations = [
  {
    id: '24-avenue-b',
    slug: '24-avenue-b',
    name: '24 Avenue B',
    address: '24 Avenue B, New York, New York 10009, United States',
    neighborhood: 'East Village',
    reviewCount: 28,
    rating: 4.8,
    featuredReview: {
      text: "Super smooth from start to finish. Getting in and out is simple, everything is well organized, and it made a huge differ...",
      author: 'yaara tal',
    },
    accessHours: '7:00 AM-9:30 PM (Every day)',
    about: "Set in the heart of the East Village at 194 East 2nd Street, this location sits at the center of one of New York City's most iconic, lived in neighborhoods. Equal parts creative, cultural, and unmistakably local, the East Village is known for its independent shops, legendary food scene, music venues, and tight-knit community energy. It's a place where long time residents and modern city dwellers overlap dynamic, expressive, and deeply personal, just like the things you store here.",
    features: [
      'Security Cameras',
      'Cancel anytime',
      'Contactless Move-Ins',
      'Smart Lock included',
      'Keypad Entry System',
      'Instant approval',
    ],
    units: [
      {
        id: '24ab-small-1',
        size: "4'w x 2.5'd x 4'h",
        sqft: 10,
        price: 1,
        description: 'For everyday overflow',
      },
      {
        id: '24ab-medium-1',
        size: "6'w x 4'd x 7.5'h",
        sqft: 24,
        price: 120,
        description: 'For Apartment Living',
      },
      {
        id: '24ab-large-1',
        size: "5'w x 8'd x 7.5'h",
        sqft: 40,
        price: 200,
        description: 'For Life Transitions',
      },
    ],
    reviews: [
      { text: 'Great service. Made my life so much easier and set a new standard for storage. Highly recommended', author: 'Oren Klagsbald', time: '3 weeks ago' },
      { text: 'Great storage service! clean, secure, and easy to access. The staff is friendly and professional. Highly recommended.', author: 'Ori', time: '2 weeks ago' },
      { text: 'Amazing experience — super easy and hassle-free! Everything felt secure, and it really helped me free up valuable space in my apartment. I highly recommend their services and will definitely continue using them.', author: 'Maya Raichel', time: '3 weeks ago' },
      { text: "Super smooth from start to finish. Getting in and out is simple, everything is well organized, and it made a huge difference in clearing clutter from my apartment. It's been incredibly convenient and stress-free. Highly recommended!!", author: 'yaara tal', time: '2 weeks ago' },
    ],
    /** Portrait video carousel: title + thumbnail + embed URL (YouTube embed format) */
    videos: [
      {
        id: '24ab-v1',
        title: 'How to get here',
        thumbnail:
          'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=360&h=640&fit=crop&q=80',
        videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
      },
      {
        id: '24ab-v2',
        title: 'Our founders',
        thumbnail:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=360&h=640&fit=crop&q=80',
        videoUrl: 'https://www.youtube.com/embed/M7lc1UVf-VE',
      },
      {
        id: '24ab-v3',
        title: 'Storage walkthrough',
        thumbnail:
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=360&h=640&fit=crop&q=80',
        videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
      },
      {
        id: '24ab-v4',
        title: 'Neighborhood tour',
        thumbnail:
          'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=360&h=640&fit=crop&q=80',
        videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso',
      },
    ],
  },
];

export const getLocationBySlug = (slug) => locations.find((loc) => loc.slug === slug);
