<template>
  <div class="flex flex-col">
    <!-- Decorative corners -->
    <div class="absolute top-0 left-0 w-36 h-36 z-30 pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-full h-full">
        <defs>
          <filter id="gold-emboss" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur"/>
            <feOffset in="blur" dx="1" dy="1" result="offsetBlur"/>
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.75" specularExponent="20" lighting-color="#FFC87C" result="specOut">
              <fePointLight x="60" y="60" z="160"/>
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint"/>
          </filter>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#D4AF37" />
            <stop offset="50%" stop-color="#FFC87C" />
            <stop offset="100%" stop-color="#D4AF37" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#goldGradient)" stroke-linecap="round" filter="url(#gold-emboss)">
          <path d="M3,3 C20,5 30,15 35,40 C38,55 45,65 60,70" stroke-width="3" />
          <path d="M7,3 C25,8 35,20 40,45 C43,60 50,70 65,75" stroke-width="2.5" />
          <path d="M3,7 C15,25 20,35 45,40 C60,43 70,50 75,65" stroke-width="2.5" />
          <path d="M20,5 Q30,15 20,25 T30,45 Q40,55 30,65" stroke-width="2" />
          <path d="M5,20 Q15,30 25,20 T45,30 Q55,40 65,30" stroke-width="2" />
          <path d="M8,8 C15,12 18,18 15,25 S20,35 30,38 S45,45 48,55" stroke-width="1.5" />
          <path d="M8,8 C12,15 18,18 25,15 S35,20 38,30 S45,45 55,48" stroke-width="1.5" />
          <circle cx="20" cy="20" r="3" stroke-width="1" />
          <circle cx="40" cy="40" r="2" stroke-width="1" />
          <circle cx="30" cy="55" r="2" stroke-width="1" />
          <circle cx="55" cy="30" r="2" stroke-width="1" />
        </g>
      </svg>
    </div>
    <div class="absolute top-0 right-0 w-36 h-36 z-30 pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-full h-full" style="transform: scaleX(-1)">
        <defs>
          <filter id="gold-emboss2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur"/>
            <feOffset in="blur" dx="1" dy="1" result="offsetBlur"/>
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.75" specularExponent="20" lighting-color="#FFC87C" result="specOut">
              <fePointLight x="60" y="60" z="160"/>
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint"/>
          </filter>
          <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#D4AF37" />
            <stop offset="50%" stop-color="#FFC87C" />
            <stop offset="100%" stop-color="#D4AF37" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#goldGradient2)" stroke-linecap="round" filter="url(#gold-emboss2)">
          <path d="M3,3 C20,5 30,15 35,40 C38,55 45,65 60,70" stroke-width="3" />
          <path d="M7,3 C25,8 35,20 40,45 C43,60 50,70 65,75" stroke-width="2.5" />
          <path d="M3,7 C15,25 20,35 45,40 C60,43 70,50 75,65" stroke-width="2.5" />
          <path d="M20,5 Q30,15 20,25 T30,45 Q40,55 30,65" stroke-width="2" />
          <path d="M5,20 Q15,30 25,20 T45,30 Q55,40 65,30" stroke-width="2" />
          <path d="M8,8 C15,12 18,18 15,25 S20,35 30,38 S45,45 48,55" stroke-width="1.5" />
          <path d="M8,8 C12,15 18,18 25,15 S35,20 38,30 S45,45 55,48" stroke-width="1.5" />
          <circle cx="20" cy="20" r="3" stroke-width="1" />
          <circle cx="40" cy="40" r="2" stroke-width="1" />
          <circle cx="30" cy="55" r="2" stroke-width="1" />
          <circle cx="55" cy="30" r="2" stroke-width="1" />
        </g>
      </svg>
    </div>

    <!-- Full-screen 3D Header with fixed height -->
    <div class="w-full h-screen relative overflow-hidden bg-gray-900">
      <ThreeJsHeader />
      <div class="absolute inset-0 flex items-center justify-center text-white z-10 pointer-events-none">
        <div class="bg-black bg-opacity-50 p-6 rounded-lg max-w-xl text-center">
          <h1 class="text-4xl font-bold mb-2">Welcome</h1>
          <p class="text-xl">Explore the night garden</p>
        </div>
      </div>
    </div>
    
    <!-- Main Content -->
    <main id="main-content" class="min-h-screen bg-white p-8 z-20 relative">
      <div class="max-w-6xl mx-auto py-16">
        <h2 class="text-3xl font-bold mb-6">Main Content</h2>
        <p class="text-lg mb-4">Your website content goes here...</p>
        <div class="h-96 bg-gray-100 flex items-center justify-center rounded-lg mb-8">
          <span class="text-gray-500">Content Section</span>
        </div>
        <p class="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo id nulla tincidunt
          consequat. Suspendisse potenti. Donec euismod, nisl eget aliquam ultricies, nisl nisl
          aliquet nisl, eget aliquam nisl nisl eget.
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import ThreeJsHeader from '~/components/ThreeJsHeader.vue';
</script>

<style>
html {
  scroll-behavior: smooth;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  overflow-x: hidden;
  position: relative;
}

/* Ensure main content has a solid background that fully covers the 3D scene */
#main-content {
  position: relative;
  background-color: white;
  box-shadow: 0 -10px 20px rgba(0,0,0,0.1);
}
</style>