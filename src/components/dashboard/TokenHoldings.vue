<template>
  <div class="token-holdings">
    <div v-if="tokens.length === 0" class="empty-state">
      <GameIcon icon="game-icons:question-mark" size="md" variant="secondary" />
      <p>No tokens found</p>
    </div>
    
    <div v-else class="tokens-list">
      <div 
        v-for="token in tokens" 
        :key="token.id" 
        class="token-item"
      >
        <div class="token-info">
          <div class="token-icon">
            <GameIcon :icon="token.icon" size="sm" variant="success" />
          </div>
          <div class="token-details">
            <h4 class="token-name">{{ token.name }}</h4>
            <p class="token-symbol">{{ token.symbol }}</p>
          </div>
        </div>
        
        <div class="token-balance">
          <span class="balance-amount">{{ formatNumber(token.balance) }}</span>
          <span class="balance-value" v-if="token.value">
            ≈ ${{ formatNumber(token.value) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import GameIcon from '@/components/ui/GameIcon.vue'

interface Token {
  id: string
  name: string
  symbol: string
  icon: string
  balance: number
  value?: number
}

interface Props {
  tokens: Token[]
}

defineProps<Props>()

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toFixed(2)
}
</script>

<style scoped>
.token-holdings {
  min-height: 200px;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #666;
  gap: 1rem;
}

.tokens-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.token-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;
}

.token-item:hover {
  border-color: rgba(0, 212, 255, 0.3);
  background: rgba(0, 212, 255, 0.05);
}

.token-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.token-details {
  display: flex;
  flex-direction: column;
}

.token-name {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.token-symbol {
  font-size: 0.875rem;
  color: #a0a0a0;
  margin: 0;
}

.token-balance {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}

.balance-amount {
  font-size: 1.125rem;
  font-weight: 600;
  color: #10b981;
}

.balance-value {
  font-size: 0.875rem;
  color: #a0a0a0;
}
</style>

