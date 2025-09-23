import type { FeatureCardProps, StepCardProps } from '@/components/ui'

// Step cards data
export const stepsData: StepCardProps[] = [
  {
    stepNumber: 1,
    icon: 'game-icons:conqueror',
    title: 'Establish',
    description: 'Lay the foundations of your guild — set the vision, shape the council, and secure your treasury.',
    features: [],
    iconColor: 'white',
    dotColor: 'rgba(0, 212, 255, 1)',
    accentColor: 'rgba(0, 212, 255, 1)',
    useGameIcon: true,
    iconShape: 'none'
  },
  {
    stepNumber: 2,
    icon: 'game-icons:cargo-crane',
    title: 'Build',
    description: 'Bring your guild to life with custom branding, quests, rewards, and governance rules tailored to your community.',
    features: [],
    iconColor: 'white',
    dotColor: 'rgba(0, 212, 255, 1)',
    accentColor: 'rgba(0, 212, 255, 1)',
    useGameIcon: true,
    iconShape: 'none'
  },
  {
    stepNumber: 3,
    icon: 'game-icons:medieval-gate',
    title: 'Operate',
    description: 'Activate your guild — launch quests, grow the treasury, reward contributors, and create spaces for collaboration.',
    features: [],
    iconColor: 'white',
    dotColor: 'rgba(0, 212, 255, 1)',
    accentColor: 'rgba(0, 212, 255, 1)',
    useGameIcon: true,
    iconShape: 'none'
  },
  {
    stepNumber: 4,
    icon: 'game-icons:uprising',
    title: 'Grow',
    description: 'Evolve and adapt — expand partnerships, refine governance, and scale as your community thrives.',
    features: [],
    iconColor: 'white',
    dotColor: 'rgba(0, 212, 255, 1)',
    accentColor: 'rgba(0, 212, 255, 1)',
    useGameIcon: true,
    iconShape: 'none'
  }
]

// Progress steps data
export const progressSteps = [
  { label: 'Establish' },
  { label: 'Build' },
  { label: 'Operate' },
  { label: 'Grow' }
]

// Why cards data
export const whyCardsData: FeatureCardProps[] = [
  {
    icon: 'game-icons:swords-power',
    title: 'Built as Guild, by Gamers',
    description: 'Born from our experience running a Star Atlas guild, we understand what gaming communities need.\n\n\n\n\n\n\n\n\n',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    accentColor: 'rgba(0, 212, 255, 1)',
    useGameIcon: true,
    iconShape: 'none'
  },
  {
    icon: 'game-icons:reload-gun-barrel',
    title: 'Standardized Tools',
    description: 'Focus on your community while we handle the infrastructure and technical complexity.\n\n\n',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    accentColor: 'rgba(0, 212, 255, 1)',
    useGameIcon: true,
    iconShape: 'none'
  },
  {
    icon: 'game-icons:locked-fortress',
    title: 'Private, Not Speculative',
    description: 'Guild tokens are internal tools for your community, not public trading instruments.\n\n\n',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    accentColor: 'rgba(0, 212, 255, 1)',
    useGameIcon: true,
    iconShape: 'none'
  },
  {
    icon: 'game-icons:gamepad-cross',
    title: 'Cross-Game Compatible',
    description: 'Designed to work across multiple games and ecosystems as they emerge.\n\n\n',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    accentColor: 'rgba(0, 212, 255, 1)',
    useGameIcon: true,
    iconShape: 'none'
  }
]

