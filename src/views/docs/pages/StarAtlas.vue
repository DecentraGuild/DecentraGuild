<template>
  <DocPageLayout
    title="Star Atlas Integration"
    description="Complete Star Atlas integration for dGuilds - manage fleets, assets, and operations directly from your guild"
  >
    <div class="content-section">
      <p class="lead">
        Our first-class Star Atlas integration provides complete operational control for your dGuild.
      </p>
      
      <p>This integration transforms your dGuild from a simple community into a fully operational Star Atlas organization. 
         Manage fleets, coordinate resources, and participate in the Star Atlas economy directly from your guild interface.</p>
      
      <p>Every aspect of Star Atlas gameplay can be managed through your dGuild, from individual ship operations to large-scale fleet coordination and resource management.</p>
    </div>
    
    <div class="star-atlas-features">
      <div class="star-atlas-category">
        <h4><Icon icon="game-icons:person" /> Profile & Identity Management</h4>
        <ul>
          <li>Direct game profile creation</li>
          <li>Setup permissions to hotwallets</li>
          <li>Run operations while assets stay safe within the multisig</li>
        </ul>
      </div>
      
      <div class="star-atlas-category">
        <h4><Icon icon="game-icons:drawbridge" /> Asset Management</h4>
        <ul>
          <li>Locker participation and management</li>
          <li>Bring assets into Sage environment</li>
          <li>Multi-signature asset protection</li>
        </ul>
      </div>
      
      <div class="star-atlas-category">
        <h4><Icon icon="game-icons:rocket" /> Fleet Operations</h4>
        <ul>
          <li>Sage fleet creation and management</li>
          <li>Coordinated fleet operations</li>
          <li>Resource allocation and optimization</li>
        </ul>
      </div>
      
      <div class="star-atlas-category">
        <h4><Icon icon="game-icons:resize" /> Other Operations</h4>
        <ul>
          <li>Lending and borrowing systems</li>
          <li>In-game marketplace integration</li>
          <li>Link quest board to marketplace orders</li>
        </ul>
      </div>
    </div>
    
    <div class="integration-benefits">
      <h3>Why Star Atlas Integration Matters</h3>
      <div class="benefits-grid">
        <div class="benefit-card">
          <Icon icon="game-icons:shield" class="benefit-icon" />
          <h4>Secure Operations</h4>
          <p>All Star Atlas operations are protected by multisig security, ensuring your guild's assets are never at risk.</p>
        </div>
        
        <div class="benefit-card">
          <Icon icon="game-icons:team-up" class="benefit-icon" />
          <h4>Coordinated Play</h4>
          <p>Coordinate fleet operations, resource sharing, and strategic decisions through your guild's governance system.</p>
        </div>
        
        <div class="benefit-card">
          <Icon icon="game-icons:treasure-map" class="benefit-icon" />
          <h4>Quest Integration</h4>
          <p>Link Star Atlas missions directly to your guild's quest board for seamless task management and rewards.</p>
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

.star-atlas-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 32px 0;
}

.star-atlas-category {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  transition: all 0.3s ease;
}

.star-atlas-category:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.star-atlas-category h4 {
  color: var(--text-primary);
  margin-bottom: 16px;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.star-atlas-category ul {
  margin: 0;
  padding-left: 20px;
}

.star-atlas-category li {
  margin-bottom: 8px;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

.integration-benefits {
  margin-top: 48px;
  background: var(--primary-bg);
  border-radius: var(--border-radius);
  padding: 32px;
  border: 1px solid var(--border-color);
}

.integration-benefits h3 {
  color: var(--primary-color);
  margin-bottom: 24px;
  font-size: 1.4rem;
  text-align: center;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.benefit-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.benefit-icon {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 12px;
}

.benefit-card h4 {
  color: var(--text-primary);
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: 600;
}

.benefit-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .star-atlas-features {
    grid-template-columns: 1fr;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .integration-benefits {
    padding: 24px;
  }
}
</style>
