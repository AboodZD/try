
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tag?: 'New' | 'Special' | 'Limited' | 'Sale';
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'fashion',
    name: 'Fashion & Apparel',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475',
    description: 'Discover the latest trends in clothing, accessories, and footwear.'
  },
  {
    id: 'electronics',
    name: 'Electronics & Gadgets',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661',
    description: 'Explore cutting-edge technology and smart devices.'
  },
  {
    id: 'home',
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6',
    description: 'Transform your space with stylish furniture and décor.'
  },
  {
    id: 'grocery',
    name: 'Grocery & Essentials',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e',
    description: 'Stock up on fresh produce and everyday essentials.'
  },
  {
    id: 'beauty',
    name: 'Health & Beauty',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f',
    description: 'Enhance your wellness routine with premium products.'
  },
  {
    id: 'kids',
    name: 'Kids & Toys',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088',
    description: 'Find fun and educational items for children of all ages.'
  }
];

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Leather Jacket',
    description: 'Handcrafted genuine leather jacket with custom stitching and premium finish.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
    category: 'fashion',
    tag: 'Limited'
  },
  {
    id: '2',
    name: 'Wireless Noise-Canceling Headphones',
    description: 'Immersive sound experience with advanced noise cancellation technology.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'electronics',
    tag: 'New'
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    description: 'Designed for ultimate comfort during long work hours with adjustable features.',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1',
    category: 'home'
  },
  {
    id: '4',
    name: 'Organic Tea Collection',
    description: 'Premium selection of organic loose-leaf teas from around the world.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9',
    category: 'grocery',
    tag: 'Special'
  },
  {
    id: '5',
    name: 'Natural Skincare Set',
    description: 'Complete skincare routine with all-natural ingredients for radiant skin.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03',
    category: 'beauty'
  },
  {
    id: '6',
    name: 'Interactive Learning Tablet',
    description: 'Educational device designed for children with engaging learning content.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33',
    category: 'kids',
    tag: 'Sale'
  }
];

export const specialItems: Product[] = [
  {
    id: '7',
    name: 'Limited Edition Smart Watch',
    description: 'Exclusive design with premium materials and advanced fitness tracking.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
    category: 'electronics',
    tag: 'Limited'
  },
  {
    id: '8',
    name: 'Designer Handbag Collection',
    description: 'CLOVERMALL exclusive designs made from premium sustainable materials.',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
    category: 'fashion',
    tag: 'Special'
  },
  {
    id: '9',
    name: 'Artisanal Chocolate Box',
    description: 'Handcrafted chocolates from award-winning local chocolatiers.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b',
    category: 'grocery',
    tag: 'Limited'
  }
];
