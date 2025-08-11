# AI Agent Guide for this Repository

Concise, project-specific instructions for AI coding agents. Focus on THESE patterns—avoid generic advice.

## 1. Project Overview
- Astro 5 site using a customized "AntfuStyle" theme recreation.
- Core configs: `src/config.ts` (SITE, UI, FEATURES), `astro.config.ts` (integrations), `content.config.ts` (content collections), `plugins/` (Markdown remark/rehype pipeline), `src/types.ts` (strict config typing).
- Deployment: static build to `dist/`, then synced to `deploy-live/` via `deploy.sh` and pushed to branch `deploy-live` (GitHub Pages / custom domain `ismetalp.com`).

## 2. Key Directories
- `src/components/` grouped by role: `base/`, `nav/`, `views/`, `widgets/`, `backgrounds/`, `toc/`.
- `src/layouts/` page layout shells; `BaseLayout.astro` consumes `SITE`, `UI`, `FEATURES`.
- `plugins/` custom remark plugins: `remark-reading-time.ts`, `remark-generate-og-image.ts` and OG template assets.
- `public/` static passthrough; generated OG images placed in `public/og-images/`.
- Content lives under `src/content/` (blog/posts/etc.); frontmatter drives features (ogImage, toc, share, giscus, bgType, draft, redirect, minutesRead).

## 3. Configuration Patterns
- NEVER mutate `SITE`, `UI`, or `FEATURES` at runtime; they are imported as pure objects.
- `FEATURES` values use union `false | [boolean, Config]`; check with `Array.isArray(FEATURES.<k>) && FEATURES.<k>[0]` before enabling conditional logic.
- Disabled original presets are preserved as large commented blocks in `src/config.ts`; keep them intact when editing.
- For navigation/social edits: match `src/types.ts` discriminated unions (`displayMode` variants). Invalid modes cause TypeScript errors; rely on those types instead of redefining shapes.

## 4. Markdown Processing Pipeline
Defined in `plugins/index.ts`:
1. remark: directives → directive sugar (with custom presets) → imgattr → math → reading time → (conditional OG image generator) → …
2. rehype: heading ids → katex → callouts → external links (dynamic based on `UI.externalLink`) → autolink headings.
- When adding a plugin: append to `remarkPlugins` or `rehypePlugins` arrays; preserve conditional insert for OG images.
- External link behavior: only adds new-tab icon if `UI.externalLink.newTab && UI.externalLink.showNewTabIcon` and no child image.

## 5. OG Image Generation Logic
- Triggered only if `FEATURES.ogImage` enabled.
- Fallback `og-image.png` lazily auto-created if missing.
- Per-page generation rules (in `remark-generate-og-image.ts`): skip if draft, redirect, missing/blank title, `ogImage: false`, already generated file exists, or a specified custom image exists. Handles special `index` naming (uses directory name).
- Background selected: frontmatter `bgType` or `FEATURES.ogImage[1].fallbackBgType`.

## 6. Reading Time
- Injected once via `remark-reading-time.ts` unless `minutesRead` already defined in frontmatter. Always clamps to at least 1.

## 7. Build & Dev Workflow
- Install: `pnpm install` (assumes Node 18.20.8 / 20 / 22 per `package.json` engines).
- Sync content types after adding collections: `pnpm sync` (runs `astro sync`).
- Dev server: `pnpm dev`.
- Type & config check: `pnpm check`.
- Lint/format: `pnpm lint`, `pnpm format:write`.
- Build: `pnpm build` (outputs `dist/`). Postbuild runs `pagefind` and cleans its UI bundle.
- Deploy: `pnpm deploy` -> runs `deploy.sh` (rsync + commit to `deploy-live`). Use optional `--preview` arg to serve built output.

## 8. Conventions & Gotchas
- Prefer importing shared config via relative root paths: `import { SITE, UI, FEATURES } from '../src/config'` (as seen in plugins); maintain existing path style.
- Theme is intentionally framework-light: avoid adding large UI libraries—extend via Astro/UnoCSS components.
- Icon names follow UnoCSS icon preset: enforce format `i-collection-icon` or `i-collection:icon`; do not invent other patterns.
- For new configurable features, extend `src/types.ts` first, then update `src/config.ts`; keep consistent tuple pattern `[enabledBoolean, options]`.
- Avoid side effects in remark/rehype plugins beyond file metadata & output assets.
- When adding external links logic, reuse the conditional gating already present instead of duplicating checks.

## 9. Testing / Validation Strategy
- No formal test suite present; rely on: type checking (`pnpm check`), ESLint (`pnpm lint`), and manual local build + OG image regeneration.
- For OG-related changes: delete `public/og-images/og-image.png` then rebuild to force fallback regeneration.

## 10. Safe Contribution Checklist (Agent)
Before committing edits:
- Run: `pnpm check && pnpm lint` and ensure zero errors.
- If config types touched, confirm no TS errors in `src/config.ts`.
- If adding plugins: ensure they are imported and included exactly once.
- Do not remove commented original config blocks—only adjust active exported objects.

## 11. Example Conditional Pattern
```ts
if (Array.isArray(FEATURES.ogImage) && FEATURES.ogImage[0]) {
  // safe to use FEATURES.ogImage[1]
}
```

Clarify or expand? Suggest sections needing more depth and provide file refs; I’ll iterate.
