import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const factSchema = z.object({
  label: z.string(),
  value: z.string()
});

const stepSchema = z.object({
  label: z.string(),
  title: z.string(),
  description: z.string()
});

const concernSchema = z.object({
  label: z.string(),
  title: z.string(),
  description: z.string()
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    accent: z.string().regex(/^#[0-9a-fA-F]{6}$/),
    accentInk: z.string().regex(/^#[0-9a-fA-F]{6}$/),
    heroCopyColor: z.string().regex(/^#[0-9a-fA-F]{6}$/),
    liveUrl: z.url(),
    repositoryUrl: z.url().optional(),
    facts: z.array(factSchema).length(4),
    operationTitle: z.string(),
    operation: z.string(),
    workflowTitle: z.string(),
    workflow: z.array(stepSchema).min(2),
    concernsTitle: z.string(),
    concerns: z.array(concernSchema).min(1),
    boundary: z.string(),
    inspectTitle: z.string(),
    inspect: z.string(),
    nextProject: z.string(),
    nextLabel: z.string()
  })
});

const creative = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/creative" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    topics: z.array(z.string()).min(1),
    canonicalUrl: z.url().optional()
  })
});

export const collections = { projects, creative };
