<script setup lang="ts">
import AppNavigation from '@/components/AppNavigation.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div id="app">
    <AppNavigation />
    <main class="main-content">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Global App Styles */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 92px; /* Account for fixed navbar */
}

/* Smooth page transitions */
.router-link-exact-active {
  color: var(--primary-color) !important;
}

/* Global scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--primary-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color);
}

/* Selection styling */
::selection {
  background: rgba(0, 212, 255, 0.3);
  color: var(--text-primary);
}

::-moz-selection {
  background: rgba(0, 212, 255, 0.3);
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .main-content {
    padding-top: 74px;
  }
}
</style>
