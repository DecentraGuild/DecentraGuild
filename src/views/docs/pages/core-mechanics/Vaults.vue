<template>
  <DocPageLayout
    title="💰 Vaults"
    description="Four specialized vaults for guild asset management"
  >
    <div class="content-section">
      <p class="lead">
        Guild economics revolve around <strong>four vault types</strong>, secured by <strong>Squads multisig</strong> contracts.
      </p>
      <p>
        Assets never leave on-chain custody — all interactions occur through verified multisig transactions.
      </p>
    </div>

    <div class="vaults-section">
      <h3>Vault Types</h3>
      <div class="vault-grid">
        <div class="vault-card">
          <div class="vault-icon"><Icon icon="game-icons:receive-money" /></div>
          <h4>Income Vault</h4>
          <p>Collects incoming revenue (donations, fees, rewards) and distributes to other vaults per guild configuration.</p>
        </div>
        
        <div class="vault-card">
          <div class="vault-icon"><Icon icon="game-icons:two-coins" style="color: #f59e0b;" /></div>
          <h4>Token 1 Vault</h4>
          <p>Stores and manages the supply backing Token 1. Funds new minting and handles redemption.</p>
        </div>
        
        <div class="vault-card">
          <div class="vault-icon"><Icon icon="game-icons:two-coins" style="color: #3b82f6;" /></div>
          <h4>Token 2 Vault</h4>
          <p>Holds staking assets provided by members and receives staking yields.</p>
        </div>
        
        <div class="vault-card">
          <div class="vault-icon"><Icon icon="game-icons:castle" /></div>
          <h4>dGuild Vault</h4>
          <p>Treasury for council-directed operations, quests, and community initiatives.</p>
        </div>
      </div>
    </div>

    <div class="diagram-section">
      <img src="/docs/dGuildVaults.png" alt="dGuild Vaults Diagram" class="diagram-image" />
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

.vaults-section {
  margin: 40px 0;
}

.vaults-section h3 {
  color: var(--text-primary);
  margin-bottom: 24px;
  font-size: 1.5rem;
}

.vault-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.vault-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.vault-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.vault-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: var(--primary-color);
}

.vault-card h4 {
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.vault-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .vault-grid {
    grid-template-columns: 1fr;
  }
}
</style>

