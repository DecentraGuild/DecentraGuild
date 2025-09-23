<template>
  <div class="concept">
    <!-- Hero Section -->
    <section class="section-hero">
      <div class="container">
        <div class="concept-hero text-center">
          <h1 class="mb-4">Concept</h1>
          <p class="concept-subtitle mb-5">
            Understanding the dGuild concept and ecosystem
          </p>
          <div class="hero-stats">
            <div class="stat-item">
                <div class="stat-number">4</div>
                <div class="stat-label">Treasury Vaults</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">2</div>
                <div class="stat-label">DAO Layers</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">5+</div>
                <div class="stat-label">Role Levels</div>
              </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="section">
      <div class="container">
        <div class="concept-layout">
          <!-- Sidebar Navigation -->
          <aside class="concept-sidebar">
            <div class="sidebar-content">
              <h3 class="sidebar-title">Guide Sections</h3>
              <nav class="sidebar-nav">
                <ul class="nav-list">
                  <li v-for="section in sections" :key="section.id" class="nav-item">
                    <!-- Category with subsections -->
                    <div v-if="section.type === 'category'" class="nav-category">
                      <button 
                        :class="['nav-category-header', { active: section.subsections?.some(sub => activeSection === sub.id) }]"
                        @click="toggleCategory(section.id)"
                      >
                        <Icon 
                          :icon="section.expanded ? 'game-icons:down-arrow' : 'game-icons:right-arrow'" 
                          class="category-arrow"
                        />
                        {{ section.title }}
                      </button>
                      <ul v-if="section.expanded" class="nav-subsections">
                        <li v-for="subsection in section.subsections" :key="subsection.id" class="nav-subitem">
                          <a 
                            :href="`#${subsection.id}`" 
                            :class="['nav-sublink', { active: activeSection === subsection.id }]"
                            @click="scrollToSection(subsection.id, $event)"
                          >
                            {{ subsection.title }}
                          </a>
                        </li>
                      </ul>
                    </div>
                    
                    <!-- Regular section -->
                    <a 
                      v-else
                      :href="`#${section.id}`" 
                      :class="['nav-link', { active: activeSection === section.id }]"
                      @click="scrollToSection(section.id, $event)"
                    >
                      {{ section.title }}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          <!-- Main Content -->
          <div class="concept-content">
            <!-- dGuild Section -->
            <div id="dguild" class="concept-section card mb-5">
              <h2>What is a dGuild?</h2>
              <p>
                DecentraGuild is the platform that enables the creation of dGuilds  
                - A <strong>dGuild</strong> is a Web3-native guild template — 
                a self-custodied, legally recognized association operated by its members. 
                It blends <strong>medieval guild structures</strong> with <strong>web3 technology</strong>, 
                giving communities the tools to operate like kingdom in cyberspace.
              </p>
              
              <p>Each dGuild runs on a foundation of <strong>on-chain custody</strong> via Squads multisig vaults,
                <strong>two complementary DAOs from realms </strong> for governance, 
                <strong>non-transferable member tokens</strong> for identity and voting, 
                and <strong>legal wrappers</strong> for real-world legitimacy. 
                Guilds can rebrand their UI, avatar sets, and guild identity while still 
                relying on the same core template technology.</p>

              <div class="principles-grid">
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:padlock" /></div>
                  <h4>On-Chain Custody</h4>
                  <p>Your guild holds its own custodial control. Multisig vaults and on-chain contracts store assets and execute flows. The platform doesn't hold any of your assets.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:scales" /></div>
                  <h4>Two-Layer Governance</h4>
                  <p>Two separate DAOs combine into a top-layer "guild vote" with adjustable weighting, letting communities express different participation signals.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:organigram" /></div>
                  <h4>Leadership</h4>
                  <p>The combined guild selects a Council for treasury management and operations, who appoint officers for day-to-day task and community management.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:gavel" /></div>
                  <h4>Legal Entity</h4>
                  <p>Each dGuild is a real legal entity with proper legal wrappers, enabling operation in both digital and real-world environments with full legal responsibilities.</p>
                </div>
              </div>
            </div>

 

            <!-- Governance Section -->
            <div id="governance" class="concept-section card mb-5">
              <h2>DAO for King</h2>
              <p class="lead">
                dGuild governance uses a dual-DAO system that balances operational efficiency with participation, ensuring both contributors and stability providers have appropriate voice.
              </p>
              
              <div class="governance-structure">
                <div class="combined-vote-card">
                  <h3><Icon icon="game-icons:crown" /> Combined Guild Vote</h3>
                  <p>
                    After DAO1 and DAO2 votes conclude, their weighted results combine into a single guild decision. 
                    <strong>Example:</strong> 60% weight to DAO1, 40% to DAO2 (configurable per guild).
                  </p>
                  <ul class="vote-examples">
                    <li><strong>Council Selection:</strong> Requires combined guild vote</li>
                    <li><strong>Major Parameter Changes:</strong> Requires combined guild vote</li>
                    <li><strong>Strategic Direction:</strong> Requires combined guild vote</li>
                  </ul>
                </div>
                
                <div class="dao-system">
                  <div class="dao-card dao-1">
                    <h3><Icon icon="game-icons:two-coins" style="color: #f59e0b;" /> DAO1 — Contribution DAO</h3>
                    <p><strong>Token1 holders</strong> vote on operational decisions and community matters</p>
                    <ul>
                      <li>Quest and mission approval</li>
                      <li>Community event planning</li>
                      <li>Operational policy decisions</li>
                      <li>Member engagement</li>
                    </ul>
                  </div>
                  
                  <div class="dao-card dao-2">
                    <h3><Icon icon="game-icons:two-coins" style="color: #3b82f6;" /> DAO2 — Stability DAO</h3>
                    <p><strong>Token2 holders</strong> vote on how to deploy staking assets to earn returns</p>
                    <ul>
                      <li>Staking deployment strategies</li>
                      <li>Asset allocation decisions</li>
                      <li>Return optimization approaches</li>
                      <li>Risk management policies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Token Economy Section -->
            <div id="token-economy" class="concept-section card mb-5">
              <h2>The Token Economy</h2>
              <p class="lead">
                Understanding the dual-token economy that powers dGuild operations and member incentives.
              </p>
              
              <div class="token-grid">
                <div class="token-card token-1">
                  <div class="token-header">
                    <h3><Icon icon="game-icons:two-coins" style="color: #f59e0b;" /> Token1 — Contribution Token</h3>
                    <span class="token-type">Contributions & Rewards</span>
                  </div>
                  <p>
                    Your guild's contribution token - stable in design and non-speculative. Members earn Token1 by contributing 
                    to the guild's success through missions, activities, and active participation.
                  </p>
                  <div class="token-details">
                    <h4>Key Properties:</h4>
                    <ul>
                      <li><strong>Purpose:</strong> Enable DAO1 voting and secure a voice in the organisation</li>
                      <li><strong>Backing:</strong> Peg/backing defined at creation with fixed mint ratio</li>
                      <li><strong>Allocation:</strong> Token1 allocation can be configured by the dGuild</li>
                      <li><strong>Minting:</strong> dGuild mints Token1 to distribute to contributors</li>
                      <li><strong>Utility:</strong> Voting in DAO1 or redeemed for pegged backing asset</li>
                      <li><strong>Privacy:</strong> Non-transferable (private to members)</li>
                    </ul>
                  </div>
                </div>
                
                <div class="token-card token-2">
                  <div class="token-header">
                    <h3><Icon icon="game-icons:two-coins" style="color: #3b82f6;" /> Token2 — Stability Token</h3>
                    <span class="token-type">Organizational Stability</span>
                  </div>
                  <p>
                    Your guild's stability token - designed to provide organizational stability and long-term alignment. 
                    Members mint Token2 by depositing backing assets, representing a portion of the pooled reserves.
                  </p>
                  <div class="token-details">
                    <h4>Key Properties:</h4>
                    <ul>
                      <li><strong>Purpose:</strong> Provide organizational stability and long-term alignment</li>
                      <li><strong>Backing:</strong> Can be deployed to earn staking rewards for the organization</li>
                      <li><strong>Allocation:</strong> Allocation of deposited assets can be configured by the dGuild</li>
                      <li><strong>Minting:</strong> Members can mint Token2 and help the dGuild earn staking rewards</li>
                      <li><strong>Utility:</strong> Voting in DAO2 or earn staking rewards</li>
                      <li><strong>Privacy:</strong> Non-transferable, Redeeming is subject to DAO policies (private to members)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="token-allocation mt-4">
                <h3>Platform Fees</h3>
                <p>Both Token1 and Token2 minting subject to platform fees paid in the asset backing (not dGuild tokens).</p>
              </div>
            </div>

            <!-- Legal Framework Section -->
            <div id="legal-framework" class="concept-section card mb-5">
              <h2>Legal Framework</h2>
              <p class="lead">
                Each dGuild is anchored in the real world through <strong>legal wrappers</strong>.
              </p>
              
              <p>This is what makes dGuilds more than just digital collectives. Every dGuild operates as a legitimate legal entity with proper governance structures, tax compliance, and regulatory adherence. This ensures real-world legitimacy and enables guilds to operate in both digital and physical environments with full legal responsibilities.</p>
              
              <p>From automated transaction tracking to comprehensive audit trails, the legal framework provides the foundation for sustainable, compliant operations that protect both the guild and its members.</p>
              
              <div class="lifecycle-phases">
                <div class="phase-card phase-1">
                  <div class="phase-header">
                    <div class="phase-number"><Icon icon="game-icons:scroll-quill" /></div>
                    <h3>Statutes (Bylaws)</h3>
                  </div>
                  <p class="phase-description">
                    Comprehensive governance documents that define the guild's structure, rules, and operational procedures.
                  </p>
                  <p>These legally binding bylaws establish member rights, decision-making processes, and organizational frameworks that ensure proper governance and legal compliance.</p>
                </div>
                
                <div class="phase-card phase-2">
                  <div class="phase-header">
                    <div class="phase-number"><Icon icon="game-icons:take-my-money" /></div>
                    <h3>Corporate Tax</h3>
                  </div>
                  <p class="phase-description">
                    Automated corporate tax reporting and compliance management for the dGuild entity.
                  </p>
                  <p>Generate professional tax reports, maintain compliance with corporate tax obligations, and ensure proper documentation for regulatory requirements and financial transparency.</p>
                </div>
                
                <div class="phase-card phase-3">
                  <div class="phase-header">
                    <div class="phase-number"><Icon icon="game-icons:person" /></div>
                    <h3>Personal Tax</h3>
                  </div>
                  <p class="phase-description">
                    Member tax reporting and documentation support for individual contributions and earnings.
                  </p>
                  <p>Provide members with detailed transaction records, earnings reports, and tax documentation to support their personal tax obligations and financial planning.</p>
                </div>
              </div>
            </div>
           <!-- Lifecycle Section -->
           <div id="lifecycle" class="concept-section card mb-5">
              <h2>The dGuild Lifecycle</h2>
              <p class="lead">
                Every dGuild follows <strong>structured template</strong>, ensuring security, stability and room for growth. 
                This journey transforms from initial establishment through configuration, operation, and evolution.
              </p>
              
              <div class="lifecycle-phases">
                <div class="phase-card phase-1">
                  <div class="phase-header">
                    <div class="phase-number">1</div>
                    <h3><Icon icon="game-icons:conqueror" /> Establish</h3>
                  </div>
                  <p class="phase-description">
                    The foundational phase where the dGuild's core infrastructure and governance are created.
                  </p>
                  <p>Deploy Squads multisig vaults for treasury and custody, define Token1 (Contribution) and Token2 (Stability) parameters, 
                    establish DAO1 (contributions) and DAO2 (stability), submit founding bylaws, goals, and legal wrapper, 
                    then elect the initial Council.</p>
                </div>
                
                <div class="phase-card phase-2">
                  <div class="phase-header">
                    <div class="phase-number">2</div>
                    <h3><Icon icon="game-icons:cargo-crane" /> Build</h3>
                  </div>
                  <p class="phase-description">
                    Fine-tuning the dGuild's operational parameters and settings for optimal performance.
                  </p>
                  <p>Customize dApp theme and guild branding, configure quests, rewards, and incentives, 
                    define vault distributions and monthly revenue splits, set minting fees and routing policies, 
                    and establish council policies and spending limits.</p>
                </div>
                
                <div class="phase-card phase-3">
                  <div class="phase-header">
                    <div class="phase-number">3</div>
                    <h3><Icon icon="game-icons:medieval-gate" /> Operate</h3>
                  </div>
                  <p class="phase-description">
                    The active phase where the dGuild launches its community features and begins collaborating with its members.
                  </p>
                  <p>Launch quests, achievements, and NFTs, council manages vaults and approves initiatives, 
                    members earn Token1 through contributions and Token2 through staking, values are distributed into vaults automatically, 
                    and community engages through events, quests, and tournaments. </p>
                </div>
                
                <div class="phase-card phase-4">
                  <div class="phase-header">
                    <div class="phase-number">4</div>
                    <h3><Icon icon="game-icons:uprising" /> Grow</h3>
                  </div>
                  <p class="phase-description">
                    The continuous improvement phase where the dGuild adapts and grows based on community needs and market conditions.
                  </p>
                  <p>Proposals adjust governance parameters and council roles, quests and reward mechanics evolve with feedback, 
                    partnerships expand reach and influence, and compliance and legal updates are applied as needed.</p>
                </div>
              </div>
              
              <div class="lifecycle-note">
                <p>The lifecycle is <strong>iterative</strong> — guilds revisit phases as they scale, ensuring balance between contributors, 
                  stability providers, and leadership.</p>
              </div>
            </div>
            <!-- A la Carte Section -->
            <div id="a-la-carte" class="concept-section card mb-5">
              <h2>🍽️ A la Carte</h2>
              <p class="lead">
                While we work towards delivering the complete dGuild package, we offer <strong>modular room solutions</strong> that allow communities to use finished components and build their own customized toolkit.
              </p>
              
              <p>This approach enables us to fund new smart contract deployments while providing immediate value to communities that need specific functionality. You can pick and choose the tools that work for your guild right now, then expand as more features become available.</p>
              
              <div class="principles-grid">
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:modular" /></div>
                  <h4>Modular Components</h4>
                  <p>Individual rooms with preset logic that can be deployed independently. Each component is fully functional and can be combined with others to create a custom dGuild experience.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:foundry" /></div>
                  <h4>Ready-to-Use Logic</h4>
                  <p>Pre-built smart contracts for common functions like token creation in the Foundry, G2P trading in the Armory, and governance mechanisms in the DAO.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:palette" /></div>
                  <h4>Custom Skinning</h4>
                  <p>Various theming and branding options to make each component uniquely yours. Customize the UI, colors, icons, and terminology to match your community's identity.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:coins" /></div>
                  <h4>Funding Development</h4>
                  <p>Revenue from A la Carte deployments helps fund new smart contract development and infrastructure improvements, accelerating the path to the complete dGuild platform.</p>
                </div>
              </div>
              
              <div class="a-la-carte-examples">
                <h3>Available Components soon...</h3>
                <div class="examples-grid">
                  <div class="example-card">
                    <h4><Icon icon="game-icons:foundry" /> Foundry Module</h4>
                    <p>Complete token creation and NFT minting system with customizable parameters and branding options.</p>
                  </div>
                  <div class="example-card">
                    <h4><Icon icon="game-icons:armory" /> Armory Module</h4>
                    <p>G2P (Guild-to-Player) trading platform with custom whitelist and trading fees.</p>
                  </div>
                  <div class="example-card">
                    <h4><Icon icon="game-icons:bank" /> Gatekeeping Module</h4>
                    <p>Create and maintain a whitelist of members and use this on your website to control access.</p>
                  </div>
                  <div class="example-card">
                    <h4><Icon icon="game-icons:scales" /> Custom Skin Package</h4>
                    <p>Custom Skin package for a dGuild dapp (when finished, no direct utility, but helps us cover costs)</p>
                  </div>
                </div>
              </div>
              
              <div class="a-la-carte-note">
                <h3>Getting Started</h3>
                <p>Each A la Carte component includes setup fees and ongoing maintenance costs, but provides immediate functionality for your community. As we develop new features, existing deployments can be upgraded or expanded with additional modules.</p>
              </div>
            </div>

            <!-- Castle Introduction -->
            <div id="castle-intro" class="concept-section card mb-5">
              <h2>🏰 The Digital Castle</h2>
              <p class="lead">
                Welcome to your dGuild's digital castle — a comprehensive ecosystem of interconnected rooms, each serving a specific purpose in your guild's operations and growth.
              </p>
              
              <p>Think of your dGuild as a medieval castle in cyberspace. Each room has its own function, but they all work together to create a thriving, self-sustaining community. From the secure vaults that protect your treasury to the bustling tavern where members gather, every space serves the greater purpose of building and maintaining your digital kingdom.</p>
              
              <div class="castle-overview">
                <div class="castle-category">
                  <div class="category-icon">
                    <Icon icon="game-icons:scales" />
                  </div>
                  <h3>Core Infrastructure</h3>
                  <p>The foundation of your castle - essential systems for governance and asset management.</p>
                </div>
                <div class="castle-category">
                  <div class="category-icon">
                    <Icon icon="game-icons:cargo-crane" />
                  </div>
                  <h3>Operations & Engagement</h3>
                  <p>Where the action happens - quest management, asset deployment, and member activities.</p>
                </div>
                <div class="castle-category">
                  <div class="category-icon">
                    <Icon icon="game-icons:uprising" />
                  </div>
                  <h3>Community & Culture</h3>
                  <p>The heart of your guild - identity, achievements, and social connections.</p>
                </div>
                <div class="castle-category">
                  <div class="category-icon">
                    <Icon icon="game-icons:organigram" />
                  </div>
                  <h3>Leadership & Strategy</h3>
                  <p>Command centers for management, analytics, and strategic decision-making.</p>
                </div>
                <div class="castle-category">
                  <div class="category-icon">
                    <Icon icon="game-icons:padlock" />
                  </div>
                  <h3>Security & Integration</h3>
                  <p>Protection and connectivity - access control and external platform integration.</p>
                </div>
              </div>
            </div>

            <!-- Vault Section -->
            <div id="vault" class="concept-section card mb-5">
              <h2>🏦 Vault</h2>
              <p class="lead">
                Every dGuild operates with <strong>4 specialized vaults</strong> powered by Solana Squads multisig, 
                providing transparent and secure asset management.
              </p>
              
              <div class="vaults-grid">
                <div class="vault-card vault-1">
                  <div class="vault-header">
                    <h3><Icon icon="game-icons:bank" /> dGuild Vault</h3>
                    <span class="vault-type">Primary Treasury</span>
                  </div>
                  <p>Primary balance sheet and operational treasury with Council-level control. This is your guild's main fund source for activities.</p>
                </div>

                <div class="vault-card vault-4">
                  <div class="vault-header">
                    <h3><Icon icon="game-icons:coins" /> Income Vault</h3>
                    <span class="vault-type">Revenue Collection</span>
                  </div>
                  <p>Receives monthly proceeds, pays expenses, and splits remainder into the other vaults at configured ratios set by the dGuild.</p>
                </div>
                
                <div class="vault-card vault-2">
                  <div class="vault-header">
                    <h3><Icon icon="game-icons:two-coins" style="color: #f59e0b;" /> Token1 Vault</h3>
                    <span class="vault-type">Contribution Token</span>
                  </div>
                  <p>Holds backing assets and minting mechanics for Token1 (contribution token). Members earn these through guild contributions and activities.</p>
                </div>
                
                <div class="vault-card vault-3">
                  <div class="vault-header">
                    <h3><Icon icon="game-icons:two-coins" style="color: #3b82f6;" /> Token2 Vault</h3>
                    <span class="vault-type">Stability Token</span>
                  </div>
                  <p>Holds backing assets and reserves for Token2 (stability token) and manages staking pool deposits for organizational returns.</p>
                </div>
              </div>
              
              <div class="revenue-sources mt-4">
                <h3>Revenue Sources</h3>
                <div class="sources-grid">
                  <span class="source-tag">Donations</span>
                  <span class="source-tag">Gameplay Revenue</span>
                  <span class="source-tag">Staking Rewards</span>
                  <span class="source-tag">Quest Outcomes</span>
                  <span class="source-tag">NFT Sales</span>
                  <span class="source-tag">Asset Lending</span>
                  <span class="source-tag">Trading Fees</span>
                  <span class="source-tag">Minting Fees</span>
                  <span class="source-tag">Mini Games</span>
                </div>
              </div>
            </div>

            <!-- DAO Section -->
            <div id="dao" class="concept-section card mb-5">
              <h2>⚖️ DAO</h2>
              <p class="lead">
                The governance heart of your dGuild - where decisions are made through democratic participation and token-weighted voting.
              </p>
              
              <div class="governance-structure">
                <div class="combined-vote-card">
                  <h3><Icon icon="game-icons:crown" /> Combined Guild Vote</h3>
                  <p>
                    After DAO1 and DAO2 votes conclude, their weighted results combine into a single guild decision. 
                    <strong>Example:</strong> 60% weight to DAO1, 40% to DAO2 (configurable per guild).
                  </p>
                  <ul class="vote-examples">
                    <li><strong>Council Selection:</strong> Requires combined guild vote</li>
                    <li><strong>Major Parameter Changes:</strong> Requires combined guild vote</li>
                    <li><strong>Strategic Direction:</strong> Requires combined guild vote</li>
                    </ul>
                </div>
                
                <div class="dao-system">
                  <div class="dao-card dao-1">
                    <h3><Icon icon="game-icons:two-coins" style="color: #f59e0b;" /> DAO1 — Contribution DAO</h3>
                    <p><strong>Token1 holders</strong> vote on operational decisions and community matters</p>
                    <ul>
                      <li>Quest and mission approval</li>
                      <li>Community event planning</li>
                      <li>Operational policy decisions</li>
                      <li>Member engagement</li>
                    </ul>
                  </div>
                  
                  <div class="dao-card dao-2">
                    <h3><Icon icon="game-icons:two-coins" style="color: #3b82f6;" /> DAO2 — Stability DAO</h3>
                    <p><strong>Token2 holders</strong> vote on how to deploy staking assets to earn returns</p>
                    <ul>
                      <li>Staking deployment strategies</li>
                      <li>Asset allocation decisions</li>
                      <li>Return optimization approaches</li>
                      <li>Risk management policies</li>
                    </ul>
                  </div>
                  </div>
                </div>
              </div>
              
            <!-- Quest Board Section -->
            <div id="quest-board" class="concept-section card mb-5">
              <h2>📋 Quest Board</h2>
              <p class="lead">
                The <strong>Quest Board</strong> organizes guild tasks and rewards.
              </p>
              
              <p>This is where the action happens. Quest creation and management, progress tracking and reporting, reward distribution, and team coordination all flow through this system. The Quest Board spreads the workload and engages members in collective success.</p>
              
              <div class="principles-grid">
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:target-dummy" /></div>
                  <h4>In-game Quests</h4>
                  <p>Boost guild presence and progress through strategic gameplay missions. These quests focus on advancing the guild's position in games, earning resources, and building competitive advantages within the gaming ecosystem.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:heart-tower" /></div>
                  <h4>Community Missions</h4>
                  <p>Handle content creation, event management, and training activities. These missions focus on building community engagement, developing member skills, and strengthening the guild's internal culture and capabilities.</p>
                </div>
              </div>
              
              <div class="quest-workflow">
                <h3>Quest Workflow</h3>
                <div class="workflow-steps">
                  <div class="workflow-step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                      <h4>Create</h4>
                      <p>Define quest objectives, requirements, and rewards</p>
                    </div>
                  </div>
                  <div class="workflow-step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                      <h4>Apply</h4>
                      <p>Members submit applications to participate</p>
                    </div>
                  </div>
                  <div class="workflow-step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                      <h4>Assign</h4>
                      <p>Council or officers assign quests to qualified members</p>
                    </div>
                  </div>
                  <div class="workflow-step">
                    <div class="step-number">4</div>
                    <div class="step-content">
                      <h4>Execute</h4>
                      <p>Members complete the assigned quest objectives</p>
                    </div>
                  </div>
                  <div class="workflow-step">
                    <div class="step-number">5</div>
                    <div class="step-content">
                      <h4>Verify</h4>
                      <p>Validate completion and quality of work</p>
                    </div>
                  </div>
                  <div class="workflow-step">
                    <div class="step-number">6</div>
                    <div class="step-content">
                      <h4>Reward</h4>
                      <p>Distribute tokens, badges, and recognition</p>
                    </div>
                  </div>
                  <div class="workflow-step">
                    <div class="step-number">7</div>
                    <div class="step-content">
                      <h4>Complete</h4>
                      <p>Archive results and update member records</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Armory Section -->
            <div id="armory" class="concept-section card mb-5">
              <h2>⚔️ Armory</h2>
              <p class="lead">
                The <strong>Armory</strong> is the dGuild's shared asset treasury — the strategic heart where collective resources become individual power and guild strength.
              </p>
              
              <p>Beyond simple storage, the Armory transforms shared assets into <strong>strategic advantages</strong>. It's where the dGuild's collective wealth becomes tools for quest execution, personal member gains, safe trading, and powerful guild representation across the ecosystem.</p>
              
              <div class="principles-grid">
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:target-dummy" /></div>
                  <h4>Quest-Specific Loadouts</h4>
                  <p>Pre-configured asset combinations for different quest types. Whether it's PvP gear, mining equipment, or trading capital, the Armory provides optimized loadouts for maximum mission success.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:buy-card" /></div>
                  <h4>Member Lending Program</h4>
                  <p>Members can borrow high-value assets for personal use, with flexible terms based on their contribution history and Token1 holdings. Interest rates and collateral requirements are set by DAO governance.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:shopping-cart" /></div>
                  <h4>Internal Marketplace</h4>
                  <p>Secure trading platform where members can buy, sell, and trade assets within the guild ecosystem. All transactions are recorded on-chain with automatic fee distribution to vaults.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:trophy" /></div>
                  <h4>Competitive Edge</h4>
                  <p>High-performance assets reserved for major competitions, tournaments, and events where the dGuild's reputation is on the line. Access is controlled by Council and DAO governance.</p>
                </div>
              </div>

            </div>

            <!-- Foundry Section -->
            <div id="foundry" class="concept-section card mb-5">
              <h2>🔥 Foundry</h2>
              <p class="lead">
                The <strong>Foundry</strong> is where tokens, NFTs, and badges are forged.
              </p>
              
              <p>This is the creative heart of your guild. Minting private, non-transferable dGuild tokens, NFT creation and management, badge systems for recognition, and redemption services for special items all happen here.</p>
              
              
              <div class="principles-grid">
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:crown-coin" /></div>
                  <h4>dGuild Tokens</h4>
                  <p>Private, non-transferable tokens that represent membership, contribution levels, and voting power. These tokens are the foundation of guild identity and governance participation, minted based on individual and collective achievements.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:person" /></div>
                  <h4>Avatar NFTs</h4>
                  <p>Unique digital identities that members can customize and evolve. From basic avatars to legendary forms, these NFTs represent personal growth within the guild and can be upgraded through quest completion and contribution milestones.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:trophy" /></div>
                  <h4>Trophy Badges</h4>
                  <p>Commemorative achievements that celebrate individual and guild accomplishments. These badges serve as permanent records of success, unlock special privileges, and create a visual history of the guild's journey and member contributions.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:abstract-050" /></div>
                  <h4>Tokenized Assets</h4>
                  <p>Digital assets converted into tradeable tokens within the guild ecosystem. 
                    This includes equipment, and other valuable items that can be shared, traded, or used.</p>
                </div>
              </div>
            </div>

            <!-- Community Hub Section -->
            <div id="community-hub" class="concept-section card mb-5">
              <h2>🏰 Community Hub</h2>
              <p class="lead">
                The <strong>Community Hub</strong> is where guild identity comes to life through Guild branding, member profiles, dApp themes, 
                and a vast variety of community tools.
              </p>
              
              <div class="principles-grid">
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:castle" /></div>
                  <h4>dGuild Identity</h4>
                  <p>Establishes common goals, culture, and roles that define your guild's unique character and shared purpose.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:skills" /></div>
                  <h4>Member Profile</h4>
                  <p>Avatars, tracking systems, and personalized experiences that give each member their own identity within the guild.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:palette" /></div>
                  <h4>Branding Adjustments</h4>
                  <p>dApp themes, custom phrasing, and icons that make the platform truly yours and reflect your guild's personality.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:backup" /></div>
                  <h4>Community</h4>
                  <p>The goal is to provide communities with the right tools for reaching their own goals and building lasting connections.</p>
                </div>
              </div>
            </div>

            <!-- Trophy Room Section -->
            <div id="trophy-room" class="concept-section card mb-5">
              <h2>🏆 Trophy Room</h2>
              <p class="lead">
                The <strong>Trophy Room</strong> is where guild accomplishments are celebrated and eternalized.
              </p>
              
              <p>This is where glory lives forever. Every achievement, milestone, and victory is immortalized through minted badges and NFTs that serve as permanent records of excellence. The Trophy Room transforms fleeting moments of success into lasting digital artifacts that tell the story of your guild's journey.</p>
              
              <p>These honors represent the highest recognition within the guild, celebrating both individual excellence and collective achievement. By showcasing progress and recognition, the Trophy Room proves that every contribution matters and that individual excellence strengthens the entire guild.</p>
              
              <div class="principles-grid">
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:person" /></div>
                  <h4>Personal Achievements</h4>
                  <p>Individual accomplishments that showcase member growth and contribution. These achievements recognize personal milestones, skill development, and exceptional performance that elevates both the member and the guild.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:castle" /></div>
                  <h4>dGuild Achievements</h4>
                  <p>Collective accomplishments that celebrate the guild's progress and victories. These achievements represent the combined efforts of all members working together toward common goals and shared success.</p>
                </div>
              </div>
            </div>

            <!-- Tavern Section -->
            <div id="tavern" class="concept-section card mb-5">
              <h2>🍺 Tavern</h2>
              <p class="lead">
                The <strong>Tavern</strong> is the social gaming hall — a place for fun, rivalry, and entertainment.
              </p>
              
              <p>This is where bonds are forged and memories are made. The competitive spirit that drives members to pursue honors in the Trophy Room finds its playful expression here, creating the social fabric that holds your guild together.</p>
              
              <p>These activities build camaraderie, strengthen bonds, and bring joy between serious quests. It's the place where work becomes play and strangers become family.</p>
              
              <div class="principles-grid">
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:calendar" /></div>
                  <h4>Events</h4>
                  <p>Community gatherings, celebrations, and special occasions that bring members together. These events strengthen bonds, celebrate achievements, and create lasting memories within the guild.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:gamepad" /></div>
                  <h4>Mini Games</h4>
                  <p>Quick, fun games and activities that provide entertainment and friendly competition. These bite-sized games offer relaxation and casual interaction between more serious guild activities.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:trophy" /></div>
                  <h4>Tournaments</h4>
                  <p>Structured competitive events that showcase member skills and determination. These tournaments channel the competitive spirit into organized contests with clear rules and exciting prizes.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:coinflip" /></div>
                  <h4>Challenges</h4>
                  <p>Skill-based competitions and tests that push members to improve and excel. These challenges create opportunities for personal growth while maintaining the competitive edge that drives excellence.</p>
                </div>
              </div>
            </div>

            <!-- Command Centre Section -->
            <div id="command-centre" class="concept-section card mb-5">
              <h2>🎯 Command Centre</h2>
              <p class="lead">
                The <strong>Command Centre</strong> is the guild's administrative dashboard — where leaders manage operations.
              </p>
              
              <p>This is where the leadership steers so that the guild's vision becomes reality. and where all the magic happens. 
                From council signing multisig transactions to creating quests and NFT collections, 
                the Command Centre provides the complete toolkit for managing every aspect of your dGuild's operations.</p>
              
              <div class="principles-grid">
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:inspiration" /></div>
                  <h4>Council</h4>
                  <p>Responsible for vaults, budgets, and smart contract exchanges. Council manages metadata, role permissions, 
                    and high-level strategic decisions that shape the guild's direction and governance structure.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:awareness" /></div>
                  <h4>Officers</h4>
                  <p>Take care of day-to-day tasks and work towards reaching the goals put forward by the Council. 
                    Officers manage the organization, coordinate activities, and ensure smooth execution of the guild's operational plans.</p>
                </div>
              </div>
            </div>

            <!-- Observatory Section -->
            <div id="observatory" class="concept-section card mb-5">
              <h2>🔭 Observatory</h2>
              <p class="lead">
                The <strong>Observatory</strong> is the guild's strategic and analytical hub.
              </p>
              
              <p>This is where strategy meets data. The Observatory provides comprehensive analytics 
                and dashboards that give complete visibility into every aspect of your dGuild's operations, 
                from individual member performance to overall guild health and financial standing.</p>
              
              <p>With real-time monitoring, predictive insights, and detailed reporting, 
                the Observatory ensures informed decision-making at every level. It's the difference between 
                flying blind and having a clear view of your guild's present and future.</p>
              
              <div class="principles-grid">
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:rally-the-troops" /></div>
                  <h4>Member Stats</h4>
                  <p>Individual performance tracking, contribution metrics, activity levels, and engagement analytics. Monitor member growth, skill development, and participation patterns to optimize guild operations and member satisfaction.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:chart" /></div>
                  <h4>Guild Performance</h4>
                  <p>Collective metrics tracking quest completion rates, achievement progress, community engagement, and overall guild health. Measure success against goals and identify areas for improvement and growth.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:coins" /></div>
                  <h4>Financial Overviews</h4>
                  <p>Comprehensive treasury monitoring, revenue tracking, expense analysis, and asset management dashboards. Real-time financial health indicators and budget performance metrics for informed financial decisions.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:pay-money" /></div>
                  <h4>Corporate Tax Reports</h4>
                  <p>Automated tax reporting, compliance tracking, and regulatory documentation. Generate professional reports for legal entities, ensuring full compliance with tax obligations and corporate requirements.</p>
                </div>
              </div>
            </div>

            <!-- Gatekeeping Section -->
            <div id="gatekeeping" class="concept-section card mb-5">
              <h2>🔐 Gatekeeping</h2>
              <p class="lead">
                Gatekeeping ensures that only verified members gain access to the guild's inner halls.
              </p>
              
              <p>This system maintains <strong>security and trust</strong>, making sure each member is both legitimate and aligned with guild values. Think of it as the castle's gate — not to keep people out, but to ensure only the right people get in.</p>
              
              <div class="principles-grid">
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:padlock" /></div>
                  <h4>dGuild Access</h4>
                  <p>Member verification happens through tokenized identity and invitation management. The system ensures each member is legitimate and aligned with guild values, protecting against intrusions while regulating new entrants.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:rank-3" /></div>
                  <h4>Role-Based Permissions</h4>
                  <p>Access control manages permissions for council, officers, and members. Different roles have different levels of access to guild resources, ensuring proper hierarchy and security throughout the organization.</p>
                </div>
              </div>
            </div>

            <!-- Integrations Section -->
            <div id="integrations" class="concept-section card mb-5">
              <h2>🔗 Integrations</h2>
              <p class="lead">
                Integrations extend the guild's reach beyond its own walls.
              </p>
              
              <p>This is how your guild connects to the wider world and operates seamlessly across multiple platforms.
                 From Discord communities to GitHub repositories, from Star Atlas fleets to marketplace interactions, integrations transform your dGuild from an isolated collective into a connected powerhouse.</p>
              
              <p>Guilds can plug into multiple ecosystems, operate 24/7, and scale across games. It's the difference between being isolated and being connected to everything that matters.</p>
              
              <div class="principles-grid">
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:love-injection" /></div>
                  <h4>Web2 Plugins</h4>
                  <p>Discord bot integration provides real-time notifications, member management, and automated updates. 
                    GitHub integration supports technical guilds with code repositories, project management, 
                    and collaborative development workflows.</p>
                </div>
                <div class="principle-card">
                  <div class="principle-icon"><Icon icon="game-icons:magic-gate" /></div>
                  <h4>Game Ecosystems</h4>
                  <p>Connect to gaming platforms and ecosystems for seamless gameplay integration. 
                    Manage in-game assets, coordinate operations, and participate in game economies 
                    directly from your dGuild interface.</p>
                </div>
              </div>
              
              <div class="star-atlas-feature">
                <h3><Icon icon="game-icons:star" /> Star Atlas Integration</h3>
                <p>Our first-class Star Atlas integration provides complete operational control for your dGuild:</p>
                
                <div class="star-atlas-features">
                  <div class="star-atlas-category">
                    <h4><Icon icon="game-icons:person" /> Profile & Identity Management</h4>
                    <ul>
                      <li>Direct game profile creation</li>
                      <li>Setup permissions to hotwallets</li>
                      <li>Run operations while assets stay safe within the multisig</li>
                    </ul>
                  </div>
                  
                  <div class="star-atlas-category">
                    <h4><Icon icon="game-icons:drawbridge" /> Asset Management</h4>
                    <ul>
                      <li>Locker participation and management</li>
                      <li>Bring assets into Sage environment</li>
                      <li>Multi-signature asset protection</li>
                    </ul>
                  </div>
                  
                  <div class="star-atlas-category">
                    <h4><Icon icon="game-icons:rocket" /> Fleet Operations</h4>
                    <ul>
                      <li>Sage fleet creation and management</li>
                      <li>Coordinated fleet operations</li>
                      <li>Resource allocation and optimization</li>
                    </ul>
                  </div>
                  
                  <div class="star-atlas-category">
                    <h4><Icon icon="game-icons:resize" /> Other Operations</h4>
                    <ul>
                      <li>Lending and borrowing systems</li>
                      <li>In-game marketplace integration</li>
                      <li>Link quest board to marketplace orders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Summary Section -->
            <div id="summary" class="concept-section card mb-5">
              <h2>Summary</h2>
              <p class="lead">
                The DecentraGuild framework provides dGuilds with the tools and platform needed to thrive in Web3.
              </p>
              
              <p>The complete toolkit includes <strong>DAO governance</strong> (DAO is KING), <strong>Vaults</strong> 
                for secure asset management, <strong>Armory, Foundry, Quest Board</strong> for engagement and growth,
                 <strong>Trophy Room and Tavern</strong> for culture and community, <strong>Command Centre and Observatory</strong> 
                 for leadership and strategy, <strong>Integrations and Gatekeeping</strong> for scalability and security, 
                 and <strong>Legal</strong> wrappers for compliance.</p>
              
              <div class="summary-important-note">
                <h3>Important Note</h3>
                <p>We provide the <strong>tools and platform</strong> for your organization to succeed, but we cannot run your organization for you. Each dGuild must take full responsibility for their own future, operations, and success. The framework gives you the foundation — the rest is up to you.</p>
              </div>
              
              <div class="summary-conclusion">
                <p>In short: a <strong>digital castle for Web3 guilds</strong> — secure, decentralized, 
                  and rebrandable for any community. Ready to build your digital kingdom?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section dguide-cta-section">
      <div class="container">
        <div class="dguide-cta text-center">
          <h2 class="mb-3">Ready to Start Your dGuild Journey?</h2>
          <p class="mb-4">
            Explore the complete platform and begin building your decentralized gaming guild today.
          </p>
          <div class="cta-buttons">
            <router-link to="/a-la-carte" class="btn btn-primary btn-large">
              View Modules
            </router-link>
            <a href="https://dapp.decentraguild.com" target="_blank" class="btn btn-secondary btn-large">
              Try Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

// Sidebar functionality
const activeSection = ref<string>('dguild')

// Define sections for navigation with subsections
const sections = ref([
  // Core Concepts
  { 
    id: 'core-concepts', 
    title: 'Core Concepts', 
    type: 'category',
    expanded: true,
    subsections: [
      { id: 'dguild', title: 'What is a dGuild?' },
      { id: 'governance', title: 'DAO for King' },
      { id: 'token-economy', title: 'The Token Economy' },
      { id: 'legal-framework', title: 'Legal Framework' },
      { id: 'lifecycle', title: 'The dGuild Lifecycle' },
      { id: 'a-la-carte', title: 'A la Carte' }
    ]
  },
  
  // The Digital Castle
  { 
    id: 'digital-castle', 
    title: 'The Digital Castle', 
    type: 'category',
    expanded: false,
    subsections: [
      { id: 'castle-intro', title: 'Castle Overview' },
      { id: 'vault', title: 'Vault' },
      { id: 'dao', title: 'DAO' }
    ]
  },
  
  // Operations & Engagement
  { 
    id: 'operations', 
    title: 'Operations & Engagement', 
    type: 'category',
    expanded: false,
    subsections: [
  { id: 'quest-board', title: 'Quest Board' },
      { id: 'armory', title: 'Armory' },
      { id: 'foundry', title: 'Foundry' }
    ]
  },
  
  // Community & Culture
  { 
    id: 'community', 
    title: 'Community & Culture', 
    type: 'category',
    expanded: false,
    subsections: [
      { id: 'community-hub', title: 'Community Hub' },
  { id: 'trophy-room', title: 'Trophy Room' },
      { id: 'tavern', title: 'Tavern' }
    ]
  },
  
  // Leadership & Strategy
  { 
    id: 'leadership', 
    title: 'Leadership & Strategy', 
    type: 'category',
    expanded: false,
    subsections: [
  { id: 'command-centre', title: 'Command Centre' },
      { id: 'observatory', title: 'Observatory' }
    ]
  },
  
  // Security & Integration
  { 
    id: 'security', 
    title: 'Security & Integration', 
    type: 'category',
    expanded: false,
    subsections: [
      { id: 'gatekeeping', title: 'Gatekeeping' },
      { id: 'integrations', title: 'Integrations' }
    ]
  },
  
  { id: 'summary', title: 'Summary', type: 'section' }
])

// Toggle category expansion
const toggleCategory = (categoryId: string) => {
  const category = sections.value.find(s => s.id === categoryId)
  if (category && category.type === 'category') {
    // Close all other categories first
    sections.value.forEach(s => {
      if (s.type === 'category' && s.id !== categoryId) {
        s.expanded = false
      }
    })
    // Toggle the clicked category
    category.expanded = !category.expanded
  }
}

// Scroll to section function
const scrollToSection = (sectionId: string, event: Event) => {
  event.preventDefault()
  const element = document.getElementById(sectionId)
  if (element) {
    // Find which category contains this section and close others
    sections.value.forEach(section => {
      if (section.type === 'category' && section.subsections) {
        const isInThisCategory = section.subsections.some(sub => sub.id === sectionId)
        section.expanded = isInThisCategory
      } else if (section.type === 'category') {
        section.expanded = false
      }
    })
    
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Scroll spy functionality
const handleScroll = () => {
  const scrollPosition = window.scrollY + 100 // Offset for better detection
  
  // Check all sections and subsections
  for (let i = sections.value.length - 1; i >= 0; i--) {
    const section = sections.value[i]
    
    if (section.type === 'category' && section.subsections) {
      // Check subsections
      for (let j = section.subsections.length - 1; j >= 0; j--) {
        const subsection = document.getElementById(section.subsections[j].id)
        if (subsection && subsection.offsetTop <= scrollPosition) {
          activeSection.value = section.subsections[j].id
          // Close all other categories and expand the current one
          sections.value.forEach(s => {
            if (s.type === 'category') {
              s.expanded = s.id === section.id
            }
          })
          return
        }
      }
    } else {
      // Check regular sections
      const element = document.getElementById(section.id)
      if (element && element.offsetTop <= scrollPosition) {
        activeSection.value = section.id
        // Close all categories when on a regular section
        sections.value.forEach(s => {
          if (s.type === 'category') {
            s.expanded = false
          }
        })
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  // Set initial active section
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Hero */
.section-hero {
  padding: 48px 0;
  min-height: 40vh;
  position: relative;
}

.section-hero .container {
  position: relative;
  z-index: 2;
}

.concept-hero {
  padding: 20px 0;
}

.concept-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Layout */
.concept-layout {
  display: flex;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Sidebar */
.concept-sidebar {
  position: sticky;
  top: 20px;
  width: 280px;
  max-height: calc(100vh - 40px);
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 0;
  flex-shrink: 0;
  overflow: hidden;
}

.sidebar-content {
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sidebar-title {
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-color);
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: 8px;
}

.nav-link {
  display: block;
  padding: 10px 16px;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  font-size: 0.9rem;
  line-height: 1.4;
}

.nav-link:hover {
  background: var(--secondary-bg);
  color: var(--text-primary);
}

.nav-link.active {
  background: var(--primary-color);
  color: white;
  font-weight: 500;
}

/* Category Navigation */
.nav-category {
  margin-bottom: 8px;
}

.nav-category-header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 16px;
  background: none;
  border: none;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: left;
  cursor: pointer;
  font-weight: 600;
}

.nav-category-header:hover {
  background: var(--secondary-bg);
  color: var(--text-primary);
}

.nav-category-header.active {
  background: var(--primary-color);
  color: white;
  font-weight: 600;
}

.category-arrow {
  margin-right: 8px;
  font-size: 0.8rem;
  transition: transform 0.2s ease;
}

.nav-subsections {
  list-style: none;
  padding: 0;
  margin: 4px 0 0 0;
  padding-left: 16px;
}

.nav-subitem {
  margin-bottom: 4px;
}

.nav-sublink {
  display: block;
  padding: 8px 16px;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  font-size: 0.85rem;
  line-height: 1.4;
  margin-left: 8px;
}

.nav-sublink:hover {
  background: var(--secondary-bg);
  color: var(--text-primary);
}

.nav-sublink.active {
  background: var(--primary-color);
  color: white;
  font-weight: 500;
}

/* Content */
.concept-content {
  flex: 1;
  max-width: 900px;
}

.concept-section {
  padding: 40px;
}

.concept-section h2 {
  color: var(--text-primary);
  margin-bottom: 20px;
  font-size: 2rem;
}

.concept-section h3 {
  color: var(--text-primary);
  margin: 24px 0 12px 0;
  font-size: 1.3rem;
}

.concept-section p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

.lead {
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 24px;
}


/* Vaults Grid */
.vaults-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin: 24px 0;
  max-width: 800px;
}

.vault-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.vault-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.vault-card h4 {
  color: var(--text-primary);
  margin-bottom: 8px;
  font-size: 1rem;
}

.vault-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.vault-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.vault-card h3 {
  margin: 0;
  font-size: 1.2rem;
}

.vault-type {
  background: var(--secondary-bg);
  color: var(--text-secondary);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}


.revenue-sources {
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 24px;
  margin-top: 24px;
}

.sources-grid {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.source-tag {
  background: var(--primary-bg);
  color: var(--text-primary);
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.9rem;
  border: 1px solid var(--border-color);
}

/* Token Cards */
.token-grid {
  margin-top: 24px;
}

.token-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  margin-bottom: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.token-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.token-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.token-card h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--text-primary);
}

.token-type {
  background: var(--primary-bg);
  color: var(--text-secondary);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.token-card p {
  color: var(--text-secondary);
  margin-bottom: 16px;
  font-weight: 500;
}

.token-details {
  margin-top: 20px;
  text-align: left;
}

.token-details h4 {
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 1rem;
}

.token-details ul {
  margin: 0;
  padding-left: 20px;
}

.token-details li {
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.token-allocation {
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 24px;
  margin-top: 24px;
  text-align: center;
}

/* Principles Grid */
.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 32px;
}

.principle-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.principle-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.principle-icon {
  font-size: 2rem;
  margin-bottom: 12px;
  filter: drop-shadow(0 0 8px var(--primary-color));
}

.principle-card h4 {
  color: var(--text-primary);
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.principle-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Lifecycle Phases */
.lifecycle-phases {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
}

.phase-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  position: relative;
  overflow: hidden;
}

.phase-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary-color);
}

.phase-card.phase-1::before {
  background: var(--border-color);
}

.phase-card.phase-2::before {
  background: var(--border-color);
}

.phase-card.phase-3::before {
  background: var(--border-color);
}

.phase-card.phase-4::before {
  background: var(--border-color);
}

.phase-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.phase-number {
  background: var(--primary-color);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.phase-card.phase-1 .phase-number {
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  color: var(--text-primary);
}

.phase-card.phase-2 .phase-number {
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  color: var(--text-primary);
}

.phase-card.phase-3 .phase-number {
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  color: var(--text-primary);
}

.phase-card.phase-4 .phase-number {
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  color: var(--text-primary);
}

.phase-header h3 {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.3rem;
}

.phase-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 16px;
  font-style: italic;
}

.lifecycle-note {
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 24px;
  margin-top: 32px;
  text-align: center;
  border: 1px solid var(--border-color);
}

.lifecycle-note p {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
}

/* Quest Workflow */
.quest-workflow {
  margin-top: 40px;
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 32px;
  border: 1px solid var(--border-color);
}

.quest-workflow h3 {
  color: var(--text-primary);
  margin-bottom: 24px;
  font-size: 1.4rem;
  text-align: center;
}

.workflow-steps {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
}

.workflow-step {
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
}

.workflow-step:hover {
  border-color: var(--primary-color);
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.workflow-step::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--primary-color);
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.workflow-step:hover::before {
  opacity: 1;
}

.step-number {
  background: var(--primary-color);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.step-content h4 {
  color: var(--text-primary);
  margin: 0 0 4px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.step-content p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Star Atlas Feature */
.star-atlas-feature {
  margin-top: 40px;
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 32px;
  border: 1px solid var(--border-color);
}

.star-atlas-feature h3 {
  color: var(--primary-color);
  margin-bottom: 16px;
  font-size: 1.4rem;
  text-align: center;
}

.star-atlas-feature > p {
  text-align: center;
  margin-bottom: 24px;
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.star-atlas-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.star-atlas-category {
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 20px;
  transition: all 0.3s ease;
}

.star-atlas-category:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.star-atlas-category h4 {
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 1.1rem;
  font-weight: 600;
}

.star-atlas-category ul {
  margin: 0;
  padding-left: 20px;
}

.star-atlas-category li {
  margin-bottom: 6px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-secondary);
}



/* Governance Structure */
.governance-structure {
  margin-top: 24px;
}

.dao-system {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
}

.dao-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.dao-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.dao-card h3 {
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.dao-card p {
  margin-bottom: 16px;
  font-weight: 500;
  color: var(--text-secondary);
}

.dao-card ul {
  margin: 0;
  padding-left: 20px;
  text-align: left;
}

.dao-card li {
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.combined-vote-card {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  margin-bottom: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.combined-vote-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.combined-vote-card h3 {
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.combined-vote-card p {
  margin-bottom: 16px;
  font-weight: 500;
  color: var(--text-secondary);
}

.vote-examples {
  margin: 16px 0 0 0;
  padding-left: 20px;
}

.vote-examples li {
  margin-bottom: 8px;
  font-size: 0.9rem;
}

/* Summary Important Note */
.summary-important-note {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border: 2px solid #f59e0b;
  border-radius: var(--border-radius);
  padding: 24px;
  margin: 32px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.summary-important-note::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  animation: shimmer 3s infinite;
}

.summary-important-note h3 {
  color: #92400e;
  margin-bottom: 16px;
  font-size: 1.3rem;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.summary-important-note p {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: #92400e;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

/* A la Carte Examples */
.a-la-carte-examples {
  margin-top: 32px;
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 24px;
  border: 1px solid var(--border-color);
}

.a-la-carte-examples h3 {
  color: var(--text-primary);
  margin-bottom: 20px;
  font-size: 1.3rem;
  text-align: center;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.example-card {
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.example-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.example-card h4 {
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.example-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.a-la-carte-note {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 20px;
  margin-top: 24px;
  text-align: left;
}

.a-la-carte-note h3 {
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 1.1rem;
  font-weight: 600;
}

.a-la-carte-note p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Castle Overview */
.castle-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 32px;
}

.castle-category {
  background: var(--secondary-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.castle-category:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.castle-category h3 {
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.castle-category p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: var(--primary-color);
  filter: drop-shadow(0 0 8px var(--primary-color));
  display: flex;
  justify-content: center;
}

/* Summary Conclusion */
.summary-conclusion {
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  padding: 24px;
  margin-top: 24px;
  text-align: center;
  border: 1px solid var(--border-color);
}

.summary-conclusion p {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-primary);
}

/* CTA */
.concept-cta-section {
  background: var(--secondary-bg);
  border-top: 1px solid var(--border-color);
}

.concept-cta {
  max-width: 600px;
  margin: 0 auto;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 768px) {
  .concept-layout {
    flex-direction: column;
    gap: 20px;
  }
  
  .concept-sidebar {
    position: static;
    transform: none;
    height: auto;
    width: 100%;
    max-height: 200px;
  }
  
  .sidebar-content {
    padding: 16px;
  }
  
  .nav-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .nav-item {
    margin-bottom: 0;
  }
  
  .nav-link {
    padding: 8px 12px;
    font-size: 0.8rem;
    white-space: nowrap;
  }
  
  .nav-category-header {
    padding: 8px 12px;
    font-size: 0.8rem;
  }
  
  .nav-sublink {
    padding: 6px 12px;
    font-size: 0.75rem;
    margin-left: 4px;
  }
  
  .nav-subsections {
    padding-left: 8px;
  }
  
  .concept-section {
    padding: 24px;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 20px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .concept-hero {
    padding: 60px 0;
  }
  
  .principles-grid {
    grid-template-columns: 1fr;
  }
  
  .vaults-grid {
    grid-template-columns: 1fr;
  }
  
  .phase-header {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .phase-number {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
  
  .phase-header h3 {
    font-size: 1.2rem;
  }
  
  .phase-description {
    font-size: 1rem;
  }
  
  
  .dao-system {
    grid-template-columns: 1fr;
  }
  
  .workflow-step {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .workflow-step:hover {
    transform: translateY(-2px);
  }
  
  .quest-workflow {
    padding: 24px;
  }
  
  .star-atlas-features {
    grid-template-columns: 1fr;
  }
  
  .star-atlas-feature {
    padding: 24px;
  }
  
  .castle-overview {
    grid-template-columns: 1fr;
  }
  
  .examples-grid {
    grid-template-columns: 1fr;
  }
  
  .a-la-carte-examples {
    padding: 20px;
  }
  
  .a-la-carte-note {
    padding: 20px;
  }
}
</style>
