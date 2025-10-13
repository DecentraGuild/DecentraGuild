<template>
  <DocPageLayout
    title="Trophy Room"
    description="Where guild accomplishments are celebrated and eternalized"
  >
    <div class="content-section">
      <p class="lead">
        The <strong>Trophy Room</strong> is where guild accomplishments are celebrated and eternalized.
      </p>
      
      <p>This is where glory lives forever. Every achievement, milestone, and victory is immortalized through minted badges and NFTs that serve as permanent records of excellence. The Trophy Room transforms fleeting moments of success into lasting digital artifacts that tell the story of your guild's journey.</p>
      
      <p>These honors represent the highest recognition within the guild, celebrating both individual excellence and collective achievement. By showcasing progress and recognition, the Trophy Room proves that every contribution matters and that individual excellence strengthens the entire guild.</p>
    </div>
    
    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:person" /></div>
        <h4>Personal Achievements</h4>
        <p>Individual accomplishments that showcase member growth and contribution. These achievements recognize personal milestones, skill development, and exceptional performance that elevates both the member and the guild.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:castle" /></div>
        <h4>dGuild Achievements</h4>
        <p>Collective accomplishments that celebrate the guild's progress and victories. These achievements represent the combined efforts of all members working together toward common goals and shared success.</p>
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
