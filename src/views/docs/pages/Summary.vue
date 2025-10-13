<template>
  <DocPageLayout
    title="Summary"
    description="Complete overview of the dGuild framework"
  >
    <div class="content-section">
      <p class="lead">
        The DecentraGuild framework provides dGuilds with the tools and platform needed to thrive in Web3.
      </p>
      
      <p>
        The complete toolkit includes <strong>DAO governance</strong> (DAO is KING), <strong>Vaults</strong> 
        for secure asset management, <strong>Armory, Foundry, Quest Board</strong> for engagement and growth,
        <strong>Trophy Room and Tavern</strong> for culture and community, <strong>Command Centre and Observatory</strong> 
        for leadership and strategy, <strong>Integrations and Gatekeeping</strong> for scalability and security, 
        and <strong>Legal</strong> wrappers for compliance.
      </p>
    </div>

    <div class="important-note">
      <h3>Important Note</h3>
      <p>
        We provide the <strong>tools and platform</strong> for your organization to succeed, but we cannot run your organization for you. 
        Each dGuild must take full responsibility for their own future, operations, and success. The framework gives you the foundation — 
        the rest is up to you.
      </p>
    </div>

    <div class="conclusion">
      <p>
        In short: a <strong>digital castle for Web3 guilds</strong> — secure, decentralized, 
        and rebrandable for any community. Ready to build your digital kingdom?
      </p>
      
      <div class="cta-buttons">
        <router-link to="/a-la-carte" class="btn btn-primary">
          View Modules
        </router-link>
        <a href="https://dapp.decentraguild.com" target="_blank" class="btn btn-secondary">
          Try Demo
        </a>
      </div>
    </div>
  </DocPageLayout>
</template>

<script setup lang="ts">
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

.important-note {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border: 2px solid #f59e0b;
  border-radius: var(--border-radius);
  padding: 24px;
  margin: 32px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.important-note::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.important-note h3 {
  color: #92400e;
  margin-bottom: 16px;
  font-size: 1.3rem;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.important-note p {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: #92400e;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.conclusion {
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 32px;
  margin-top: 40px;
  text-align: center;
  border: 1px solid var(--border-color);
}

.conclusion p {
  margin-bottom: 24px;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-primary);
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
}

.btn-primary:hover {
  background: transparent;
  color: var(--primary-color);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>

