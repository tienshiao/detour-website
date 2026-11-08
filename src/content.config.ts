// Feature guide pages: one Markdown file per feature in src/content/features,
// rendered by src/pages/features/[id].astro. docs/feature-pages.md says what
// each field is for and how to write a page.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const video = z.object({
  type: z.literal("video"),
  src: z.string(),
  poster: z.string(),
  width: z.number(),
  height: z.number(),
  /** What the loop shows, for screen readers (videos take aria-label, not alt). */
  label: z.string(),
  caption: z.string().optional(),
});

const image = z.object({
  type: z.literal("image"),
  src: z.string(),
  width: z.number(),
  height: z.number(),
  alt: z.string(),
  caption: z.string().optional(),
});

const features = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/features" }),
  schema: z.object({
    /** The feature's name: the H1, the breadcrumb and related-feature links. */
    name: z.string(),
    /** One plain line under the H1 saying what you get. */
    lede: z.string(),
    /** The <title>: the generic phrase people search for, then the feature name. */
    title: z.string(),
    /** Meta description, about 150 characters, also used for social shares. */
    description: z.string(),
    /** The label pill's color, matching the feature's home page section. */
    accent: z.string(),
    /** The label pill text; defaults to the name in capitals. */
    label: z.string().optional(),
    media: z.discriminatedUnion("type", [video, image]),
    /** Share image (root-absolute path) and its size; defaults to the site screenshot. */
    shareImage: z.object({ src: z.string(), width: z.number(), height: z.number(), alt: z.string() }).optional(),
    /** Only for features Arc had in comparable form. Inline Markdown allowed. */
    arc: z
      .object({
        arcName: z.string(),
        same: z.array(z.string()),
        different: z.array(z.string()),
        notInDetour: z.array(z.string()).default([]),
      })
      .optional(),
    /** 3-6 questions people actually ask. Answers allow inline Markdown. */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(3).max(6),
    /** Ids of related feature pages; ones without a page yet are skipped. */
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { features };
