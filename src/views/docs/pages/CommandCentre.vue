<template>
  <DocPageLayout
    title="Command Centre"
    description="The guild's administrative dashboard where leaders manage operations"
  >
    <div class="content-section">
      <p class="lead">
        The <strong>Command Centre</strong> is the guild's administrative dashboard — where leaders manage operations.
      </p>
      
      <p>This is where the leadership steers so that the guild's vision becomes reality. and where all the magic happens. 
        From council signing multisig transactions to creating quests and NFT collections, 
        the Command Centre provides the complete toolkit for managing every aspect of your dGuild's operations.</p>
    </div>
    
    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:inspiration" /></div>
        <h4>Council</h4>
        <p>Responsible for vaults, budgets, and smart contract exchanges. Council manages metadata, role permissions, 
          and high-level strategic decisions that shape the guild's direction and governance structure.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:awareness" /></div>
        <h4>Officers</h4>
        <p>Take care of day-to-day tasks and work towards reaching the goals put forward by the Council. 
          Officers manage the organization, coordinate activities, and ensure smooth execution of the guild's operational plans.</p>
      </div>
    </div>
  </DocPageLayout>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import DocPageLayout from '@/components/docs/DocPageLayout.vue'
</script>

<style scoped>
.content-section {
  margin-bottom: 32px;
}

.lead {
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 24px;
}
</style>
