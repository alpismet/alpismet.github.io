import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
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
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default("İsmet ALP"),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
