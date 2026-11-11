import { defineCollection, z } from 'astro:content';

const blogsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('tanisha'),
    category: z.string(),
    categorySlug: z.string(),
    subcategory: z.string().optional(),
    publishedDate: z.string(),
    updatedDate: z.string().optional(),
    featuredImage: z.string(),
    imageAlt: z.string(),
    excerpt: z.string(),
    readingTime: z.string().default('5 min read'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    trending: z.boolean().default(false),
    editorChoice: z.boolean().default(false),
    relatedProductSlugs: z.array(z.string()).default([])
  })
});

export const collections = {
  blogs: blogsCollection
};
