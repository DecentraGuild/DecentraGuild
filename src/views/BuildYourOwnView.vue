<template>
  <div class="modules-view">
    <!-- Header Section -->
    <section class="section-header">
      <div class="container">
        <div class="header-content text-center">
          <h1 class="page-title">Build-Your-Own</h1>
          <p class="page-subtitle">
            Use only what you need. Add more as you grow.
          </p>
        </div>
      </div>
    </section>

    <!-- Staged Banner -->
    <div class="staged-banner">
      <h2 class="staged-banner-text">Staged</h2>
    </div>

    <!-- Staged: Marketplace block -->
    <section class="section-staged">
      <div class="container">
        <div class="staged-cards">
          <div class="card stacked-card staged-card">
            <div class="card-image">
              <img
                src="/alacarte/Marketplacemodule.png"
                alt="Marketplace"
                loading="eager"
                decoding="async"
                width="600"
                height="300"
              />
            </div>
            <div class="card-content">
              <h3 class="card-title">Marketplace</h3>
              <p class="card-description">
                Create fully branded Solana Marketplace in minutes, for internal use or trading hub with your community.
              </p>
              <a :href="LINKS.marketplace" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                Open Marketplace
              </a>
            </div>
          </div>
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
            :class="{ 'reverse': index % 2 === 0 }"
          >
            <div class="card-image">
              <img 
                :src="module.image" 
                :alt="module.name"
                :loading="index < 2 ? 'eager' : 'lazy'"
                :fetchpriority="index === 0 ? 'high' : index === 1 ? 'auto' : 'low'"
                decoding="async"
                width="600"
                height="300"
              />
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
            <router-link :to="ROUTES.about" class="btn btn-secondary">
              Learn More
            </router-link>
            <router-link :to="ROUTES.about" class="btn btn-primary">
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
import { LINKS, ROUTES } from '@/config/site'

// Module data
const modules = ref([
  {
    name: "Gate Room",
    description: "Create and maintain a whitelist of wallets and use this on your website to control access or use tokenholder snapshots",
    image: "/alacarte/Gatekeepingmodule.webp"
  },
  {
    name: "Foundry Room",
    description: "Modules for token creation, token wrappers with escrows vaults and NFT minting system with customizable parameters",
    image: "/alacarte/foundrymodule.webp"
  },
  {
    name: "Armory Room", 
    description: "Modules for Airdrops, G2P (Guild-to-Player) trading platform with custom whitelist and trading fees",
    image: "/alacarte/Armorymodule.webp"
  },
  {
    name: "Quest Room",
    description: "A module that allows you to create a full on-chain quest system for on-chain collaboration",
    image: "/alacarte/Questmodule.webp"
  },
  {
    name: "Tavern Room",
    description: "Modules for planning on-chain Events, Raffles, Poker or host a Dicegame for community engagement and entertainment.",
    image: "/alacarte/tavernmodule.webp"
  },
  {
    name: "Trophy Room",
    description: "Modules to track and reward for participating in any of the BYO-rooms.",
    image: "/alacarte/Trophymodule.webp"
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

/* Staged Banner (orange – not fully live yet) */
.staged-banner {
  background: rgba(234, 88, 12, 0.1);
  padding: 16px 0;
  text-align: center;
  border-top: 2px solid #ea580c;
  border-bottom: 2px solid #ea580c;
}

.staged-banner-text {
  color: #ea580c;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-staged {
  padding: 60px 0;
  background: var(--primary-bg);
}

.staged-cards {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.staged-card {
  border-color: rgba(234, 88, 12, 0.5);
  box-shadow: 0 4px 20px rgba(234, 88, 12, 0.1);
}

.staged-card .btn-primary {
  margin-top: 16px;
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
  border: 1px solid var(--border-color);
}

.card-image {
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 2 / 1;
  display: block;
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

