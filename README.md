# ModestyLoom — High-Fashion Editorial & E-Commerce Discovery Website

ModestyLoom is an editorial fashion and shopping discovery publication built with **Astro 5 (Static Site Generation)**. Recreated from the visual design, animations, and modular hierarchy of the **Foxiz Best Fashion** reference theme, ModestyLoom adapts the concept into a modern lifestyle publication focused on modest silhouettes, seasonal trends, capsule wardrobes, menswear, beauty, and product discovery.

---

## 🌟 Key Features

- **Foxiz-Inspired Animation Suite:**
  - Continuous running marquee announcement bar with pause-on-hover.
  - Interactive circular Web Stories highlight strip with rotating chromatic gradient borders.
  - Smooth image zoom effects (`scale(1.06)`) on article and product cards.
  - Footer lookbook horizontal scrolling strip.
- **Text-Based Typographic Logo:** High-fashion, distinct uppercase typography (`ModestyLoom`) styled purely via CSS.
- **Editorial + E-Commerce Hybrid Architecture:**
  - 8 core fashion pillars with subcategories.
  - 32 complete, original MDX articles with reading times, structured headings, internal links, and FAQs.
  - Dedicated product discovery cards, specifications tables, pros/cons, and affiliate disclosures (no fake checkout/cart traps).
- **Working Search & Modal:**
  - Header search icon opening a search modal with shortcut support (`Ctrl+K` / `Cmd+K`).
  - Dedicated `/search/` page with real-time client-side static indexing.
- **Zero Newsletter/Subscription Clutter:** All newsletter forms, popups, and subscription traps have been removed in favor of curated content discovery.
- **Authors & Trust:** Centralized profiles for **Tanisha** (Editor-in-Chief) and **Shivam** (Menswear Editor) with author pages.
- **Technical SEO:**
  - Automated XML sitemap (`/sitemap-index.xml`).
  - RSS 2.0 feed (`/rss.xml`).
  - JSON-LD Structured Data (`BlogPosting`, `BreadcrumbList`, `WebSite`, `Product`).
  - Open Graph and Twitter Card metadata on all pages.
- **Cloudflare Pages Compatibility:** 100% static output for instant global CDN delivery with zero server costs.

---

## 📁 Project Architecture

```text
modestyloom/
├── dist/                          # Static production output (57 pages)
├── docs/
│   ├── reference-analysis.md      # Full Foxiz Best Fashion inspection
│   └── testing-report.md          # QA verification & audit report
├── public/
│   ├── favicon.svg                # Custom SVG brand favicon
│   ├── images/
│   │   ├── authors/               # Tanisha & Shivam portraits
│   │   ├── categories/            # 8 category banner images
│   │   ├── fashion/               # 32 high-resolution article images
│   │   ├── products/              # Curated product photography
│   │   └── stories/               # Circular story highlights
│   └── robots.txt
├── src/
│   ├── components/                # Modular UI components
│   │   ├── ArticleCard.astro
│   │   ├── EditorsChoice.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HeroSection.astro
│   │   ├── MobileMenu.astro
│   │   ├── ProductCard.astro
│   │   ├── ProductGrid.astro
│   │   ├── SearchModal.astro
│   │   ├── Sidebar.astro
│   │   ├── StoriesSection.astro
│   │   └── TrendingSection.astro
│   ├── content/
│   │   ├── config.ts              # Zod collection schema for MDX
│   │   └── blogs/                 # 32 in-depth MDX articles
│   ├── data/
│   │   ├── authors.js             # Central author data
│   │   ├── categories.js          # 8 categories & subcategories
│   │   ├── navigation.js          # Main navigation links
│   │   ├── products.js            # Curated product catalog
│   │   └── site.js                # Global metadata & announcement
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── privacy-policy.astro
│   │   ├── terms-and-conditions.astro
│   │   ├── rss.xml.js
│   │   ├── authors/[author].astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── categories/[category].astro
│   │   ├── products/
│   │   │   ├── index.astro
│   │   │   └── [product].astro
│   │   └── search/
│   │       └── index.astro
│   ├── styles/
│   │   ├── animations.css
│   │   ├── components.css
│   │   ├── global.css
│   │   └── responsive.css
│   └── utils/
│       ├── helpers.js
│       └── schema.js
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 🚀 Quickstart & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates 57 static HTML pages and assets inside `/dist`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📝 How to Manage Content

### How to Add a New MDX Article
1. Create a `.mdx` file inside `src/content/blogs/your-article-slug.mdx`.
2. Add frontmatter matching the schema:
   ```yaml
   ---
   title: "Your Article Title"
   description: "Meta description for SEO"
   author: "tanisha" # or "shivam"
   category: "Fashion Trends"
   categorySlug: "fashion-trends"
   subcategory: "Street Style"
   publishedDate: "2026-03-15"
   featuredImage: "/images/fashion/post-1.jpg"
   imageAlt: "Descriptive alt text"
   excerpt: "Short 2-line teaser summary"
   readingTime: "5 min read"
   tags: ["Trends", "Runway"]
   featured: false
   trending: true
   editorChoice: false
   relatedProductSlugs: ["tailored-linen-blend-trench-coat"]
   ---

   Your Markdown / MDX content here...
   ```

### How to Add a New Category
Edit `src/data/categories.js` and add an object:
```javascript
{
  slug: 'vintage-couture',
  name: 'Vintage Couture',
  description: 'Exploring archival fashion...',
  image: '/images/categories/vintage.jpg',
  subcategories: ['70s Revival', 'Archival Tailoring']
}
```
A dedicated category page will automatically be generated at `/categories/vintage-couture/`.

### How to Add a New Curated Product
Edit `src/data/products.js` and append your product entry:
```javascript
{
  id: 'prod-7',
  slug: 'silk-habotai-scarf',
  title: 'Hand-Rolled Silk Habotai Scarf',
  brand: 'Atelier Loom',
  category: 'Accessories & Jewellery',
  categorySlug: 'accessories-jewellery',
  price: '$120',
  originalPrice: '$150',
  discount: '20% OFF',
  rating: 4.9,
  reviewsCount: 19,
  image: '/images/products/silk-scarf.jpg',
  excerpt: 'A fluid 90cm square silk scarf...',
  description: 'Full description...',
  specs: { Material: '100% Mulberry Silk' },
  pros: ['Hand-rolled edges'],
  cons: ['Dry clean only'],
  externalUrl: 'https://example.com/shop/scarf'
}
```

### How to Update Authors
Edit `src/data/authors.js` and replace or update images in `public/images/authors/`.

### How to Edit Site Logo or Branding
- Logo text and accent can be adjusted in `src/components/Header.astro`.
- Typographic styling, font sizing, and tracking can be adjusted in `src/styles/global.css` under `.modesty-logo`.

---

## ☁️ Deploying to Cloudflare Pages

ModestyLoom is pre-configured for static deployment on **Cloudflare Pages**:

1. Push your repository to **GitHub** or **GitLab**.
2. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository and configure the build settings:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version environment variable:** Add `NODE_VERSION` = `20` under **Environment Variables**.
4. Click **Save and Deploy**.

### Connecting Your Custom Domain
1. In Cloudflare Pages, go to **Custom domains** > **Set up a custom domain**.
2. Enter your domain (e.g. `modestyloom.com`).
3. If your DNS is already on Cloudflare, DNS records are added automatically. Otherwise, point your CNAME record to `<your-project>.pages.dev`.
