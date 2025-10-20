import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    readingTime: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  articles,
};