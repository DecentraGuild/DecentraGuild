<template>
  <DocPageLayout
    title="🔥 Foundry"
    description="Forge new assets on-chain"
  >
    <div class="room-section">
      <p>The Foundry is where new digital assets are created. From tokens to NFTs and synthetic assets, this room lets your guild design its own on-chain economy.</p>
    </div>

    <div class="diagram-section">
      <img src="/docs/dGuildFoundry.png" alt="Foundry Diagram" class="diagram-image" />
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
