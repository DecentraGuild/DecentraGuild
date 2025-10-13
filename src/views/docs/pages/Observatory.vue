<template>
  <DocPageLayout
    title="Observatory"
    description="The guild's strategic and analytical hub for data-driven decision-making"
  >
    <div class="content-section">
      <p class="lead">
        The <strong>Observatory</strong> is the guild's strategic and analytical hub.
      </p>
      
      <p>This is where strategy meets data. The Observatory provides comprehensive analytics 
        and dashboards that give complete visibility into every aspect of your dGuild's operations, 
        from individual member performance to overall guild health and financial standing.</p>
      
      <p>With real-time monitoring, predictive insights, and detailed reporting, 
        the Observatory ensures informed decision-making at every level. It's the difference between 
        flying blind and having a clear view of your guild's present and future.</p>
    </div>
    
    <div class="principles-grid">
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:rally-the-troops" /></div>
        <h4>Member Stats</h4>
        <p>Individual performance tracking, contribution metrics, activity levels, and engagement analytics. Monitor member growth, skill development, and participation patterns to optimize guild operations and member satisfaction.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:chart" /></div>
        <h4>Guild Performance</h4>
        <p>Collective metrics tracking quest completion rates, achievement progress, community engagement, and overall guild health. Measure success against goals and identify areas for improvement and growth.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:coins" /></div>
        <h4>Financial Overviews</h4>
        <p>Comprehensive treasury monitoring, revenue tracking, expense analysis, and asset management dashboards. Real-time financial health indicators and budget performance metrics for informed financial decisions.</p>
      </div>
      <div class="principle-card">
        <div class="principle-icon"><Icon icon="game-icons:pay-money" /></div>
        <h4>Corporate Tax Reports</h4>
        <p>Automated tax reporting, compliance tracking, and regulatory documentation. Generate professional reports for legal entities, ensuring full compliance with tax obligations and corporate requirements.</p>
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
