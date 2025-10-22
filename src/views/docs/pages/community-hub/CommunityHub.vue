<template>
  <DocPageLayout
    title="🪩 Community Hub"
    description="Manage guild and member identities"
  >
    <div class="room-section">
      <p>The Community Hub manages your guild's public identity and member profiles. It's the place where you define how your guild appears to the outside world and how members interact within.</p>
    </div>

    <div class="diagram-section">
      <img src="/docs/dGuildCommunityHub.png" alt="dGuild Community Hub Diagram" class="diagram-image" />
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
