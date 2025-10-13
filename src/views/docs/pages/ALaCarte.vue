<template>
  <DocPageLayout
    title="Build-Your-Own"
    description="Modular room solutions that allow communities to build their own customized toolkit"
  >
    <div class="content-section">
      <p class="lead">
        While we work towards delivering the complete dGuild package, we offer <strong>modular room solutions</strong> that allow communities to use finished components and build their own customized toolkit.
      </p>
      
      <p>This approach enables us to fund new smart contract deployments while providing immediate value to communities that need specific functionality. You can pick and choose the tools that work for your guild right now, then expand as more features become available.</p>
    </div>
    
    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:puzzle" /></div>
        <h4>Modular Components</h4>
        <p>Individual rooms with preset logic that can be deployed independently. Each component is fully functional and can be combined with others to create a custom dGuild experience.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:check-mark" /></div>
        <h4>Ready-to-Use Logic</h4>
        <p>Pre-built smart contracts for common functions like token creation in the Foundry, G2P trading in the Armory, and governance mechanisms in the DAO.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:palette" /></div>
        <h4>Custom Skinning</h4>
        <p>Various theming and branding options to make each component uniquely yours. Customize the UI, colors, icons, and terminology to match your community's identity.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:coins" /></div>
        <h4>Funding Development</h4>
        <p>Revenue from A la Carte deployments helps fund new smart contract development and infrastructure improvements, accelerating the path to the complete dGuild platform.</p>
      </div>
    </div>
    
    <div class="a-la-carte-note">
      <h3>Getting Started</h3>
      <p>Each A la Carte component includes setup fees and ongoing maintenance costs, but provides immediate functionality for your community. As we develop new features, existing deployments can be upgraded or expanded with additional modules.</p>
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

.a-la-carte-note {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 20px;
  margin-top: 32px;
}

.a-la-carte-note h3 {
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 1.1rem;
  font-weight: 600;
}

.a-la-carte-note p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
}
</style>

