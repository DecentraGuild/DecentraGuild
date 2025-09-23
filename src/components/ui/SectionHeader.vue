<template>
  <div class="section-header text-center" :class="customClass">
    <h2 class="section-title mb-3" :class="titleClass">{{ title }}</h2>
    <p v-if="subtitle" class="section-subtitle mb-4" :class="subtitleClass">{{ subtitle }}</p>
    <slot name="highlight">
      <div v-if="highlightText" class="intro-highlight">
        <p class="highlight-text">{{ highlightText }}</p>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  highlightText?: string
  customClass?: string
  titleClass?: string
  subtitleClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: '',
  highlightText: '',
  customClass: '',
  titleClass: '',
  subtitleClass: ''
})
</script>

<style scoped>
.section-header {
  margin-bottom: 48px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 16px;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Intro Highlight */
.intro-highlight {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(139, 92, 246, 0.1));
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: var(--border-radius-lg);
  padding: 24px;
  margin: 32px auto;
  max-width: 800px;
  position: relative;
  overflow: hidden;
}

.intro-highlight::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: shimmer 3s ease-in-out infinite;
}

.highlight-text {
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  position: relative;
  z-index: 1;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Responsive */
@media (max-width: 768px) {
  .section-header {
    margin-bottom: 32px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .intro-highlight {
    padding: 20px;
    margin: 24px auto;
  }
  
  .highlight-text {
    font-size: 1rem;
  }
}
</style>

