<template>
  <div class="docs-view">
    <div class="docs-container">
      <DocsSidebar />
      
      <main class="docs-main">
        <div class="docs-content-wrapper">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import DocsSidebar from '@/components/docs/DocsSidebar.vue'
</script>

<style scoped>
.docs-view {
  min-height: 100vh;
  position: relative;
}

.docs-container {
  display: flex;
  position: relative;
  min-height: calc(100vh - 160px); /* Account for footer */
}

.docs-main {
  flex: 1;
  padding: 48px 40px;
  min-width: 0;
  display: flex;
  justify-content: center;
}

.docs-content-wrapper {
  width: 100%;
  max-width: 900px;
}

/* Responsive */
@media (max-width: 1024px) {
  .docs-main {
    padding: 24px 20px;
  }
}

@media (max-width: 768px) {
  .docs-container {
    flex-direction: column;
  }
  
  .docs-main {
    padding: 24px 16px;
  }
}
</style>

