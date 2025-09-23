<template>
  <div class="progress-track">
    <div class="progress-line" :style="{ '--line-gradient': lineGradient }"></div>
    <div class="progress-steps">
      <div 
        v-for="(step, index) in steps" 
        :key="index"
        class="progress-step" 
        :class="{ active: currentStep === index + 1 }"
        :data-step="index + 1"
        @click="$emit('stepClick', index + 1)"
      >
        <div 
          class="step-circle"
          :style="{ '--step-color': getStepColor(index + 1) }"
        >
          {{ index + 1 }}
        </div>
        <div class="step-label">{{ step.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Step {
  label: string
  color?: string
}

interface Props {
  steps: Step[]
  currentStep: number
  lineGradient?: string
  customColors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  lineGradient: 'linear-gradient(90deg, rgba(0, 212, 255, 1) 0%, rgba(0, 212, 255, 1) 50%, rgba(0, 212, 255, 1) 100%)',
  customColors: () => ['rgba(0, 212, 255, 1)', 'rgba(0, 212, 255, 1)', 'rgba(0, 212, 255, 1)', 'rgba(0, 212, 255, 1)']
})

const emit = defineEmits<{
  stepClick: [stepNumber: number]
}>()

const getStepColor = (stepNumber: number): string => {
  return props.customColors[stepNumber - 1] || props.customColors[0]
}
</script>

<style scoped>
.progress-track {
  position: relative;
  margin-bottom: 60px;
}

.progress-line {
  position: absolute;
  top: 25px; /* Center of 50px circle (25px from top) */
  left: 15%;
  right: 10%;
  height: 3px;
  background: var(--line-gradient);
  border-radius: 2px;
  opacity: 0.3;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  position: relative;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.progress-step:hover {
  transform: translateY(-5px);
}

.step-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 3px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  margin-bottom: 12px;
}

.progress-step.active .step-circle,
.progress-step:hover .step-circle {
  border-color: var(--step-color);
  background: var(--step-color);
  color: white;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
}

.step-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.progress-step.active .step-label,
.progress-step:hover .step-label {
  color: var(--text-primary);
}

/* Responsive */
@media (max-width: 768px) {
  .progress-track {
    margin-bottom: 40px;
  }
  
  .progress-line {
    left: 5%;
    right: 5%;
  }
  
  .progress-steps {
    padding: 0 5%;
  }
  
  .step-circle {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .progress-line {
    top: 20px; /* Center of 40px circle on mobile (20px from top) */
  }
  
  .step-label {
    font-size: 0.8rem;
  }
}
</style>

