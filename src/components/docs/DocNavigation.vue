<template>
  <nav class="doc-navigation">
    <router-link 
      v-if="previous" 
      :to="previous.path" 
      class="nav-button nav-previous"
    >
      <Icon icon="game-icons:back-forth" class="nav-icon" />
      <div class="nav-content">
        <span class="nav-label">Previous</span>
        <span class="nav-title">{{ previous.title }}</span>
      </div>
    </router-link>
    <div v-else class="nav-spacer"></div>
    
    <router-link 
      v-if="next" 
      :to="next.path" 
      class="nav-button nav-next"
    >
      <div class="nav-content">
        <span class="nav-label">Next</span>
        <span class="nav-title">{{ next.title }}</span>
      </div>
      <Icon icon="game-icons:back-forth" class="nav-icon nav-icon-flip" />
    </router-link>
    <div v-else class="nav-spacer"></div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { getAdjacentPages } from '@/data/docs'

const route = useRoute()

const adjacentPages = computed(() => getAdjacentPages(route.path))
const previous = computed(() => adjacentPages.value.previous)
const next = computed(() => adjacentPages.value.next)
</script>

<style scoped>
.doc-navigation {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--border-color);
}

.nav-button {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  text-decoration: none;
  transition: all 0.3s ease;
  flex: 1;
  max-width: 300px;
}

.nav-button:hover {
  border-color: var(--primary-color);
  background: var(--primary-bg);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.nav-previous {
  text-align: left;
}

.nav-next {
  text-align: right;
  margin-left: auto;
}

.nav-icon {
  font-size: 1.5rem;
  color: var(--primary-color);
  flex-shrink: 0;
}

.nav-icon-flip {
  transform: scaleX(-1);
}

.nav-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.nav-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.nav-title {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 600;
}

.nav-spacer {
  flex: 1;
  max-width: 300px;
}

/* Responsive */
@media (max-width: 768px) {
  .doc-navigation {
    flex-direction: column;
    gap: 12px;
  }
  
  .nav-button {
    max-width: 100%;
  }
  
  .nav-next {
    margin-left: 0;
  }
  
  .nav-spacer {
    display: none;
  }
}
</style>

