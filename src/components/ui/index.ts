// Reusable UI Components
import type { HeroTitleConfig } from '@/config/site'

export { default as HeroSection } from './HeroSection.vue'
export { default as FeatureCard } from './FeatureCard.vue'
export { default as StepCard } from './StepCard.vue'
export { default as ProgressSteps } from './ProgressSteps.vue'
export { default as SectionHeader } from './SectionHeader.vue'
export { default as WalletInput } from './WalletInput.vue'

export { default as GameIcon } from './GameIcon.vue'

// Component Types
export interface FeatureCardProps {
  icon: string
  title: string
  description: string
  tags?: string[]
  customClass?: string
  iconColor?: string
  tagColor?: string
  accentColor?: string
  useGameIcon?: boolean
  iconSize?: 'sm' | 'md' | 'lg' | 'xl'
  iconVariant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
  iconShape?: 'hexagon' | 'shield' | 'circle' | 'square' | 'diamond' | 'none'
}

export interface StepCardProps {
  stepNumber: number
  icon: string
  title: string
  description: string
  features: string[]
  isActive?: boolean
  customClass?: string
  iconColor?: string
  dotColor?: string
  accentColor?: string
  useGameIcon?: boolean
  iconSize?: 'sm' | 'md' | 'lg' | 'xl'
  iconVariant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
  iconShape?: 'hexagon' | 'shield' | 'circle' | 'square' | 'diamond' | 'none'
}

export interface HeroSectionProps {
  title?: HeroTitleConfig
  subtitle?: string
  videoSrc?: string
  primaryCtaText?: string
  primaryCtaLink?: string
  secondaryCtaText?: string
  customClass?: string
  glowColor?: string
  gridColor?: string
  enableTextAnimation?: boolean
  animationDelay?: number
}

