<template>
  <DocPageLayout
    title="The Digital Castle"
    description="A comprehensive ecosystem of interconnected rooms for your guild's operations and growth"
  >
    <div class="content-section">
      <p class="lead">
        Welcome to your dGuild's digital castle — a comprehensive ecosystem of interconnected rooms, each serving a specific purpose in your guild's operations and growth.
      </p>
      
      <p>Think of your dGuild as a medieval castle in cyberspace. Each room has its own function, but they all work together to create a thriving, self-sustaining community. From the secure vaults that protect your treasury to the bustling tavern where members gather, every space serves the greater purpose of building and maintaining your digital kingdom.</p>
    </div>
    
    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-icon">
          <Icon icon="game-icons:scales" />
        </div>
        <h3>Custody & Governance</h3>
        <p>The foundation of your castle - essential systems for governance and asset management.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon">
          <Icon icon="game-icons:cargo-crane" />
        </div>
        <h3>Operations & Engagement</h3>
        <p>Where the action happens - quest management, asset deployment, and member activities.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon">
          <Icon icon="game-icons:uprising" />
        </div>
        <h3>Community & Culture</h3>
        <p>The heart of your guild - identity, achievements, and social connections.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon">
          <Icon icon="game-icons:organigram" />
        </div>
        <h3>Leadership & Strategy</h3>
        <p>Command centers for management, analytics, and strategic decision-making.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon">
          <Icon icon="game-icons:padlock" />
        </div>
        <h3>Security & Integration</h3>
        <p>Protection and connectivity - access control and external platform integration.</p>
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
</style>
