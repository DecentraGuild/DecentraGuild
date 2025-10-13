import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // For all routes, use saved position if available, otherwise scroll to top
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutUsView.vue')
    },
    {
      path: '/build-your-own',
      name: 'build-your-own',
      component: () => import('@/views/ALaCarteView.vue')
    },
    {
      path: '/blueprint',
      name: 'blueprint',
      component: () => import('@/views/BlueprintView.vue')
    },
    {
      path: '/docs',
      component: () => import('@/views/docs/DocsView.vue'),
      children: [
        {
          path: '',
          redirect: '/docs/what-is-dguild'
        },
        // Core Concepts
        {
          path: 'what-is-dguild',
          name: 'docs-what-is-dguild',
          component: () => import('@/views/docs/pages/WhatIsDGuild.vue')
        },
        {
          path: 'governance',
          name: 'docs-governance',
          component: () => import('@/views/docs/pages/Governance.vue')
        },
        {
          path: 'token-economy',
          name: 'docs-token-economy',
          component: () => import('@/views/docs/pages/TokenEconomy.vue')
        },
        {
          path: 'legal-framework',
          name: 'docs-legal-framework',
          component: () => import('@/views/docs/pages/LegalFramework.vue')
        },
        {
          path: 'lifecycle',
          name: 'docs-lifecycle',
          component: () => import('@/views/docs/pages/Lifecycle.vue')
        },
        {
          path: 'build-your-own',
          name: 'docs-build-your-own',
          component: () => import('@/views/docs/pages/ALaCarte.vue')
        },
        // Digital Castle
        {
          path: 'castle-overview',
          name: 'docs-castle-overview',
          component: () => import('@/views/docs/pages/CastleOverview.vue')
        },
        {
          path: 'vault',
          name: 'docs-vault',
          component: () => import('@/views/docs/pages/Vault.vue')
        },
        {
          path: 'dao',
          name: 'docs-dao',
          component: () => import('@/views/docs/pages/DAO.vue')
        },
        {
          path: 'quest-board',
          name: 'docs-quest-board',
          component: () => import('@/views/docs/pages/QuestBoard.vue')
        },
        {
          path: 'armory',
          name: 'docs-armory',
          component: () => import('@/views/docs/pages/Armory.vue')
        },
        {
          path: 'foundry',
          name: 'docs-foundry',
          component: () => import('@/views/docs/pages/Foundry.vue')
        },
        {
          path: 'community-hub',
          name: 'docs-community-hub',
          component: () => import('@/views/docs/pages/CommunityHub.vue')
        },
        {
          path: 'trophy-room',
          name: 'docs-trophy-room',
          component: () => import('@/views/docs/pages/TrophyRoom.vue')
        },
        {
          path: 'tavern',
          name: 'docs-tavern',
          component: () => import('@/views/docs/pages/Tavern.vue')
        },
        {
          path: 'command-centre',
          name: 'docs-command-centre',
          component: () => import('@/views/docs/pages/CommandCentre.vue')
        },
        {
          path: 'observatory',
          name: 'docs-observatory',
          component: () => import('@/views/docs/pages/Observatory.vue')
        },
        {
          path: 'gatekeeping',
          name: 'docs-gatekeeping',
          component: () => import('@/views/docs/pages/Gatekeeping.vue')
        },
        {
          path: 'integrations',
          name: 'docs-integrations',
          component: () => import('@/views/docs/pages/Integrations.vue')
        },
        {
          path: 'star-atlas',
          name: 'docs-star-atlas',
          component: () => import('@/views/docs/pages/StarAtlas.vue')
        },
        {
          path: 'summary',
          name: 'docs-summary',
          component: () => import('@/views/docs/pages/Summary.vue')
        }
      ]
    }
  ]
})

export default router
