import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.string().date(),
    tags: z.array(z.string()),
    image: z.string(),
  }),
});

const project = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    slug: z.string(),
    liveSiteURL: z.string(),
    githubURL: z.string(),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { blog, project };
