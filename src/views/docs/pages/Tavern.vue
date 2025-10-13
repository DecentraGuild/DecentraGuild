<template>
  <DocPageLayout
    title="Tavern"
    description="The social gaming hall for fun, rivalry, and entertainment"
  >
    <div class="content-section">
      <p class="lead">
        The <strong>Tavern</strong> is the social gaming hall — a place for fun, rivalry, and entertainment.
      </p>
      
      <p>This is where bonds are forged and memories are made. The competitive spirit that drives members to pursue honors in the Trophy Room finds its playful expression here, creating the social fabric that holds your guild together.</p>
      
      <p>These activities build camaraderie, strengthen bonds, and bring joy between serious quests. It's the place where work becomes play and strangers become family.</p>
    </div>
    
    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:calendar" /></div>
        <h4>Events</h4>
        <p>Community gatherings, celebrations, and special occasions that bring members together. These events strengthen bonds, celebrate achievements, and create lasting memories within the guild.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:gamepad" /></div>
        <h4>Mini Games</h4>
        <p>Quick, fun games and activities that provide entertainment and friendly competition. These bite-sized games offer relaxation and casual interaction between more serious guild activities.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:trophy" /></div>
        <h4>Tournaments</h4>
        <p>Structured competitive events that showcase member skills and determination. These tournaments channel the competitive spirit into organized contests with clear rules and exciting prizes.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:coinflip" /></div>
        <h4>Challenges</h4>
        <p>Skill-based competitions and tests that push members to improve and excel. These challenges create opportunities for personal growth while maintaining the competitive edge that drives excellence.</p>
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
