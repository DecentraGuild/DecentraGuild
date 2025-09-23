<template>
  <div class="recent-achievements">
    <div v-if="achievements.length === 0" class="empty-state">
      <GameIcon icon="game-icons:question-mark" size="md" variant="secondary" />
      <p>No recent achievements</p>
    </div>
    
    <div v-else class="achievements-list">
      <div 
        v-for="achievement in achievements" 
        :key="achievement.id" 
        class="achievement-item"
        :class="{ 'rare': achievement.rarity === 'rare', 'epic': achievement.rarity === 'epic' }"
      >
        <div class="achievement-icon">
          <GameIcon :icon="achievement.icon" size="md" :variant="getRarityVariant(achievement.rarity)" />
        </div>
        
        <div class="achievement-content">
          <div class="achievement-header">
            <h4 class="achievement-name">{{ achievement.name }}</h4>
            <div class="achievement-rarity" :class="`rarity-${achievement.rarity}`">
              {{ achievement.rarity }}
            </div>
          </div>
          
          <p class="achievement-description">{{ achievement.description }}</p>
          
          <div class="achievement-meta">
            <span class="achievement-date">
              <GameIcon icon="game-icons:calendar" size="sm" variant="secondary" />
              {{ formatDate(achievement.date) }}
            </span>
            <span class="achievement-points" v-if="achievement.points">
              <GameIcon icon="game-icons:star" size="sm" variant="accent" />
              +{{ achievement.points }} XP
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameIcon from '@/components/ui/GameIcon.vue'

interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  date: string
  points?: number
}

interface Props {
  achievements: Achievement[]
}

defineProps<Props>()

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric'
  })
}

const getRarityVariant = (rarity: string): string => {
  switch (rarity) {
    case 'common': return 'secondary'
    case 'rare': return 'primary'
    case 'epic': return 'accent'
    case 'legendary': return 'warning'
    default: return 'secondary'
  }
}
</script>

<style scoped>
.recent-achievements {
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

.achievements-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.achievement-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.achievement-item:hover {
  border-color: rgba(0, 212, 255, 0.3);
  background: rgba(0, 212, 255, 0.05);
  transform: translateY(-1px);
}

.achievement-item.rare {
  border-color: rgba(0, 212, 255, 0.3);
  background: rgba(0, 212, 255, 0.05);
}

.achievement-item.epic {
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(245, 158, 11, 0.05);
}

.achievement-icon {
  flex-shrink: 0;
}

.achievement-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.achievement-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.achievement-name {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.achievement-rarity {
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.rarity-common {
  background: rgba(100, 100, 100, 0.2);
  color: #a0a0a0;
  border: 1px solid rgba(100, 100, 100, 0.3);
}

.rarity-rare {
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  border: 1px solid rgba(0, 212, 255, 0.3);
}

.rarity-epic {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.rarity-legendary {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.achievement-description {
  font-size: 0.875rem;
  color: #a0a0a0;
  margin: 0;
  line-height: 1.4;
}

.achievement-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.5rem;
}

.achievement-date,
.achievement-points {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.achievement-points {
  color: #f59e0b;
  font-weight: 600;
}
</style>

