<template>
  <div class="dashboard-card" :class="`variant-${variant}`">
    <div class="card-header">
      <div class="header-content">
        <GameIcon :icon="icon" size="md" :variant="variant" />
        <h3 class="card-title">{{ title }}</h3>
      </div>
      <div class="card-actions" v-if="$slots.actions">
        <slot name="actions"></slot>
      </div>
    </div>
    
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameIcon from '@/components/ui/GameIcon.vue'

interface Props {
  title: string
  icon: string
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary'
})
</script>

<style scoped>
.dashboard-card {
  background: var(--primary-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.dashboard-card:hover {
  border-color: var(--primary-color);
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-primary);
}

.card-actions {
  display: flex;
  gap: 0.5rem;
}

.card-content {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Variant-specific styling */
.variant-primary .card-title {
  color: var(--primary-color);
}

.variant-secondary .card-title {
  color: var(--primary-color);
}

.variant-accent .card-title {
  color: var(--primary-color);
}

.variant-success .card-title {
  color: var(--primary-color);
}

.variant-warning .card-title {
  color: var(--primary-color);
}

.variant-danger .card-title {
  color: var(--primary-color);
}
</style>

