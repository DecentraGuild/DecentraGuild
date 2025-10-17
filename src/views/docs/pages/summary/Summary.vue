<template>
  <DocPageLayout
    title="🧭 Summary"
    description="Complete overview of the dGuild framework"
    :custom-next="{
      url: 'https://dapp.decentraguild.com',
      title: 'Try the Demo',
      label: 'Demo',
      icon: 'game-icons:play-button',
      external: true
    }"
  >
    <div class="content-section">
      <p class="lead">
        DecentraGuild provides a complete framework for <strong>self-sovereign organizations</strong>.
      </p>
    </div>

    <div class="framework-grid">
      <div class="framework-card">
        <Icon icon="game-icons:padlock" />
        <span>Secure on-chain vaults</span>
      </div>
      <div class="framework-card">
        <Icon icon="game-icons:scales" />
        <span>Dual-DAO governance</span>
      </div>
      <div class="framework-card">
        <Icon icon="game-icons:two-coins" />
        <span>Two complementary tokens</span>
      </div>
      <div class="framework-card">
        <Icon icon="game-icons:gavel" />
        <span>Legal recognition</span>
      </div>
    </div>

    <div class="conclusion">
      <p>
        It transforms informal groups into <strong>autonomous digital kingdoms</strong> capable of managing assets, coordinating members, and sustaining operations — all transparently, all on-chain.
      </p>
    </div>

    <div class="quote-section">
      <blockquote>
        <p><em>In this realm, every vault is a treasury, every vote a decree, and every member a citizen of their own digital kingdom.</em></p>
      </blockquote>
    </div>
  </DocPageLayout>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import DocPageLayout from '@/components/docs/DocPageLayout.vue'
</script>

<style scoped>
.content-section {
  margin-bottom: 40px;
  text-align: center;
}

.lead {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.framework-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin: 40px 0;
}

.framework-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.framework-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-4px);
}

.framework-card :deep(svg) {
  font-size: 3rem;
  color: var(--primary-color);
}

.framework-card span {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary);
}

.conclusion {
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 40px;
  margin: 40px 0;
  text-align: center;
  border: 1px solid var(--border-color);
}

.conclusion p {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.8;
}

.quote-section {
  margin: 40px 0;
  text-align: center;
}

.quote-section blockquote {
  background: var(--secondary-bg);
  border-left: 4px solid var(--primary-color);
  border-radius: var(--border-radius);
  padding: 32px;
  margin: 0;
}

.quote-section blockquote p {
  margin: 0;
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

/* Responsive */
@media (max-width: 768px) {
  .framework-grid {
    grid-template-columns: 1fr;
  }

  .lead {
    font-size: 1.3rem;
  }

  .conclusion p {
    font-size: 1.1rem;
  }

  .quote-section blockquote p {
    font-size: 1rem;
  }
}
</style>

