import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: string, sitemapIndexURL: string) => `User-agent: *
Allow: /

Sitemap: ${sitemapURL}
Sitemap: ${sitemapIndexURL}
`.trim();

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ? site.toString() : 'https://modestyloom.com/';
  const sitemapURL = new URL('sitemap.xml', siteUrl).href;
  const sitemapIndexURL = new URL('sitemap-index.xml', siteUrl).href;

  return new Response(getRobotsTxt(sitemapURL, sitemapIndexURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

