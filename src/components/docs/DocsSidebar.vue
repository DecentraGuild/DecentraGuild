<template>
  <aside class="docs-sidebar">
    <div class="sidebar-content">
      <div class="sidebar-header">
        <h3 class="sidebar-title">Documentation</h3>
        <router-link to="/" class="back-link">
          <Icon icon="game-icons:back-forth" />
          Back to Home
        </router-link>
      </div>
      
      <nav class="sidebar-nav">
        <ul class="nav-list">
          <li v-for="category in docsStructure" :key="category.id" class="nav-item">
            <div class="nav-category">
              <button 
                :class="['nav-category-header', { active: isCategoryActive(category), expanded: expandedCategories.includes(category.id) }]"
                @click="toggleCategory(category.id)"
              >
                <Icon 
                  :icon="expandedCategories.includes(category.id) ? 'game-icons:down-arrow' : 'game-icons:right-arrow'" 
                  class="category-arrow"
                />
                <Icon v-if="category.icon" :icon="category.icon" class="category-icon" />
                {{ category.title }}
              </button>
              
              <ul v-if="expandedCategories.includes(category.id)" class="nav-subsections">
                <li v-for="item in category.pages" :key="item.id" class="nav-subitem">
                  <!-- Subcategory -->
                  <div v-if="'isSubcategory' in item && item.isSubcategory" class="nav-subcategory">
                    <button 
                      :class="['nav-subcategory-header', { active: isSubcategoryActive(item), expanded: expandedSubcategories.includes(item.id) }]"
                      @click="toggleSubcategory(item.id)"
                    >
                      <Icon 
                        :icon="expandedSubcategories.includes(item.id) ? 'game-icons:down-arrow' : 'game-icons:right-arrow'" 
                        class="subcategory-arrow"
                      />
                      {{ item.title }}
                    </button>
                    
                    <ul v-if="expandedSubcategories.includes(item.id)" class="nav-subsubsections">
                      <li v-for="page in item.pages" :key="page.id" class="nav-subsubitem">
                        <router-link 
                          :to="page.path" 
                          :class="['nav-subsublink', { active: isPageActive(page.path) }]"
                        >
                          {{ page.title }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                  
                  <!-- Regular page -->
                  <router-link 
                    v-else
                    :to="item.path" 
                    :class="['nav-sublink', { active: isPageActive(item.path) }]"
                  >
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { docsStructure, type DocCategory, type DocSubcategory, type DocPage } from '@/data/docs'

const route = useRoute()
const expandedCategories = ref<string[]>([])
const expandedSubcategories = ref<string[]>([])

// Initialize expanded state based on current route
const initializeExpanded = () => {
  const currentPath = route.path
  
  // Clear all expanded states first
  expandedCategories.value = []
  expandedSubcategories.value = []
  
  // Only expand the category and subcategory that contains the current page
  docsStructure.forEach(category => {
    category.pages.forEach(item => {
      if ('isSubcategory' in item && item.isSubcategory) {
        const subcategory = item as DocSubcategory
        if (subcategory.pages.some(page => page.path === currentPath)) {
          expandedCategories.value.push(category.id)
          expandedSubcategories.value.push(subcategory.id)
        }
      } else {
        const page = item as DocPage
        if (page.path === currentPath) {
          expandedCategories.value.push(category.id)
        }
      }
    })
  })
}

// Initialize on mount
initializeExpanded()

// Watch route changes
watch(() => route.path, () => {
  initializeExpanded()
})

const toggleCategory = (categoryId: string) => {
  const index = expandedCategories.value.indexOf(categoryId)
  if (index > -1) {
    expandedCategories.value.splice(index, 1)
  } else {
    expandedCategories.value.push(categoryId)
  }
}

const toggleSubcategory = (subcategoryId: string) => {
  const index = expandedSubcategories.value.indexOf(subcategoryId)
  if (index > -1) {
    expandedSubcategories.value.splice(index, 1)
  } else {
    expandedSubcategories.value.push(subcategoryId)
  }
}

const isPageActive = (path: string) => {
  return route.path === path
}

const isCategoryActive = (category: DocCategory) => {
  return category.pages.some(item => {
    if ('isSubcategory' in item && item.isSubcategory) {
      return (item as DocSubcategory).pages.some(page => page.path === route.path)
    }
    return (item as DocPage).path === route.path
  })
}

const isSubcategoryActive = (subcategory: DocSubcategory) => {
  return subcategory.pages.some(page => page.path === route.path)
}
</script>

<style scoped>
.docs-sidebar {
  position: sticky;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  max-height: calc(100vh - 40px);
  background: var(--primary-bg);
  border-right: 1px solid var(--border-color);
  overflow: hidden;
  flex-shrink: 0;
  align-self: flex-start;
}

.sidebar-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 24px 24px 20px;
  border-bottom: 1px solid var(--border-color);
}

.sidebar-title {
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--primary-color);
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: 8px;
}

.nav-category-header {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 16px;
  background: none;
  border: none;
  color: var(--text-secondary);
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.nav-category-header:hover {
  background: var(--secondary-bg);
  color: var(--text-primary);
}

.nav-category-header.active {
  color: var(--primary-color);
}

.category-arrow {
  font-size: 0.8rem;
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.category-icon {
  font-size: 1rem;
  flex-shrink: 0;
}

.nav-subsections {
  list-style: none;
  padding: 4px 0 0 0;
  margin: 0;
}

.nav-subitem {
  margin-bottom: 4px;
}

.nav-sublink {
  display: block;
  padding: 8px 16px 8px 40px;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  font-size: 0.85rem;
}

.nav-sublink:hover {
  background: var(--secondary-bg);
  color: var(--text-primary);
}

.nav-sublink.active {
  background: var(--primary-color);
  color: white;
  font-weight: 500;
}

.nav-subcategory-header {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 8px 16px 8px 40px;
  background: none;
  border: none;
  color: var(--text-secondary);
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  font-size: 0.85rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
}

.nav-subcategory-header:hover {
  background: var(--secondary-bg);
  color: var(--text-primary);
}

.nav-subcategory-header.active {
  color: var(--primary-color);
}

.subcategory-arrow {
  font-size: 0.7rem;
  transition: transform 0.2s ease;
}

.nav-subsubsections {
  list-style: none;
  padding: 4px 0 0 0;
  margin: 0;
}

.nav-subsubitem {
  margin-bottom: 4px;
}

.nav-subsublink {
  display: block;
  padding: 6px 16px 6px 64px;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  font-size: 0.8rem;
}

.nav-subsublink:hover {
  background: var(--secondary-bg);
  color: var(--text-primary);
}

.nav-subsublink.active {
  background: var(--primary-color);
  color: white;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 1024px) {
  .docs-sidebar {
    position: fixed;
    left: -280px;
    top: 0;
    z-index: 100;
    transition: left 0.3s ease;
  }
  
  .docs-sidebar.mobile-open {
    left: 0;
  }
}

@media (max-width: 768px) {
  .docs-sidebar {
    width: 100%;
    left: -100%;
    max-height: 100vh;
  }
  
  .docs-sidebar.mobile-open {
    left: 0;
  }
}
</style>

