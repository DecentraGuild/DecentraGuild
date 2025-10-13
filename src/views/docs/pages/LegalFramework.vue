<template>
  <DocPageLayout
    title="Legal Framework"
    description="Each dGuild is anchored in the real world through legal wrappers"
  >
    <div class="content-section">
      <p class="lead">
        Each dGuild is anchored in the real world through <strong>legal wrappers</strong>.
      </p>
      
      <p>
        This is what makes dGuilds more than just digital collectives. Every dGuild operates as a legitimate legal entity with proper governance structures, tax compliance, and regulatory adherence. This ensures real-world legitimacy and enables guilds to operate in both digital and physical environments with full legal responsibilities.
      </p>
      
      <p>
        From automated transaction tracking to comprehensive audit trails, the legal framework provides the foundation for sustainable, compliant operations that protect both the guild and its members.
      </p>
    </div>
    
    <div class="lifecycle-phases">
      <div class="phase-card phase-1">
        <div class="phase-header">
          <div class="phase-number"><Icon icon="game-icons:scroll-quill" /></div>
          <h3>Statutes (Bylaws)</h3>
        </div>
        <p class="phase-description">
          Comprehensive governance documents that define the guild's structure, rules, and operational procedures.
        </p>
        <p>These legally binding bylaws establish member rights, decision-making processes, and organizational frameworks that ensure proper governance and legal compliance.</p>
      </div>
      
      <div class="phase-card phase-2">
        <div class="phase-header">
          <div class="phase-number"><Icon icon="game-icons:take-my-money" /></div>
          <h3>Corporate Tax</h3>
        </div>
        <p class="phase-description">
          Automated corporate tax reporting and compliance management for the dGuild entity.
        </p>
        <p>Generate professional tax reports, maintain compliance with corporate tax obligations, and ensure proper documentation for regulatory requirements and financial transparency.</p>
      </div>
      
      <div class="phase-card phase-3">
        <div class="phase-header">
          <div class="phase-number"><Icon icon="game-icons:person" /></div>
          <h3>Personal Tax</h3>
        </div>
        <p class="phase-description">
          Member tax reporting and documentation support for individual contributions and earnings.
        </p>
        <p>Provide members with detailed transaction records, earnings reports, and tax documentation to support their personal tax obligations and financial planning.</p>
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
}

.phase-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary-color);
}

.phase-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.phase-number {
  background: var(--primary-color);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.phase-header h3 {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.3rem;
}

.phase-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 16px;
  font-style: italic;
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
  }
  
  .phase-description {
    font-size: 1rem;
  }
}
</style>

