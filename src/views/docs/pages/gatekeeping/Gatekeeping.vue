<template>
  <DocPageLayout
    title="🧱 Gatekeeping"
    description="Control access and guild hierarchy"
  >
    <div class="room-section">
      <p>Gatekeeping defines who can enter the guild, what roles they hold, and what access they receive. This is where membership management and security policies are enforced.</p>
    </div>

    <div class="diagram-section">
      <img src="/docs/dGuildgates.png" alt="Gatekeeping Diagram" class="diagram-image" />
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
