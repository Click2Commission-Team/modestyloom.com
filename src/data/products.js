export const products = [
  {
    id: 'prod-1',
    slug: 'tailored-linen-blend-trench-coat',
    title: 'Tailored Linen-Blend Double-Breasted Trench Coat',
    brand: 'Loom Atelier',
    category: "Women's Fashion",
    categorySlug: 'womens-fashion',
    price: '$245',
    originalPrice: '$320',
    discount: '23% OFF',
    rating: 4.9,
    reviewsCount: 38,
    image: '/images/products/linen-trench.jpg',
    excerpt: 'A fluid, breathable double-breasted trench silhouette featuring horn-effect buttons, belted cuffs, and an adjustable storm flap.',
    description: 'Constructed from a premium 65% European linen and 35% organic cotton blend, this lightweight seasonal trench coat offers effortless modesty, relaxed drape, and architectural shoulder definition suited for city commutes or weekend gallery visits.',
    specs: {
      'Material': '65% European Linen, 35% Organic Cotton',
      'Fit': 'Relaxed tailored silhouette with waist tie',
      'Closure': 'Double-breasted tortoiseshell-finish buttons',
      'Care': 'Dry clean or gentle cold wash cycle',
      'Origin': 'Sustainably crafted in Portugal'
    },
    pros: [
      'Exceptional breathability with crisp structured lapels',
      'Versatile layering over dresses or tailored trousers',
      'Deep functional welt pockets with secure stitching'
    ],
    cons: [
      'Natural linen will develop relaxed creases with prolonged wear',
      'Requires low-heat steam pressing after transport'
    ],
    externalUrl: 'https://example.com/shop/tailored-linen-blend-trench-coat'
  },
  {
    id: 'prod-2',
    slug: 'sculpted-minimalist-leather-tote',
    title: 'Architectural Sculpted Calfskin Everyday Tote',
    brand: 'Aethel Leathercraft',
    category: 'Accessories & Jewellery',
    categorySlug: 'accessories-jewellery',
    price: '$380',
    originalPrice: '$460',
    discount: '17% OFF',
    rating: 4.8,
    reviewsCount: 52,
    image: '/images/products/sculpted-tote.jpg',
    excerpt: 'Form meets daily utility with structured base feet, raw-edge hand-painted seams, and a detachable zippered internal pouch.',
    description: 'Handcrafted in limited batches from vegetable-tanned Italian calfskin, the Architectural Sculpted Tote holds a 15-inch laptop alongside daily essentials while maintaining a statuesque, refined exterior profile.',
    specs: {
      'Material': 'Full-grain vegetable-tanned Italian calf leather',
      'Hardware': 'Brushed gold-tone solid brass',
      'Dimensions': '38cm W x 32cm H x 14cm D',
      'Interior': 'Suede-bonded lining with slip compartment'
    },
    pros: [
      'Gains a rich, lustrous patina over years of regular use',
      'Reinforced shoulder straps distribute weight comfortably',
      'Includes matching dust pouch and leather conditioner guide'
    ],
    cons: [
      'Premium leather weight is 1.1kg empty',
      'Sensitive to unconditioned rain showers'
    ],
    externalUrl: 'https://example.com/shop/sculpted-minimalist-leather-tote'
  },
  {
    id: 'prod-3',
    slug: 'merino-wool-relaxed-knit-sweater',
    title: 'Extra-Fine Australian Merino Wool Mock-Neck Knit',
    brand: 'Knit Studio North',
    category: "Men's Fashion",
    categorySlug: 'mens-fashion',
    price: '$165',
    originalPrice: '$210',
    discount: '21% OFF',
    rating: 4.9,
    reviewsCount: 44,
    image: '/images/products/merino-knit.jpg',
    excerpt: 'Seamless 3D-knitted gauge from 19.5-micron extra-fine Merino wool for temperature regulation and buttery softness.',
    description: 'Designed as the centerpiece for smart casual layering, this mock-neck sweater bridges clean minimalist Scandinavian aesthetics with thermoregulating wool fibres that resist odor and pill-formation.',
    specs: {
      'Fiber': '100% Traceable Extra-Fine Australian Merino',
      'Knit Gauge': '12-Gauge single jersey knit',
      'Collar': 'Ribbed 4.5cm ergonomic mock-neck',
      'Certification': 'Responsible Wool Standard (RWS)'
    },
    pros: [
      'Zero itch factor directly against sensitive skin',
      'Regulates core temperature across indoor and outdoor transitions',
      'Retains collar elasticity after repeated wash cycles'
    ],
    cons: [
      'Hand washing or wool-certified machine spin only',
      'Store folded rather than on wire hangers to prevent shoulder dimples'
    ],
    externalUrl: 'https://example.com/shop/merino-wool-relaxed-knit-sweater'
  },
  {
    id: 'prod-4',
    slug: 'artisan-leather-lug-sole-boots',
    title: 'Heritage Goodyear-Welted Leather Chelsea Boots',
    brand: 'Vanguard Footwear',
    category: 'Footwear',
    categorySlug: 'footwear',
    price: '$295',
    originalPrice: '$350',
    discount: '15% OFF',
    rating: 4.8,
    reviewsCount: 67,
    image: '/images/products/chelsea-boots.jpg',
    excerpt: 'Chunky Vibram Commando lug sole combined with French boxcalf leather and durable elasticated side gussets.',
    description: 'Engineered for all-weather urban terrain without sacrificing bespoke tailoring aesthetics, these Goodyear-welted Chelsea boots can be fully resoled over decades of dependable service.',
    specs: {
      'Upper': '1.8mm French Boxcalf full-grain leather',
      'Sole': 'Vibram Commando lightweight rubber outsole',
      'Construction': '360-degree Goodyear welt construction',
      'Footbed': 'Cork filling that molds naturally to your foot arch'
    },
    pros: [
      'Impeccable all-weather traction on wet pavements',
      'Fully resolable foundation for lifelong wear',
      'Dual woven pull tabs for effortless entry'
    ],
    cons: [
      'Requires a 3-5 day break-in period for stiff ankle leather',
      'Initial fit feels snug before cork bed settles'
    ],
    externalUrl: 'https://example.com/shop/artisan-leather-lug-sole-boots'
  },
  {
    id: 'prod-5',
    slug: 'botanical-squalane-barrier-serum',
    title: 'Triple-Ceramide Botanical Barrier Repair Elixir',
    brand: 'Aura Botanica Labs',
    category: 'Beauty & Personal Care',
    categorySlug: 'beauty-personal-care',
    price: '$72',
    originalPrice: '$88',
    discount: '18% OFF',
    rating: 5.0,
    reviewsCount: 89,
    image: '/images/products/barrier-serum.jpg',
    excerpt: 'Micro-emulsion of sugarcane-derived squalane, biomimetic phytoceramides, and Centella Asiatica for radiant skin barrier health.',
    description: 'Formulated to restore lipid depletion caused by environmental stress, city pollution, and harsh cleansers. Leaves a velvety non-comedogenic finish that serves as an immaculate primer under daily makeup.',
    specs: {
      'Volume': '50ml / 1.7 fl. oz dropper bottle',
      'Key Actives': '5% Sugarcane Squalane, 2% Ceramide NP/AP/EOP, 1% Madecassoside',
      'Formula': 'Fragrance-free, essential-oil free, vegan & cruelty-free'
    },
    pros: [
      'Rapid absorption without any oily residue',
      'Calms redness and dry skin patches within 48 hours',
      'Plays flawlessly under SPF and liquid foundations'
    ],
    cons: [
      'Unscented natural base may smell slightly earthy to some',
      'Opaque glass bottle requires checking levels against light'
    ],
    externalUrl: 'https://example.com/shop/botanical-squalane-barrier-serum'
  },
  {
    id: 'prod-6',
    slug: 'pleated-a-line-midi-skirt',
    title: 'Permanent Accordion-Pleated Georgette Midi Skirt',
    brand: 'Loom Atelier',
    category: "Women's Fashion",
    categorySlug: 'womens-fashion',
    price: '$135',
    originalPrice: '$175',
    discount: '22% OFF',
    rating: 4.7,
    reviewsCount: 29,
    image: '/images/products/pleated-skirt.jpg',
    excerpt: 'High-waisted knife pleats engineered to retain crisp movement with an elasticated grosgrain interior band.',
    description: 'An enduring wardrobe staple crafted from recycled crepe georgette with an opaque satin slip lining. Swings fluidly with every stride and transitions effortlessly from boardroom blazers to casual weekend knitwear.',
    specs: {
      'Material': '100% Recycled Polyester Georgette',
      'Length': '82cm Midi length (hem lands mid-calf)',
      'Waist': 'Flat front with comfort elasticated rear grosgrain',
      'Lining': 'Full breathable anti-static lining'
    },
    pros: [
      'Wrinkle-resistant fabric ideal for travel bags and long work days',
      'Fluid kinetic movement that creates an elongated silhouette',
      'Flattering drape on varied body proportions'
    ],
    cons: [
      'Must not be steam-pressed directly to preserve pleat sharpness',
      'Hang on clamp hangers to protect pleats'
    ],
    externalUrl: 'https://example.com/shop/pleated-a-line-midi-skirt'
  }
];

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}
