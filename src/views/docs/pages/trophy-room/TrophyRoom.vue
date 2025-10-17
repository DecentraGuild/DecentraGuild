<template>
  <DocPageLayout
    title="🏆 Trophy Room"
    description="Showcase guild milestones and achievements"
  >
    <div class="room-section">
      <p>The Trophy Room showcases your guild's achievements and history. It tracks important milestones, successful campaigns, and community contributions, serving as a transparent record of collective progress.</p>
    </div>

    <div class="diagram-section">
      <img src="/docs/dGuildTrophyroom.png" alt="Trophy Room Diagram" class="diagram-image" />
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
