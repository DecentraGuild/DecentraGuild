<template>
  <DocPageLayout
    title="🛡 Armory"
    description="Shared inventory of guild assets and resources"
  >
    <div class="room-section">
      <p>The Armory acts as your guild's shared inventory, holding all collective game assets, resources, and crafted materials. Members can browse available items, contribute new ones, and request temporary access through guild-defined rules.</p>
    </div>

    <div class="diagram-section">
      <img src="/docs/dGuildArmory.png" alt="Armory Diagram" class="diagram-image" />
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
