import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.enum(['commercials', 'narrative', 'personal', 'photography']),
    categoryLabel: z.string(),
    year: z.number(),
    coverGradient: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    externalUrl: z.string().url().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { projects };
