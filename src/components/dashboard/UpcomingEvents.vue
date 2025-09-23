<template>
  <div class="upcoming-events">
    <div v-if="events.length === 0" class="empty-state">
      <GameIcon icon="game-icons:question-mark" size="md" variant="secondary" />
      <p>No upcoming events</p>
    </div>
    
    <div v-else class="events-list">
      <div 
        v-for="event in events" 
        :key="event.id" 
        class="event-item"
        :class="{ 'urgent': isUrgent(event.date) }"
      >
        <div class="event-date">
          <div class="date-day">{{ getDay(event.date) }}</div>
          <div class="date-month">{{ getMonth(event.date) }}</div>
        </div>
        
        <div class="event-content">
          <div class="event-header">
            <h4 class="event-title">{{ event.title }}</h4>
            <div class="event-type" :class="`type-${event.type}`">
              {{ event.type }}
            </div>
          </div>
          
          <p class="event-description">{{ event.description }}</p>
          
          <div class="event-meta">
            <span class="event-time">
              <GameIcon icon="game-icons:clock" size="sm" variant="secondary" />
              {{ formatTime(event.date) }}
            </span>
            <span class="event-participants" v-if="event.participants">
              <GameIcon icon="game-icons:multiple-users" size="sm" variant="primary" />
              {{ event.participants }} participants
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameIcon from '@/components/ui/GameIcon.vue'

interface Event {
  id: string
  title: string
  description: string
  type: 'guild' | 'pvp' | 'pve' | 'social' | 'tournament'
  date: string
  participants?: number
}

interface Props {
  events: Event[]
}

defineProps<Props>()

const formatTime = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit',
    minute: '2-digit'
  })
}

const getDay = (dateString: string): string => {
  const date = new Date(dateString)
  return date.getDate().toString()
}

const getMonth = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short' })
}

const isUrgent = (dateString: string): boolean => {
  const eventDate = new Date(dateString)
  const now = new Date()
  const diffHours = (eventDate.getTime() - now.getTime()) / (1000 * 60 * 60)
  return diffHours <= 24 && diffHours > 0
}
</script>

<style scoped>
.upcoming-events {
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

.events-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.event-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;
}

.event-item:hover {
  border-color: rgba(0, 212, 255, 0.3);
  background: rgba(0, 212, 255, 0.05);
  transform: translateY(-1px);
}

.event-item.urgent {
  border-color: rgba(239, 68, 68, 0.3);
  background: rgba(239, 68, 68, 0.05);
  animation: pulse-urgent 2s ease-in-out infinite;
}

@keyframes pulse-urgent {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.3);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(239, 68, 68, 0);
  }
}

.event-date {
  flex-shrink: 0;
  text-align: center;
  padding: 0.5rem;
  background: rgba(0, 212, 255, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(0, 212, 255, 0.2);
  min-width: 60px;
}

.date-day {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00d4ff;
  line-height: 1;
}

.date-month {
  font-size: 0.75rem;
  color: #a0a0a0;
  text-transform: uppercase;
  margin-top: 0.25rem;
}

.event-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.event-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.event-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.event-type {
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.type-guild {
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  border: 1px solid rgba(0, 212, 255, 0.3);
}

.type-pvp {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.type-pve {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.type-social {
  background: rgba(99, 102, 241, 0.2);
  color: #6366f1;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.type-tournament {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.event-description {
  font-size: 0.875rem;
  color: #a0a0a0;
  margin: 0;
  line-height: 1.4;
}

.event-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.5rem;
}

.event-time,
.event-participants {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.event-participants {
  color: #00d4ff;
}
</style>

