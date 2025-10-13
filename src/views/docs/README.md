# Documentation Structure

This directory contains the GitBook-style documentation system for dGuild.

## Structure

```
docs/
├── DocsView.vue          # Main layout wrapper with sidebar
├── pages/                # Individual documentation pages
│   ├── WhatIsDGuild.vue
│   ├── Governance.vue
│   ├── TokenEconomy.vue
│   └── ... (all other pages)
└── README.md             # This file
```

## Creating New Documentation Pages

Each documentation page should follow this structure:

```vue
<template>
  <DocPageLayout
    title="Your Page Title"
    description="Brief description of the page"
  >
    <!-- Your content here -->
    <p>Content goes here...</p>
    
    <!-- Optional: Add custom styled sections -->
    <div class="custom-section">
      <!-- Custom content -->
    </div>
  </DocPageLayout>
</template>

<script setup lang="ts">
import DocPageLayout from '@/components/docs/DocPageLayout.vue'
import { Icon } from '@iconify/vue' // If you need icons
</script>

<style scoped>
/* Custom styles for this page */
</style>
```

## Available Components

### DocPageLayout
Wraps your page content and automatically adds:
- Page title and description
- Previous/Next navigation buttons
- Consistent styling

### Reusable Styles
Common card components you can use:

1. **Principles Grid** - For feature cards:
```vue
<div class="principles-grid">
  <div class="principle-card">
    <div class="principle-icon"><Icon icon="game-icons:icon-name" /></div>
    <h4>Title</h4>
    <p>Description</p>
  </div>
</div>
```

2. **Info Cards** - For highlighted sections:
```vue
<div class="info-card">
  <h3>Title</h3>
  <p>Content</p>
</div>
```

## Navigation Structure

The navigation structure is defined in `/src/data/docs/index.ts`. 

When adding a new page:
1. Add the page component to `/src/views/docs/pages/`
2. Add the route in `/src/router/index.ts`
3. Ensure the path matches the one in `/src/data/docs/index.ts`

## Migration from Concept Page

To migrate content from the Concept page:
1. Copy the relevant section HTML
2. Create a new page component in `/src/views/docs/pages/`
3. Wrap the content in `<DocPageLayout>`
4. Copy any scoped styles needed
5. Test the page for proper navigation

## Common Styles Available

The following CSS classes are available globally:

- `.principles-grid` - Grid layout for feature cards
- `.principle-card` - Individual feature card
- `.principle-icon` - Icon container
- `.info-card` - Highlighted information box
- `.content-section` - Standard content section

## Tips

- Keep pages focused on a single topic
- Use the same styling patterns from the Concept page
- Icons should come from `@iconify/vue` using `game-icons:*` pack
- Ensure all images are optimized and in the correct path

