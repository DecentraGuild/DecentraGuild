<template>
  <DocPageLayout
    title="Foundry"
    description="Where tokens, NFTs, and badges are forged for your dGuild"
  >
    <div class="content-section">
      <p class="lead">
        The <strong>Foundry</strong> is where tokens, NFTs, and badges are forged.
      </p>
      
      <p>This is the creative heart of your guild. Minting private, non-transferable dGuild tokens, NFT creation and management, badge systems for recognition, and redemption services for special items all happen here.</p>
    </div>
    
    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:crown-coin" /></div>
        <h4>dGuild Tokens</h4>
        <p>Private, non-transferable tokens that represent membership, contribution levels, and voting power. These tokens are the foundation of guild identity and governance participation, minted based on individual and collective achievements.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:person" /></div>
        <h4>Avatar NFTs</h4>
        <p>Unique digital identities that members can customize and evolve. From basic avatars to legendary forms, these NFTs represent personal growth within the guild and can be upgraded through quest completion and contribution milestones.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:trophy" /></div>
        <h4>Trophy Badges</h4>
        <p>Commemorative achievements that celebrate individual and guild accomplishments. These badges serve as permanent records of success, unlock special privileges, and create a visual history of the guild's journey and member contributions.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:abstract-050" /></div>
        <h4>Tokenized Assets</h4>
        <p>Digital assets converted into tradeable tokens within the guild ecosystem. 
          This includes equipment, and other valuable items that can be shared, traded, or used.</p>
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
