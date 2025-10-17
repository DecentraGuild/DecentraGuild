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
      component: () => import('@/views/BuildYourOwnView.vue')
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
          redirect: '/docs/general'
        },
        
        // Core Concepts
        {
          path: 'general',
          name: 'docs-general',
          component: () => import('@/views/docs/pages/core-mechanics/WhatIsDGuild.vue')
        },
        {
          path: 'vaults',
          name: 'docs-vaults-core',
          component: () => import('@/views/docs/pages/core-mechanics/Vaults.vue')
        },
        {
          path: 'dao-governance',
          name: 'docs-dao-governance',
          component: () => import('@/views/docs/pages/core-mechanics/Governance.vue')
        },
        {
          path: 'token1',
          name: 'docs-token1',
          component: () => import('@/views/docs/pages/core-mechanics/Token1.vue')
        },
        {
          path: 'token2',
          name: 'docs-token2',
          component: () => import('@/views/docs/pages/core-mechanics/Token2.vue')
        },
        {
          path: 'legal-framework',
          name: 'docs-legal-framework',
          component: () => import('@/views/docs/pages/core-mechanics/LegalFramework.vue')
        },
        {
          path: 'lifecycle',
          name: 'docs-lifecycle',
          component: () => import('@/views/docs/pages/core-mechanics/Lifecycle.vue')
        },
        {
          path: 'build-your-own',
          name: 'docs-build-your-own',
          component: () => import('@/views/docs/pages/core-mechanics/BuildYourOwn.vue')
        },
        
        // Legacy redirects
        {
          path: 'what-is-dguild',
          redirect: '/docs/general'
        },
        {
          path: 'governance',
          redirect: '/docs/dao-governance'
        },
        {
          path: 'token-economy',
          redirect: '/docs/token1'
        },

        // Digital Castle - Armory
        {
          path: 'armory',
          name: 'docs-armory',
          component: () => import('@/views/docs/pages/armory/Armory.vue')
        },
        {
          path: 'armory/claim',
          name: 'docs-armory-claim',
          component: () => import('@/views/docs/pages/armory/Claim.vue')
        },
        {
          path: 'armory/shop',
          name: 'docs-armory-shop',
          component: () => import('@/views/docs/pages/armory/Shop.vue')
        },
        {
          path: 'armory/use',
          name: 'docs-armory-use',
          component: () => import('@/views/docs/pages/armory/Use.vue')
        },

        // Digital Castle - Command Centre
        {
          path: 'command-centre',
          name: 'docs-command-centre',
          component: () => import('@/views/docs/pages/command-centre/CommandCentre.vue')
        },
        {
          path: 'command-centre/manage-all',
          name: 'docs-command-centre-manage-all',
          component: () => import('@/views/docs/pages/command-centre/ManageAll.vue')
        },

        // Digital Castle - Community Hub
        {
          path: 'community-hub',
          name: 'docs-community-hub',
          component: () => import('@/views/docs/pages/community-hub/CommunityHub.vue')
        },
        {
          path: 'community-hub/guild-profile',
          name: 'docs-community-hub-guild-profile',
          component: () => import('@/views/docs/pages/community-hub/GuildProfile.vue')
        },
        {
          path: 'community-hub/member-profile',
          name: 'docs-community-hub-member-profile',
          component: () => import('@/views/docs/pages/community-hub/MemberProfile.vue')
        },

        // Digital Castle - DAO
        {
          path: 'dao',
          name: 'docs-dao',
          component: () => import('@/views/docs/pages/dao/DAO.vue')
        },
        {
          path: 'dao/voting',
          name: 'docs-dao-voting',
          component: () => import('@/views/docs/pages/dao/Voting.vue')
        },

        // Digital Castle - Dashboard
        {
          path: 'dashboard',
          name: 'docs-dashboard',
          component: () => import('@/views/docs/pages/dashboard/Dashboard.vue')
        },
        {
          path: 'dashboard/navigation',
          name: 'docs-dashboard-navigation',
          component: () => import('@/views/docs/pages/dashboard/Navigation.vue')
        },

        // Digital Castle - Foundry
        {
          path: 'foundry',
          name: 'docs-foundry',
          component: () => import('@/views/docs/pages/foundry/Foundry.vue')
        },
        {
          path: 'foundry/token1',
          name: 'docs-foundry-token1',
          component: () => import('@/views/docs/pages/foundry/Token1.vue')
        },
        {
          path: 'foundry/token2',
          name: 'docs-foundry-token2',
          component: () => import('@/views/docs/pages/foundry/Token2.vue')
        },
        {
          path: 'foundry/custom',
          name: 'docs-foundry-custom',
          component: () => import('@/views/docs/pages/foundry/Custom.vue')
        },
        {
          path: 'foundry/nft',
          name: 'docs-foundry-nft',
          component: () => import('@/views/docs/pages/foundry/NFT.vue')
        },

        // Digital Castle - Gatekeeping
        {
          path: 'gatekeeping',
          name: 'docs-gatekeeping',
          component: () => import('@/views/docs/pages/gatekeeping/Gatekeeping.vue')
        },
        {
          path: 'gatekeeping/roles',
          name: 'docs-gatekeeping-roles',
          component: () => import('@/views/docs/pages/gatekeeping/Roles.vue')
        },
        {
          path: 'gatekeeping/permissions',
          name: 'docs-gatekeeping-permissions',
          component: () => import('@/views/docs/pages/gatekeeping/Permissions.vue')
        },

        // Digital Castle - Integrations
        {
          path: 'integrations',
          name: 'docs-integrations',
          component: () => import('@/views/docs/pages/integrations/Integrations.vue')
        },
        {
          path: 'integrations/player',
          name: 'docs-integrations-player',
          component: () => import('@/views/docs/pages/integrations/Player.vue')
        },
        {
          path: 'integrations/guild',
          name: 'docs-integrations-guild',
          component: () => import('@/views/docs/pages/integrations/Guild.vue')
        },

        // Digital Castle - Observatory
        {
          path: 'observatory',
          name: 'docs-observatory',
          component: () => import('@/views/docs/pages/observatory/Observatory.vue')
        },
        {
          path: 'observatory/personal',
          name: 'docs-observatory-personal',
          component: () => import('@/views/docs/pages/observatory/Personal.vue')
        },
        {
          path: 'observatory/dguild',
          name: 'docs-observatory-dguild',
          component: () => import('@/views/docs/pages/observatory/DGuild.vue')
        },
        {
          path: 'observatory/financial',
          name: 'docs-observatory-financial',
          component: () => import('@/views/docs/pages/observatory/Financial.vue')
        },

        // Digital Castle - Quest Board
        {
          path: 'quest-board',
          name: 'docs-quest-board',
          component: () => import('@/views/docs/pages/quest-board/QuestBoard.vue')
        },
        {
          path: 'quest-board/in-game-quests',
          name: 'docs-quest-board-in-game-quests',
          component: () => import('@/views/docs/pages/quest-board/InGameQuests.vue')
        },
        {
          path: 'quest-board/guild-quests',
          name: 'docs-quest-board-guild-quests',
          component: () => import('@/views/docs/pages/quest-board/GuildQuests.vue')
        },

        // Digital Castle - Tavern
        {
          path: 'tavern',
          name: 'docs-tavern',
          component: () => import('@/views/docs/pages/tavern/Tavern.vue')
        },
        {
          path: 'tavern/events',
          name: 'docs-tavern-events',
          component: () => import('@/views/docs/pages/tavern/Events.vue')
        },
        {
          path: 'tavern/raffles',
          name: 'docs-tavern-raffles',
          component: () => import('@/views/docs/pages/tavern/Raffles.vue')
        },
        {
          path: 'tavern/poker',
          name: 'docs-tavern-poker',
          component: () => import('@/views/docs/pages/tavern/Poker.vue')
        },
        {
          path: 'tavern/dice',
          name: 'docs-tavern-dice',
          component: () => import('@/views/docs/pages/tavern/Dice.vue')
        },

        // Digital Castle - Trophy Room
        {
          path: 'trophy-room',
          name: 'docs-trophy-room',
          component: () => import('@/views/docs/pages/trophy-room/TrophyRoom.vue')
        },
        {
          path: 'trophy-room/achievements',
          name: 'docs-trophy-room-achievements',
          component: () => import('@/views/docs/pages/trophy-room/Achievements.vue')
        },

        // Digital Castle - Vaults
        {
          path: 'vaults-castle',
          name: 'docs-vaults-castle',
          component: () => import('@/views/docs/pages/vaults/Vaults.vue')
        },
        {
          path: 'vaults-castle/overview',
          name: 'docs-vaults-castle-overview',
          component: () => import('@/views/docs/pages/vaults/Overview.vue')
        },
        {
          path: 'vaults-castle/council',
          name: 'docs-vaults-castle-council',
          component: () => import('@/views/docs/pages/vaults/Council.vue')
        },

        // Summary
        {
          path: 'summary',
          name: 'docs-summary',
          component: () => import('@/views/docs/pages/summary/Summary.vue')
        }
      ]
    }
  ]
})

export default router

