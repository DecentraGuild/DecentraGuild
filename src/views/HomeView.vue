<template>
  <div class="home">
    <!-- Hero Section -->
    <HeroSection 
      :video-src="'/intro.mp4'"
      :title="'Create Your dGuild.<br />Build Your House.<br /><span class=\'text-gradient\'>Rule On-Chain.</span>'"
      :subtitle="'DecentraGuild lets you create and manage decentralized guilds with tools for missions, events, rewards, governance and more — powered by Solana.'"
    />

    <!-- Interactive Castle Infographic Section -->
    <section class="section castle-section">
      <div class="container">
        <SectionHeader 
          title="Explore a dGuild Castle"
          subtitle="Click on different areas of the castle to discover the powerful features that make your decentralized guild thrive."
        />
        
        <div class="castle-wrapper">
          <CastleInfographic />
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="section how-it-works-section">
      <div class="container">
        <SectionHeader 
          title="How It Works"
          subtitle="Four simple steps to power up your decentralized guild"
        />
        
        <div class="steps-flow">
          <!-- Progress Bar -->
          <ProgressSteps 
            :steps="progressSteps"
            :current-step="currentStep"
            :custom-colors="stepColors"
            @step-click="handleStepClick"
          />
          
          <!-- Step Cards -->
          <div class="steps-cards">
            <StepCard 
              v-for="step in stepsData" 
              :key="step.stepNumber"
              v-bind="step"
              :is-active="currentStep === step.stepNumber"
              @step-click="handleStepClick"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section with Heartbeat Castle Animation -->
    <section class="section experience-section">
      <div class="container">
        <div class="experience-content">
          <div class="castle-animation-wrapper">
            <HeartbeatCastle />
          </div>
          <div class="experience-text">
            <h2 class="experience-title">Do a pulse check!</h2>
            <p class="experience-subtitle">Check out our demo environment</p>
            <a href="https://dapp.decentraguild.com" target="_blank" class="btn btn-primary btn-large animate-glow">
              Try Demo
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why DecentraGuild Section -->
    <section class="section why-section">
      <div class="container">
        <SectionHeader title="Why DecentraGuild?" />
        
        <div class="why-grid">
          <FeatureCard 
            v-for="whyCard in whyCardsData" 
            :key="whyCard.title"
            v-bind="whyCard"
          />
        </div>
      </div>
    </section>

    <!-- Blueprint CTA Section -->
    <section class="section blueprint-cta-section">
      <div class="container">
        <div class="blueprint-cta-content">
          <h2 class="blueprint-cta-title">Ready to Build Your Guild?</h2>
          <p class="blueprint-cta-subtitle">Explore our comprehensive blueprint and start building your decentralized guild today</p>
          <router-link to="/blueprint" class="btn btn-primary btn-large">
            View Blueprint
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { 
  HeroSection, 
  FeatureCard, 
  StepCard, 
  ProgressSteps, 
  SectionHeader
} from '@/components/ui'
import CastleInfographic from '@/components/CastleInfographic.vue'
import HeartbeatCastle from '@/components/HeartbeatCastle.vue'
import { 
  stepsData, 
  progressSteps, 
  whyCardsData 
} from '@/data/features'

const currentStep = ref(1)

// Step colors - all blue cyan
const stepColors = [
  'rgba(0, 212, 255, 1)', // Establish - Blue Cyan
  'rgba(0, 212, 255, 1)', // Build - Blue Cyan
  'rgba(0, 212, 255, 1)', // Operate - Blue Cyan
  'rgba(0, 212, 255, 1)'  // Grow - Blue Cyan
]


const handleStepClick = (stepNumber: number) => {
  currentStep.value = stepNumber
}

let timelineInterval: number | null = null

const cycleTimeline = () => {
  // Cycle every 5 seconds
  timelineInterval = window.setInterval(() => {
    currentStep.value = (currentStep.value % 4) + 1
  }, 5000)
}

onMounted(() => {
  cycleTimeline()
})

onUnmounted(() => {
  if (timelineInterval) {
    clearInterval(timelineInterval)
  }
})
</script>

<style scoped>
/* How It Works Section */
.how-it-works-section {
  position: relative;
  overflow: hidden;
  background-image: url('/Wall.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.how-it-works-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.77);
  z-index: 1;
}

.how-it-works-section .container {
  position: relative;
  z-index: 2;
}

.steps-flow {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}

.steps-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  position: relative;
}

/* Experience Section */
.experience-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
  padding: 30px 0;
}

.experience-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 2000px;
  margin: 0 auto;
}

.castle-animation-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.experience-text {
  text-align: center;
  max-width: 600px;
}

.experience-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #00d4ff 0%, #0099cc 50%, #0066cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.experience-subtitle {
  font-size: 1.3rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .experience-section {
    padding: 60px 0;
  }
  
  .experience-content {
    gap: 40px;
  }
  
  .experience-title {
    font-size: 2.2rem;
  }
  
  .experience-subtitle {
    font-size: 1.1rem;
  }
}

/* Why DecentraGuild Section */
.why-section {
  position: relative;
  overflow: hidden;
  background: var(--primary-bg);
  background-image: url('/Wall.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
}

.why-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.77);
  z-index: 1;
}

.why-section .container {
  position: relative;
  z-index: 2;
}

/* Castle Section */
.castle-section {
  background: var(--secondary-bg);
  position: relative;
  padding: 24px 0;
}

.castle-wrapper {
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 20px;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 1400px) {
  .castle-wrapper {
    max-width: 1200px;
  }
}

@media (max-width: 1024px) {
  .castle-wrapper {
    max-width: 900px;
  }
  
  .why-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .steps-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .castle-wrapper {
    max-width: 100%;
    padding: 0 16px;
  }
  
  .steps-cards {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .why-grid {
    grid-template-columns: 1fr;
  }
}

/* Blueprint CTA Section */
.blueprint-cta-section {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  padding: 80px 0;
  text-align: center;
}

.blueprint-cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.blueprint-cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.blueprint-cta-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .blueprint-cta-section {
    padding: 60px 0;
  }
  
  .blueprint-cta-title {
    font-size: 2rem;
  }
  
  .blueprint-cta-subtitle {
    font-size: 1.1rem;
  }
}
</style>
