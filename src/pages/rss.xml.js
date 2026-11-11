import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../data/site.js';

export async function GET(context) {
  const blogs = await getCollection('blogs');
  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime()
  );

  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: context.site || siteConfig.url,
    items: sortedBlogs.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedDate),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: [post.data.category, post.data.subcategory].filter(Boolean)
    })),
    customData: `<language>en-us</language>`
  });
}
