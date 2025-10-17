<template>
  <DocPageLayout
    title="🪶 Token 2 — Stability Token"
    description="Represent long-term stability and alignment of the guild"
  >
    <div class="content-section">
      <p class="lead">
        Token 2 represents long-term stability and alignment within the guild. It's minted by depositing backing assets and creates sustainable organizational stability.
      </p>
    </div>

    <div class="token-details">
      <h3>Token 2 Properties</h3>
      <div class="properties-grid">
        <div class="property-card">
          <div class="property-label">Purpose</div>
          <div class="property-value">Represent long-term stability and alignment of the guild.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Nature</div>
          <div class="property-value">Minted by depositing backing assets into the guild.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Minting</div>
          <div class="property-value">Members deposit supported assets to mint Token 2 at the current ratio.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Backing</div>
          <div class="property-value">Assets remain in the Token 2 Vault and may be staked via contract.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Utility</div>
          <div class="property-value">Voting power in DAO 2; earns proportional share of staking rewards.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Redemption</div>
          <div class="property-value">Redeem Token 2 for underlying assets, subject to DAO and liquidity rules.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Privacy</div>
          <div class="property-value">Non-transferable — bound to member identity.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Goal</div>
          <div class="property-value">Create sustainable stability and align financial stakeholders with guild growth.</div>
        </div>
      </div>
    </div>

    <div class="diagram-section">
      <img src="/docs/dGuildToken2.png" alt="Token 2 Diagram" class="diagram-image" />
    </div>
  </DocPageLayout>
</template>

<script setup lang="ts">
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

.token-details {
  margin: 40px 0;
}

.token-details h3 {
  color: var(--text-primary);
  margin-bottom: 24px;
  font-size: 1.5rem;
}

.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.property-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-left: 3px solid #3b82f6;
  border-radius: var(--border-radius);
  padding: 20px;
  transition: all 0.3s ease;
}

.property-card:hover {
  border-color: #3b82f6;
  transform: translateY(-2px);
}

.property-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #3b82f6;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.property-value {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .properties-grid {
    grid-template-columns: 1fr;
  }
}
</style>

