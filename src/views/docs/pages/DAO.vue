<template>
  <DocPageLayout
    title="DAO"
    description="The governance heart of your dGuild - decisions made through democratic participation"
  >
    <div class="content-section">
      <p class="lead">
        The governance heart of your dGuild - where decisions are made through democratic participation and token-weighted voting.
      </p>
    </div>
    
    <div class="governance-structure">
      <div class="combined-vote-card">
        <h3><Icon icon="game-icons:crown" /> Combined Guild Vote</h3>
        <p>
          After DAO1 and DAO2 votes conclude, their weighted results combine into a single guild decision. 
          <strong>Example:</strong> 60% weight to DAO1, 40% to DAO2 (configurable per guild).
        </p>
        <ul class="vote-examples">
          <li><strong>Council Selection:</strong> Requires combined guild vote</li>
          <li><strong>Major Parameter Changes:</strong> Requires combined guild vote</li>
          <li><strong>Strategic Direction:</strong> Requires combined guild vote</li>
        </ul>
      </div>
      
      <div class="dao-system">
        <div class="dao-card dao-1">
          <h3><Icon icon="game-icons:two-coins" style="color: #f59e0b;" /> DAO1 — Contribution DAO</h3>
          <p><strong>Token1 holders</strong> vote on operational decisions and community matters</p>
          <ul>
            <li>Quest and mission approval</li>
            <li>Community event planning</li>
            <li>Operational policy decisions</li>
            <li>Member engagement</li>
          </ul>
        </div>
        
        <div class="dao-card dao-2">
          <h3><Icon icon="game-icons:two-coins" style="color: #3b82f6;" /> DAO2 — Stability DAO</h3>
          <p><strong>Token2 holders</strong> vote on how to deploy staking assets to earn returns</p>
          <ul>
            <li>Staking deployment strategies</li>
            <li>Asset allocation decisions</li>
            <li>Return optimization approaches</li>
            <li>Risk management policies</li>
          </ul>
        </div>
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

.governance-structure {
  margin-top: 24px;
}

.dao-system {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
}

.dao-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.dao-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.dao-card h3 {
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.dao-card p {
  margin-bottom: 16px;
  font-weight: 500;
  color: var(--text-secondary);
}

.dao-card ul {
  margin: 0;
  padding-left: 20px;
  text-align: left;
}

.dao-card li {
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.combined-vote-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  margin-bottom: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.combined-vote-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.combined-vote-card h3 {
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.combined-vote-card p {
  margin-bottom: 16px;
  font-weight: 500;
  color: var(--text-secondary);
}

.vote-examples {
  margin: 16px 0 0 0;
  padding-left: 20px;
  text-align: left;
}

.vote-examples li {
  margin-bottom: 8px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .dao-system {
    grid-template-columns: 1fr;
  }
}
</style>

