<template>
  <DocPageLayout
    title="💰 Vaults"
    description="Secure multisig-based vaults for fund management"
  >
    <div class="room-section">
      <p>Vaults are secure, multisignature wallets powered by Squads Protocol. They hold the guild's collective funds, ensuring that no single person controls assets. Each vault serves a defined purpose, such as operations, rewards, or reserves.</p>
    </div>

    <div class="diagram-section">
      <img src="/docs/dGuildVaults.png" alt="dGuild Vaults Diagram" class="diagram-image" />
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
