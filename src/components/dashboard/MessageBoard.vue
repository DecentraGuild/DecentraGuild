<template>
  <div class="message-board">
    <div v-if="messages.length === 0" class="empty-state">
      <GameIcon icon="game-icons:question-mark" size="md" variant="secondary" />
      <p>No messages yet</p>
    </div>
    
    <div v-else class="messages-list">
      <div 
        v-for="message in messages" 
        :key="message.id" 
        class="message-item"
        :class="{ 'pinned': message.pinned, 'urgent': message.urgent }"
      >
        <div class="message-header">
          <div class="message-author">
            <div class="author-avatar">
              <GameIcon :icon="message.author.icon" size="sm" variant="primary" />
            </div>
            <div class="author-info">
              <h4 class="author-name">{{ message.author.name }}</h4>
              <span class="author-role">{{ message.author.role }}</span>
            </div>
          </div>
          
          <div class="message-meta">
            <span class="message-time">{{ formatTime(message.timestamp) }}</span>
            <div class="message-badges">
              <span v-if="message.pinned" class="badge pinned">
                <GameIcon icon="game-icons:pin" size="sm" variant="accent" />
                Pinned
              </span>
              <span v-if="message.urgent" class="badge urgent">
                <GameIcon icon="game-icons:warning" size="sm" variant="danger" />
                Urgent
              </span>
            </div>
          </div>
        </div>
        
        <div class="message-content">
          <h3 class="message-title">{{ message.title }}</h3>
          <p class="message-text">{{ message.content }}</p>
        </div>
        
        <div class="message-actions" v-if="message.actions">
          <button 
            v-for="action in message.actions" 
            :key="action.id"
            class="action-button"
            :class="`action-${action.type}`"
            @click="handleAction(action)"
          >
            <GameIcon :icon="action.icon" size="sm" :variant="action.variant" />
            {{ action.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameIcon from '@/components/ui/GameIcon.vue'

interface MessageAction {
  id: string
  label: string
  icon: string
  variant: string
  type: 'primary' | 'secondary' | 'danger'
}

interface MessageAuthor {
  name: string
  role: string
  icon: string
}

interface Message {
  id: string
  title: string
  content: string
  author: MessageAuthor
  timestamp: string
  pinned?: boolean
  urgent?: boolean
  actions?: MessageAction[]
}

interface Props {
  messages: Message[]
}

defineProps<Props>()

const formatTime = (timestamp: string): string => {
  const date = new Date(timestamp)
  const now = new Date()
  const diffHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
  
  if (diffHours < 1) {
    return 'Just now'
  } else if (diffHours < 24) {
    return `${Math.floor(diffHours)}h ago`
  } else {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric'
    })
  }
}

const handleAction = (action: MessageAction) => {
  // Action clicked
  // Handle action logic here
}
</script>

<style scoped>
.message-board {
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

.messages-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message-item {
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;
}

.message-item:hover {
  border-color: rgba(0, 212, 255, 0.3);
  background: rgba(0, 212, 255, 0.05);
}

.message-item.pinned {
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(245, 158, 11, 0.05);
}

.message-item.urgent {
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

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.message-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.author-role {
  font-size: 0.75rem;
  color: #00d4ff;
  text-transform: uppercase;
  font-weight: 500;
}

.message-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.message-time {
  font-size: 0.75rem;
  color: #666;
}

.message-badges {
  display: flex;
  gap: 0.5rem;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.badge.pinned {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.badge.urgent {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.message-content {
  margin-bottom: 1rem;
}

.message-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
}

.message-text {
  font-size: 0.875rem;
  color: #a0a0a0;
  line-height: 1.5;
  margin: 0;
}

.message-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.action-primary {
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  border: 1px solid rgba(0, 212, 255, 0.3);
}

.action-primary:hover {
  background: rgba(0, 212, 255, 0.3);
  transform: translateY(-1px);
}

.action-secondary {
  background: rgba(100, 100, 100, 0.2);
  color: #a0a0a0;
  border: 1px solid rgba(100, 100, 100, 0.3);
}

.action-secondary:hover {
  background: rgba(100, 100, 100, 0.3);
  transform: translateY(-1px);
}

.action-danger {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.action-danger:hover {
  background: rgba(239, 68, 68, 0.3);
  transform: translateY(-1px);
}
</style>

