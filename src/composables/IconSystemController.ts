import { computed } from 'vue'

/**
 * Central Icon System Controller
 * ONE SINGLE LIST WITH ALL TOPICS/ICONS FOR THE ENTIRE DAPP
 * THIS IS THE ONLY PLACE ICONS ARE DEFINED - USED EVERYWHERE
 */

export type IconShape = 'hexagon' | 'shield' | 'circle' | 'square' | 'diamond'

export interface IconStyle {
  shape: IconShape
  borderWidth: string
  borderColor: string
  backgroundColor: string
  glowColor: string
  shadowColor: string
}

export class IconSystemController {
  private static instance: IconSystemController
  
  // ONE SINGLE LIST WITH ALL TOPICS/ICONS - USED EVERYWHERE IN THE DAPP
  private readonly iconMapping: Record<string, string> = {
    // Dashboard
    dashboard: 'game-icons:puzzle',
    
    // Treasury
    treasury: 'game-icons:chest',
    
    // Armory
    armory: 'game-icons:armor-upgrade',
    
    // Foundry
    foundry: 'game-icons:anvil',
    nft: 'game-icons:tied-scroll',
    tokena: 'game-icons:coinflip',
    tokenb: 'game-icons:crown-coin',
    starAtlas: 'game-icons:spaceship',
    custom: 'game-icons:witch-flight',
    
    // DAO Voting
    daoVoting: 'game-icons:vote',
    
    // Quest Board
    questboard: 'game-icons:target-dummy',
    
    // Events
    events: 'game-icons:calendar',
    
    // Trophy Room
    trophyRoom: 'game-icons:trophy',
    
    // Mini Games
    miniGames: 'game-icons:rolling-dice-cup',
    raffles: 'game-icons:ticket',
    poker: 'game-icons:card-play',
    dice: 'game-icons:perspective-dice-six-faces-one',
    
    // Reports
    reports: 'game-icons:chart',
    analytics: 'game-icons:chart',
    activity: 'game-icons:strong-man',
    financial: 'game-icons:money-stack',
    
    // Star Atlas Integration
    profile: 'game-icons:video-conference',
    locker: 'game-icons:locked-fortress',
    sage: 'game-icons:factory',
    lending: 'game-icons:card-exchange',
    marketplace: 'game-icons:shop',
    
    // Top Navbar Icons
    topNavProfile: 'game-icons:skills',
    topNavGuild: 'game-icons:castle',
    walletConnect: 'game-icons:open-gate',
    walletConnected: 'game-icons:open-gate',
    
    // Sidebar Footer Icons
    guildXP: 'game-icons:battle-gear',
    sidebarTreasury: 'game-icons:chest'
  }

  // Default icon styles for GameIcon components
  private readonly defaultStyles: IconStyle = {
    shape: 'hexagon',
    borderWidth: '2px',
    borderColor: '#00d4ff',
    backgroundColor: 'rgba(12, 39, 48, 0.8)',
    glowColor: '#00d4ff',
    shadowColor: 'rgba(0, 212, 255, 0.3)'
  }

  private constructor() {}

  public static getInstance(): IconSystemController {
    if (!IconSystemController.instance) {
      IconSystemController.instance = new IconSystemController()
    }
    return IconSystemController.instance
  }

  /**
   * Get icon by key - SIMPLE AND DIRECT FROM THE ONE LIST
   */
  public getIcon(key: string): string {
    return this.iconMapping[key] || 'game-icons:question'
  }

  /**
   * Get all available icon keys
   */
  public getIconKeys(): string[] {
    return Object.keys(this.iconMapping)
  }

  /**
   * Get icon style
   */
  public getIconStyle(): IconStyle {
    return this.defaultStyles
  }

  /**
   * Update icon style globally
   */
  public updateIconStyle(newStyle: Partial<IconStyle>): void {
    Object.assign(this.defaultStyles, newStyle)
  }

  /**
   * Change icon shape for all GameIcon components
   */
  public setIconShape(shape: IconShape): void {
    this.defaultStyles.shape = shape
  }

  /**
   * Change icon colors globally
   */
  public setIconColors(borderColor: string, glowColor: string, shadowColor: string): void {
    this.defaultStyles.borderColor = borderColor
    this.defaultStyles.glowColor = glowColor
    this.defaultStyles.shadowColor = shadowColor
  }
}

// Export singleton instance
export const iconSystemController = IconSystemController.getInstance()

// Vue composable for easy use in components
export function useIconSystem() {
  const controller = iconSystemController

  const getIcon = (key: string) => controller.getIcon(key)
  const getIconStyle = () => controller.getIconStyle()
  const updateIconStyle = (style: Partial<IconStyle>) => controller.updateIconStyle(style)
  const setIconShape = (shape: IconShape) => controller.setIconShape(shape)
  const setIconColors = (borderColor: string, glowColor: string, shadowColor: string) => 
    controller.setIconColors(borderColor, glowColor, shadowColor)

  return {
    getIcon,
    getIconStyle,
    updateIconStyle,
    setIconShape,
    setIconColors,
    controller
  }
}
