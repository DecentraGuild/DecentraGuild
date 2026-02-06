/**
 * Single source of truth for site-wide links, brand, routes, and copy.
 * Update these values to change links and messaging across the site.
 */

// ---------------------------------------------------------------------------
// External links
// ---------------------------------------------------------------------------

export const LINKS = {
  demoApp: 'https://dapp.decentraguild.com',
  marketplace: 'https://c2c.decentraguild.com',
  discord: 'https://discord.gg/WN6snkFqB4',
  x: 'https://x.com/DecentraGuild',
  contactEmail: 'mailto:jordi@decentraguild.com'
} as const

// ---------------------------------------------------------------------------
// Internal route paths (must match router/index.ts)
// ---------------------------------------------------------------------------

export const ROUTES = {
  home: '/',
  about: '/about',
  blueprint: '/blueprint',
  buildYourOwn: '/build-your-own',
  docs: '/docs'
} as const

// ---------------------------------------------------------------------------
// Brand and copy
// ---------------------------------------------------------------------------

export const BRAND = {
  siteName: 'DecentraGuild',
  tagline: 'Create your dGuild, Build your house, Rule on-chain.',
  logoPath: '/logo/dguild-logo.svg'
} as const

/** Structured hero title (no raw HTML) for safe rendering */
export interface HeroTitleConfig {
  lines: string[]
  highlightLast?: boolean
}

export const COPY = {
  heroTitle: {
    lines: ['Create a dGuild.', 'Build Your House.', 'Rule On-Chain.'],
    highlightLast: true
  } satisfies HeroTitleConfig,
  heroSubtitle: 'DecentraGuild lets you create and manage decentralized guilds with tools for missions, events, rewards, governance and more — powered by Solana.',
  footerContactBlurb: "Have questions or want to learn more about DecentraGuild? We'd love to hear from you.",
  copyrightSuffix: 'Built on Solana. Made for gamers.',
  metaTitle: 'DecentraGuild - Build Your Guild. Rule Your House.',
  metaDescription: 'DecentraGuild lets you create and manage decentralized guilds with tools for jobs, events, rewards, and governance — powered by Solana.'
} as const

/** Current year for copyright; update annually or leave as-is for dynamic year in component */
export const currentYear = new Date().getFullYear()
