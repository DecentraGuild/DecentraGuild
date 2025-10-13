<template>
  <DocPageLayout
    title="Quest Board"
    description="Guild task organization, progress tracking, and reward distribution"
  >
    <div class="content-section">
      <p class="lead">
        The <strong>Quest Board</strong> organizes guild tasks and rewards.
      </p>
      
      <p>This is where the action happens. Quest creation and management, progress tracking and reporting, reward distribution, and team coordination all flow through this system. The Quest Board spreads the workload and engages members in collective success.</p>
    </div>
    
    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:target-dummy" /></div>
        <h4>In-game Quests</h4>
        <p>Boost guild presence and progress through strategic gameplay missions. These quests focus on advancing the guild's position in games, earning resources, and building competitive advantages within the gaming ecosystem.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:heart-tower" /></div>
        <h4>Community Missions</h4>
        <p>Handle content creation, event management, and training activities. These missions focus on building community engagement, developing member skills, and strengthening the guild's internal culture and capabilities.</p>
      </div>
    </div>
    
    <div class="quest-workflow">
      <h3>Quest Workflow</h3>
      <div class="workflow-steps">
        <div class="workflow-step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Create</h4>
            <p>Define quest objectives, requirements, and rewards</p>
          </div>
        </div>
        <div class="workflow-step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Apply</h4>
            <p>Members submit applications to participate</p>
          </div>
        </div>
        <div class="workflow-step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Assign</h4>
            <p>Council or officers assign quests to qualified members</p>
          </div>
        </div>
        <div class="workflow-step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Execute</h4>
            <p>Members complete the assigned quest objectives</p>
          </div>
        </div>
        <div class="workflow-step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h4>Verify</h4>
            <p>Validate completion and quality of work</p>
          </div>
        </div>
        <div class="workflow-step">
          <div class="step-number">6</div>
          <div class="step-content">
            <h4>Reward</h4>
            <p>Distribute tokens, badges, and recognition</p>
          </div>
        </div>
        <div class="workflow-step">
          <div class="step-number">7</div>
          <div class="step-content">
            <h4>Complete</h4>
            <p>Archive results and update member records</p>
          </div>
        </div>
      </div>
    </div>
  </DocPageLayout>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import DocPageLayout from '@/components/docs/DocPageLayout.vue'
</script>

<style scoped>
.content-section {
  margin-bottom: 32px;
}

.lead {
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin-top: 32px;
}

.principle-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.principle-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.principle-icon {
  font-size: 2rem;
  margin-bottom: 12px;
  color: var(--primary-color);
  filter: drop-shadow(0 0 8px var(--primary-color));
}

.principle-card h4 {
  color: var(--text-primary);
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.principle-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.quest-workflow {
  margin-top: 40px;
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 32px;
  border: 1px solid var(--border-color);
}

.quest-workflow h3 {
  color: var(--text-primary);
  margin-bottom: 24px;
  font-size: 1.4rem;
  text-align: center;
}

.workflow-steps {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
}

.workflow-step {
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
}

.workflow-step:hover {
  border-color: var(--primary-color);
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.workflow-step::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--primary-color);
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.workflow-step:hover::before {
  opacity: 1;
}

.step-number {
  background: var(--primary-color);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.step-content h4 {
  color: var(--text-primary);
  margin: 0 0 4px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.step-content p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 768px) {
  .workflow-step {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .workflow-step:hover {
    transform: translateY(-2px);
  }
  
  .quest-workflow {
    padding: 24px;
  }
}
</style>
