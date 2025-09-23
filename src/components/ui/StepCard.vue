<template>
  <div 
    class="step-card" 
    :class="{ active: isActive, [customClass]: customClass }"
    :data-step="stepNumber"
    :style="{ '--accent-color': accentColor }"
    @click="$emit('stepClick', stepNumber)"
  >
    <div class="step-header">
      <div class="step-icon" :style="{ '--icon-color': iconColor }">
        <GameIcon 
          v-if="useGameIcon" 
          :icon="icon" 
          :size="iconSize" 
          :variant="iconVariant"
          :iconColor="iconColor"
          :glowColor="iconColor"
          :iconShape="iconShape"
        />
        <span v-else class="emoji-icon">{{ icon }}</span>
      </div>
      <h3 class="step-title">{{ title }}</h3>
    </div>
    <p class="step-description">{{ description }}</p>
    <div class="step-features">
      <div 
        v-for="feature in features" 
        :key="feature"
        class="feature-item"
        :style="{ '--dot-color': dotColor }"
      >
        <span class="feature-dot"></span>
        <span>{{ feature }}</span>
      </div>
    </div>
    <slot name="additional-content"></slot>
  </div>
</template>

<script setup lang="ts">
import GameIcon from './GameIcon.vue'

interface Props {
  stepNumber: number
  icon: string
  title: string
  description: string
  features: string[]
  isActive?: boolean
  customClass?: string
  iconColor?: string
  dotColor?: string
  accentColor?: string
  useGameIcon?: boolean
  iconSize?: 'sm' | 'md' | 'lg' | 'xl'
  iconVariant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
  iconShape?: 'hexagon' | 'shield' | 'circle' | 'square' | 'diamond' | 'none'
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false,
  customClass: '',
  iconColor: 'rgba(0, 212, 255, 0.8)',
  dotColor: 'rgba(0, 212, 255, 1)',
  accentColor: 'rgba(0, 212, 255, 1)',
  useGameIcon: false,
  iconSize: 'lg',
  iconVariant: 'primary',
  iconShape: 'hexagon'
})

const emit = defineEmits<{
  stepClick: [stepNumber: number]
}>()
</script>

<style scoped>
.step-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 32px;
  box-shadow: var(--shadow-card);
  transition: all 0.3s ease;
  opacity: 0.7;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

  .step-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), var(--icon-color));
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

.step-card:hover::before,
.step-card.active::before {
  transform: scaleX(1);
}

.step-card:hover,
.step-card.active {
  opacity: 1;
  transform: translateY(-5px);
  border-color: var(--accent-color);
  box-shadow: var(--shadow-card), 0 0 20px var(--accent-color);
}

/* Step Header */
.step-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.step-icon {
  font-size: 2rem;
  color: var(--icon-color);
  transition: transform 0.3s ease;
}

.step-card:hover .step-icon,
.step-card.active .step-icon {
  transform: scale(1.1);
}

.step-title {
  color: var(--text-primary);
  font-size: 1.3rem;
  margin: 0;
  font-weight: 700;
}

.step-card.active .step-title {
  color: white;
}

.step-description {
  color: var(--text-secondary);
  margin-bottom: 24px;
  line-height: 1.6;
}

.step-card.active .step-description {
  color: white;
}

/* Step Features */
.step-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.step-card.active .feature-item {
  color: white;
}

.feature-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--dot-color);
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .step-card {
    padding: 24px;
  }
  
  .step-header {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .step-icon {
    font-size: 1.8rem;
  }
  
  .step-title {
    font-size: 1.2rem;
  }
}
</style>
