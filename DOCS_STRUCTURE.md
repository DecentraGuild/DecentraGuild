# Documentation Structure Verification

## 4-Layer Structure: CASTLE > CATEGORY > ROOM > FUNCTION

### Core Concepts Category
- What is a dGuild? `/docs/what-is-dguild`
- DAO for King `/docs/governance`
- The Token Economy `/docs/token-economy`
- Legal Framework `/docs/legal-framework`
- The dGuild Lifecycle `/docs/lifecycle`
- Build-Your-Own `/docs/build-your-own`

### The Digital Castle Category

#### Dashboard (Room)
- Intro: `/docs/dashboard`
- Navigation: `/docs/dashboard/navigation`

#### Command Centre (Room)
- Intro: `/docs/command-centre`
- Manage All: `/docs/command-centre/manage-all`

#### Quest Board (Room)
- Intro: `/docs/quest-board`
- In-Game Quests: `/docs/quest-board/in-game-quests`
- Guild Quests: `/docs/quest-board/guild-quests`

#### Tavern (Room)
- Intro: `/docs/tavern`
- Events: `/docs/tavern/events`
- Raffles: `/docs/tavern/raffles`
- Poker: `/docs/tavern/poker`
- Dice: `/docs/tavern/dice`

#### Armory (Room)
- Intro: `/docs/armory`
- Claim: `/docs/armory/claim`
- Shop (G2P): `/docs/armory/shop`
- Use (Gear): `/docs/armory/use`

#### Foundry (Room)
- Intro: `/docs/foundry`
- Token 1: `/docs/foundry/token1`
- Token 2: `/docs/foundry/token2`
- Custom: `/docs/foundry/custom`
- NFT: `/docs/foundry/nft`

#### Trophy Room (Room)
- Intro: `/docs/trophy-room`
- Achievements: `/docs/trophy-room/achievements`

#### DAO (Room)
- Intro: `/docs/dao`
- Voting: `/docs/dao/voting`

#### Vaults (Room)
- Intro: `/docs/vaults`
- Overview: `/docs/vaults/overview`
- Council: `/docs/vaults/council`

#### Observatory (Room)
- Intro: `/docs/observatory`
- Personal: `/docs/observatory/personal`
- dGuild: `/docs/observatory/dguild`
- Financial: `/docs/observatory/financial`

#### Gatekeeping (Room)
- Intro: `/docs/gatekeeping`
- Roles: `/docs/gatekeeping/roles`
- Permissions: `/docs/gatekeeping/permissions`

#### Community Hub (Room)
- Intro: `/docs/community-hub`
- Guild Profile: `/docs/community-hub/guild-profile`
- Member Profile: `/docs/community-hub/member-profile`

#### Integrations (Room)
- Intro: `/docs/integrations`
- Player: `/docs/integrations/player`
- Guild: `/docs/integrations/guild`

### Summary Category
- Summary `/docs/summary`

## File Structure
```
src/views/docs/pages/
├── armory/
│   ├── Armory.vue (intro)
│   ├── Claim.vue
│   ├── Shop.vue
│   └── Use.vue
├── command-centre/
│   ├── CommandCentre.vue (intro)
│   └── ManageAll.vue
├── community-hub/
│   ├── CommunityHub.vue (intro)
│   ├── GuildProfile.vue
│   └── MemberProfile.vue
├── core-mechanics/
│   ├── BuildYourOwn.vue
│   ├── Governance.vue
│   ├── LegalFramework.vue
│   ├── Lifecycle.vue
│   ├── TokenEconomy.vue
│   └── WhatIsDGuild.vue
├── dao/
│   ├── DAO.vue (intro)
│   └── Voting.vue
├── dashboard/
│   ├── Dashboard.vue (intro)
│   └── Navigation.vue
├── foundry/
│   ├── Foundry.vue (intro)
│   ├── Custom.vue
│   ├── NFT.vue
│   ├── Token1.vue
│   └── Token2.vue
├── gatekeeping/
│   ├── Gatekeeping.vue (intro)
│   ├── Permissions.vue
│   └── Roles.vue
├── integrations/
│   ├── Integrations.vue (intro)
│   ├── Guild.vue
│   ├── Player.vue
│   └── StarAtlas.vue
├── observatory/
│   ├── Observatory.vue (intro)
│   ├── DGuild.vue
│   ├── Financial.vue
│   └── Personal.vue
├── quest-board/
│   ├── QuestBoard.vue (intro)
│   ├── GuildQuests.vue
│   └── InGameQuests.vue
├── summary/
│   └── Summary.vue
├── tavern/
│   ├── Tavern.vue (intro)
│   ├── Dice.vue
│   ├── Events.vue
│   ├── Poker.vue
│   └── Raffles.vue
├── trophy-room/
│   ├── TrophyRoom.vue (intro)
│   └── Achievements.vue
└── vaults/
    ├── Vaults.vue (intro)
    ├── Council.vue
    └── Overview.vue
```

## Total Pages: 57

All pages use the `DocPageLayout` component and have placeholder content.
All routes are configured in `src/router/index.ts`.
All navigation structure is defined in `src/data/docs/index.ts`.
Sidebar navigation is implemented in `src/components/docs/DocsSidebar.vue`.

## Navigation Features
- Collapsible categories
- Collapsible rooms with functions
- "Intro" link shown when room has functions
- Previous/Next navigation buttons at bottom of each page (via DocPageLayout)
- Active state highlighting
- Auto-expand to current page

