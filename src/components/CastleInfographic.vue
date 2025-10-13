<template>
  <div class="castle-infographic" ref="castleContainer" @mouseenter="handleCastleMouseEnter" @mouseleave="handleCastleMouseLeave">
    <div class="castle-container">
      <!-- Base castle image (lid/unlid) -->
      <img 
        :src="currentBaseImage" 
        :alt="'Castle ' + (isHovered ? 'Unlid' : 'lid')"
        class="castle-base-image"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      />
      
      <!-- Interactive SVG overlay for hotspots -->
      <svg 
        class="castle-overlay" 
        :viewBox="'0 0 100 57.03'"
        preserveAspectRatio="xMidYMid meet"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <!-- Hotspot areas -->
        <g v-for="hotspot in hotspots" :key="hotspot.id">
          <path
            :d="hotspot.path"
            :class="['hotspot', { active: activeHotspot === hotspot.id }]"
            @mouseenter="activateHotspot(hotspot.id)"
            @mouseleave="deactivateHotspot()"
            @click="toggleHotspot(hotspot.id)"
          />
        </g>
      </svg>
      
      <!-- Feature images overlay -->
      <div class="feature-images">
        <img 
          v-for="hotspot in hotspots" 
          :key="`feature-${hotspot.id}`"
          :src="hotspot.imageSrc"
          :alt="hotspot.title"
          :class="['feature-image', { active: activeHotspot === hotspot.id }]"
        />
      </div>
     </div>
   </div>
   
   <!-- Sidebar for clicked hotspot or default hint - moved outside castle container -->
   <div 
     class="castle-sidebar"
     :class="{ 
       'sidebar-open': isCastleHovered || clickedHotspot, 
       'sidebar-hint': !clickedHotspot 
     }"
   >
     <div class="sidebar-content">
       <button 
         v-if="clickedHotspot"
         class="sidebar-close"
         @click="closeSidebar"
         aria-label="Close sidebar"
       >
         ×
       </button>
       
       <!-- Default hint state -->
       <div v-if="!clickedHotspot" class="sidebar-hint-content">
         <div class="hint-text">
           <span class="hint-word">Click</span>
           <span class="hint-word">room</span>
           <span class="hint-word">to</span>
           <span class="hint-word">discover</span>
         </div>
       </div>
       
       <!-- Clicked hotspot info -->
       <div v-if="clickedHotspotData" class="sidebar-info">
         <h2>{{ clickedHotspotData.title }}</h2>
         <p>{{ clickedHotspotData.description }}</p>
         <div class="sidebar-features">
           <h3>Key Features:</h3>
           <ul>
             <li v-for="feature in clickedHotspotData.features" :key="feature">
               {{ feature }}
             </li>
           </ul>
         </div>
       </div>
     </div>
   </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

interface Hotspot {
  id: string
  title: string
  description: string
  path: string
  imageSrc: string
  features: string[]
}

// No props needed for the new sidebar-only approach

// Get current route
const route = useRoute()

// Reactive data
const castleContainer = ref<HTMLElement>()
const isHovered = ref(false)
const activeHotspot = ref<string | null>(null)
const clickedHotspot = ref<string | null>(null)
const isCastleHovered = ref(false)

// Base images
const lidImage = '/infographic/Castle_Lid.webp'
const unlidImage = '/infographic/Castle_Unlid.webp'

// Hotspots data parsed from coordinates - scaled to match SVG viewBox (0 0 100 57.03)
const hotspots = ref<Hotspot[]>([
  {
    id: 'dao',
    title: 'DAO is King',
    description: 'Dual-DAO governance system balancing operational efficiency with participation through DAO1 (Contributions) and DAO2 (Stability) with combined guild voting.',
    path: 'M 63.31 32.44 L 76.31 24.52 L 76.39 20.85 L 64.85 15.18 L 58.56 18.45 L 58.56 22.55 L 54.29 24.89 L 54.29 30.43 L 55.78 31.27 L 55.86 32.43 L 61.12 35.48 Z',
    imageSrc: '/infographic/Castle_DAO.webp',
    features: [
      'DAO1: Contribution token voting',
      'DAO2: Stability token voting',
      'Combined guild vote system',
      'Configurable weighting (60/40)'
    ]
  },
  {
    id: 'community',
    title: 'Community Hub',
    description: 'Where guild identity comes to life through branding, member profiles, dApp themes, and community tools that define your unique character.',
    path: 'M 53.76 30.81 L 53.76 25.19 L 49.12 22.77 L 48.44 23.11 L 48.51 27.76 L 47.70 27.74 L 47.76 29.89 L 41.64 33.13 L 53.46 40.20 L 60.62 35.90 L 55.07 32.83 L 55.08 31.55 Z',
    imageSrc: '/infographic/Castle_CommunityHub.webp',
    features: [
      'dGuild Identity & Culture',
      'Member Profiles & Avatars',
      'Custom Branding & Themes',
      'Community Engagement Tools'
    ]
  },
  {
    id: 'observatory',
    title: 'Observatory',
    description: 'Strategic and analytical hub providing comprehensive analytics and dashboards for member stats, guild performance, financial overviews, and corporate tax reports.',
    path: 'M 68.61 29.82 L 76.15 33.80 L 83.73 28.68 L 83.77 22.50 L 77.09 19.46 L 76.82 24.77 Z',
    imageSrc: '/infographic/Castle_Observatory.webp',
    features: [
      'Member Stats & Performance',
      'Guild Performance Metrics',
      'Financial Overviews',
      'Corporate Tax Reports'
    ]
  },
  {
    id: 'vaults',
    title: 'Vaults',
    description: 'Four specialized vaults powered by Solana Squads multisig providing transparent and secure asset management for treasury, income, and token operations.',
    path: 'M 68.19 30.01 L 63.79 32.66 L 61.45 35.95 L 54.37 40.33 L 67.16 48.12 L 78.80 40.15 L 78.91 37.98 L 80.82 36.90 Z',
    imageSrc: '/infographic/Castle_Vault.webp',
    features: [
      'dGuild Vault (Primary Treasury)',
      'Income Vault (Revenue Collection)',
      'Token1 Vault (Contribution)',
      'Token2 Vault (Stability)'
    ]
  },
  {
    id: 'trophyroom',
    title: 'Trophy Room',
    description: 'Where guild accomplishments are celebrated and eternalized through minted badges and NFTs that serve as permanent records of excellence.',
    path: 'M 54.18 41.01 L 51.72 43.89 L 48.03 46.16 L 43.89 50.45 L 39.06 53.37 L 39.05 54.80 L 63.51 54.95 L 66.67 52.80 L 66.81 48.65 Z',
    imageSrc: '/infographic/Castle_TrophyRoom.webp',
    features: [
      'Personal Achievements',
      'dGuild Achievements',
      'Minted Badges & NFTs',
      'Permanent Records'
    ]
  },
  {
    id: 'questboard',
    title: 'Quest Board',
    description: 'Organizes guild tasks and rewards through in-game quests and community missions with a complete workflow from creation to completion.',
    path: 'M 53.37 40.81 L 41.94 34.25 L 41.86 33.75 L 32.46 38.95 L 34.15 40.12 L 36.25 43.30 L 40.23 40.95 L 47.57 45.60 L 51.00 43.45 Z',
    imageSrc: '/infographic/Castle_QuestBoard.webp',
    features: [
      'In-game Quests',
      'Community Missions',
      '7-Step Workflow Process',
      'Progress Tracking & Rewards'
    ]
  },
  {
    id: 'intergrations',
    title: 'Integrations',
    description: 'Extend guild reach beyond its walls through Web2 plugins and game ecosystems, with first-class Star Atlas integration for complete operational control.',
    path: 'M 38.11 53.07 L 35.98 51.63 L 28.04 41.04 L 31.39 39.35 L 33.36 40.60 L 36.12 44.15 L 40.27 41.72 L 46.97 46.05 L 43.21 49.95 Z',
    imageSrc: '/infographic/Castle_Intergrations.webp',
    features: [
      'Web2 Plugins (Discord, GitHub)',
      'Game Ecosystems',
      'Star Atlas Integration',
      'API, Bots & Webhooks'
    ]
  },
  {
    id: 'gatekeeping',
    title: 'Gatekeeping',
    description: 'Ensures only verified members gain access through dGuild access control and role-based permissions for security and trust.',
    path: 'M 37.26 31.16 L 29.56 35.16 L 25.01 32.41 L 17.89 36.15 L 18.50 42.26 L 15.29 44.08 L 19.49 47.21 L 23.67 44.65 L 26.73 46.88 L 26.23 39.85 L 28.51 40.13 L 40.96 33.20 Z',
    imageSrc: '/infographic/Castle_Gatekeeping.webp',
    features: [
      'dGuild Access Control',
      'Role-Based Permissions',
      'Member Verification',
      'Security & Trust'
    ]
  },
  {
    id: 'commandcentre',
    title: 'Command Centre',
    description: 'The nerve centre that controls your dGuild with all tools required for creating activities and resources, from council multisig transactions to quest and NFT creation.',
    path: 'M 44.02 18.77 L 53.65 24.12 L 58.07 21.55 L 57.99 17.63 L 61.87 15.46 L 51.35 10.63 L 43.98 14.36 Z',
    imageSrc: '/infographic/Castle_CommandCentre.webp',
    features: [
      'Council Operations',
      'Quest Creation',
      'NFT Collections',
      'Resource Management'
    ]
  },
  {
    id: 'tavern',
    title: 'Tavern',
    description: 'Social gaming hall where guild members gather for entertainment, competition, and community building through events, mini-games, tournaments, and challenges.',
    path: 'M 40.53 17.98 L 48.08 22.02 L 48.14 25.97 L 46.79 25.96 L 46.82 29.77 L 41.63 32.45 L 37.42 29.95 L 29.61 34.08 L 21.74 28.87 L 28.98 25.38 L 28.88 23.85 Z',
    imageSrc: '/infographic/Castle_Tavern.webp',
    features: [
      'Events & Celebrations',
      'Mini Games',
      'Tournaments',
      'Challenges'
    ]
  },
  {
    id: 'armory',
    title: 'Armory',
    description: 'Your guild\'s gear arsenal and trading post. Pick up equipment for missions, borrow gear from fellow members, or shop for surplus items. Turn collective resources into individual power.',
    path: 'M 14.34 24.21 L 21.23 19.18 L 31.95 14.00 L 31.84 3.29 L 42.17 3.26 L 42.41 15.97 L 28.36 22.93 L 28.49 25.08 L 21.11 28.68 Z',
    imageSrc: '/infographic/Castle_Armory.webp',
    features: [
      'Quest-Specific Loadouts',
      'Member Lending Program',
      'Internal Marketplace',
      'Competitive Edge Assets'
    ]
  },
  {
    id: 'foundry',
    title: 'Foundry',
    description: 'Creative forge where digital identity, achievements, and value are minted into existence through dGuild tokens, avatar NFTs, trophy badges, and tokenized assets.',
    path: 'M 86.97 27.66 L 98.95 37.80 L 96.05 41.40 L 89.57 48.13 L 81.17 43.30 L 81.76 36.55 L 76.76 33.72 Z',
    imageSrc: '/infographic/Castle_Foundry.webp',
    features: [
      'dGuild Tokens',
      'Avatar NFTs',
      'Trophy Badges',
      'Tokenized Assets'
    ]
  }
])

// Computed properties
const currentBaseImage = computed(() => {
  return isHovered.value ? unlidImage : lidImage
})

const clickedHotspotData = computed(() => {
  if (!clickedHotspot.value) return null
  return hotspots.value.find(h => h.id === clickedHotspot.value) || null
})

// Methods
const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
  // Don't immediately deactivate hotspot to allow smooth interaction
}

let hoverTimeout: number | null = null

const handleCastleMouseEnter = () => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
    hoverTimeout = null
  }
  isCastleHovered.value = true
}

const handleCastleMouseLeave = () => {
  // Add a small delay before hiding to prevent flickering
  hoverTimeout = window.setTimeout(() => {
    isCastleHovered.value = false
  }, 200)
}

const activateHotspot = (hotspotId: string) => {
  activeHotspot.value = hotspotId
}

const deactivateHotspot = () => {
  // Delay deactivation to allow smooth interaction
  setTimeout(() => {
    if (!isHovered.value) {
      activeHotspot.value = null
    }
  }, 100)
}

const toggleHotspot = (hotspotId: string) => {
  if (clickedHotspot.value === hotspotId) {
    // If clicking the same hotspot, close the sidebar
    clickedHotspot.value = null
  } else {
    // Open sidebar for clicked hotspot
    clickedHotspot.value = hotspotId
  }
}

const closeSidebar = () => {
  clickedHotspot.value = null
}

// Reset castle to inactive state
const resetCastleState = () => {
  isHovered.value = false
  activeHotspot.value = null
  clickedHotspot.value = null
  isCastleHovered.value = false
  // Clear any pending timeouts
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
    hoverTimeout = null
  }
}

// Ensure sidebar stays positioned correctly during scroll
const handleScroll = () => {
  // Force sidebar to maintain fixed positioning
  const sidebar = document.querySelector('.castle-sidebar') as HTMLElement
  if (sidebar) {
    sidebar.style.position = 'fixed'
    sidebar.style.top = '50%'
    sidebar.style.transform = 'translateY(-50%)'
  }
}

// Watch for route changes to reset castle state when navigating away from homepage
watch(() => route.path, (newPath, oldPath) => {
  // If navigating away from homepage, reset castle state
  if (oldPath === '/' && newPath !== '/') {
    resetCastleState()
  }
  // If navigating back to homepage, also reset to ensure clean state
  if (newPath === '/') {
    resetCastleState()
  }
}, { immediate: true })

// Click outside handler
const handleClickOutside = (event: MouseEvent) => {
  const sidebar = document.querySelector('.castle-sidebar') as HTMLElement
  const castleContainer = document.querySelector('.castle-infographic') as HTMLElement
  
  if (sidebar && castleContainer && clickedHotspot.value) {
    // Check if click is outside both sidebar and castle container
    if (!sidebar.contains(event.target as Node) && !castleContainer.contains(event.target as Node)) {
      closeSidebar()
    }
  }
}

// Lifecycle
onMounted(() => {
  // Add scroll listener to maintain sidebar position
  window.addEventListener('scroll', handleScroll, { passive: true })
  // Add click outside listener
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  // Clean up hover timeout and scroll listener
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
  }
  window.removeEventListener('scroll', handleScroll)
  // Remove click outside listener
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.castle-infographic {
  width: 100%;
  max-width: 4000px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.castle-infographic:hover {
  transform: scale(1.005);
}

.castle-container {
  position: relative;
  width: 100%;
  max-width: 4000px;
  margin: 0 auto;
  height: 0;
  padding-bottom: 57.03%; /* 2920/5120 aspect ratio */
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.castle-base-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.3s ease;
}

.castle-overlay {
  position: absolute;
  top: -5.5%;
  left: -3.6%;
  width: 102%;
  height: 104%;
  pointer-events: all;
  z-index: 2;
}

.hotspot {
  fill: transparent;
  stroke: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.hotspot:hover,
.hotspot.active {
  fill: rgba(0, 212, 255, 0.1);
  stroke: rgba(0, 212, 255, 0.3);
  stroke-width: 0.5;
}

.feature-images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.feature-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.feature-image.active {
  opacity: 1;
}



/* Mobile optimizations */
@media (max-width: 1200px) {
  .castle-infographic {
    max-width: 100%;
    margin: 0 20px;
  }
}

@media (max-width: 768px) {
  .castle-infographic {
    max-width: 100%;
    margin: 0 16px;
  }
}

@media (max-width: 480px) {
  .castle-container {
    border-radius: 8px;
  }
}

/* Sidebar Styles */
.castle-sidebar {
  position: fixed !important;
  top: 50% !important;
  left: -400px;
  width: 400px;
  height: 80vh;
  max-height: 600px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0 12px 12px 0;
  z-index: 9999 !important;
  transition: left 0.3s ease, width 0.3s ease;
  overflow-y: auto;
  box-shadow: 10px 0 30px rgba(0, 0, 0, 0.3);
  transform: translateY(-50%) !important;
  /* Ensure it's completely independent of parent positioning */
  right: auto !important;
  bottom: auto !important;
  margin: 0 !important;
}

.castle-sidebar.sidebar-open {
  left: 0;
}

/* Hint state styling */
.castle-sidebar.sidebar-hint {
  width: 120px;
  background: rgba(0, 0, 0, 0.8);
  border-right: 2px solid rgba(0, 212, 255, 0.6);
  box-shadow: 5px 0 20px rgba(0, 212, 255, 0.2);
  /* Ensure hint state also maintains fixed positioning */
  position: fixed !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
}

.sidebar-content {
  padding: 40px 30px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Hint content styling */
.sidebar-hint-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px 10px;
}

.hint-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.hint-word {
  color: rgba(0, 212, 255, 0.8);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
  transition: all 0.3s ease;
  animation: hintPulse 2s ease-in-out infinite;
}

.hint-word:nth-child(1) { animation-delay: 0s; }
.hint-word:nth-child(2) { animation-delay: 0.2s; }
.hint-word:nth-child(3) { animation-delay: 0.4s; }
.hint-word:nth-child(4) { animation-delay: 0.6s; }

@keyframes hintPulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

.sidebar-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.sidebar-close:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.sidebar-info h2 {
  color: #00d4ff;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 20px 0;
  line-height: 1.2;
}

.sidebar-info p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 30px 0;
}

.sidebar-features h3 {
  color: #00d4ff;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 15px 0;
}

.sidebar-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-features li {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 10px 0;
  padding-left: 20px;
  position: relative;
}

.sidebar-features li::before {
  content: '•';
  color: #00d4ff;
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
  .hotspot {
    fill: rgba(0, 212, 255, 0.05);
  }
  
  .hotspot.active {
    fill: rgba(0, 212, 255, 0.15);
  }
}

/* Mobile sidebar adjustments */
@media (max-width: 768px) {
  .castle-sidebar {
    width: 90vw;
    max-width: 350px;
    left: -90vw;
    height: 70vh;
    max-height: 500px;
  }
  
  .castle-sidebar.sidebar-hint {
    width: 80px;
  }
  
  .sidebar-content {
    padding: 30px 20px;
  }
  
  .sidebar-hint-content {
    padding: 15px 5px;
  }
  
  .hint-word {
    font-size: 12px;
    letter-spacing: 1px;
  }
  
  .sidebar-info h2 {
    font-size: 24px;
  }
  
  .sidebar-info p {
    font-size: 14px;
  }
  
  .sidebar-features h3 {
    font-size: 18px;
  }
  
  .sidebar-features li {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .castle-sidebar {
    width: 95vw;
    left: -95vw;
    height: 60vh;
    max-height: 400px;
  }
  
  .castle-sidebar.sidebar-hint {
    width: 70px;
  }
  
  .sidebar-content {
    padding: 20px 15px;
  }
  
  .sidebar-hint-content {
    padding: 10px 3px;
  }
  
  .hint-word {
    font-size: 11px;
    letter-spacing: 0.5px;
  }
}
</style>
