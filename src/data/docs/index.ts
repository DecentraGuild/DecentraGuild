// Documentation navigation structure and metadata

export interface DocPage {
  id: string
  title: string
  path: string
  category?: string
  description?: string
}

export interface DocCategory {
  id: string
  title: string
  icon?: string
  pages: (DocPage | DocSubcategory)[]
}

export interface DocSubcategory {
  id: string
  title: string
  isSubcategory: true
  pages: DocPage[]
}

// Documentation structure - organized hierarchy
export const docsStructure: DocCategory[] = [
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    icon: 'game-icons:crowned-skull',
    pages: [
      {
        id: 'what-is-dguild',
        title: 'What is a dGuild?',
        path: '/docs/what-is-dguild',
        description: 'Introduction to dGuilds and the DecentraGuild platform'
      },
      {
        id: 'governance',
        title: 'DAO for King',
        path: '/docs/governance',
        description: 'Understanding the dual-DAO governance system'
      },
      {
        id: 'token-economy',
        title: 'The Token Economy',
        path: '/docs/token-economy',
        description: 'How Token1 and Token2 power dGuild operations'
      },
      {
        id: 'legal-framework',
        title: 'Legal Framework',
        path: '/docs/legal-framework',
        description: 'Legal wrappers and compliance for dGuilds'
      },
      {
        id: 'lifecycle',
        title: 'The dGuild Lifecycle',
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
  {
    id: 'digital-castle',
    title: 'The Digital Castle',
    icon: 'game-icons:castle',
    pages: [
      {
        id: 'intro',
        title: 'Intro',
        isSubcategory: true,
        pages: [
          {
            id: 'castle-overview',
            title: 'Castle Overview',
            path: '/docs/castle-overview',
            category: 'intro',
            description: 'Introduction to your dGuild\'s digital castle'
          }
        ]
      },
      {
        id: 'custody-control',
        title: 'Custody & Control',
        isSubcategory: true,
        pages: [
          {
            id: 'vault',
            title: 'Vault',
            path: '/docs/vault',
            category: 'custody-control',
            description: 'Four specialized vaults for asset management'
          },
          {
            id: 'dao',
            title: 'DAO',
            path: '/docs/dao',
            category: 'custody-control',
            description: 'Governance through token-weighted voting'
          }
        ]
      },
      {
        id: 'operations-engagement',
        title: 'Operations & Engagement',
        isSubcategory: true,
        pages: [
          {
            id: 'quest-board',
            title: 'Quest Board',
            path: '/docs/quest-board',
            category: 'operations-engagement',
            description: 'Guild tasks, rewards, and quest management'
          },
          {
            id: 'armory',
            title: 'Armory',
            path: '/docs/armory',
            category: 'operations-engagement',
            description: 'Shared asset treasury and marketplace'
          },
          {
            id: 'foundry',
            title: 'Foundry',
            path: '/docs/foundry',
            category: 'operations-engagement',
            description: 'Token and NFT creation center'
          }
        ]
      },
      {
        id: 'community-culture',
        title: 'Community & Culture',
        isSubcategory: true,
        pages: [
          {
            id: 'community-hub',
            title: 'Community Hub',
            path: '/docs/community-hub',
            category: 'community-culture',
            description: 'Guild identity, branding, and member profiles'
          },
          {
            id: 'trophy-room',
            title: 'Trophy Room',
            path: '/docs/trophy-room',
            category: 'community-culture',
            description: 'Achievements and guild accomplishments'
          },
          {
            id: 'tavern',
            title: 'Tavern',
            path: '/docs/tavern',
            category: 'community-culture',
            description: 'Social gaming and entertainment'
          }
        ]
      },
      {
        id: 'leadership-strategy',
        title: 'Leadership & Strategy',
        isSubcategory: true,
        pages: [
          {
            id: 'command-centre',
            title: 'Command Centre',
            path: '/docs/command-centre',
            category: 'leadership-strategy',
            description: 'Administrative dashboard for guild management'
          },
          {
            id: 'observatory',
            title: 'Observatory',
            path: '/docs/observatory',
            category: 'leadership-strategy',
            description: 'Analytics and strategic insights'
          }
        ]
      },
      {
        id: 'security-integration',
        title: 'Security & Integration',
        isSubcategory: true,
        pages: [
          {
            id: 'gatekeeping',
            title: 'Gatekeeping',
            path: '/docs/gatekeeping',
            category: 'security-integration',
            description: 'Access control and member verification'
          },
          {
            id: 'integrations',
            title: 'Integrations',
            isSubcategory: true,
            pages: [
              {
                id: 'integrations-overview',
                title: 'Integrations Overview',
                path: '/docs/integrations',
                category: 'security-integration',
                description: 'External platform connections'
              },
              {
                id: 'star-atlas',
                title: 'Star Atlas',
                path: '/docs/star-atlas',
                category: 'security-integration',
                description: 'Complete Star Atlas integration for dGuilds'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'summary',
    title: 'Summary',
    icon: 'game-icons:scroll-quill',
    pages: [
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
  category.pages.forEach(item => {
    if ('isSubcategory' in item && item.isSubcategory) {
      allDocPages.push(...item.pages)
    } else {
      allDocPages.push(item as DocPage)
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

