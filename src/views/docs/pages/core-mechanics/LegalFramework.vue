<template>
  <DocPageLayout
    title="📜 Legal Framework"
    description="Real-world legitimacy through legal wrappers"
  >
    <div class="content-section">
      <p class="lead">
        Each dGuild operates under a <strong>legal wrapper</strong> that translates on-chain activity into recognized organizational structure.
      </p>
      
      <p>
        This ensures that guilds can sign agreements, hold assets, and operate legitimately in physical jurisdictions without losing decentralization.
      </p>
    </div>
    
    <div class="legal-elements">
      <h3>Legal Elements</h3>
      <div class="elements-grid">
        <div class="element-card">
          <div class="element-icon"><Icon icon="game-icons:scroll-quill" /></div>
          <h4>Bylaws (Statutes)</h4>
          <p>Define governance, member rights, and operational procedures.</p>
        </div>
        
        <div class="element-card">
          <div class="element-icon"><Icon icon="game-icons:castle" /></div>
          <h4>Corporate Entity</h4>
          <p>Enables contracts, taxation, and limited liability.</p>
        </div>
        
        <div class="element-card">
          <div class="element-icon"><Icon icon="game-icons:take-my-money" /></div>
          <h4>Tax Automation</h4>
          <p>Generates compliant reports for both corporate and member taxes.</p>
        </div>
        
        <div class="element-card">
          <div class="element-icon"><Icon icon="game-icons:checked-shield" /></div>
          <h4>Audit Trail</h4>
          <p>All transactions and votes are timestamped and verifiable on-chain.</p>
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

.legal-elements {
  margin: 40px 0;
}

.legal-elements h3 {
  color: var(--text-primary);
  margin-bottom: 24px;
  font-size: 1.5rem;
}

.elements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.element-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.element-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.element-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: var(--primary-color);
}

.element-card h4 {
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.element-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .elements-grid {
    grid-template-columns: 1fr;
  }
}
</style>

