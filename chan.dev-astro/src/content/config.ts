import { z, defineCollection } from "astro:content";

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date().optional(),
  }),
});

const play = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  post: post,
  play: play,
};