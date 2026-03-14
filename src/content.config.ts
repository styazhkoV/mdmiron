import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const eventsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    venue: z.string(),
    city: z.string(),
    status: z.enum(['upcoming', 'past']),
    ticketUrl: z.string().url().optional(),
    image: image().optional(), // We'll just use a placeholder if no image provided
    description: z.string().optional(),
  }),
});

export const collections = {
  'events': eventsCollection,
};
