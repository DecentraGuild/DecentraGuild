<template>
  <DocPageLayout
    title="Gatekeeping"
    description="Security and trust through member verification and access control"
  >
    <div class="content-section">
      <p class="lead">
        Gatekeeping ensures that only verified members gain access to the guild's inner halls.
      </p>
      
      <p>This system maintains <strong>security and trust</strong>, making sure each member is both legitimate and aligned with guild values. Think of it as the castle's gate — not to keep people out, but to ensure only the right people get in.</p>
    </div>
    
    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:padlock" /></div>
        <h4>dGuild Access</h4>
        <p>Member verification happens through tokenized identity and invitation management. The system ensures each member is legitimate and aligned with guild values, protecting against intrusions while regulating new entrants.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:rank-3" /></div>
        <h4>Role-Based Permissions</h4>
        <p>Access control manages permissions for council, officers, and members. Different roles have different levels of access to guild resources, ensuring proper hierarchy and security throughout the organization.</p>
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
</style>
