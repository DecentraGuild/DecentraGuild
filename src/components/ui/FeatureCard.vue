<template>
  <div class="feature-card-wrapper" :class="customClass">
    <!-- Background banner layer -->
    <div class="feature-card-bg" :style="{ '--icon-color': iconColor, '--accent-color': accentColor }"></div>
    
    <!-- Main card content -->
    <div class="feature-card card">
      <div class="feature-icon" :style="{ '--icon-color': iconColor }">
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
      <h3 class="feature-title">{{ title }}</h3>
      <p class="feature-description">{{ description }}</p>
      <slot name="tags">
        <div v-if="tags && tags.length > 0" class="feature-tags">
          <span 
            v-for="tag in tags" 
            :key="tag" 
            class="tag"
            :style="{ '--tag-color': tagColor }"
          >
            {{ tag }}
          </span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameIcon from './GameIcon.vue'

interface Props {
  icon: string
  title: string
  description: string
  tags?: string[]
  customClass?: string
  iconColor?: string
  tagColor?: string
  accentColor?: string
  useGameIcon?: boolean
  iconSize?: 'sm' | 'md' | 'lg' | 'xl'
  iconVariant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
  iconShape?: 'hexagon' | 'shield' | 'circle' | 'square' | 'diamond' | 'none'
}

const props = withDefaults(defineProps<Props>(), {
  tags: () => [],
  customClass: '',
  iconColor: 'rgba(0, 212, 255, 0.8)',
  tagColor: 'rgba(0, 212, 255, 0.3)',
  accentColor: 'rgba(0, 212, 255, 1)',
  useGameIcon: false,
  iconSize: 'lg',
  iconVariant: 'primary',
  iconShape: 'hexagon'
})
</script>

<style scoped>
.feature-card-wrapper {
  position: relative;
  height: 100%;
  transition: all 0.3s ease;
}

/* Background banner layer - bright colored, slightly larger */
.feature-card-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Slightly larger banner shape for background */
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 60px), 50% 100%, 0 calc(100% - 60px));
  background: var(--accent-color);
  z-index: 1;
  transition: all 0.3s ease;
  opacity: 0.8;
}

/* Background banner pointed end - removed as clip-path handles the shape */

.feature-card {
  text-align: center;
  height: 100%;
  position: relative;
  overflow: visible;
  transition: all 0.3s ease;
  /* Medieval banner shape with longer 45-degree pointed bottom */
  clip-path: polygon(1% 0, 99% 0, 99% calc(100% - 62px), 50% 99%, 1% calc(100% - 62px));
  /* Remove border to use layered approach */
  border: none;
  background: var(--card-bg);
  z-index: 2;
}

/* Main card pointed end effect - removed as clip-path handles the shape */

/* Hover effects removed */

.feature-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  color: var(--icon-color);
  position: relative;
}

/* Emoji icon styling */
.emoji-icon {
  font-size: 3rem;
  display: block;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 32px;
}

.feature-tags {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.tag {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid var(--tag-color);
  color: var(--accent-color);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}


/* Responsive */
@media (max-width: 768px) {
  .feature-card {
    padding: 20px;
    /* Adjust banner shape for mobile */
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px));
  }
  
  .feature-card-bg {
    /* Adjust background banner shape for mobile */
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px));
  }
  
  /* Pseudo-element styles removed as clip-path handles the shape */
  
  .feature-icon {
    font-size: 2.5rem;
  }
  
  .emoji-icon {
    font-size: 2.5rem;
  }
  
  .feature-title {
    font-size: 1.2rem;
  }
  
  .feature-description {
    margin-bottom: 24px;
  }
  
}

@media (max-width: 480px) {
  .feature-card {
    /* Simpler banner shape for very small screens */
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), 50% 100%, 0 calc(100% - 20px));
  }
  
  .feature-card-bg {
    /* Simpler background banner shape for very small screens */
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), 50% 100%, 0 calc(100% - 20px));
  }
  
  .feature-description {
    margin-bottom: 20px;
  }
  
  /* Pseudo-element styles removed as clip-path handles the shape */
}
</style>
