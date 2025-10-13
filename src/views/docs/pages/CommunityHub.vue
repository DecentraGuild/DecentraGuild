<template>
  <DocPageLayout
    title="Community Hub"
    description="Where guild identity comes to life through branding, profiles, and community tools"
  >
    <div class="content-section">
      <p class="lead">
        The <strong>Community Hub</strong> is where guild identity comes to life through Guild branding, member profiles, dApp themes, 
        and a vast variety of community tools.
      </p>
    </div>
    
    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:castle" /></div>
        <h4>dGuild Identity</h4>
        <p>Establishes common goals, culture, and roles that define your guild's unique character and shared purpose.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:skills" /></div>
        <h4>Member Profile</h4>
        <p>Avatars, tracking systems, and personalized experiences that give each member their own identity within the guild.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:palette" /></div>
        <h4>Branding Adjustments</h4>
        <p>dApp themes, custom phrasing, and icons that make the platform truly yours and reflect your guild's personality.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:backup" /></div>
        <h4>Community</h4>
        <p>The goal is to provide communities with the right tools for reaching their own goals and building lasting connections.</p>
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
