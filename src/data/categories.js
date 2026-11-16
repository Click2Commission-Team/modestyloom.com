export const categories = [
  {
    slug: 'fashion-trends',
    name: 'Fashion Trends',
    description: 'Deconstruct seasonal catwalks, emerging silhouette movements, color trends, and practical street style transitions for the modern tastemaker.',
    image: 'https://assets.modestyloom.com/images/fashion-trends.webp',
    subcategories: [
      'Latest Fashion Trends',
      'Seasonal Fashion',
      'Street Style',
      'Celebrity Fashion',
      'Runway Fashion',
      'Trending Outfits',
      'Fashion Forecasts'
    ]
  },
  {
    slug: 'womens-fashion',
    name: "Women's Fashion",
    description: 'Impeccable styling guides spanning versatile dresses, tailored workwear, graceful ethnic drapery, modern modest outfits, and elevated eveningwear.',
    image: 'https://assets.modestyloom.com/images/womens-fashion.webp',
    subcategories: [
      'Dresses & Outfits',
      'Casual Wear',
      'Office Wear',
      'Party Wear',
      'Ethnic Fashion',
      'Western Wear',
      'Wedding Fashion',
      'Modest Fashion'
    ]
  },
  {
    slug: 'mens-fashion',
    name: "Men's Fashion",
    description: 'Sharply tailored suits, elevated streetwear, quintessential casual layers, grooming blueprints, and utilitarian accessories for refined gentlemen.',
    image: 'https://assets.modestyloom.com/images/mens-fashion.webp',
    subcategories: [
      'Men\'s Clothing',
      'Streetwear',
      'Casual Fashion',
      'Formal Wear',
      'Ethnic Wear',
      'Men\'s Accessories',
      'Grooming & Styling'
    ]
  },
  {
    slug: 'beauty-personal-care',
    name: 'Beauty & Personal Care',
    description: 'Dermatologist-aligned skincare philosophies, nuanced daily makeup palettes, nourishing haircare rituals, and signature olfactory fragrances.',
    image: 'https://assets.modestyloom.com/images/beauty-personal-care.webp',
    subcategories: [
      'Skincare',
      'Makeup',
      'Haircare',
      'Beauty Products',
      'Nail Art',
      'Fragrances',
      'Beauty Trends'
    ]
  },
  {
    slug: 'accessories-jewellery',
    name: 'Accessories & Jewellery',
    description: 'The defining accents that anchor an ensemble: heirloom-grade jewellery, artisanal leather handbags, horological timepieces, and eyewear.',
    image: 'https://assets.modestyloom.com/images/accessories-jewellery.webp',
    subcategories: [
      'Handbags',
      'Jewellery',
      'Watches',
      'Sunglasses',
      'Belts',
      'Hats & Caps',
      'Fashion Accessories'
    ]
  },
  {
    slug: 'footwear',
    name: 'Footwear',
    description: 'From sculptural heels and heritage leather boots to minimalist daily sneakers and ergonomic summer flats engineered for longevity.',
    image: 'https://assets.modestyloom.com/images/footwear.webp',
    subcategories: [
      'Sneakers',
      'Heels',
      'Boots',
      'Sandals',
      'Flats',
      'Men\'s Shoes',
      'Women\'s Shoes'
    ]
  },
  {
    slug: 'shopping-guides',
    name: 'Shopping Guides & Reviews',
    description: 'Unbiased material comparisons, investment matrix analysis, sizing integrity guides, and verified e-commerce shopping discoveries.',
    image: 'https://assets.modestyloom.com/images/shopping-guides.webp',
    subcategories: [
      'Product Reviews',
      'Buying Guides',
      'Best Products',
      'Budget Shopping',
      'Luxury Shopping',
      'Brand Comparisons',
      'Online Shopping Tips',
      'Product Recommendations'
    ]
  },
  {
    slug: 'sustainable-fashion',
    name: 'Sustainable & Lifestyle Fashion',
    description: 'Conscious textile sourcing, circular fashion ecosystems, capsule wardrobe blueprints, and mindful shopping philosophies for longevity.',
    image: 'https://assets.modestyloom.com/images/sustainable-fashion.webp',
    subcategories: [
      'Sustainable Fashion',
      'Minimalist Wardrobe',
      'Capsule Wardrobe',
      'Ethical Brands',
      'Fashion Lifestyle',
      'Personal Styling',
      'Wardrobe Essentials'
    ]
  }
];

export function getCategoryBySlug(slug) {
  return categories.find(c => c.slug === slug);
}
