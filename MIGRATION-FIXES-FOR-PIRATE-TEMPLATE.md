# Migration Fixes Needed for Pirate Template

## Summary
After migrating from `src/content/` to `content/` directory structure for Astro 5 Content Layer API, several configuration issues prevent content blocks (pitches) from loading in production builds.

## Issues Found

### 1. **CRITICAL: Pitches Collection Pattern Mismatch**
**Location:** `src/content/config.ts` line ~183

**Problem:** The pitches collection is configured to load `.yaml` files, but all content blocks are `.mdoc` files.

**Current (WRONG):**
```typescript
pitches: defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './content/pitches' }),
  schema: pitchesSchema,
}),
```

**Should be:**
```typescript
pitches: defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './content/pitches' }),
  schema: pitchesSchema,
}),
```

**Evidence:**
- Build log shows: `[WARN] [glob-loader] No files found matching "**/*.yaml" in directory "content/pitches"`
- Actual files are: `logoheader.mdoc`, `about.mdoc`, `video1.mdoc`, etc.
- This causes error: `The collection "pitches" does not exist`

---

### 2. **Output Mode Configuration**
**Location:** `astro.config.ts` line ~20

**Problem:** Config was set to `output: 'static'` but comment says to use server mode.

**Current:**
```typescript
const output = 'static'; // Use server mode for both platforms to enable dynamic OG images
```

**Should be:**
```typescript
const output = 'server'; // Use server mode for both platforms to enable dynamic OG images
```

**Reason:** Dynamic content loading with `getEntry()` requires server mode (SSR) to properly access the content directory at request time.

---

### 3. **Secondary Content Path in ContentBlock**
**Location:** `src/components/ContentBlock.astro` line ~34

**Problem:** Hardcoded path still references old `src/content/pitches` location.

**Current (WRONG):**
```typescript
const secondaryContentPath = path.join(process.cwd(), 'src/content/pitches', slug, 'secondaryContent.mdoc');
```

**Should be:**
```typescript
const secondaryContentPath = path.join(process.cwd(), 'content/pitches', slug, 'secondaryContent.mdoc');
```

**Impact:** Secondary content images (like in the about block) won't load without this fix.

---

### 4. **Prerender Flags on Dynamic Pages**
**Locations:**
- `src/pages/[...slug].astro` line 2
- `src/pages/posts/[...page].astro` line 2
- `src/pages/tags/[tag]/[...page].astro` line 2

**Problem:** Pages have `export const prerender = true` which conflicts with server mode and dynamic content loading.

**Current:**
```typescript
export const prerender = true;
```

**Should be:**
```typescript
export const prerender = false;
```

**Reason:** Pre-rendering these pages at build time prevents them from accessing content collections dynamically. With server mode, these should be rendered on-demand.

---

## Additional Context

### File Structure
```
content/
  pitches/
    logoheader.mdoc       ← YAML frontmatter + optional markdown body
    about.mdoc            ← YAML frontmatter + markdown body
    video1.mdoc
    video2.mdoc
    ...
```

### Content Block Format Example
```yaml
---
slug: logoheader
layout: single
contentAlignment: center
customClass: logocenter
spacing: normal
bottomSpacing: none
featuredImage: /images/content-blocks/logoheader/featuredImage.svg
imageAlt: Todd Talk
imagePosition: top
showTitle: false
---
```

### Build Warnings Seen
```
[WARN] [glob-loader] No files found matching "**/*.yaml" in directory "content/pitches"
The collection "pitches" does not exist. Please ensure it is defined in your content config.
```

---

## Implementation Order for Pirate Template

1. **First:** Fix `src/content/config.ts` pitches pattern (`.yaml` → `.mdoc`)
2. **Second:** Fix `src/components/ContentBlock.astro` secondary content path (`src/content/pitches` → `content/pitches`)
3. **Third:** Fix `astro.config.ts` output mode (`'static'` → `'server'`)
4. **Fourth:** Fix prerender flags in dynamic pages (`true` → `false`)

---

## Testing After Changes

After implementing these fixes:

1. Build locally: `pnpm build`
2. Check for warnings about pitches collection
3. Verify content blocks load on home page
4. Deploy and test production site

---

## Impact on Child Projects

Once fixed in the pirate template:
- All child projects will get these fixes on next `update-theme.sh` run
- Existing child projects may need to rebuild/redeploy
- Content blocks will start working properly in production

---

## Notes

- The `update-theme.sh` script overwrites `src/content/config.ts` from the parent template, so fixes MUST be made in the pirate repository
- This issue only affects production builds; local dev worked because it has different caching/loading behavior
- The schema `pitchesSchema` is set to `z.any()` which correctly accepts any structure
