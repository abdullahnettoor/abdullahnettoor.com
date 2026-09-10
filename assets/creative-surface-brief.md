# Creative

- **Scope and mode:** A Read surface for notes on backend engineering, product decisions, and lessons from building.
- **Audience and job:** Technical peers and hiring teams should be able to inspect Abdullah's reasoning beyond project summaries.
- **Content model:** Published Markdown entries generate the archive, article routes, SEO metadata, dates, and topics. Drafts remain local-only in production builds.
- **Homepage behavior:** `src/data/site.json` controls visibility. `auto` hides Creative until a published article exists; `show` forces it visible; `hide` suppresses it regardless of content.
- **Direction:** Quiet editorial extension of The Engineering Throughline. Articles prioritize readable measure and clear hierarchy rather than product UI.
- **Distribution:** This site is the recommended canonical publisher. Medium or Substack can carry cross-posts that link back to the original article. Use `canonicalUrl` only when the external platform published the original first.
