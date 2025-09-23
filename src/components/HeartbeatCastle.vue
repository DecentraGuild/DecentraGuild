<template>
  <div class="heartbeat-castle">
    <svg 
      viewBox="0 0 800 60" 
      class="castle-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Castle Battlements Path -->
      <path
        d="M 50 20 L 100 20 L 100 40 L 150 40 L 150 20 L 200 20 L 200 40 L 250 40 L 250 20 L 300 20 L 300 40 L 350 40 L 350 20 L 400 20 L 400 40 L 450 40 L 450 20 L 500 20 L 500 40 L 550 40 L 550 20 L 600 20 L 600 40 L 650 40 L 650 20 L 700 20 L 700 40 L 750 40 L 750 20 L 800 20"
        class="castle-battlements"
        fill="none"
        stroke="url(#castleGradient)"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      
      <!-- Gradient Definition -->
      <defs>
        <linearGradient id="castleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#0099cc;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0066cc;stop-opacity:1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.heartbeat-castle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  position: relative;
}

.castle-svg {
  width: 100%;
  max-width: 1000px;
  height: 120px;
  filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.3));
}

.castle-battlements {
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: drawBattlements 2s ease-in-out infinite;
  animation-delay: 0s;
}

@keyframes drawBattlements {
  0% {
    stroke-dashoffset: 2000;
    opacity: 0.3;
  }
  14% {
    stroke-dashoffset: 1600;
    opacity: 0.6;
  }
  28% {
    stroke-dashoffset: 1200;
    opacity: 0.8;
  }
  42% {
    stroke-dashoffset: 800;
    opacity: 1;
  }
  70% {
    stroke-dashoffset: 400;
    opacity: 0.8;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.3;
  }
}

/* Heartbeat effect */
.castle-svg {
  animation: heartbeat 2s ease-in-out infinite;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.05);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .heartbeat-castle {
    height: 100px;
  }
  
  .castle-svg {
    height: 100px;
  }
  
  .castle-battlements {
    stroke-width: 3;
  }
}
</style>
