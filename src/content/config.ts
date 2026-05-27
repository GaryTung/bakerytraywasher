import { defineCollection, z } from 'astro:content';

const businessTypes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    image: z.string().optional(),
    locale: z.string().default('en'),
  }),
});

const whatItWashes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    item: z.string(),
    image: z.string().optional(),
    locale: z.string().default('en'),
    flagship: z.boolean().default(false),
  }),
});

const vsPages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    competitor: z.string(),
    locale: z.string().default('en'),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    image: z.string().optional(),
    locale: z.string().default('en'),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    businessType: z.string(),
    image: z.string().optional(),
    locale: z.string().default('en'),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    locale: z.string().default('en'),
  }),
});

export const collections = {
  'business-types': businessTypes,
  'what-it-washes': whatItWashes,
  'vs-pages': vsPages,
  'guides': guides,
  'case-studies': caseStudies,
  'blog': blog,
};
