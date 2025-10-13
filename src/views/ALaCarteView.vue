<template>
  <div class="modules-view">
    <!-- Header Section -->
    <section class="section-header">
      <div class="container">
        <div class="header-content text-center">
          <h1 class="page-title">Build-Your-Own</h1>
          <p class="page-subtitle">
            While we work towards delivering the complete dGuild package, we offer modular room solutions that allow communities to use finished components and build their own customized toolkit.
          </p>
          <p class="page-description">
            This approach enables us to fund new smart contract deployments while providing immediate value to communities that need specific functionality. You can pick and choose the tools that work for your guild right now, then expand as more features become available.
          </p>
        </div>
      </div>
    </section>

    <!-- Coming Soon Banner -->
    <div class="coming-soon-banner">
      <h2 class="coming-soon-text">Coming Soon</h2>
    </div>

    <!-- Cards Section -->
    <section class="section-cards">
      <div class="container">
        <div class="cards-stacked">
          <div 
            v-for="(module, index) in modules" 
            :key="index" 
            class="card stacked-card"
            :class="{ 'reverse': index % 2 === 1 }"
          >
            <div class="card-image">
              <img :src="module.image" :alt="module.name" />
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ module.name }}</h3>
              <p class="card-description">{{ module.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Simple CTA Section -->
    <section class="section-cta">
      <div class="container">
        <div class="cta-content text-center">
          <p class="cta-text">
            Ready to build your custom guild infrastructure?
          </p>
          <div class="cta-buttons">
            <router-link to="/about" class="btn btn-secondary">
              Learn More
            </router-link>
            <router-link to="/about" class="btn btn-primary">
              Contact Us
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Module data
const modules = ref([
  {
    name: "Foundry Module",
    description: "Modules for token creation, tokenwrappers with escrows vaults and NFT minting system with customizable parameters",
    image: "/alacarte/foundrymodule.webp"
  },
  {
    name: "Armory Module", 
    description: "G2P (Guild-to-Player) trading platform with custom whitelist and trading fees.",
    image: "/alacarte/Armorymodule.webp"
  },
  {
    name: "Gatekeeping Module",
    description: "Create and maintain a whitelist of wallets and use this on your website to control access.",
    image: "/alacarte/Gatekeepingmodule.webp"
  },
  {
    name: "Tavern Module",
    description: "Raffle system for community engagement and entertainment.",
    image: "/alacarte/tavernmodule.webp"
  },
  {
    name: "Custom Skin Module",
    description: "Custom Skin package for a dGuild dapp with theming and branding options.",
    image: "/alacarte/CustomSkinmodule.webp"
  }
])
</script>

<style scoped>
/* Header Section */
.section-header {
  padding: 80px 0 40px 0;
  background: var(--secondary-bg);
  position: relative;
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  font-weight: 900;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}

.page-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin: 0 0 20px 0;
  line-height: 1.6;
}

.page-description {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0 0 40px 0;
  line-height: 1.6;
  opacity: 0.9;
}


/* Coming Soon Banner */
.coming-soon-banner {
  background: rgba(0, 0, 0, 0.8);
  padding: 16px 0;
  text-align: center;
  border-top: 2px solid var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
}

.coming-soon-text {
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Cards Section */
.section-cards {
  padding: 60px 0;
  background: var(--primary-bg);
}

/* Stacked Layout */
.cards-stacked {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Card Styles */
.card {
  background: var(--card-bg);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--primary-color);
}

.card-image {
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 24px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 12px 0;
}

.card-description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Stacked Card Specific */
.stacked-card {
  display: flex;
  align-items: center;
  min-height: 300px;
  padding: 0;
}

.stacked-card .card-image {
  flex: 0 0 50%;
  height: 300px;
}

.stacked-card .card-content {
  flex: 1;
  padding: 40px;
}

.stacked-card.reverse {
  flex-direction: row-reverse;
}


/* CTA Section */
.section-cta {
  padding: 60px 0;
  background: var(--secondary-bg);
  border-top: 1px solid var(--border-color);
}

.cta-content {
  max-width: 500px;
  margin: 0 auto;
}

.cta-text {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .page-subtitle {
    font-size: 1.1rem;
  }
  
  .stacked-card {
    flex-direction: column;
    min-height: auto;
  }
  
  .stacked-card .card-image {
    flex: none;
    height: 200px;
  }
  
  .stacked-card .card-content {
    padding: 24px;
  }
  
  .stacked-card.reverse {
    flex-direction: column;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 2rem;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .card-title {
    font-size: 1.3rem;
  }
  
  .card-description {
    font-size: 0.9rem;
  }
}
</style>
