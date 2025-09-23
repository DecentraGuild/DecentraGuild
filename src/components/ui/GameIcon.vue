<template>
  <div 
    class="game-icon" 
    :class="[`size-${size}`, `variant-${variant}`, `shape-${iconShape}`, { 'glowing': glowing }]"
    :style="{ 
      '--icon-color': iconColor, 
      '--glow-color': glowColor,
      '--border-width': borderWidth,
      '--border-color': borderColor,
      '--background-color': backgroundColor,
      '--shadow-color': shadowColor
    }"
  >
    <div v-if="iconShape !== 'none'" class="icon-bg" :class="`shape-${iconShape}`"></div>
    <Icon 
      :icon="icon" 
      class="icon-content"
      :width="iconSize" 
      :height="iconSize"
    />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { useIconSystem } from '@/composables/IconSystemController'

interface Props {
  icon: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
  iconColor?: string
  glowColor?: string
  glowing?: boolean
  iconShape?: 'hexagon' | 'shield' | 'circle' | 'square' | 'diamond' | 'none'
  borderWidth?: string
  borderColor?: string
  backgroundColor?: string
  shadowColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'primary',
  glowing: true,
  iconShape: 'hexagon'
})

const { getIconStyle } = useIconSystem()

const iconSize = computed(() => {
  const sizes = {
    sm: 24,  // Increased from 16 to 24 (75% of 32px container)
    md: 36,  // Increased from 24 to 36 (75% of 48px container)
    lg: 48,  // Increased from 32 to 48 (75% of 64px container)
    xl: 72   // Increased from 48 to 72 (75% of 96px container)
  }
  return sizes[props.size]
})

const defaultIconColor = computed(() => {
  const colors = {
    primary: '#00d4ff',
    secondary: '#6366f1',
    accent: '#f59e0b',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444'
  }
  return colors[props.variant]
})

const defaultGlowColor = computed(() => {
  if (props.glowColor) return props.glowColor
  return props.iconColor || defaultIconColor.value
})

// Get styles from icon system controller
const iconStyle = computed(() => getIconStyle())

const borderWidth = computed(() => props.borderWidth || iconStyle.value.borderWidth)
const borderColor = computed(() => props.borderColor || iconStyle.value.borderColor)
const backgroundColor = computed(() => props.backgroundColor || iconStyle.value.backgroundColor)
const shadowColor = computed(() => props.shadowColor || iconStyle.value.shadowColor)
</script>

<style scoped>
.game-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

/* Icon Background - Base styles */
.icon-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  border: var(--border-width) solid var(--border-color);
  background: var(--background-color);
}

/* Shape Variants */
.shape-hexagon {
  clip-path: polygon(50% 10%, 100% 11%, 100% 75%, 50% 100%, 0% 75%, 0% 10%);
}

.shape-shield {
  clip-path: polygon(50% 0%, 100% 0%, 100% 60%, 50% 100%, 0% 60%);
}

.shape-circle {
  border-radius: 50%;
}

.shape-square {
  border-radius: 4px;
}

.shape-diamond {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

/* Icon Content */
.icon-content {
  position: relative;
  z-index: 1;
  color: var(--icon-color, #00d4ff);
  transition: all 0.3s ease;
}

/* Size Variants */
.size-sm {
  width: 32px;
  height: 32px;
}

.size-md {
  width: 48px;
  height: 48px;
}

.size-lg {
  width: 64px;
  height: 64px;
}

.size-xl {
  width: 96px;
  height: 96px;
}

/* Glowing Effect */
.game-icon.glowing .icon-bg {
  /* Glow effects removed */
}

.game-icon.glowing .icon-content {
  /* Glow effects removed */
}

/* Hover Effects */
.game-icon:hover {
  transform: scale(1.1);
}

.game-icon:hover .icon-bg {
  border-color: var(--glow-color, #00d4ff);
}

.game-icon:hover .icon-content {
  /* Glow effects removed */
}

/* Variant-specific colors */
.variant-primary .icon-bg {
  border-color: #00d4ff;
}

.variant-secondary .icon-bg {
  border-color: #6366f1;
}

.variant-accent .icon-bg {
  border-color: #f59e0b;
}

.variant-success .icon-bg {
  border-color: #10b981;
}

.variant-warning .icon-bg {
  border-color: #f59e0b;
}

.variant-danger .icon-bg {
  border-color: #ef4444;
}

/* No Background Mode - when shape is 'none' */
.shape-none {
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}

.shape-none .icon-content {
  color: var(--icon-color, #00d4ff);
}

.shape-none:hover .icon-content {
  /* Glow effects removed */
}

/* Animation for continuous glow - removed */
</style>
