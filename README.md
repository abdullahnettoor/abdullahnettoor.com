# Abdullah Nettoor Portfolio

Static Astro portfolio deployed to Cloudflare Pages.

## Commands

```sh
npm install
npm run dev
npm run validate
```

`npm run validate` checks TypeScript, validates all structured content, builds the static site, and validates the generated HTML.

## Edit Personal Details

Update `src/data/profile.json` for:

- name, headline, and location;
- current role and company;
- biography and profile tags;
- email and social links.

Update these files for homepage sections:

- `src/data/practice.json`: observe, model, build, and ship examples;
- `src/data/capabilities.json`: technical range;
- `src/data/experience.json`: current role focus areas;
- `src/data/projects.json`: homepage work and engineering decisions.
- `src/data/site.json`: section-level settings, including Creative homepage visibility.

The build validates these files through `src/data/siteData.ts`.

## Add a Project

Add an object to `src/data/projects.json`.

Required fields:

```json
{
  "id": "project-slug",
  "name": "Project name",
  "summary": "One concrete sentence.",
  "type": ["Go", "Open source"],
  "featured": true,
  "order": 6,
  "caseStudy": false,
  "repositoryUrl": "https://github.com/example/project"
}
```

Set `featured` to `true` to include it in Selected Work. A project must have a case study, live URL, or repository URL.

Add an optional `decision` object to include it in Selected Decisions:

```json
{
  "decision": {
    "theme": "Reliability",
    "title": "The engineering decision in one sentence.",
    "description": "The constraint and resulting approach."
  }
}
```

## Add a Case Study

1. Add the compact record to `src/data/projects.json` with `caseStudy: true`.
2. Add `src/content/projects/<same-id>.md`.
3. Copy the front matter structure from `hibah.md` or `pumpos.md`.
4. Run `npm run validate`.

Astro generates `/work/<id>/`, canonical metadata, facts, workflow steps, engineering concerns, action links, and next-project navigation.

## Publish to Creative

Creative is the site's article section at `/creative/`. Start from `templates/creative-post.md` and save the new file as:

```text
src/content/creative/article-slug.md
```

The filename becomes the URL: `/creative/article-slug/`.

Article front matter controls publishing:

```yaml
publishedAt: 2026-09-10
draft: false
featured: true
topics:
  - Backend engineering
```

- `draft: true` keeps the article out of production while still making it available in local development.
- `featured: true` marks an article as preferred homepage material. The homepage currently shows the three newest published articles.
- `canonicalUrl` is optional. Use it only when Medium, Substack, or another site hosts the original article.

Control homepage visibility in `src/data/site.json`:

```json
{
  "creative": {
    "homepageVisibility": "auto"
  }
}
```

- `auto`: hide the homepage section until at least one published article exists.
- `show`: show the section even when the archive is empty.
- `hide`: keep the homepage section hidden regardless of published content.

Recommended publishing workflow: publish on this site first, then cross-post to Medium or Substack with the article's canonical URL pointing back here. This keeps ownership and SEO authority on the portfolio while using external platforms for distribution.

## Change the Design

- Shared visual tokens and responsive rules: `src/styles/global.css`
- Case-study rules: `src/styles/case-study.css`
- Homepage composition: `src/pages/index.astro`
- Reusable sections: `src/components/`
- Shared document metadata: `src/layouts/BaseLayout.astro`

Content stays separate from these files, so layouts and styling can be replaced without rewriting project records or case-study content.

## Deployment

GitHub Actions validates every pull request and push to `main`.

Production deployment uses the existing Cloudflare Pages project `abdullahnettoor`. Add these repository settings to enable automatic deployment:

- Repository variable `CLOUDFLARE_ACCOUNT_ID`
- Repository secret `CLOUDFLARE_API_TOKEN` with Cloudflare Pages edit permission

The workflow builds `dist/` and uploads only generated public files.
