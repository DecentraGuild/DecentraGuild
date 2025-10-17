<template>
  <div class="doc-page-layout">
    <div class="doc-header">
      <h1 class="doc-title">{{ title }}</h1>
      <p v-if="description" class="doc-description">{{ description }}</p>
    </div>
    
    <div class="doc-content">
      <slot />
    </div>
    
    <DocNavigation :custom-next="customNext" />
  </div>
</template>

<script setup lang="ts">
import DocNavigation from './DocNavigation.vue'

interface CustomNextLink {
  url: string
  title: string
  label?: string
  icon?: string
  external?: boolean
}

defineProps<{
  title: string
  description?: string
  customNext?: CustomNextLink
}>()
</script>

<style scoped>
.doc-page-layout {
  flex: 1;
  max-width: 900px;
}

.doc-header {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border-color);
}

.doc-title {
  color: var(--text-primary);
  font-size: 2.5rem;
  margin-bottom: 12px;
  font-weight: 700;
}

.doc-description {
  color: var(--text-secondary);
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0;
}

.doc-content {
  color: var(--text-secondary);
  line-height: 1.8;
}

.doc-content :deep(h2) {
  color: var(--text-primary);
  font-size: 1.8rem;
  margin-top: 48px;
  margin-bottom: 20px;
  font-weight: 600;
}

.doc-content :deep(h3) {
  color: var(--text-primary);
  font-size: 1.4rem;
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: 600;
}

.doc-content :deep(h4) {
  color: var(--text-primary);
  font-size: 1.1rem;
  margin-top: 24px;
  margin-bottom: 12px;
  font-weight: 600;
}

.doc-content :deep(p) {
  margin-bottom: 16px;
  line-height: 1.8;
}

.doc-content :deep(ul),
.doc-content :deep(ol) {
  margin-bottom: 16px;
  padding-left: 24px;
}

.doc-content :deep(li) {
  margin-bottom: 8px;
  line-height: 1.7;
}

.doc-content :deep(strong) {
  color: var(--text-primary);
  font-weight: 600;
}

.doc-content :deep(code) {
  background: var(--secondary-bg);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
  color: var(--primary-color);
}

.doc-content :deep(pre) {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 16px;
  overflow-x: auto;
  margin-bottom: 16px;
}

.doc-content :deep(blockquote) {
  border-left: 4px solid var(--primary-color);
  padding-left: 16px;
  margin: 24px 0;
  color: var(--text-secondary);
  font-style: italic;
}

.doc-content :deep(a) {
  color: var(--primary-color);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.doc-content :deep(a:hover) {
  opacity: 0.8;
  text-decoration: underline;
}

/* Consistent Card Styling Across All Pages */
.doc-content :deep(.principles-grid) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin-top: 32px;
}

.doc-content :deep(.principle-card) {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 220px;
}

.doc-content :deep(.principle-card:hover) {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.doc-content :deep(.principle-icon) {
  font-size: 2rem;
  margin-bottom: 12px;
  color: var(--primary-color);
  filter: drop-shadow(0 0 8px var(--primary-color));
  flex-shrink: 0;
}

.doc-content :deep(.principle-card h4) {
  color: var(--text-primary);
  margin-bottom: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  flex-shrink: 0;
}

.doc-content :deep(.principle-card p) {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
  flex-grow: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .doc-title {
    font-size: 2rem;
  }
  
  .doc-description {
    font-size: 1.1rem;
  }
  
  .doc-content :deep(h2) {
    font-size: 1.5rem;
  }
  
  .doc-content :deep(h3) {
    font-size: 1.2rem;
  }
  
  .doc-content :deep(.principles-grid) {
    grid-template-columns: 1fr;
  }
  
  .doc-content :deep(.principle-card) {
    min-height: auto;
  }
}
</style>

