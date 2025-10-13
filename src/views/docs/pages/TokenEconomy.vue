<template>
  <DocPageLayout
    title="The Token Economy"
    description="Understanding the dual-token economy that powers dGuild operations and member incentives"
  >
    <div class="content-section">
      <p class="lead">
        Understanding the dual-token economy that powers dGuild operations and member incentives.
      </p>
    </div>
    
    <div class="token-grid">
      <div class="token-card token-1">
        <div class="token-icon">
          <Icon icon="game-icons:two-coins" />
        </div>
        <h3>Token1 — Contribution Token</h3>
        <p class="token-subtitle">Contributions & Rewards</p>
        <p class="token-description">
          Your guild's contribution token - stable in design and non-speculative. Members earn Token1 by contributing 
          to the guild's success through missions, activities, and active participation.
        </p>
        <div class="token-properties">
          <div class="property">
            <div class="property-label">Purpose</div>
            <div class="property-value">Enable DAO1 voting and secure a voice in the organisation</div>
          </div>
          <div class="property">
            <div class="property-label">Backing</div>
            <div class="property-value">Peg/backing defined at creation with fixed mint ratio</div>
          </div>
          <div class="property">
            <div class="property-label">Allocation</div>
            <div class="property-value">Token1 allocation deposited by the dGuild</div>
          </div>
          <div class="property">
            <div class="property-label">Minting</div>
            <div class="property-value">dGuild mints Token1 to distribute to contributors</div>
          </div>
          <div class="property">
            <div class="property-label">Utility</div>
            <div class="property-value">Voting in DAO1 or redeemed for pegged backing asset</div>
          </div>
          <div class="property">
            <div class="property-label">Privacy</div>
            <div class="property-value">Non-transferable (private to members)</div>
          </div>
        </div>
      </div>
      
      <div class="token-card token-2">
        <div class="token-icon">
          <Icon icon="game-icons:two-coins" />
        </div>
        <h3>Token2 — Stability Token</h3>
        <p class="token-subtitle">Organizational Stability</p>
        <p class="token-description">
          Your guild's stability token - designed to provide organizational stability and long-term alignment. 
          Members mint Token2 by depositing backing assets, representing a portion of the pooled reserves.
        </p>
        <div class="token-properties">
          <div class="property">
            <div class="property-label">Purpose</div>
            <div class="property-value">Provide organizational stability and long-term alignment</div>
          </div>
          <div class="property">
            <div class="property-label">Backing</div>
            <div class="property-value">Vault will be deployed to earn staking rewards for the organization</div>
          </div>
          <div class="property">
            <div class="property-label">Allocation</div>
            <div class="property-value">Allocation of deposited assets can be configured by the dGuild</div>
          </div>
          <div class="property">
            <div class="property-label">Minting</div>
            <div class="property-value">Members can mint Token2 and redeeming is subject to DAO policies</div>
          </div>
          <div class="property">
            <div class="property-label">Utility</div>
            <div class="property-value">Voting in DAO2 and share the staking rewards with the dGuild</div>
          </div>
          <div class="property">
            <div class="property-label">Privacy</div>
            <div class="property-value">Non-transferable (private to members)</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="token-allocation">
      <h3>Platform Fees</h3>
      <p>Both Token1 and Token2 minting subject to platform fees paid in the asset backing (not dGuild tokens).</p>
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

.token-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.token-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 32px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
}

.token-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.token-1 {
  border-top: 3px solid #f59e0b;
}

.token-2 {
  border-top: 3px solid #3b82f6;
}

.token-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.token-1 .token-icon {
  color: #f59e0b;
  filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.4));
}

.token-2 .token-icon {
  color: #3b82f6;
  filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.4));
}

.token-card h3 {
  margin: 0 0 8px 0;
  font-size: 1.4rem;
  color: var(--text-primary);
  font-weight: 600;
}

.token-subtitle {
  color: var(--primary-color);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 20px !important;
}

.token-description {
  color: var(--text-secondary);
  margin-bottom: 24px !important;
  line-height: 1.6;
  font-size: 0.95rem;
  flex-grow: 1;
}

.token-properties {
  width: 100%;
  margin-top: auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.property {
  padding: 12px;
  background: var(--primary-bg);
  border-radius: 8px;
  border-left: 3px solid transparent;
  transition: all 0.2s ease;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.token-1 .property {
  border-left-color: #f59e0b;
}

.token-2 .property {
  border-left-color: #3b82f6;
}

.property:hover {
  background: var(--border-color);
}

.property-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.property-value {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.token-allocation {
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 24px;
  margin-top: 40px;
  text-align: center;
}

.token-allocation h3 {
  color: var(--text-primary);
  margin-bottom: 12px;
}

.token-allocation p {
  margin: 0;
  color: var(--text-secondary);
}

/* Responsive */
@media (max-width: 768px) {
  .token-grid {
    grid-template-columns: 1fr;
  }
}
</style>

