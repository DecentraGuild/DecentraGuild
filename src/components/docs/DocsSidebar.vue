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
              
              <ul v-if="expandedCategories.includes(category.id)" class="nav-rooms">
                <li v-for="room in category.rooms" :key="room.id" class="nav-room-item">
                  <!-- Room with functions -->
                  <div v-if="room.functions && room.functions.length > 0" class="nav-room-with-functions">
                    <button 
                      :class="['nav-room-header', { active: isRoomActive(room), expanded: expandedRooms.includes(room.id) }]"
                      @click="toggleRoom(room.id)"
                    >
                      <Icon 
                        :icon="expandedRooms.includes(room.id) ? 'game-icons:down-arrow' : 'game-icons:right-arrow'" 
                        class="room-arrow"
                      />
                      {{ room.title }}
                    </button>
                    
                    <ul v-if="expandedRooms.includes(room.id)" class="nav-functions">
                      <li class="nav-function-item">
                        <router-link 
                          :to="room.path" 
                          :class="['nav-function-link', { active: isPageActive(room.path) }]"
                        >
                          Room
                        </router-link>
                      </li>
                      <li v-for="func in room.functions" :key="func.id" class="nav-function-item">
                        <router-link 
                          :to="func.path" 
                          :class="['nav-function-link', { active: isPageActive(func.path) }]"
                        >
                          {{ func.title }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                  
                  <!-- Room without functions (direct link) -->
                  <router-link 
                    v-else
                    :to="room.path" 
                    :class="['nav-room-link', { active: isPageActive(room.path) }]"
                  >
                    {{ room.title }}
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
import { docsStructure, type DocCategory, type DocRoom } from '@/data/docs'

const route = useRoute()
const expandedCategories = ref<string[]>([])
const expandedRooms = ref<string[]>([])

// Initialize expanded state based on current route
const initializeExpanded = () => {
  const currentPath = route.path
  
  // Clear all expanded states first
  expandedCategories.value = []
  expandedRooms.value = []
  
  // Only expand the category and room that contains the current page
  docsStructure.forEach(category => {
    category.rooms.forEach(room => {
      // Check if current path matches room intro or any function
      const isCurrentRoom = room.path === currentPath || 
        (room.functions && room.functions.some(func => func.path === currentPath))
      
      if (isCurrentRoom) {
        expandedCategories.value.push(category.id)
        if (room.functions && room.functions.length > 0) {
          expandedRooms.value.push(room.id)
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

const toggleRoom = (roomId: string) => {
  const index = expandedRooms.value.indexOf(roomId)
  if (index > -1) {
    expandedRooms.value.splice(index, 1)
  } else {
    expandedRooms.value.push(roomId)
  }
}

const isPageActive = (path: string) => {
  return route.path === path
}

const isCategoryActive = (category: DocCategory) => {
  return category.rooms.some(room => {
    if (room.path === route.path) return true
    if (room.functions) {
      return room.functions.some(func => func.path === route.path)
    }
    return false
  })
}

const isRoomActive = (room: DocRoom) => {
  if (room.path === route.path) return true
  if (room.functions) {
    return room.functions.some(func => func.path === route.path)
  }
  return false
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

.nav-rooms {
  list-style: none;
  padding: 4px 0 0 0;
  margin: 0;
}

.nav-room-item {
  margin-bottom: 4px;
}

.nav-room-link {
  display: block;
  padding: 8px 16px 8px 40px;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  font-size: 0.85rem;
}

.nav-room-link:hover {
  background: var(--secondary-bg);
  color: var(--text-primary);
}

.nav-room-link.active {
  background: var(--primary-color);
  color: white;
  font-weight: 500;
}

.nav-room-header {
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

.nav-room-header:hover {
  background: var(--secondary-bg);
  color: var(--text-primary);
}

.nav-room-header.active {
  color: var(--primary-color);
}

.room-arrow {
  font-size: 0.7rem;
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.nav-functions {
  list-style: none;
  padding: 4px 0 0 0;
  margin: 0;
}

.nav-function-item {
  margin-bottom: 2px;
}

.nav-function-link {
  display: block;
  padding: 6px 16px 6px 64px;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  font-size: 0.8rem;
}

.nav-function-link:hover {
  background: var(--secondary-bg);
  color: var(--text-primary);
}

.nav-function-link.active {
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
