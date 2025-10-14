<template>
  <section class="hero-section section-hero" :class="customClass">
    <!-- Video Background -->
    <video 
      v-if="videoSrc && !videoError"
      class="hero-video" 
      autoplay 
      muted 
      playsinline
      loop
      preload="auto"
      @ended="onVideoEnd"
      @error="onVideoError"
      @loadeddata="onVideoLoaded"
      ref="heroVideo"
    >
      <source :src="videoSrc" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    
    <!-- Fallback background if video fails -->
    <div v-if="videoError" class="hero-fallback-bg"></div>
    
    <div class="container">
      <div class="hero-content text-center" :class="{ 'text-lit': isTextLit }">
        <h1 class="hero-title mb-4" v-html="title"></h1>
        <p class="hero-subtitle mb-5">{{ subtitle }}</p>
        
        <div v-if="primaryCtaText || primaryCtaLink || secondaryCtaText || $slots.cta" class="hero-cta flex justify-center gap-3">
          <slot name="cta">
            <router-link v-if="primaryCtaLink" :to="primaryCtaLink" class="btn btn-primary btn-large animate-glow">
              {{ primaryCtaText }}
            </router-link>
            <button v-if="secondaryCtaText" class="btn btn-secondary btn-large" @click="$emit('secondaryCtaClick')">
              {{ secondaryCtaText }}
            </button>
          </slot>
        </div>
      </div>
    </div>
    
    <!-- Background Effects -->
    <div class="hero-bg">
      <div class="hero-grid" :style="{ '--grid-color': gridColor }"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface Props {
  title?: string
  subtitle?: string
  videoSrc?: string
  primaryCtaText?: string
  primaryCtaLink?: string
  secondaryCtaText?: string
  customClass?: string
  glowColor?: string
  gridColor?: string
  enableTextAnimation?: boolean
  animationDelay?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Create Your dGuild.<br />Build Your House.<br /><span class="text-gradient">Rule On-Chain.</span>',
  subtitle: 'DecentraGuild lets you create and manage decentralized guilds with tools for missions, events, rewards, governance and more — powered by Solana.',
  customClass: '',
  glowColor: 'rgba(0, 212, 255, 0.8)',
  gridColor: 'rgba(0, 212, 255, 0.1)',
  enableTextAnimation: true,
  animationDelay: 3500
})

const emit = defineEmits<{
  secondaryCtaClick: []
}>()

let timelineInterval: number | null = null
const heroVideo = ref<HTMLVideoElement>()
const isTextLit = ref(false)
const videoError = ref(false)

const onVideoEnd = () => {
  // Video ended, restart it for looping
  if (heroVideo.value) {
    heroVideo.value.currentTime = 0
    heroVideo.value.play().catch(() => {})
  }
}

const onVideoError = () => {
  videoError.value = true
}

const onVideoLoaded = () => {
  // Ensure video plays
  if (heroVideo.value) {
    heroVideo.value.play().catch(() => {})
  }
}

const startTextAnimation = () => {
  if (props.enableTextAnimation) {
    setTimeout(() => {
      isTextLit.value = true
    }, props.animationDelay)
  }
}

onMounted(() => {
  startTextAnimation()
})

onUnmounted(() => {
  if (timelineInterval) {
    clearInterval(timelineInterval)
  }
})
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  overflow: hidden;
  min-height: 70%;
  height: calc(100vw / 2.36);
  max-height: 90vh;
  display: flex;
  align-items: center;
}

/* Video Background */
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

/* Fallback background */
.hero-fallback-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
  z-index: -2;
}

.hero-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  transition: text-shadow 0.8s ease;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  font-weight: 500;
}

.hero-cta {
  margin-bottom: 40px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

/* Dark overlay for better text readability */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.6) 100%);
  z-index: 0;
}

/* Ensure hero content is above the overlay */
.hero-content {
  position: relative;
  z-index: 1;
  transition: all 0.8s ease;
}

/* ===== ANIMATION CONFIGURATION ===== */
:root {
  --initial-fade-delay: 0.2s;
  --initial-fade-duration: 1s;
  --text-light-duration: 1.5s;
  --text-light-scale: 1.02;
}

/* ===== INITIAL TEXT APPEARANCE ===== */
.hero-content:not(.text-lit) {
  opacity: 0;
  animation: fadeInUp var(--initial-fade-duration) ease-out var(--initial-fade-delay) forwards;
}

/* ===== TEXT LIGHTING EFFECT ===== */
.hero-content.text-lit {
  animation: textLightUp var(--text-light-duration) ease-out forwards;
  opacity: 1 !important;
}

/* ===== ANIMATION KEYFRAMES ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content.text-lit .hero-title {
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8),
    0 0 20px var(--glow-color),
    0 0 40px var(--glow-color);
}

.hero-content.text-lit .hero-subtitle {
  text-shadow: 
    1px 1px 2px rgba(0, 0, 0, 0.8);
  color: rgba(255, 255, 255, 1);
}

@keyframes textLightUp {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(var(--text-light-scale));
  }
  100% {
    transform: scale(1);
  }
}



.hero-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
}



/* Responsive */
@media (max-width: 768px) {
  .hero-cta {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
