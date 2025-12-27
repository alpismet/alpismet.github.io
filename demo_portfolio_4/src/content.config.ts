import { defineCollection, z } from "astro:content";

const i18nString = z.object({
  en: z.string(),
  tr: z.string().optional(),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: i18nString,
    description: i18nString,
    publishDate: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    gallery: z.array(z.string()).optional(), // Masonry galeri için çoklu görsel
    videoUrl: z.string().optional(), // Video içerikler için (YouTube/Vimeo/Local)
    category: z
      .enum([
        "game-dev",
        "3d-art",
        "graphic-design",
        "physical-art",
        "software",
        "video-production",
      ])
      .default("game-dev"),
    featured: z.boolean().default(false),
    nda: z.boolean().optional(),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: i18nString,
    description: i18nString,
    publishDate: z.date(),
    author: z.string().default("İsmet ALP"),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
