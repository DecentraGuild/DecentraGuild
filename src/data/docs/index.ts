// Documentation navigation structure and metadata
// 4-Layer Structure: CASTLE > CATEGORY > ROOM > FUNCTION

export interface DocPage {
  id: string
  title: string
  path: string
  description?: string
}

export interface DocRoom {
  id: string
  title: string
  path: string  // Path to room intro page
  description?: string
  functions?: DocPage[]  // Optional function pages
}

export interface DocCategory {
  id: string
  title: string
  icon?: string
  rooms: DocRoom[]
}

// Documentation structure - Digital Castle with 4 layers
export const docsStructure: DocCategory[] = [
  // Core Concepts (outside castle structure)
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    icon: 'game-icons:crowned-skull',
    rooms: [
      {
        id: 'general',
        title: 'General',
        path: '/docs/general',
        description: 'The Decentralized Guild Framework'
      },
      {
        id: 'vaults',
        title: 'Vaults',
        path: '/docs/vaults',
        description: 'Four specialized vaults for guild asset management'
      },
      {
        id: 'dao-governance',
        title: 'DAO Governance',
        path: '/docs/dao-governance',
        description: 'Dual-DAO system balancing contribution and stability'
      },
      {
        id: 'token1',
        title: 'Token 1 — Contribution Token',
        path: '/docs/token1',
        description: 'Represent active participation within the guild'
      },
      {
        id: 'token2',
        title: 'Token 2 — Stability Token',
        path: '/docs/token2',
        description: 'Represent long-term stability and alignment'
      },
      {
        id: 'legal-framework',
        title: 'Legal Framework',
        path: '/docs/legal-framework',
        description: 'Real-world legitimacy through legal wrappers'
      },
      {
        id: 'lifecycle',
        title: 'Lifecycle',
        path: '/docs/lifecycle',
        description: 'The journey from establishment to growth'
      },
      {
        id: 'build-your-own',
        title: 'Build-Your-Own',
        path: '/docs/build-your-own',
        description: 'Modular components for custom dGuild experiences'
      }
    ]
  },

  // The Digital Castle
  {
    id: 'digital-castle',
    title: 'The Digital Castle',
    icon: 'game-icons:castle',
    rooms: [
      // Armory
      {
        id: 'armory',
        title: 'Armory',
        path: '/docs/armory',
        description: 'Shared asset treasury and marketplace',
        functions: [
          {
            id: 'claim',
            title: 'Claim',
            path: '/docs/armory/claim',
            description: 'Claim assets from guild treasury'
          },
          {
            id: 'shop',
            title: 'Shop (G2P)',
            path: '/docs/armory/shop',
            description: 'Guild-to-player marketplace'
          },
          {
            id: 'use',
            title: 'Use (Gear)',
            path: '/docs/armory/use',
            description: 'Use and equip gear and assets'
          }
        ]
      },
      
      // Command Center
      {
        id: 'command-centre',
        title: 'Command Centre',
        path: '/docs/command-centre',
        description: 'Administrative dashboard for guild management',
        functions: [
          {
            id: 'manage-all',
            title: 'Manage All',
            path: '/docs/command-centre/manage-all',
            description: 'Comprehensive guild management interface'
          }
        ]
      },

      // Community Hub
      {
        id: 'community-hub',
        title: 'Community Hub',
        path: '/docs/community-hub',
        description: 'Guild identity, branding, and member profiles',
        functions: [
          {
            id: 'guild-profile',
            title: 'Guild Profile',
            path: '/docs/community-hub/guild-profile',
            description: 'Guild profile and branding management'
          },
          {
            id: 'member-profile',
            title: 'Member Profile',
            path: '/docs/community-hub/member-profile',
            description: 'Member profile and reputation management'
          }
        ]
      },

      // DAO
      {
        id: 'dao',
        title: 'DAO',
        path: '/docs/dao',
        description: 'Decentralized autonomous organization governance',
        functions: [
          {
            id: 'voting',
            title: 'Voting',
            path: '/docs/dao/voting',
            description: 'DAO voting mechanisms and proposals'
          }
        ]
      },

      // Dashboard
      {
        id: 'dashboard',
        title: 'Dashboard',
        path: '/docs/dashboard',
        description: 'Main dashboard for guild overview and management',
        functions: [
          {
            id: 'navigation',
            title: 'Navigation',
            path: '/docs/dashboard/navigation',
            description: 'Dashboard navigation and quick access'
          }
        ]
      },

      // Foundry
      {
        id: 'foundry',
        title: 'Foundry',
        path: '/docs/foundry',
        description: 'Token and NFT creation center',
        functions: [
          {
            id: 'token1',
            title: 'Token 1',
            path: '/docs/foundry/token1',
            description: 'Token 1 creation and management'
          },
          {
            id: 'token2',
            title: 'Token 2',
            path: '/docs/foundry/token2',
            description: 'Token 2 creation and management'
          },
          {
            id: 'custom',
            title: 'Custom',
            path: '/docs/foundry/custom',
            description: 'Custom token creation'
          },
          {
            id: 'nft',
            title: 'NFT',
            path: '/docs/foundry/nft',
            description: 'NFT creation and management'
          }
        ]
      },

      // Gatekeeping
      {
        id: 'gatekeeping',
        title: 'Gatekeeping',
        path: '/docs/gatekeeping',
        description: 'Access control and member verification',
        functions: [
          {
            id: 'roles',
            title: 'Roles',
            path: '/docs/gatekeeping/roles',
            description: 'Role-based access control and member permissions'
          },
          {
            id: 'permissions',
            title: 'Permissions',
            path: '/docs/gatekeeping/permissions',
            description: 'Granular permissions and access management'
          }
        ]
      },

      // Integrations
      {
        id: 'integrations',
        title: 'Integrations',
        path: '/docs/integrations',
        description: 'External platform connections',
        functions: [
          {
            id: 'player',
            title: 'Player',
            path: '/docs/integrations/player',
            description: 'Player-level integrations'
          },
          {
            id: 'guild',
            title: 'Guild',
            path: '/docs/integrations/guild',
            description: 'Guild-level integrations'
          }
        ]
      },

      // Observatory
      {
        id: 'observatory',
        title: 'Observatory',
        path: '/docs/observatory',
        description: 'Analytics and strategic insights',
        functions: [
          {
            id: 'personal',
            title: 'Personal',
            path: '/docs/observatory/personal',
            description: 'Personal analytics and performance tracking'
          },
          {
            id: 'dguild',
            title: 'dGuild',
            path: '/docs/observatory/dguild',
            description: 'Guild-wide analytics and insights'
          },
          {
            id: 'financial',
            title: 'Financial',
            path: '/docs/observatory/financial',
            description: 'Financial analytics and treasury tracking'
          }
        ]
      },

      // Quest Board
      {
        id: 'quest-board',
        title: 'Quest Board',
        path: '/docs/quest-board',
        description: 'Guild tasks, rewards, and quest management',
        functions: [
          {
            id: 'in-game-quests',
            title: 'In-Game Quests',
            path: '/docs/quest-board/in-game-quests',
            description: 'In-game quest management and tracking'
          },
          {
            id: 'guild-quests',
            title: 'Guild Quests',
            path: '/docs/quest-board/guild-quests',
            description: 'Guild-specific quest management'
          }
        ]
      },

      // Tavern
      {
        id: 'tavern',
        title: 'Tavern',
        path: '/docs/tavern',
        description: 'Social gaming and entertainment',
        functions: [
          {
            id: 'events',
            title: 'Events',
            path: '/docs/tavern/events',
            description: 'Guild event management and scheduling'
          },
          {
            id: 'raffles',
            title: 'Raffles',
            path: '/docs/tavern/raffles',
            description: 'Raffle creation and management'
          },
          {
            id: 'poker',
            title: 'Poker',
            path: '/docs/tavern/poker',
            description: 'Poker gaming and tournaments'
          },
          {
            id: 'dice',
            title: 'Dice',
            path: '/docs/tavern/dice',
            description: 'Dice gaming and wagering'
          }
        ]
      },

      // Trophy Room
      {
        id: 'trophy-room',
        title: 'Trophy Room',
        path: '/docs/trophy-room',
        description: 'Achievements and guild accomplishments',
        functions: [
          {
            id: 'achievements',
            title: 'Achievements',
            path: '/docs/trophy-room/achievements',
            description: 'Guild and member achievements tracking'
          }
        ]
      },

      // Vaults
      {
        id: 'vaults-castle',
        title: 'Vaults',
        path: '/docs/vaults-castle',
        description: 'Four specialized vaults for asset management',
        functions: [
          {
            id: 'overview',
            title: 'Overview',
            path: '/docs/vaults-castle/overview',
            description: 'Vaults overview and asset management'
          },
          {
            id: 'council',
            title: 'Council',
            path: '/docs/vaults-castle/council',
            description: 'Council vault for governance and strategic assets'
          }
        ]
      }
    ]
  },

  // Summary
  {
    id: 'summary',
    title: 'Summary',
    icon: 'game-icons:scroll-quill',
    rooms: [
      {
        id: 'summary',
        title: 'Summary',
        path: '/docs/summary',
        description: 'Complete overview of the dGuild framework'
      }
    ]
  }
]

// Flatten all pages for easy lookup and navigation
export const allDocPages: DocPage[] = []
docsStructure.forEach(category => {
  category.rooms.forEach(room => {
    // Add the room intro page
    allDocPages.push({
      id: room.id,
      title: room.title,
      path: room.path,
      description: room.description
    })
    // Add function pages if they exist
    if (room.functions) {
      allDocPages.push(...room.functions)
    }
  })
})

// Helper to get previous/next pages
export const getAdjacentPages = (currentPath: string) => {
  const currentIndex = allDocPages.findIndex(page => page.path === currentPath)
  
  return {
    previous: currentIndex > 0 ? allDocPages[currentIndex - 1] : null,
    next: currentIndex < allDocPages.length - 1 ? allDocPages[currentIndex + 1] : null
  }
}

// Helper to get page metadata
export const getPageMetadata = (path: string) => {
  return allDocPages.find(page => page.path === path)
}
