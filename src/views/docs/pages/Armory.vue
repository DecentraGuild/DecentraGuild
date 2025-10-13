<template>
  <DocPageLayout
    title="Armory"
    description="The dGuild's shared asset treasury where collective resources become strategic advantages"
  >
    <div class="content-section">
      <p class="lead">
        The <strong>Armory</strong> is the dGuild's shared asset treasury — the strategic heart where collective resources become individual power and guild strength.
      </p>
      
      <p>Beyond simple storage, the Armory transforms shared assets into <strong>strategic advantages</strong>. It's where the dGuild's collective wealth becomes tools for quest execution, personal member gains, safe trading, and powerful guild representation across the ecosystem.</p>
    </div>
    
    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:target-dummy" /></div>
        <h4>Quest-Specific Loadouts</h4>
        <p>Pre-configured asset combinations for different quest types. Whether it's PvP gear, mining equipment, or trading capital, the Armory provides optimized loadouts for maximum mission success.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:buy-card" /></div>
        <h4>Member Lending Program</h4>
        <p>Members can borrow high-value assets for personal use, with flexible terms based on their contribution history and Token1 holdings. Interest rates and collateral requirements are set by DAO governance.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:shopping-cart" /></div>
        <h4>Internal Marketplace</h4>
        <p>Secure trading platform where members can buy, sell, and trade assets within the guild ecosystem. All transactions are recorded on-chain with automatic fee distribution to vaults.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:trophy" /></div>
        <h4>Competitive Edge</h4>
        <p>High-performance assets reserved for major competitions, tournaments, and events where the dGuild's reputation is on the line. Access is controlled by Council and DAO governance.</p>
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
