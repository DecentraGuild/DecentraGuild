<template>
  <DocPageLayout
    title="Dashboard"
    description="Your guild's personalized digital headquarters"
  >
    <div class="room-section">
      <p>The Dashboard is the main entry point to your dGuild environment. Each guild can select a skin that defines its visual style and layout—this theme becomes the foundation of your guild's digital home. The dashboard brings together key metrics, quick links, and notifications so members can easily access what matters most.</p>
    </div>

    <div class="diagram-section">
      <img src="/docs/dGuildDashboard.png" alt="Dashboard Diagram" class="diagram-image" />
    </div>
  </DocPageLayout>
</template>

<script setup lang="ts">
import DocPageLayout from '@/components/docs/DocPageLayout.vue'
</script>

<style scoped>
.room-section {
  margin-bottom: 32px;
}

.diagram-section {
  margin: 40px 0;
  text-align: center;
}

.diagram-image {
  max-width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}
</style>
