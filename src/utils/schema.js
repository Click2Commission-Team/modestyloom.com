export function generateArticleSchema(article, siteUrl = 'https://modestyloom.com') {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.data.title,
    description: article.data.description,
    image: article.data.featuredImage.startsWith('http') 
      ? article.data.featuredImage 
      : `${siteUrl}${article.data.featuredImage}`,
    datePublished: article.data.publishedDate,
    dateModified: article.data.updatedDate || article.data.publishedDate,
    author: {
      '@type': 'Person',
      name: article.data.author === 'shivam' ? 'Shivam' : 'Tanisha',
      url: `${siteUrl}/authors/${article.data.author}/`
    },
    publisher: {
      '@type': 'Organization',
      name: 'ModestyLoom',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${article.slug}/`
    }
  });
}

export function generateBreadcrumbSchema(items, siteUrl = 'https://modestyloom.com') {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`
    }))
  });
}

export function generateWebsiteSchema(siteUrl = 'https://modestyloom.com') {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ModestyLoom',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  });
}

export function generateProductSchema(product, siteUrl = 'https://modestyloom.com') {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: product.image.startsWith('http') ? product.image : `${siteUrl}${product.image}`,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.price.replace(/[^0-9.]/g, ''),
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}/products/${product.slug}/`
    }
  });
}
