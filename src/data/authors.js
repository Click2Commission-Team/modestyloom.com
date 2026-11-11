export const authors = [
  {
    slug: 'tanisha',
    name: 'Tanisha',
    role: 'Editor-in-Chief & Lead Fashion Stylist',
    bio: 'Tanisha is a seasoned fashion journalist and editorial director with over 9 years of experience in couture runways, modern modest styling, capsule wardrobe philosophy, and seasonal forecast analysis.',
    avatar: '/images/authors/tanisha.jpg',
    social: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    slug: 'shivam',
    name: 'Shivam',
    role: 'Senior Menswear Editor & Product Discovery Lead',
    bio: 'Shivam specializes in contemporary tailoring, minimalist menswear essentials, luxury footwear, and investigative e-commerce product architecture.',
    avatar: '/images/authors/shivam.jpg',
    social: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

export function getAuthor(slug) {
  return authors.find(a => a.slug === slug) || authors[0];
}
