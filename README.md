# DecentraGuild Website

A modern Vue.js website for DecentraGuild - the platform for decentralized gaming guilds.

## 🎮 About DecentraGuild

DecentraGuild lets gaming communities create and manage decentralized guilds with tools for jobs, events, rewards, and governance — powered by Solana.

**Key Features:**
- 🏰 Treasury management with Squads multisig
- ⚔️ Jobs & missions system
- 📅 Event coordination
- 🗳️ DAO governance with dual-token system
- 🎲 Mini-games for engagement
- 🌌 Game integration (starting with Star Atlas)

## 🛠️ Tech Stack

- **Frontend:** Vue 3 + TypeScript + Vite
- **Styling:** Custom CSS with gaming-themed design
- **Routing:** Vue Router 4
- **Icons:** SVG icons and emojis
- **Fonts:** Inter + JetBrains Mono

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/
│   └── styles/
│       └── main.css          # Global styles and gaming theme
├── components/
│   ├── AppNavigation.vue     # Main navigation component
│   └── AppFooter.vue         # Footer component
├── views/
│   ├── HomeView.vue          # Landing page
│   ├── DemoGuildView.vue     # Interactive demo
│   ├── DocsView.vue          # Documentation
│   └── CommunityView.vue     # Community page
├── router/
│   └── index.ts              # Vue Router configuration
├── App.vue                   # Root component
└── main.ts                   # Application entry point
```

## 🎨 Design System

The website features a custom gaming-themed design system:

### Colors
- **Primary Background:** `#0a0a0f` (Dark space)
- **Secondary Background:** `#141420` (Darker cards)
- **Accent Primary:** `#00d4ff` (Cyber blue)
- **Accent Secondary:** `#ff6b35` (Energy orange)
- **Text Primary:** `#ffffff` (Pure white)
- **Text Secondary:** `#a0a0b3` (Muted)

### Typography
- **Primary Font:** Inter (Clean, modern)
- **Mono Font:** JetBrains Mono (Code/technical content)

### Components
- Responsive grid system
- Gaming-style buttons with hover effects
- Glowing accents and animations
- Card-based layouts
- Mobile-first responsive design

## 📄 Pages

### 🏠 Home (/)
Complete landing page with:
- Hero section with animated CTAs
- "What is a dGuild?" explanation
- Key features showcase (6 features)
- How it works (3 steps)
- Demo CTA section
- Why DecentraGuild benefits

### 🎮 dApp Demo (/dapp)
Interactive demo experience:
- Guild joining simulation
- Mock dashboard with real interactions
- Jobs & missions completion
- Event participation
- Treasury viewing
- DAO voting simulation
- Mini-games (raffle, poker)
- Completion celebration

### 📚 Docs (/docs)
Comprehensive documentation:
- What is a dGuild (detailed)
- Token model (TokenA & TokenB)
- Governance & treasury explanation
- FAQ section
- Technical details

### 👥 Community (/community)
Community hub:
- Origin story (Star Atlas guild)
- Partners & ecosystem
- Join links (Discord, Twitter, Newsletter)
- Community statistics
- Growth metrics

## 🔧 Development

### Recommended IDE Setup
- [VSCode](https://code.visualstudio.com/) 
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension
- Disable Vetur if installed

### Code Style
- TypeScript for type safety
- Vue 3 Composition API
- Scoped CSS in components
- Semantic HTML structure
- Mobile-first responsive design

## 🚀 Deployment

The website is built as a static site and can be deployed to:
- Vercel
- Netlify  
- GitHub Pages
- Any static hosting service

For Arweave/IPFS deployment (as mentioned in requirements):
1. Build the project: `npm run build`
2. Upload the `dist/` folder to your preferred decentralized storage
3. Configure routing for SPA behavior

## 📝 License

Built for DecentraGuild - Empowering gaming communities with decentralized tools.

---

**Ready to build your guild? Try the [dApp Demo](http://localhost:5173/dapp) experience!**
