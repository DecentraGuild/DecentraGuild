<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <!-- Logo -->
        <router-link to="/" class="logo">
          <img src="/logo/dguild-logo.svg" alt="DecentraGuild" class="logo-image">
          <span class="logo-text">DecentraGuild</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/concept" class="nav-link">Concept</router-link>
          <router-link to="/a-la-carte" class="nav-link">A la Carte</router-link>
        </div>

        <!-- CTA Button -->
        <div class="nav-cta">
          <a href="https://dapp.decentraguild.com" target="_blank" class="btn btn-primary">Demo</a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :class="{ active: mobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div class="mobile-nav" :class="{ active: mobileMenuOpen }">
        <div class="mobile-nav-links">
          <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">Home</router-link>
          <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">About Us</router-link>
          <router-link to="/concept" class="mobile-nav-link" @click="closeMobileMenu">Concept</router-link>
          <router-link to="/a-la-carte" class="mobile-nav-link" @click="closeMobileMenu">A la Carte</router-link>
        </div>
        <div class="mobile-nav-cta">
          <a href="https://dapp.decentraguild.com" target="_blank" class="btn btn-primary btn-large" @click="closeMobileMenu">
            Demo
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  padding: 16px 0;
  transition: all 0.3s ease;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 800;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.logo:hover {
  color: var(--primary-color);
  transform: scale(1.05);
}

.logo-image {
  height: 40px;
  width: auto;
  filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.5));
}

.logo-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Desktop Navigation */
.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 8px 0;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

/* Remove special styling for dApp link - make it consistent with other links */

/* CTA Button */
.nav-cta {
  display: flex;
  align-items: center;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.mobile-menu-btn span {
  width: 100%;
  height: 3px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Mobile Navigation */
.mobile-nav {
  display: none;
  position: fixed;
  top: 92px;
  left: 0;
  right: 0;
  background: rgba(10, 10, 15, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  padding: 24px 0;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
}

.mobile-nav.active {
  transform: translateY(0);
  opacity: 1;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.mobile-nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 12px 0;
  text-align: center;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  color: var(--primary-color);
}

.mobile-nav-cta {
  display: flex;
  justify-content: center;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
}

/* Responsive */
@media (max-width: 1408px) {
  .nav-links,
  .nav-cta {
    display: none;
  }

  .mobile-menu-btn,
  .mobile-nav {
    display: flex;
  }

  .navbar {
    padding: 12px 0;
  }

  .navbar-content {
    height: 50px;
  }

  .logo {
    font-size: 1.3rem;
  }

  .logo-image {
    height: 35px;
  }
}

@media (max-width: 480px) {
  .mobile-nav {
    top: 74px;
  }
}
</style>
