<template>
  <DocPageLayout
    title="🏛 DAO"
    description="The heart of governance"
  >
    <div class="room-section">
      <p>The DAO is the decision-making center of your guild. Here, members use their tokens to vote on proposals, elect council members, and shape the guild's direction. The system balances day-to-day operations with long-term governance.</p>
    </div>

    <div class="diagram-section">
      <img src="/docs/dGuildDAO.png" alt="dGuild DAO Diagram" class="diagram-image" />
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

