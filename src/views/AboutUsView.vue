<template>
  <div class="about">

    <!-- Our Story -->
    <section class="section">
      <div class="container">
        <div class="story-section">
          <div class="section-header text-center mb-5">
            <h2 class="mb-3">Our Story</h2>
            <p class="section-subtitle">
              From Star Atlas guild to platform for all gaming communities
            </p>
          </div>
          
          <div class="story-content card">
            <div class="story-text">
              <p>
                <strong>DecentraGuild was born from our experience running a Star Atlas guild.</strong> 
                We faced the same challenges every web3 gaming community encounters: managing treasuries, 
                coordinating events, rewarding contributors, and making fair decisions.
              </p>
              
              <p>
                Traditional tools like Discord and spreadsheets weren't enough. We needed transparency, 
                accountability, and true ownership of our community assets. So we built custom tools 
                for treasury management, rewards distribution, and governance.
              </p>
              
              <p>
                As our guild grew and thrived, we realized every gaming community could benefit from 
                these tools. That's when DecentraGuild was born - a platform to help any community 
                start their own decentralized guild with all the tools they need to succeed.
              </p>
              
              <div class="story-highlight">
                <h3>🎯 Our Mission</h3>
                <p>
                  To empower gaming communities with the tools they need to organize, govern, and 
                  thrive in the decentralized future of gaming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners & Ecosystem -->
    <section class="section partners-section">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="mb-3">dGuild Building Blocks</h2>
          <p class="section-subtitle">
            Built on the best infrastructure available on Solana, giving proven security and reliability for dGuilds to operate with.
          </p>
        </div>
        
        <div class="partners-grid">
          <!-- Row 1: Solana alone -->
          <div class="partners-row row-1">
            <div class="partner-card card text-center">
              <div class="partner-icon">
                <img src="/logo/solana-logo.png" alt="Solana" class="building-block-logo">
              </div>
              <h3>Solana</h3>
              <p>
                Built on Solana for fast, cheap transactions and robust infrastructure. 
                Perfect for gaming applications and community tools.
              </p>
            </div>
          </div>
          
          <!-- Row 2: Realms and Squads -->
          <div class="partners-row row-2">
            <div class="partner-card card text-center">
              <div class="partner-icon">
                <img src="/logo/realms-logo.png" alt="Realms" class="building-block-logo">
              </div>
              <h3>Realms</h3>
              <p>
                DAOs and voting are built on Realms protocol, giving dGuilds a powerful tool to govern their community.
              </p>
            </div>
            
            <div class="partner-card card text-center">
              <div class="partner-icon">
                <img src="/logo/squads-logo.png" alt="Squads Protocol" class="building-block-logo">
              </div>
              <h3>Squads</h3>
              <p>
                Treasury security powered by Squads multisig. Every dGuild treasury is 
                protected by battle-tested multisig technology.
              </p>
            </div>
          </div>
          
          <!-- Row 3: Escrow, Race, and More -->
          <div class="partners-row row-3">
            <div class="partner-card card text-center">
              <div class="partner-icon">
                <img src="/logo/escrow-logo.png" alt="Escrow" class="building-block-logo">
              </div>
              <h3>Escrow</h3>
              <p>
                Provides the g2p trading and token mint with vault escrow functionality, 
                ensuring secure and transparent transactions for gaming communities.
              </p>
            </div>
            
            <div class="partner-card card text-center">
              <div class="partner-icon">
                <img src="/logo/race-logo.png" alt="Race" class="building-block-logo">
              </div>
              <h3>Race</h3>
              <p>
                Provides poker minigames and tournament technology, bringing competitive 
                gaming experiences directly to dGuild communities.
              </p>
            </div>
            
            <div class="partner-card card text-center">
              <div class="partner-icon">
                <GameIcon icon="game-icons:radar-dish" size="lg" variant="primary" :glowing="false" icon-shape="none" />
              </div>
              <h3>More</h3>
              <p>
                We will find the best building blocks for us to deliver the best product. 
                If good tech is available, we will use it.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <!-- Join Us -->
    <section class="section join-section">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="mb-3">Join the Movement</h2>
          <p class="section-subtitle">
            Connect with fellow guild leaders, developers, and gaming enthusiasts
          </p>
        </div>
        
        <div class="join-grid">
          <FeatureCard 
            icon="logos:discord-icon"
            title="Discord Community"
            description="Join our Discord server to connect with other guild leaders, get support, and shape the future of DecentraGuild."
            :use-game-icon="true"
            icon-shape="none"
            icon-color="rgba(0, 212, 255, 0.8)"
            accent-color="rgba(0, 212, 255, 1)"
            custom-class="join-card"
          >
            <template #tags>
              <a href="https://discord.gg/pcSmsNsg" target="_blank" class="btn btn-primary">Join Discord</a>
              <div class="empty-space"></div>
            </template>
          </FeatureCard>
          
          <FeatureCard 
            icon="📧"
            title="Newsletter"
            description="We're busy building! Be the first to know when we have something to release."
            icon-shape="none"
            icon-color="rgba(0, 212, 255, 0.8)"
            accent-color="rgba(0, 212, 255, 1)"
            custom-class="join-card"
          >
            <template #tags>
              <div class="newsletter-form">
                <input 
                  type="email" 
                  v-model="email"
                  placeholder="Enter your email"
                  class="newsletter-input"
                >
                <button @click="subscribeNewsletter" class="btn btn-primary">
                  Subscribe
                </button>
              </div>
              <div class="empty-space"></div>
            </template>
          </FeatureCard>
          
          <FeatureCard 
            icon="simple-icons:x"
            title="Follow on X"
            description="Stay updated with the latest developments, announcements and news about our developments on our X account."
            :use-game-icon="true"
            icon-shape="none"
            icon-color="rgba(255, 255, 255, 0.8)"
            accent-color="rgba(0, 212, 255, 1)"
            custom-class="join-card"
          >
            <template #tags>
              <a href="https://x.com/DecentraGuild" target="_blank" class="btn btn-primary">Follow X</a>
              <div class="empty-space"></div>
            </template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section community-cta-section">
      <div class="container">
        <div class="community-cta text-center">
          <h2 class="mb-3">Ready to to try your dGuild?</h2>
          <p class="mb-4">
            Experience what makes DecentraGuild special with our interactive demo.
          </p>
                      <router-link to="/concept" class="btn btn-primary btn-large">
            Learn More
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GameIcon from '@/components/ui/GameIcon.vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'

const email = ref('')

const subscribeNewsletter = () => {
  if (email.value) {
    // Show popup that service is not available yet
    alert('Newsletter service is not available yet. We\'re working on it!')
    email.value = ''
  }
}
</script>

<style scoped>

/* Story */
.story-section {
  position: relative;
}

.story-section::before {
  content: '';
  position: absolute;
  top: 55%;
  left: -40%;
  transform: translateY(-50%);
  width: 650px;
  height: 650px;
  background-image: url('/logo/dguild-logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.3;
  z-index: 1;
  pointer-events: none;
}

.story-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  position: relative;
  z-index: 2;
}

.story-text p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.story-text strong {
  color: var(--text-primary);
}

.story-highlight {
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  margin-top: 32px;
}

.story-highlight h3 {
  color: var(--primary-color);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.story-highlight p {
  margin: 0;
  font-weight: 500;
}

/* Partners */
.partners-section {
  background: var(--secondary-bg);
  position: relative;
  overflow: hidden;
}

.partners-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: 1;
}

.partners-section::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-image: url('/Electros.png');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.3;
  z-index: 1;
  pointer-events: none;
}

.partners-section .container {
  position: relative;
  z-index: 2;
}

.partner-card {
  height: 340px;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 auto;
}

.partner-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.building-block-logo {
  height: 70px;
  width: auto;
  object-fit: contain;
}


/* Join */
.join-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.join-card .btn {
  position: relative;
  margin-bottom: 40px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.join-card .btn::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  border-radius: 1px;
}

/* Fix vertical centering for join cards */
.join-card .feature-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 120px 60px 200px 60px;
  min-height: 1000px;
  position: relative;
}

.join-card .feature-card-bg {
  display: none !important;
}

.join-card .feature-card {
  background: none !important;
  border: none !important;
  box-shadow: none !important;
  clip-path: none !important;
}

.join-card .feature-icon {
  margin-bottom: 60px;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}

.join-card .feature-icon .game-icon {
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}

.join-card .feature-title {
  margin-bottom: 300px;
}

.join-card .feature-description {
  margin-bottom: 300px;
  flex-grow: 1;
  line-height: 1.8;
  font-size: 1.2rem;
}

.join-card .feature-tags {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
}

/* Ensure all buttons are at the same vertical position */
.join-card .btn {
  position: relative;
  margin-bottom: 40px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Newsletter form specific adjustments */
.join-card .newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.join-card .newsletter-input {
  padding: 12px 16px;
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  color: var(--text-primary);
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  width: 100%;
}

.join-card .newsletter-input:focus {
  border-color: var(--primary-color);
}

.join-card .newsletter-input::placeholder {
  color: var(--text-muted);
}

/* Empty space to make cards longer */
.empty-space {
  height: 100px;
  width: 100%;
}



/* CTA */
.community-cta-section {
  background: var(--secondary-bg);
  border-top: 1px solid var(--border-color);
}

.community-cta {
  max-width: 600px;
  margin: 0 auto;
}

/* Partners Grid Layout */
.partners-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

/* Row 1: 1 card centered */
.row-1 {
  display: flex;
  justify-content: center;
}

/* Row 2: 2 cards side by side */
.row-2 {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

/* Row 3: 3 cards side by side */
.row-3 {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}


@media (max-width: 1024px) {
  .join-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .story-content {
    padding: 24px;
  }
  
  .row-1,
  .row-2,
  .row-3 {
    flex-direction: column;
    align-items: center;
  }
  
  .join-grid {
    grid-template-columns: 1fr;
  }
}

</style>
