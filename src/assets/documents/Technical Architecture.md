# dGuild dApp Technical Architecture

## Overview

This document outlines the technical architecture for building a new dGuild dApp demo from scratch. The focus is on creating a clean, maintainable, and scalable foundation that demonstrates the core dGuild concepts while being flexible enough for future development.

## Project Goals

### Primary Objectives
- **Clean Slate**: Start fresh with modern architecture patterns
- **Demo-Focused**: Prioritize showcasing dGuild concepts over full production features
- **Maintainable**: Code structure that's easy to understand and extend
- **Scalable**: Foundation that can grow into full production system
- **Educational**: Clear documentation and examples for team learning

### Core Features to Implement
1. **Multi-Guild Support**: Users can switch between different dGuilds
2. **Role-Based Access**: Different permission levels (Member, Officer, Council, Founder)
3. **Treasury Management**: View and manage guild vaults
4. **Member Management**: View member profiles and roles
5. **Quest System**: Basic quest creation and management
6. **Event System**: Guild events and announcements
7. **Theme System**: Customizable UI per guild

## Technology Stack

### Frontend
- **Framework**: Vue.js 3 with Composition API
- **Build Tool**: Vite
- **Language**: TypeScript
- **State Management**: Pinia
- **UI Framework**: Custom components with Tailwind CSS
- **Routing**: Vue Router
- **Icons**: Iconify
- **Charts**: Chart.js or similar

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint + Prettier
- **Type Checking**: TypeScript
- **Testing**: Vitest (for unit tests)
- **Mock Data**: JSON files + composables

### Future Integrations
- **Blockchain**: Solana Web3.js (Phase 2)
- **Backend**: Node.js/Express API (Phase 2)
- **Database**: PostgreSQL (Phase 2)
- **Authentication**: Wallet-based (Phase 2)

## Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── ui/                 # Basic UI components (Button, Card, etc.)
│   ├── layout/             # Layout components (Header, Sidebar, etc.)
│   ├── forms/              # Form components
│   └── charts/             # Chart components
├── views/                  # Page components
│   ├── DashboardView.vue
│   ├── TreasuryView.vue
│   ├── MembersView.vue
│   ├── QuestsView.vue
│   └── SettingsView.vue
├── composables/            # Vue Composition API logic
│   ├── useAuth.ts         # Authentication & user management
│   ├── useGuild.ts        # Guild operations
│   ├── usePermissions.ts  # Role-based access control
│   ├── useTheme.ts        # Theme management
│   └── useMockData.ts     # Mock data management
├── stores/                 # Pinia state management
│   ├── auth.ts            # User authentication state
│   ├── guild.ts           # Current guild state
│   ├── permissions.ts     # Permission state
│   └── theme.ts           # Theme state
├── services/              # Data services
│   ├── mockData/          # Mock data files
│   │   ├── guilds.json    # Guild data
│   │   ├── members.json   # Member data
│   │   ├── quests.json    # Quest data
│   │   └── events.json    # Event data
│   └── dataService.ts     # Data service layer
├── types/                 # TypeScript definitions
│   ├── guild.ts           # Guild-related types
│   ├── user.ts            # User and role types
│   ├── quest.ts           # Quest types
│   └── common.ts          # Common types
├── utils/                 # Utility functions
│   ├── permissions.ts     # Permission checking
│   ├── formatters.ts      # Data formatting
│   └── validators.ts      # Input validation
├── assets/                # Static assets
│   ├── images/            # Images and icons
│   ├── styles/            # Global styles
│   └── themes/            # Theme definitions
└── router/                # Vue Router configuration
    └── index.ts
```

## Core Data Models

### Guild
```typescript
interface Guild {
  id: string
  name: string
  description: string
  logo: string
  theme: GuildTheme
  treasury: Treasury
  members: GuildMember[]
  roles: Role[]
  settings: GuildSettings
  createdAt: Date
  updatedAt: Date
}
```

### User
```typescript
interface User {
  id: string
  walletAddress: string
  username: string
  avatar: string
  email?: string
  joinedAt: Date
  lastActive: Date
}
```

### GuildMember
```typescript
interface GuildMember {
  userId: string
  guildId: string
  role: Role
  permissions: Permission[]
  joinedAt: Date
  isActive: boolean
  contributionScore: number
}
```

### Role
```typescript
interface Role {
  id: string
  name: string
  level: number // 1-5 (Member to Founder)
  permissions: Permission[]
  color: string
  description: string
}
```

### Quest
```typescript
interface Quest {
  id: string
  title: string
  description: string
  type: QuestType
  status: QuestStatus
  reward: QuestReward
  requirements: QuestRequirement[]
  assignedTo?: string
  createdBy: string
  createdAt: Date
  dueDate?: Date
  completedAt?: Date
}
```

### Treasury
```typescript
interface Treasury {
  guildId: string
  totalValue: number
  vaults: Vault[]
  transactions: Transaction[]
  lastUpdated: Date
}

interface Vault {
  id: string
  name: string
  type: VaultType
  balance: number
  currency: string
  description: string
}
```

## State Management

### Pinia Store Architecture

#### Auth Store
```typescript
export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref<User | null>(null)
  const isAuthenticated = computed(() => !!currentUser.value)
  const currentGuildId = ref<string | null>(null)
  
  const login = async (walletAddress: string) => { /* ... */ }
  const logout = () => { /* ... */ }
  const switchGuild = (guildId: string) => { /* ... */ }
  
  return { currentUser, isAuthenticated, currentGuildId, login, logout, switchGuild }
})
```

#### Guild Store
```typescript
export const useGuildStore = defineStore('guild', () => {
  const currentGuild = ref<Guild | null>(null)
  const members = ref<GuildMember[]>([])
  const roles = ref<Role[]>([])
  const treasury = ref<Treasury | null>(null)
  
  const loadGuild = async (guildId: string) => { /* ... */ }
  const updateMember = async (member: GuildMember) => { /* ... */ }
  const createQuest = async (quest: Quest) => { /* ... */ }
  
  return { currentGuild, members, roles, treasury, loadGuild, updateMember, createQuest }
})
```

#### Permissions Store
```typescript
export const usePermissionsStore = defineStore('permissions', () => {
  const userPermissions = ref<Permission[]>([])
  const userRole = ref<Role | null>(null)
  
  const hasPermission = (permission: Permission) => { /* ... */ }
  const canAccess = (resource: string, action: string) => { /* ... */ }
  
  return { userPermissions, userRole, hasPermission, canAccess }
})
```

## Component Architecture

### UI Component Hierarchy
```
App
├── AppLayout
│   ├── AppHeader
│   │   ├── GuildSelector
│   │   ├── UserMenu
│   │   └── ThemeToggle
│   ├── AppSidebar
│   │   ├── NavigationMenu
│   │   └── QuickActions
│   └── AppMain
│       ├── DashboardView
│       ├── TreasuryView
│       ├── MembersView
│       ├── QuestsView
│       └── SettingsView
└── AppModals
    ├── QuestModal
    ├── MemberModal
    └── ConfirmationModal
```

### Key Components

#### GuildSelector
- Dropdown to switch between available guilds
- Shows current guild info
- Handles guild switching logic

#### PermissionGate
- Wrapper component for permission-based rendering
- Shows/hides content based on user permissions
- Provides fallback UI for unauthorized access

#### DataTable
- Reusable table component for lists
- Supports sorting, filtering, pagination
- Configurable columns and actions

#### QuestCard
- Displays quest information
- Shows status, rewards, assignee
- Handles quest actions (assign, complete, etc.)

## Mock Data Strategy

### Phase 1: Static Mock Data
- JSON files with realistic sample data
- Multiple guilds with different themes
- Various user roles and permissions
- Sample quests, events, and transactions

### Phase 2: Dynamic Mock Data
- Composable-based data management
- Simulated API calls with delays
- State persistence in localStorage
- Realistic data updates and mutations

### Mock Data Structure
```typescript
// mockData/guilds.json
{
  "guilds": [
    {
      "id": "guild-1",
      "name": "Crypto Knights",
      "description": "A legendary guild of blockchain warriors",
      "theme": "medieval",
      "members": [...],
      "treasury": {...},
      "quests": [...]
    }
  ]
}
```

## Permission System

### Role Hierarchy
1. **Founder** (Level 5) - Full access to everything
2. **Council** (Level 4) - Treasury management, member management
3. **Officer** (Level 3) - Quest management, event creation
4. **Member** (Level 2) - Basic guild participation
5. **Prospect** (Level 1) - Limited access, pending approval

### Permission Types
```typescript
enum Permission {
  // Treasury
  VIEW_TREASURY = 'view_treasury',
  MANAGE_TREASURY = 'manage_treasury',
  APPROVE_TRANSACTIONS = 'approve_transactions',
  
  // Members
  VIEW_MEMBERS = 'view_members',
  MANAGE_MEMBERS = 'manage_members',
  INVITE_MEMBERS = 'invite_members',
  
  // Quests
  VIEW_QUESTS = 'view_quests',
  CREATE_QUESTS = 'create_quests',
  ASSIGN_QUESTS = 'assign_quests',
  COMPLETE_QUESTS = 'complete_quests',
  
  // Settings
  VIEW_SETTINGS = 'view_settings',
  MANAGE_SETTINGS = 'manage_settings',
  MANAGE_THEME = 'manage_theme'
}
```

## Theme System

### Theme Structure
```typescript
interface GuildTheme {
  id: string
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
  }
  fonts: {
    heading: string
    body: string
  }
  styles: {
    borderRadius: string
    shadows: string
    animations: boolean
  }
}
```

### Theme Implementation
- CSS custom properties for dynamic theming
- Theme switching without page reload
- Guild-specific theme persistence
- Fallback themes for new guilds

## Development Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Project setup and structure
- [ ] Basic routing and layout
- [ ] Mock data implementation
- [ ] Core stores and composables
- [ ] Basic UI components

### Phase 2: Core Features (Week 3-4)
- [ ] Guild switching functionality
- [ ] Permission system implementation
- [ ] Dashboard with key metrics
- [ ] Treasury view with mock data
- [ ] Member management interface

### Phase 3: Advanced Features (Week 5-6)
- [ ] Quest system implementation
- [ ] Event management
- [ ] Theme customization
- [ ] Settings and configuration
- [ ] Data persistence

### Phase 4: Polish & Testing (Week 7-8)
- [ ] UI/UX improvements
- [ ] Performance optimization
- [ ] Error handling
- [ ] Testing implementation
- [ ] Documentation completion

## File Organization

### Component Naming
- **Views**: PascalCase with "View" suffix (DashboardView.vue)
- **Components**: PascalCase (UserCard.vue, QuestModal.vue)
- **Composables**: camelCase with "use" prefix (useAuth.ts)
- **Stores**: camelCase with "Store" suffix (authStore.ts)
- **Types**: PascalCase (User.ts, Guild.ts)

### Import Organization
```typescript
// 1. Vue imports
import { ref, computed, onMounted } from 'vue'

// 2. Third-party imports
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

// 3. Internal imports
import { useAuthStore } from '@/stores/auth'
import { type User } from '@/types/user'
```

## Performance Considerations

### Optimization Strategies
- **Lazy Loading**: Route-based code splitting
- **Virtual Scrolling**: For large lists (members, transactions)
- **Memoization**: Computed properties and reactive data
- **Debouncing**: Search and filter inputs
- **Caching**: Store data in Pinia for reuse

### Bundle Size
- Tree-shaking for unused code
- Dynamic imports for heavy components
- Optimized images and assets
- Minimal external dependencies

## Testing Strategy

### Unit Tests
- Composable functions
- Utility functions
- Store actions and getters
- Component logic

### Integration Tests
- User flows (login, guild switching)
- Permission-based access
- Data persistence
- Theme switching

### E2E Tests
- Complete user journeys
- Cross-browser compatibility
- Mobile responsiveness

## Future Considerations

### Blockchain Integration
- Wallet connection (Phantom, Solflare)
- Solana program integration
- Transaction signing and confirmation
- Real-time blockchain data

### Backend Integration
- REST API for off-chain data
- WebSocket for real-time updates
- Database integration
- File upload and storage

### Production Features
- User authentication
- Data persistence
- Error monitoring
- Analytics and tracking
- Performance monitoring

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- VS Code (recommended)
- Vue.js devtools extension

### Setup Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Lint code
npm run lint
```

### Development Workflow
1. Create feature branch
2. Implement feature with tests
3. Update documentation
4. Create pull request
5. Code review and merge

---

This architecture provides a solid foundation for building a modern, maintainable dGuild dApp demo that can evolve into a full production system.
