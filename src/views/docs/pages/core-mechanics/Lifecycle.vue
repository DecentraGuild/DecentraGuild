<template>
  <DocPageLayout
    title="🔄 Lifecycle"
    description="The journey from establishment to growth"
  >
    <div class="content-section">
      <p class="lead">
        Every dGuild follows a structured lifecycle, transforming from initial setup through operational maturity.
      </p>
    </div>

    <div class="lifecycle-phases">
      <div class="phase-card phase-1">
        <div class="phase-header">
          <div class="phase-number">1</div>
          <h3><Icon icon="game-icons:conqueror" /> Establish</h3>
        </div>
        <p class="phase-description">
          Deploy vaults, configure tokens, initialize both DAOs, and register the legal wrapper.
        </p>
      </div>
      
      <div class="phase-card phase-2">
        <div class="phase-header">
          <div class="phase-number">2</div>
          <h3><Icon icon="game-icons:cargo-crane" /> Build</h3>
        </div>
        <p class="phase-description">
          Customize branding, quests, reward structures, and vault distributions.
        </p>
      </div>
      
      <div class="phase-card phase-3">
        <div class="phase-header">
          <div class="phase-number">3</div>
          <h3><Icon icon="game-icons:medieval-gate" /> Operate</h3>
        </div>
        <p class="phase-description">
          Launch public activities, mint rewards, stake reserves, and maintain governance cycles.
        </p>
      </div>
      
      <div class="phase-card phase-4">
        <div class="phase-header">
          <div class="phase-number">4</div>
          <h3><Icon icon="game-icons:uprising" /> Grow</h3>
        </div>
        <p class="phase-description">
          Iterate parameters, onboard partners, and evolve bylaws as the guild expands.
        </p>
      </div>
    </div>
    
    <div class="lifecycle-note">
      <p>
        The lifecycle is <strong>cyclical</strong> — guilds re-enter earlier phases when scaling or reforming governance.
      </p>
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

.lifecycle-phases {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
}

.phase-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.phase-card:hover {
  transform: translateX(4px);
  border-color: var(--primary-color);
}

.phase-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--border-color);
}

.phase-card.phase-1::before {
  background: linear-gradient(90deg, #3b82f6, #2563eb);
}

.phase-card.phase-2::before {
  background: linear-gradient(90deg, #8b5cf6, #7c3aed);
}

.phase-card.phase-3::before {
  background: linear-gradient(90deg, #10b981, #059669);
}

.phase-card.phase-4::before {
  background: linear-gradient(90deg, #f59e0b, #d97706);
}

.phase-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.phase-number {
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  color: var(--text-primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.phase-card.phase-1 .phase-number {
  border-color: #3b82f6;
  color: #3b82f6;
}

.phase-card.phase-2 .phase-number {
  border-color: #8b5cf6;
  color: #8b5cf6;
}

.phase-card.phase-3 .phase-number {
  border-color: #10b981;
  color: #10b981;
}

.phase-card.phase-4 .phase-number {
  border-color: #f59e0b;
  color: #f59e0b;
}

.phase-header h3 {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.phase-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 16px;
  font-style: italic;
}

.lifecycle-note {
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 24px;
  margin-top: 32px;
  text-align: center;
  border: 1px solid var(--border-color);
}

.lifecycle-note p {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary);
}

/* Responsive */
@media (max-width: 768px) {
  .phase-header {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .phase-number {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
  
  .phase-header h3 {
    font-size: 1.2rem;
    justify-content: center;
  }
  
  .phase-description {
    font-size: 1rem;
  }
  
  .phase-card:hover {
    transform: translateY(-2px);
  }
}
</style>

