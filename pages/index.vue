<template>
  <div class="portfolio-page">
    <!-- Hero Section with Mountain Image -->
    <section class="hero-section relative h-screen overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop" 
        alt="Mountain landscape"
        class="w-full h-full object-cover"
      />
      <div class="absolute top-8 left-8 z-10">
        <div class="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
          <span class="text-2xl font-bold text-gray-800">c</span>
        </div>
      </div>
    </section>

    <!-- Welcome Section with Diagonal Background -->
    <section class="welcome-section relative overflow-hidden -mt-24">
      <div class="diagonal-bg bg-gradient-to-br from-[#B8D4F1] to-[#E8D4F1]"></div>
      
      <div class="container mx-auto px-8 pt-32 pb-48 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="text-content">
            <h2 class="text-4xl font-light text-pink-300 mb-6">Welcome</h2>
            <p class="text-gray-600 leading-relaxed text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          
          <div class="flex justify-center lg:justify-end relative">
            <div class="avatar-container relative">
              <div class="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" 
                  alt="Profile"
                  class="w-full h-full object-cover grayscale"
                />
              </div>
              <div class="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-teal-400"></div>
            </div>
          </div>
        </div>
        
        <!-- Social Icons -->
        <div class="flex gap-4 mt-12 justify-center">
          <a href="#" class="social-icon bg-white/70 backdrop-blur-sm rounded-lg p-3 hover:bg-white transition">
            <svg class="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2c0-1.1.9-2 2-2h3V0h-4c-3.3 0-6 2.7-6 6v1H7v3h3v12h4V10h3l1-3z"/></svg>
          </a>
          <a href="#" class="social-icon bg-white/70 backdrop-blur-sm rounded-lg p-3 hover:bg-white transition">
            <svg class="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.5 8.5h-3.8c-.3-1.5-1-2.8-2-3.8 2.7.8 4.8 2.9 5.8 3.8zm-3.5 3.5c0 1.4-.3 2.7-.8 3.9H8.8c-.5-1.2-.8-2.5-.8-3.9s.3-2.7.8-3.9h6.4c.5 1.2.8 2.5.8 3.9z"/></svg>
          </a>
          <a href="#" class="social-icon bg-white/70 backdrop-blur-sm rounded-lg p-3 hover:bg-white transition">
            <svg class="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Digital Art Section -->
    <section class="digital-art-section relative overflow-hidden -mt-40">
      <div class="diagonal-bg bg-[#E89BB5]"></div>
      <div class="container mx-auto px-8 pt-32 pb-48 relative z-10">
        <div class="angled-content">
          <div class="text-wrapper mb-16 overflow-hidden">
            <h2 class="text-7xl font-bold text-white tracking-wider flex items-center gap-6 whitespace-nowrap animate-scroll-text">
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
              DIGITAL ART •
            </h2>
          </div>
          
          <!-- Art Gallery Carousel -->
          <div class="art-carousel-container relative">
            <div class="art-carousel-wrapper">
              <div class="art-slider-continuous flex gap-6">
              <!-- First set of items -->
              <div class="art-item flex-shrink-0 w-72 bg-white/90 rounded-2xl p-4 shadow-xl">
                <div class="h-64 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=400&fit=crop" alt="Digital Art 1" class="w-full h-full object-cover"/>
                </div>
              </div>
              <div class="art-item flex-shrink-0 w-72 bg-white/90 rounded-2xl p-4 shadow-xl">
                <div class="h-64 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=400&h=400&fit=crop" alt="Digital Art 2" class="w-full h-full object-cover"/>
                </div>
              </div>
              <div class="art-item flex-shrink-0 w-72 bg-white/90 rounded-2xl p-4 shadow-xl">
                <div class="h-64 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=400&h=400&fit=crop" alt="Digital Art 3" class="w-full h-full object-cover"/>
                </div>
              </div>
              <div class="art-item flex-shrink-0 w-72 bg-white/90 rounded-2xl p-4 shadow-xl">
                <div class="h-64 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=400&h=400&fit=crop" alt="Digital Art 4" class="w-full h-full object-cover"/>
                </div>
              </div>
              <div class="art-item flex-shrink-0 w-72 bg-white/90 rounded-2xl p-4 shadow-xl">
                <div class="h-64 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&h=400&fit=crop" alt="Digital Art 5" class="w-full h-full object-cover"/>
                </div>
              </div>
              <div class="art-item flex-shrink-0 w-72 bg-white/90 rounded-2xl p-4 shadow-xl">
                <div class="h-64 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?w=400&h=400&fit=crop" alt="Digital Art 6" class="w-full h-full object-cover"/>
                </div>
              </div>
              
              <!-- Duplicate set for seamless loop -->
              <div class="art-item flex-shrink-0 w-72 bg-white/90 rounded-2xl p-4 shadow-xl">
                <div class="h-64 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=400&fit=crop" alt="Digital Art 1" class="w-full h-full object-cover"/>
                </div>
              </div>
              <div class="art-item flex-shrink-0 w-72 bg-white/90 rounded-2xl p-4 shadow-xl">
                <div class="h-64 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=400&h=400&fit=crop" alt="Digital Art 2" class="w-full h-full object-cover"/>
                </div>
              </div>
              <div class="art-item flex-shrink-0 w-72 bg-white/90 rounded-2xl p-4 shadow-xl">
                <div class="h-64 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=400&h=400&fit=crop" alt="Digital Art 3" class="w-full h-full object-cover"/>
                </div>
              </div>
              <div class="art-item flex-shrink-0 w-72 bg-white/90 rounded-2xl p-4 shadow-xl">
                <div class="h-64 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=400&h=400&fit=crop" alt="Digital Art 4" class="w-full h-full object-cover"/>
                </div>
              </div>
              <div class="art-item flex-shrink-0 w-72 bg-white/90 rounded-2xl p-4 shadow-xl">
                <div class="h-64 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&h=400&fit=crop" alt="Digital Art 5" class="w-full h-full object-cover"/>
                </div>
              </div>
              <div class="art-item flex-shrink-0 w-72 bg-white/90 rounded-2xl p-4 shadow-xl">
                <div class="h-64 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?w=400&h=400&fit=crop" alt="Digital Art 6" class="w-full h-full object-cover"/>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Web Design Section -->
    <section class="web-design-section relative overflow-hidden -mt-40">
      <div class="diagonal-bg bg-[#D4C4D8]"></div>
      
      <div class="container mx-auto px-8 pt-48 pb-48 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <!-- Design Grid -->
          <div class="design-card bg-white rounded-2xl overflow-hidden shadow-xl">
            <div class="h-48 bg-gradient-to-br from-teal-300 to-teal-500 flex items-center justify-center">
              <div class="text-white text-lg font-semibold">Design 1</div>
            </div>
            <div class="p-6 space-y-4">
              <div class="flex gap-4">
                <div class="w-12 h-12 rounded-full bg-teal-400"></div>
                <div class="w-12 h-12 rounded-full bg-blue-400"></div>
              </div>
            </div>
          </div>
          
          <div class="design-card bg-white rounded-2xl overflow-hidden shadow-xl">
            <div class="h-48 bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
              <div class="text-white text-lg font-semibold">Design 2</div>
            </div>
            <div class="p-6 space-y-4">
              <div class="w-24 h-24 rounded-full bg-green-400 mx-auto"></div>
            </div>
          </div>
          
          <div class="design-card bg-white rounded-2xl overflow-hidden shadow-xl">
            <div class="h-48 bg-gradient-to-br from-cyan-300 to-cyan-500 flex items-center justify-center">
              <div class="text-white text-lg font-semibold">Design 3</div>
            </div>
            <div class="p-6 space-y-4">
              <div class="flex gap-4">
                <div class="w-12 h-12 rounded-full bg-cyan-400"></div>
                <div class="w-12 h-12 rounded-full bg-blue-400"></div>
              </div>
            </div>
    </div>
    </div>

        <!-- Vertical Text -->
        <div class="flex justify-end">
          <div class="vertical-text text-7xl font-bold text-white/40 tracking-widest">
            DESIGN
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects-section relative overflow-hidden -mt-40">
      <div class="diagonal-bg bg-gradient-to-br from-[#5FEDC7] to-[#7BECD5]"></div>
      
      <div class="container mx-auto px-8 pt-48 pb-48 relative z-10">
        <h2 class="text-5xl font-bold text-white text-center mb-16 flex items-center justify-center gap-4">
          <svg class="w-8 h-8" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg>
          PROJECTS
          <svg class="w-8 h-8" fill="white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg>
        </h2>
        
        <!-- Project Cards -->
        <div class="flex gap-8 justify-center flex-wrap">
          <div class="project-card bg-gradient-to-br from-blue-200 to-purple-200 rounded-[3rem] p-8 w-80 shadow-2xl transform hover:scale-105 transition">
            <div class="h-64 bg-gray-300 rounded-2xl mb-6 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop" alt="Project 1" class="w-full h-full object-cover"/>
            </div>
            <div class="text-center">
              <button class="bg-white/80 text-teal-600 px-6 py-2 rounded-full font-semibold hover:bg-white transition">
                View Project
              </button>
            </div>
          </div>
          
          <div class="project-card bg-white rounded-[3rem] p-8 w-80 shadow-2xl">
            <div class="h-64 bg-teal-400 rounded-2xl mb-6 flex items-center justify-center">
              <span class="text-white text-xl font-bold">New Project</span>
            </div>
            <div class="text-center">
              <button class="bg-teal-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-500 transition">
                Coming Soon
              </button>
      </div>
    </div>
    
          <div class="project-card bg-gradient-to-br from-blue-200 to-pink-200 rounded-[3rem] p-8 w-80 shadow-2xl transform hover:scale-105 transition">
            <div class="h-64 bg-gray-300 rounded-2xl mb-6 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop" alt="Project 3" class="w-full h-full object-cover"/>
            </div>
            <div class="text-center">
              <button class="bg-white/80 text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-white transition">
                View Project
              </button>
           </div>
         </div>
       </div>
     </div>
    </section>

    <!-- Footer Section -->
    <section class="footer-section relative overflow-hidden -mt-40">
      <div class="diagonal-bg bg-gradient-to-br from-[#B8D4F1] to-[#E8C4D8]"></div>
      
      <div class="container mx-auto px-8 pt-48 pb-32 text-center relative z-10">
        <div class="mb-8">
          <div class="w-24 h-24 rounded-full bg-white/80 flex items-center justify-center mx-auto mb-8">
            <span class="text-5xl font-bold text-pink-400">C</span>
          </div>
        </div>
        
        <h3 class="text-4xl font-light text-white mb-8">
          BY COCO VAN GLABBEEK
        </h3>
        
        <!-- Social Icons -->
        <div class="flex gap-4 mt-8 justify-center">
          <a href="#" class="social-icon bg-white/70 backdrop-blur-sm rounded-lg p-3 hover:bg-white transition">
            <svg class="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2c0-1.1.9-2 2-2h3V0h-4c-3.3 0-6 2.7-6 6v1H7v3h3v12h4V10h3l1-3z"/></svg>
          </a>
          <a href="#" class="social-icon bg-white/70 backdrop-blur-sm rounded-lg p-3 hover:bg-white transition">
            <svg class="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.5 8.5h-3.8c-.3-1.5-1-2.8-2-3.8 2.7.8 4.8 2.9 5.8 3.8zm-3.5 3.5c0 1.4-.3 2.7-.8 3.9H8.8c-.5-1.2-.8-2.5-.8-3.9s.3-2.7.8-3.9h6.4c.5 1.2.8 2.5.8 3.9z"/></svg>
          </a>
          <a href="#" class="social-icon bg-white/70 backdrop-blur-sm rounded-lg p-3 hover:bg-white transition">
            <svg class="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Continuous CSS-based carousel - no JavaScript needed for animation
</script>

<style scoped>
.portfolio-page {
  overflow-x: hidden;
  background: white;
}

/* Diagonal Backgrounds */
.diagonal-bg {
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  bottom: -1px;
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
}

.diagonal-divider {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 250px;
  clip-path: polygon(0 70%, 100% 0, 100% 100%, 0 100%);
}

.diagonal-divider-curved {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 300px;
  clip-path: polygon(0 60%, 100% 0, 100% 100%, 0 100%);
}

.curved-divider {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 250px;
  clip-path: polygon(0 60%, 100% 0, 100% 100%, 0 100%);
}

.curved-top {
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 200px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 40%);
}

/* Dotted Borders */
.dotted-border-top,
.dotted-border-bottom,
.dotted-border-top-white,
.dotted-border-bottom-white {
  position: absolute;
  left: -5%;
  width: 110%;
  height: 2px;
  background-image: linear-gradient(to right, white 50%, transparent 50%);
  background-size: 20px 2px;
  background-repeat: repeat-x;
  z-index: 5;
  transform-origin: left center;
}

.dotted-border-top {
  top: 8%;
  transform: rotate(-5deg);
}

.dotted-border-bottom {
  bottom: 15%;
  transform: rotate(-5deg);
}

.dotted-border-top-white {
  top: 8%;
  transform: rotate(-5deg);
  background-image: linear-gradient(to right, white 50%, transparent 50%);
}

.dotted-border-bottom-white {
  bottom: 18%;
  transform: rotate(-5deg);
  background-image: linear-gradient(to right, white 50%, transparent 50%);
}

.dotted-line {
  width: 200px;
  height: 2px;
  background-image: linear-gradient(to right, white 50%, transparent 50%);
  background-size: 20px 2px;
  background-repeat: repeat-x;
}

/* Vertical Text */
.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}

/* Angled Content */
.angled-content {
  transform: rotate(5deg);
  transform-origin: center center;
  padding: 2rem 0;
  /* Ensure child animations work */
  transform-style: preserve-3d;
}

/* Text Wrapper */
.text-wrapper {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
}

/* Art Carousel */
.art-carousel-container {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  position: relative;
  padding: 20px 0;
  overflow: hidden;
}

.art-carousel-wrapper {
  overflow: visible;
  position: relative;
}

.art-slider-continuous {
  display: flex;
  will-change: transform;
  animation: slideCarousel 15s linear infinite !important;
}

@keyframes slideCarousel {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1872px); /* 6 items: 6 * (288px width + 24px gap) = 6 * 312px = 1872px */
  }
}

@keyframes scrollText {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll-text {
  animation: scrollText 20s linear infinite;
}

.art-carousel-wrapper:hover .art-slider-continuous {
  animation-play-state: paused;
}

/* Animations */
.art-item,
.design-card,
.project-card {
  transition: transform 0.3s ease;
}

.art-item:hover,
.design-card:hover {
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 768px) {
  .vertical-text {
    font-size: 3rem;
  }
  
  .diagonal-bg {
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);
  }
  
  .diagonal-divider,
  .diagonal-divider-curved,
  .curved-divider {
    height: 150px;
  }
  
  .dotted-border-top,
  .dotted-border-bottom,
  .dotted-border-top-white,
  .dotted-border-bottom-white {
    transform: rotate(-3deg);
  }
  
  .dotted-border-bottom {
    bottom: 12%;
  }
  
  .dotted-border-bottom-white {
    bottom: 15%;
  }
  
  .angled-content {
    transform: rotate(3deg);
  }
}
</style>