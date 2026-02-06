# Homepage Maintainability Report

This report summarizes findings from reviewing the DecentraGuild website codebase, with a focus on hardcoded values, duplicated links, and opportunities for a single source of truth.

---

## 1. Current Stack and Structure

- **Framework:** Vue 3 (Composition API, `<script setup>`), TypeScript, Vite
- **Router:** Vue Router with a well-defined `src/router/index.ts` (single source for route definitions)
- **Existing data layer:** 
  - `src/data/features.ts` – step cards, progress steps, “Why DecentraGuild” cards
  - `src/data/docs/index.ts` – documentation structure and doc paths

The homepage is built from: `App.vue` → `AppNavigation` + main view (e.g. `HomeView`) + `AppFooter`. Key views: `HomeView`, `AboutUsView`, `BlueprintView`, `BuildYourOwnView`, plus docs views.

---

## 2. Findings: Hardcoded and Duplicated Values

### 2.1 External links (duplicated in multiple files)

| Value | AppFooter | AppNavigation | HomeView | AboutUsView | BlueprintView | Summary.vue |
|-------|-----------|---------------|----------|-------------|--------------|-------------|
| Demo app `https://dapp.decentraguild.com` | – | 2 (desktop + mobile) | 1 | – | 1 | 1 |
| Discord `https://discord.gg/WN6snkFqB4` | 1 | – | – | 1 | – | – |
| X/Twitter `https://x.com/DecentraGuild` | 1 | – | – | 1 | – | – |
| Email `mailto:jordi@decentraguild.com` | 1 | – | – | 1 | – | – |

**Impact:** Changing the demo URL, Discord invite, X handle, or contact email requires edits in 2–4 places and is easy to miss.

---

### 2.2 Internal routes (string literals in templates)

Route paths are already defined once in `router/index.ts`, but components use raw strings instead of shared constants or route names:

| Path | Used in |
|------|--------|
| `/` | AppNavigation (logo, “Home” desktop + mobile) |
| `/docs` | AppFooter, AboutUsView (“Learn More”) |
| `/blueprint` | AppNavigation (2x), HomeView (“View Blueprint”) |
| `/build-your-own` | AppNavigation (2x), BlueprintView (“Build Your Own”) |
| `/about` | AppNavigation (2x), BuildYourOwnView (2x) |

**Impact:** Renaming or restructuring a route (e.g. `/blueprint` → `/guide/blueprint`) would require find-and-replace across many files and risks inconsistencies.

---

### 2.3 Brand and copy (repeated across components)

| Content | Locations |
|--------|-----------|
| Brand name **“DecentraGuild”** | AppFooter (logo text, contact blurb, copyright), AppNavigation (logo, alt), AboutUsView (story, card copy, CTA), HomeView (section title, hero subtitle), HeroSection (default subtitle), docs (Summary.vue, WhatIsDGuild.vue) |
| Tagline **“Create your dGuild, Build your house, Rule on-chain.”** | AppFooter only (slightly different in `index.html`: “Build Your Guild. Rule Your House.”) |
| Hero subtitle **“DecentraGuild lets you create and manage decentralized guilds…”** | HomeView (passed to HeroSection), HeroSection default prop |
| Copyright **“© 2025 DecentraGuild. Built on Solana. Made for gamers.”** | AppFooter |

**Impact:** Messaging or rebrand changes require many manual edits; tagline and meta can drift (e.g. index.html vs footer).

---

### 2.4 Asset paths

- **Logo:** `/logo/dguild-logo.svg` and alt `"DecentraGuild"` in AppFooter and AppNavigation.
- **Doc images:** Many doc pages use paths like `/docs/dGuildDiagram.png`, `/docs/dGuildDAO.png`, etc. (consistent pattern but no shared constant).
- **Castle infographic:** `CastleInfographic.vue` uses `/infographic/Castle_Lid.webp`, `Castle_Unlid.webp` and hotspot image paths inline.
- **Blueprint:** `BlueprintView.vue` uses `/blueprint/Step1.webp` … `Step4.webp` in template.

**Impact:** Changing a doc image path or moving assets would require scattered edits unless paths are centralized.

---

## 3. What Is Already Working Well

- **Router as source of truth for routes:** All routes and names live in `src/router/index.ts`; the gap is that components do not reference this single definition.
- **Feature content:** `src/data/features.ts` keeps “How it works” and “Why DecentraGuild” content in one place; HomeView stays thin.
- **Docs structure:** `src/data/docs/index.ts` defines doc hierarchy and paths in one place; sidebar and navigation consume it.

---

## 4. Recommendations for a Single Source of Truth

### 4.1 Create a site/config module (high impact, low effort)

Add a small module, e.g. `src/config/site.ts` (or `src/constants/links.ts`), that exports:

- **External URLs:** `demoAppUrl`, `discordUrl`, `xUrl`, `contactEmail`
- **Brand:** `siteName` (“DecentraGuild”), `tagline` (footer), optional `heroTitle` / `heroSubtitle` for reuse
- **Optional:** `currentYear` for copyright so the year updates without code changes

Use this in: AppFooter, AppNavigation, HomeView, AboutUsView, BlueprintView, and Summary.vue. Replace every hardcoded demo/Discord/X/email and, where useful, brand/tagline strings with imports from this file.

**Result:** One place to change demo URL, Discord, X, email, and core copy.

---

### 4.2 Centralize route paths (medium impact, low effort)

**Option A – Path constants:** In `src/config/site.ts` or a dedicated `src/config/routes.ts`, define:

- `ROUTES.HOME = '/'`, `ROUTES.DOCS = '/docs'`, `ROUTES.BLUEPRINT = '/blueprint'`, `ROUTES.BUILD_YOUR_OWN = '/build-your-own'`, `ROUTES.ABOUT = '/about'`

Use these in AppNavigation, AppFooter, HomeView, AboutUsView, BlueprintView, and BuildYourOwnView for every `to="..."` and `href` that targets internal routes. Keep the router as the only place that actually defines the route list; the config only mirrors path strings so components stay in sync.

**Option B – Derive from router:** Export a small helper or a `routePaths` object built from `router.getRoutes()` (e.g. by name) so path changes are only made in the router. Slightly more setup but avoids duplicating path strings.

**Result:** Renaming or changing a path is done in one place (router + optional path constants); all links stay correct.

---

### 4.3 Optional: Shared copy/brand constants

If you want hero and meta to stay aligned with the footer:

- Add to `site.ts` (or a `src/config/copy.ts`): `heroSubtitle`, `metaDescription`, `footerTagline`, `copyrightText` (or build copyright from `siteName` + `currentYear` + suffix).
- Use `heroSubtitle` in HomeView and in HeroSection default; use `metaDescription` in `index.html` (e.g. via a build-time replacement or a simple doc comment so you remember to keep them in sync). Use `footerTagline` and `copyrightText` in AppFooter.

**Result:** One place to tweak messaging and meta; fewer copy inconsistencies.

---

### 4.4 Doc and asset paths (lower priority)

- Doc images: If you expect path or naming changes, you could add a `DOCS_IMAGES` map or a helper in `src/data/docs` (e.g. image path by doc id). Not critical if paths are stable.
- Blueprint steps: A small array or constant for step image paths in `BlueprintView` would make it easier to add/remove steps or change paths later.

---

## 5. Suggested Implementation Order

1. **Add `src/config/site.ts`** with external links (demo, Discord, X, email), `siteName`, `tagline`, and `currentYear`. Replace hardcoded links and footer/nav brand + tagline + copyright in AppFooter, AppNavigation, HomeView, AboutUsView, BlueprintView, Summary.vue.
2. **Add route path constants** (or router-based path export) and replace every internal `to="/..."` and internal `href` with those constants.
3. **Optionally** add hero/meta/copyright copy to the same config and wire HeroSection, index.html meta, and footer to it.
4. **Later:** Consider doc image path constants and blueprint step image list if you refactor docs or blueprint assets.

---

## 6. File-Level Summary

| File | Hardcoded / duplicated items |
|------|------------------------------|
| `AppFooter.vue` | Discord, X, email, `/docs`, brand name, tagline, copyright |
| `AppNavigation.vue` | Demo URL (2x), `/`, `/blueprint`, `/build-your-own`, `/about`, brand (logo + text) |
| `HomeView.vue` | Demo URL, `/blueprint`, hero subtitle (passed in), “Why DecentraGuild?” title |
| `AboutUsView.vue` | Discord, email, X, `/docs`, brand in copy |
| `BlueprintView.vue` | Demo URL, `/build-your-own`, blueprint step image paths |
| `Summary.vue` (docs) | Demo URL, brand in text |
| `HeroSection.vue` | Default title and subtitle (brand + tagline style) |
| `index.html` | Title, meta description, favicon path |

After implementing the config and route constants, these files would import from one or two modules and contain no duplicated links or path strings, making the homepage more maintainable and consistent.
