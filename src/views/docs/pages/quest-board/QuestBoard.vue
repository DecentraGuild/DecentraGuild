<template>
  <DocPageLayout
    title="🗺 Quest Board"
    description="On-chain quest system for guild missions"
  >
    <div class="room-section">
      <p>The Quest Board is where members discover missions, contribute to goals, and earn rewards. Every quest is executed and tracked on-chain, ensuring full transparency and accountability. It's the place where play, contribution, and organization meet.</p>
    </div>

    <div class="diagram-section">
      <img src="/docs/dGuildQuestboard.png" alt="Quest Board Diagram" class="diagram-image" />
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
