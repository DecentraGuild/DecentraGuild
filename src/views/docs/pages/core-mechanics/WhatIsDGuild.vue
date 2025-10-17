<template>
  <DocPageLayout
    title="🏰 General"
    description="The Decentralized Guild Framework"
  >
    <div class="content-section">
      <p class="lead">
        <strong>DecentraGuild</strong> is the framework for forming <strong>dGuilds</strong> — decentralized guilds that combine medieval organization with Web3 infrastructure.
      </p>
      
      <p>
        Each dGuild operates as an autonomous entity with its own vaults, governance, tokens, and legal identity.
        The platform provides the base technology; the community builds the kingdom.
      </p>
    </div>

    <div class="components-section">
      <h3>Core Components</h3>
      <div class="components-grid">
        <div class="component-card">
          <div class="component-icon"><Icon icon="game-icons:padlock" /></div>
          <h4>Vaults</h4>
          <p>On-chain custody of guild assets</p>
        </div>
        <div class="component-card">
          <div class="component-icon"><Icon icon="game-icons:scales" /></div>
          <h4>DAOs</h4>
          <p>Dual governance balancing contribution and stability</p>
        </div>
        <div class="component-card">
          <div class="component-icon"><Icon icon="game-icons:two-coins" /></div>
          <h4>Tokens</h4>
          <p>Non-transferable member currencies</p>
        </div>
        <div class="component-card">
          <div class="component-icon"><Icon icon="game-icons:gavel" /></div>
          <h4>Legal</h4>
          <p>Real-world compliance and protection</p>
        </div>
      </div>
    </div>

    <div class="principles-section">
      <h3>Design Principles</h3>
      <ul class="principles-list">
        <li><strong>Sovereign custody</strong> — no platform control</li>
        <li><strong>Transparent governance</strong> — every decision on-chain</li>
        <li><strong>Composable structure</strong> — rebrand, expand, and integrate freely</li>
        <li><strong>Legal integrity</strong> — recognized entities under compliant wrappers</li>
      </ul>
    </div>

    <div class="diagram-section">
      <img src="/docs/dGuildDiagram.png" alt="dGuild Framework Diagram" class="diagram-image" />
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

.components-section, .principles-section {
  margin: 40px 0;
}

.components-section h3, .principles-section h3 {
  color: var(--text-primary);
  margin-bottom: 24px;
  font-size: 1.5rem;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.component-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.component-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.component-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
  color: var(--primary-color);
}

.component-card h4 {
  color: var(--text-primary);
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.component-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

.principles-list {
  list-style: none;
  padding: 0;
}

.principles-list li {
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 1.05rem;
}

.principles-list li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .components-grid {
    grid-template-columns: 1fr;
  }
}
</style>

