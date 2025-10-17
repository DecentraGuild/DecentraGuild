<template>
  <DocPageLayout
    title="🪙 Token 1 — Contribution Token"
    description="Represent active participation within the guild"
  >
    <div class="content-section">
      <p class="lead">
        Token 1 represents active participation and contributions within the guild. It's stable, non-transferable, and minted as rewards for member engagement.
      </p>
    </div>

    <div class="token-details">
      <h3>Token 1 Properties</h3>
      <div class="properties-grid">
        <div class="property-card">
          <div class="property-label">Purpose</div>
          <div class="property-value">Represent active participation within the guild.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Nature</div>
          <div class="property-value">Stable, non-transferable, minted as rewards for contributions.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Minting</div>
          <div class="property-value">dGuild mints Token 1 at a fixed ratio to a pegged asset.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Backing</div>
          <div class="property-value">Supported by assets in the Token 1 Vault.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Utility</div>
          <div class="property-value">Voting power in DAO 1; represents member contribution value.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Redemption</div>
          <div class="property-value">Burn Token 1 to release its pegged asset when authorized by DAO policy.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Privacy</div>
          <div class="property-value">Non-transferable — identity-linked to member accounts.</div>
        </div>
        
        <div class="property-card">
          <div class="property-label">Goal</div>
          <div class="property-value">Encourage genuine activity without speculation; reward engagement and contribution.</div>
        </div>
      </div>
    </div>

    <div class="diagram-section">
      <img src="/docs/dGuildToken1.png" alt="Token 1 Diagram" class="diagram-image" />
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
  border-left: 3px solid #f59e0b;
  border-radius: var(--border-radius);
  padding: 20px;
  transition: all 0.3s ease;
}

.property-card:hover {
  border-color: #f59e0b;
  transform: translateY(-2px);
}

.property-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f59e0b;
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

