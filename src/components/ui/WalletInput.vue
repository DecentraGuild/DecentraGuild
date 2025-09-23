<template>
  <div class="wallet-input">
    <div class="input-section">
      <label :for="inputId">{{ label }}</label>
      <div class="amount-input-group">
        <input 
          :id="inputId"
          v-model="localAmount" 
          type="number" 
          :placeholder="placeholder"
          class="form-input amount-input"
          @input="updateAmount"
        />
        <span class="token-symbol">{{ tokenSymbol }}</span>
      </div>
    </div>
    
    <div class="wallet-info">
      <div class="wallet-balance">
        <span class="balance-label">Wallet Balance:</span>
        <span class="balance-value">{{ formatNumber(walletBalance) }} {{ tokenSymbol }}</span>
      </div>
      <div class="quick-actions">
        <button @click="setAmount(25)" class="quick-btn">25%</button>
        <button @click="setAmount(50)" class="quick-btn">50%</button>
        <button @click="setAmount(100)" class="quick-btn">MAX</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Props {
  modelValue: number
  label: string
  tokenSymbol: string
  walletBalance: number
  placeholder?: string
  inputId?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '0',
  inputId: 'wallet-input'
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const localAmount = ref(props.modelValue)

// Watch for external changes to modelValue
watch(() => props.modelValue, (newValue) => {
  localAmount.value = newValue
})

// Watch for local changes and emit updates
watch(localAmount, (newValue) => {
  emit('update:modelValue', newValue)
})

const updateAmount = () => {
  emit('update:modelValue', localAmount.value)
}

const setAmount = (percentage: number) => {
  const amount = Math.floor((props.walletBalance * percentage) / 100)
  localAmount.value = amount
  emit('update:modelValue', amount)
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toLocaleString()
}
</script>

<style scoped>
.wallet-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-section label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

.amount-input-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.amount-input {
  flex: 1;
}

.token-symbol {
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 14px;
}

/* Wallet Info */
.wallet-info {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wallet-balance {
  display: flex;
  align-items: center;
  gap: 8px;
}

.balance-label {
  font-size: 14px;
  color: var(--text-secondary);
}

.balance-value {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-color);
}

/* Quick Actions */
.quick-actions {
  display: flex;
  gap: 8px;
}

.quick-btn {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 12px;
  font-weight: 500;
}

.quick-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: var(--primary-color);
}

/* Form Input Styles */
.form-input {
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 14px;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .wallet-info {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
  
  .wallet-balance {
    justify-content: center;
  }
  
  .quick-actions {
    justify-content: center;
  }
}
</style>

