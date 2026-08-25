import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      thumbnail: z.optional(image()),
      tags: z.array(z.string()).optional(),
      isPublished: z.boolean().optional().default(true),
      lang: z.string().optional().default("en"),
      rtl: z.boolean().optional().default(false),
    }),
});

export const collections = { blog };
