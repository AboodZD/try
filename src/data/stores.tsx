
export interface Store {
  id: string;
  name: string;
  logo: string;
  description: string;
  location: string;
  floor: string;
  hours: string;
  category: string;
  phoneNumber?: string;
  website?: string;
}

export const stores: Store[] = [
  {
    id: '1',
    name: 'Fashion Forward',
    logo: 'https://images.unsplash.com/photo-1565297327868-fee7c60235c9',
    description: 'Contemporary fashion brand offering the latest trends for men and women.',
    location: 'North Wing',
    floor: 'Level 1',
    hours: '10:00 AM - 9:00 PM',
    category: 'fashion',
    website: 'https://example.com/fashionforward'
  },
  {
    id: '2',
    name: 'Tech Haven',
    logo: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
    description: 'Premium electronics and gadgets from leading brands worldwide.',
    location: 'East Wing',
    floor: 'Level 2',
    hours: '10:00 AM - 8:00 PM',
    category: 'electronics',
    phoneNumber: '123-456-7890'
  },
  {
    id: '3',
    name: 'Home Elegance',
    logo: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    description: 'Stylish furniture and home décor for modern living spaces.',
    location: 'South Wing',
    floor: 'Level 1',
    hours: '9:00 AM - 7:00 PM',
    category: 'home',
    website: 'https://example.com/homeelegance'
  },
  {
    id: '4',
    name: 'Fresh Market',
    logo: 'https://images.unsplash.com/photo-1534723452862-4c874018d8d9',
    description: 'Premium grocery store with fresh produce and international specialties.',
    location: 'West Wing',
    floor: 'Ground Floor',
    hours: '8:00 AM - 10:00 PM',
    category: 'grocery',
    phoneNumber: '123-456-7891'
  },
  {
    id: '5',
    name: 'Glow & Shine',
    logo: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
    description: 'Luxury beauty products and personal care items.',
    location: 'North Wing',
    floor: 'Level 2',
    hours: '10:00 AM - 9:00 PM',
    category: 'beauty',
    website: 'https://example.com/glowandshine'
  },
  {
    id: '6',
    name: 'Kids World',
    logo: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4',
    description: 'Educational toys, games, and children\'s clothing for all ages.',
    location: 'East Wing',
    floor: 'Level 3',
    hours: '10:00 AM - 8:00 PM',
    category: 'kids',
    phoneNumber: '123-456-7892'
  }
];

export const mallMap = {
  image: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148',
  floors: [
    {
      name: 'Ground Floor',
      stores: ['4']
    },
    {
      name: 'Level 1',
      stores: ['1', '3']
    },
    {
      name: 'Level 2',
      stores: ['2', '5']
    },
    {
      name: 'Level 3',
      stores: ['6']
    }
  ]
};
