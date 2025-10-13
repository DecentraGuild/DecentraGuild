<template>
  <DocPageLayout
    title="Vault"
    description="Four specialized vaults powered by Solana Squads multisig for transparent and secure asset management"
  >
    <div class="content-section">
      <p class="lead">
        Every dGuild operates with <strong>4 specialized vaults</strong> powered by Solana Squads multisig, 
        providing transparent and secure asset management.
      </p>
    </div>
    
    <div class="vaults-grid">
      <div class="vault-card vault-1">
        <div class="vault-header">
          <h3><Icon icon="game-icons:bank" /> dGuild Vault</h3>
          <span class="vault-type">Primary Treasury</span>
        </div>
        <p>Primary balance sheet and operational treasury with Council-level control. This is your guild's main fund source for activities.</p>
      </div>

      <div class="vault-card vault-4">
        <div class="vault-header">
          <h3><Icon icon="game-icons:coins" /> Income Vault</h3>
          <span class="vault-type">Revenue Collection</span>
        </div>
        <p>Receives monthly proceeds, pays expenses, and splits remainder into the other vaults at configured ratios set by the dGuild.</p>
      </div>
      
      <div class="vault-card vault-2">
        <div class="vault-header">
          <h3><Icon icon="game-icons:two-coins" style="color: #f59e0b;" /> Token1 Vault</h3>
          <span class="vault-type">Contribution Token</span>
        </div>
        <p>Holds backing assets and minting mechanics for Token1 (contribution token). Members earn these through guild contributions and activities.</p>
      </div>
      
      <div class="vault-card vault-3">
        <div class="vault-header">
          <h3><Icon icon="game-icons:two-coins" style="color: #3b82f6;" /> Token2 Vault</h3>
          <span class="vault-type">Stability Token</span>
        </div>
        <p>Holds backing assets and reserves for Token2 (stability token) and manages staking pool deposits for organizational returns.</p>
      </div>
    </div>
    
    <div class="revenue-sources">
      <h3>Revenue Sources</h3>
      <div class="sources-grid">
        <span class="source-tag">Donations</span>
        <span class="source-tag">Gameplay Revenue</span>
        <span class="source-tag">Staking Rewards</span>
        <span class="source-tag">Quest Outcomes</span>
        <span class="source-tag">NFT Sales</span>
        <span class="source-tag">Asset Lending</span>
        <span class="source-tag">Trading Fees</span>
        <span class="source-tag">Minting Fees</span>
        <span class="source-tag">Mini Games</span>
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

.vaults-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  margin: 24px 0;
}

.vault-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 20px;
  transition: all 0.3s ease;
}

.vault-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.vault-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 8px;
}

.vault-card h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--text-primary);
}

.vault-type {
  background: var(--primary-bg);
  color: var(--text-secondary);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.vault-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.revenue-sources {
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 24px;
  margin-top: 32px;
}

.revenue-sources h3 {
  color: var(--text-primary);
  margin-bottom: 16px;
}

.sources-grid {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.source-tag {
  background: var(--primary-bg);
  color: var(--text-primary);
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.9rem;
  border: 1px solid var(--border-color);
}

@media (max-width: 768px) {
  .vaults-grid {
    grid-template-columns: 1fr;
  }
}
</style>
