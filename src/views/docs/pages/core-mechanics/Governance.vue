<template>
  <DocPageLayout
    title="⚙️ DAO Governance"
    description="Dual-DAO system balancing contribution and stability"
  >
    <div class="content-section">
      <p class="lead">
        Every dGuild runs two DAOs whose votes combine into a single <strong>Guild Decision</strong> using weighted aggregation.
      </p>
    </div>
    
    <div class="dao-structure">
      <h3>DAO Structure</h3>
      <div class="dao-grid">
        <div class="dao-card dao-guild dao-guild-double">
          <div class="dao-header">
            <Icon icon="game-icons:crown" />
            <h4>dGuild DAO</h4>
          </div>
          <div class="dao-token">Combined Vote</div>
          <div class="dao-focus"><strong>Focus:</strong> Final guild decisions</div>
          <div class="dao-examples">
            <strong>Process:</strong>
            <ul>
              <li>Weighted aggregation (e.g. 60% DAO 1 / 40% DAO 2)</li>
              <li>Prevents dominance by either group</li>
              <li>Balances contribution and stability</li>
            </ul>
          </div>
        </div>

        <div class="dao-card dao-1">
          <div class="dao-header">
            <Icon icon="game-icons:two-coins" />
            <h4>DAO 1 — Contribution</h4>
          </div>
          <div class="dao-token">Token 1</div>
          <div class="dao-focus"><strong>Focus:</strong> Operational direction</div>
          <div class="dao-examples">
            <strong>Examples:</strong>
            <ul>
              <li>Quest approval</li>
              <li>Event funding</li>
              <li>Member rewards</li>
            </ul>
          </div>
        </div>
        
        <div class="dao-card dao-2">
          <div class="dao-header">
            <Icon icon="game-icons:two-coins" />
            <h4>DAO 2 — Stability</h4>
          </div>
          <div class="dao-token">Token 2</div>
          <div class="dao-focus"><strong>Focus:</strong> Treasury & risk management</div>
          <div class="dao-examples">
            <strong>Examples:</strong>
            <ul>
              <li>Asset allocation</li>
              <li>Staking policy</li>
              <li>Yield strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>


    <div class="diagram-section">
      <img src="/docs/dGuildDAO.png" alt="dGuild DAO Governance Diagram" class="diagram-image" />
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

.dao-structure, .combined-vote-section, .leadership-section {
  margin: 40px 0;
}

.dao-structure h3, .combined-vote-section h3, .leadership-section h3 {
  color: var(--text-primary);
  margin-bottom: 24px;
  font-size: 1.5rem;
}

.dao-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.dao-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  transition: all 0.3s ease;
}

.dao-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.dao-1 {
  border-top: 3px solid #f59e0b;
}

.dao-2 {
  border-top: 3px solid #3b82f6;
}

.dao-guild {
  border-top: 3px solid #8b5cf6;
  background: linear-gradient(135deg, var(--secondary-bg) 0%, rgba(139, 92, 246, 0.05) 100%);
}

.dao-guild-double {
  grid-column: 1 / -1;
  max-width: none;
}

.dao-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 2rem;
}

.dao-1 .dao-header {
  color: #f59e0b;
}

.dao-2 .dao-header {
  color: #3b82f6;
}

.dao-guild .dao-header {
  color: #8b5cf6;
}

.dao-header h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin: 0;
}

.dao-token {
  background: var(--primary-bg);
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-weight: 600;
  color: var(--primary-color);
}

.dao-focus {
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.dao-examples {
  text-align: left;
  color: var(--text-secondary);
}

.dao-examples ul {
  margin: 8px 0 0 0;
  padding-left: 20px;
}

.dao-examples li {
  margin-bottom: 6px;
  font-size: 0.9rem;
}

.combined-vote-section p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.leadership-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 20px;
}

.leadership-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.leadership-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.leadership-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
  color: var(--primary-color);
}

.leadership-card h4 {
  color: var(--text-primary);
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.leadership-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

.governance-note {
  background: var(--secondary-bg);
  border-left: 3px solid var(--primary-color);
  padding: 16px;
  border-radius: 4px;
  color: var(--text-secondary);
  font-style: italic;
}

@media (max-width: 768px) {
  .dao-grid {
    grid-template-columns: 1fr;
  }
  
  .leadership-grid {
    grid-template-columns: 1fr;
  }
}
</style>



