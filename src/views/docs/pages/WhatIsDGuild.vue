<template>
  <DocPageLayout
    title="What is a dGuild?"
    description="Introduction to dGuilds and the DecentraGuild platform"
  >
    <div class="content-section">
      <p>
        DecentraGuild is the platform that enables the creation of dGuilds  
        - A <strong>dGuild</strong> is a Web3-native guild template — 
        a self-custodied, legally recognized association operated by its members. 
        It blends <strong>medieval guild structures</strong> with <strong>web3 technology</strong>, 
        giving communities the tools to operate like kingdom in cyberspace.
      </p>
      
      <p>
        Each dGuild runs on a foundation of <strong>on-chain custody</strong> via Squads multisig vaults,
        <strong>two complementary DAOs from realms </strong> for governance, 
        <strong>non-transferable member tokens</strong> for identity and voting, 
        and <strong>legal wrappers</strong> for real-world legitimacy. 
        Guilds can rebrand their UI, avatar sets, and guild identity while still 
        relying on the same core template technology.
      </p>
    </div>

    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:padlock" /></div>
        <h4>On-Chain Custody</h4>
        <p>Your guild holds its own custodial control. Multisig vaults and on-chain contracts store assets and execute flows. The platform doesn't hold any of your assets.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:scales" /></div>
        <h4>Two-Layer Governance</h4>
        <p>Two separate DAOs combine into a top-layer "guild vote" with adjustable weighting, letting communities express different participation signals.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:organigram" /></div>
        <h4>Leadership</h4>
        <p>The combined guild selects a Council for treasury management and operations, who appoint officers for day-to-day task and community management.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:gavel" /></div>
        <h4>Legal Entity</h4>
        <p>Each dGuild is a real legal entity with proper legal wrappers, enabling operation in both digital and real-world environments with full legal responsibilities.</p>
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
  margin-bottom: 40px;
}
</style>

