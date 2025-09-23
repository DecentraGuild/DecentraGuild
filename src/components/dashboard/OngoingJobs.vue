<template>
  <div class="ongoing-jobs">
    <div v-if="jobs.length === 0" class="empty-state">
      <GameIcon icon="game-icons:question-mark" size="md" variant="secondary" />
      <p>No ongoing jobs</p>
    </div>
    
    <div v-else class="jobs-list">
      <div 
        v-for="job in jobs" 
        :key="job.id" 
        class="job-item"
      >
        <div class="job-header">
          <div class="job-info">
            <h4 class="job-title">{{ job.title }}</h4>
            <p class="job-category">{{ job.category }}</p>
          </div>
          <div class="job-status" :class="`status-${job.status}`">
            {{ job.status }}
          </div>
        </div>
        
        <div class="job-details">
          <div class="job-reward">
            <GameIcon icon="game-icons:coin" size="sm" variant="accent" />
            <span>{{ job.reward }} {{ job.rewardToken }}</span>
          </div>
          <div class="job-progress">
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                :style="{ width: `${job.progress}%` }"
              ></div>
            </div>
            <span class="progress-text">{{ job.progress }}%</span>
          </div>
        </div>
        
        <div class="job-meta">
          <span class="job-deadline">
            <GameIcon icon="game-icons:clock" size="sm" variant="secondary" />
            Due: {{ formatDate(job.deadline) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameIcon from '@/components/ui/GameIcon.vue'

interface Job {
  id: string
  title: string
  category: string
  status: 'active' | 'pending' | 'completed'
  reward: number
  rewardToken: string
  progress: number
  deadline: string
}

interface Props {
  jobs: Job[]
}

defineProps<Props>()

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.ongoing-jobs {
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

.jobs-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.job-item {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;
}

.job-item:hover {
  border-color: rgba(0, 212, 255, 0.3);
  background: rgba(0, 212, 255, 0.05);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.job-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.25rem 0;
}

.job-category {
  font-size: 0.875rem;
  color: #a0a0a0;
  margin: 0;
}

.job-status {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.status-active {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.status-pending {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.status-completed {
  background: rgba(99, 102, 241, 0.2);
  color: #6366f1;
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.job-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.job-reward {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #f59e0b;
  font-weight: 600;
}

.job-progress {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 120px;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00d4ff, #10b981);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.75rem;
  color: #a0a0a0;
  min-width: 35px;
  text-align: right;
}

.job-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #666;
}

.job-deadline {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>

