import { z } from "astro/zod";
import profileJson from "./profile.json";
import practiceJson from "./practice.json";
import capabilitiesJson from "./capabilities.json";
import experienceJson from "./experience.json";
import projectsJson from "./projects.json";
import siteJson from "./site.json";

const url = z.url();

const profileSchema = z.object({
  name: z.string(),
  headline: z.string(),
  location: z.string(),
  heroKicker: z.string(),
  heroLead: z.string(),
  email: z.email(),
  portrait: z.string(),
  aboutTitle: z.string(),
  about: z.string(),
  social: z.object({ github: url, linkedin: url }),
  currentRole: z.object({ title: z.string(), company: z.string(), summary: z.string() }),
  aboutTags: z.array(z.string()).min(1)
});

const practiceSchema = z.array(z.object({
  stage: z.string(),
  modelTitle: z.string(),
  modelDescription: z.string(),
  title: z.string(),
  description: z.string(),
  example: z.string()
})).min(1);

const capabilitiesSchema = z.array(z.object({ name: z.string(), details: z.string() })).min(1);
const experienceSchema = z.array(z.object({ label: z.string(), value: z.string() })).min(1);

const projectSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string(),
  summary: z.string(),
  type: z.array(z.string()).min(1),
  featured: z.boolean(),
  order: z.number().int().nonnegative(),
  caseStudy: z.boolean(),
  liveUrl: url.optional(),
  repositoryUrl: url.optional(),
  decision: z.object({ theme: z.string(), title: z.string(), description: z.string() }).optional()
}).refine((project) => project.liveUrl || project.repositoryUrl || project.caseStudy, {
  message: "A project needs a case study, live URL, or repository URL"
});

const projectsSchema = z.array(projectSchema).min(1).superRefine((projects, context) => {
  const ids = new Set<string>();
  for (const project of projects) {
    if (ids.has(project.id)) {
      context.addIssue({ code: "custom", message: `Duplicate project id: ${project.id}` });
    }
    ids.add(project.id);
  }
});

const siteSchema = z.object({
  creative: z.object({
    label: z.string(),
    homepageVisibility: z.enum(["auto", "show", "hide"]),
    description: z.string()
  })
});

export const profile = profileSchema.parse(profileJson);
export const practice = practiceSchema.parse(practiceJson);
export const capabilities = capabilitiesSchema.parse(capabilitiesJson);
export const experience = experienceSchema.parse(experienceJson);
export const projects = projectsSchema.parse(projectsJson);
export const site = siteSchema.parse(siteJson);
