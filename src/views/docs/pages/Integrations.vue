<template>
  <DocPageLayout
    title="Integrations"
    description="Extending your guild's reach through connections to external platforms and ecosystems"
  >
    <div class="content-section">
      <p class="lead">
        Integrations extend the guild's reach beyond its own walls.
      </p>
      
      <p>This is how your guild connects to the wider world and operates seamlessly across multiple platforms.
         From Discord communities to GitHub repositories, from Star Atlas fleets to marketplace interactions, integrations transform your dGuild from an isolated collective into a connected powerhouse.</p>
      
      <p>Guilds can plug into multiple ecosystems, operate 24/7, and scale across games. It's the difference between being isolated and being connected to everything that matters.</p>
    </div>
    
    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:love-injection" /></div>
        <h4>Web2 Plugins</h4>
        <p>Discord bot integration provides real-time notifications, member management, and automated updates. 
          GitHub integration supports technical guilds with code repositories, project management, 
          and collaborative development workflows.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:magic-gate" /></div>
        <h4>Game Ecosystems</h4>
        <p>Connect to gaming platforms and ecosystems for seamless gameplay integration. 
          Manage in-game assets, coordinate operations, and participate in game economies 
          directly from your dGuild interface.</p>
      </div>
    </div>
    
    <div class="integration-types">
      <h3>Available Integrations</h3>
      <div class="integration-cards">
        <div class="integration-card">
          <Icon icon="game-icons:love-injection" class="integration-icon" />
          <h4>Discord</h4>
          <p>Real-time notifications, member management, and automated updates for your community.</p>
        </div>
        
        <div class="integration-card">
          <Icon icon="game-icons:github" class="integration-icon" />
          <h4>GitHub</h4>
          <p>Code repositories, project management, and collaborative development workflows.</p>
        </div>
        
        <div class="integration-card">
          <Icon icon="game-icons:star" class="integration-icon" />
          <h4>Star Atlas</h4>
          <p>Complete operational control for Star Atlas fleets, assets, and gameplay. <router-link to="/docs/star-atlas">Learn more →</router-link></p>
        </div>
        
        <div class="integration-card">
          <Icon icon="game-icons:magic-gate" class="integration-icon" />
          <h4>More Games</h4>
          <p>Connect to other gaming platforms and ecosystems for seamless gameplay integration.</p>
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

.integration-types {
  margin-top: 40px;
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 32px;
  border: 1px solid var(--border-color);
}

.integration-types h3 {
  color: var(--primary-color);
  margin-bottom: 24px;
  font-size: 1.4rem;
  text-align: center;
}

.integration-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.integration-card {
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.integration-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.integration-icon {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 16px;
}

.integration-card h4 {
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 1.1rem;
  font-weight: 600;
}

.integration-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

.integration-card a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

.integration-card a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .integration-cards {
    grid-template-columns: 1fr;
  }
  
  .integration-types {
    padding: 24px;
  }
}
</style>
