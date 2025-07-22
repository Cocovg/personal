<template>
  <div class="relative w-full">
    <div id="three-container" ref="threeContainer" class="w-full h-screen bg-gray-900"></div>
    
    <!-- Scroll down arrow -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer" @click="scrollDown">
      <div class="flex flex-col items-center text-white">
        <span class="text-sm mb-2 font-light">Scroll</span>
        <svg 
          class="animate-bounce w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

const threeContainer = ref<HTMLElement | null>(null);
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: any; // Use any type for OrbitControls
let animationFrameId: number;

// Parameters for scene elements
const FIELD_SIZE = 100;
const FIELD_SEGMENTS = 50;
const NUM_FLOWERS = 500; 
const NUM_STARS = 1000;
const MOUNTAIN_RANGE_SIZE = 150;

// Function to handle scroll down click
const scrollDown = () => {
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
};

// Initialize scene
const initScene = async () => {
  console.log('Initializing Three.js scene');
  if (!threeContainer.value) {
    console.error('Three.js container not found');
    return;
  }

  try {
    // Dynamically import OrbitControls to avoid TypeScript errors
    const OrbitControlsModule = await import('three/examples/jsm/controls/OrbitControls.js');
    const OrbitControls = OrbitControlsModule.OrbitControls;

    // Create scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000911, 0.015);
    
    // Create camera
    const width = threeContainer.value.clientWidth;
    const height = threeContainer.value.clientHeight;
    const aspect = width / height;
    console.log(`Container dimensions: ${width}x${height}, aspect: ${aspect}`);
    
    camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.set(0, 8, 25);
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: false
    });
    renderer.setClearColor(0x000911);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    threeContainer.value.innerHTML = '';
    threeContainer.value.appendChild(renderer.domElement);
    
    // Disable controls completely - no interaction with the scene
    /*
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 15;
    controls.maxDistance = 30;
    controls.maxPolarAngle = Math.PI / 2.5;
    controls.enablePan = false;
    controls.enableZoom = false;
    */
    
    // Create night sky (background and stars)
    createNightSky();
    
    // Create ground
    createGround();
    
    // Create mountains
    createMountains();
    
    // Create flower field
    createFlowerField();
    
    // Add ambient light for basic scene illumination
    const ambientLight = new THREE.AmbientLight(0x252b41, 0.4);
    scene.add(ambientLight);
    
    // Add moonlight (directional light)
    const moonLight = new THREE.DirectionalLight(0xb9d5ff, 0.6);
    moonLight.position.set(50, 40, 30);
    moonLight.castShadow = true;
    moonLight.shadow.mapSize.width = 1024;
    moonLight.shadow.mapSize.height = 1024;
    scene.add(moonLight);
  
    // Add some point lights to highlight flowers
    const blueLight = new THREE.PointLight(0x3b68ff, 5, 25);
    blueLight.position.set(10, 5, 10);
    scene.add(blueLight);
  
    const purpleLight = new THREE.PointLight(0xa668ff, 5, 25);
    purpleLight.position.set(-15, 5, -10);
    scene.add(purpleLight);
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Add slight camera animation
    startCameraAnimation();

    console.log('Three.js scene initialized successfully');
    
    // Start animation loop
    animate();
  } catch (error) {
    console.error('Error initializing Three.js scene:', error);
  }
};

// Add a gentle camera animation
let cameraAnimationStartTime = 0;
const startCameraAnimation = () => {
  cameraAnimationStartTime = Date.now();
};

// Create night sky with stars
const createNightSky = () => {
  // Set background color to dark blue
  scene.background = new THREE.Color(0x000911);
  
  // Create stars
  const starsGeometry = new THREE.BufferGeometry();
  const starPositions = [];
  const starColors = [];
  
  for (let i = 0; i < NUM_STARS; i++) {
    const x = THREE.MathUtils.randFloatSpread(1000);
    const y = THREE.MathUtils.randFloat(20, 300);
    const z = THREE.MathUtils.randFloatSpread(1000);
    
    starPositions.push(x, y, z);
    
    // Vary star colors between white and light blue
    const intensity = THREE.MathUtils.randFloat(0.7, 1.0);
    const blueIntensity = THREE.MathUtils.randFloat(0.8, 1.0);
    starColors.push(intensity, intensity, intensity * blueIntensity);
  }
  
  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
  
  const starsMaterial = new THREE.PointsMaterial({
    size: 0.7,
    vertexColors: true,
    transparent: true,
    opacity: 0.8
  });
  
  const stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);
  
  // Add a moon
  const moonGeometry = new THREE.SphereGeometry(8, 32, 32);
  const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xf0f0ff });
  const moon = new THREE.Mesh(moonGeometry, moonMaterial);
  moon.position.set(70, 60, -100);
  scene.add(moon);
  
  // Add glow effect to the moon
  const moonGlowGeometry = new THREE.SphereGeometry(10, 32, 32);
  const moonGlowMaterial = new THREE.MeshBasicMaterial({
    color: 0xaaaaff,
    transparent: true,
    opacity: 0.2
  });
  const moonGlow = new THREE.Mesh(moonGlowGeometry, moonGlowMaterial);
  moon.add(moonGlow);
};

// Create ground plane
const createGround = () => {
  const groundGeometry = new THREE.PlaneGeometry(FIELD_SIZE, FIELD_SIZE, FIELD_SEGMENTS, FIELD_SEGMENTS);
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x052505,
    roughness: 0.8,
    metalness: 0.2,
    wireframe: false
  });
  
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  
  // Add some slight height variation to the ground
  const positions = groundGeometry.attributes.position;
  for (let i = 0; i < positions.count; i++) {
    const y = THREE.MathUtils.randFloat(0, 0.5);
    positions.setY(i, y);
  }
  
  groundGeometry.computeVertexNormals();
  scene.add(ground);
};

// Create mountains on the horizon
const createMountains = () => {
  const mountainMaterial = new THREE.MeshStandardMaterial({
    color: 0x1a1e2a,
    roughness: 1,
    flatShading: true
  });

  // Create several mountain ranges at different distances
  for (let range = 0; range < 3; range++) {
    const distance = 70 + range * 30;
    const mountainGeometry = new THREE.BufferGeometry();
    const vertices = [];
    const indices = [];
    
    // Create mountain points
    const numPeaks = 20 + range * 5;
    const rangeWidth = MOUNTAIN_RANGE_SIZE + range * 30;
    
    // Create base points
    for (let i = 0; i <= numPeaks; i++) {
      const x = (i / numPeaks) * rangeWidth - rangeWidth / 2;
      vertices.push(x, 0, -distance);
    }
    
    // Create peak points
    for (let i = 0; i <= numPeaks; i++) {
      const x = (i / numPeaks) * rangeWidth - rangeWidth / 2;
      const peakHeight = THREE.MathUtils.randFloat(15, 25 - range * 5);
      vertices.push(x, peakHeight, -distance);
    }
    
    // Create triangles
    for (let i = 0; i < numPeaks; i++) {
      // Triangle 1
      indices.push(i, i + 1, i + numPeaks + 1);
      // Triangle 2
      indices.push(i, i + numPeaks + 1, i + numPeaks + 2);
    }
    
    mountainGeometry.setIndex(indices);
    mountainGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    mountainGeometry.computeVertexNormals();
    
    const mountains = new THREE.Mesh(mountainGeometry, mountainMaterial);
    mountains.castShadow = true;
    scene.add(mountains);
  }
};

// Create flower field
const createFlowerField = () => {
  // Create flower instances
  for (let i = 0; i < NUM_FLOWERS; i++) {
    // Random position within the field
    const x = THREE.MathUtils.randFloatSpread(FIELD_SIZE * 0.9);
    const z = THREE.MathUtils.randFloatSpread(FIELD_SIZE * 0.9);
    
    // Create flower stem
    const stemHeight = THREE.MathUtils.randFloat(0.8, 2);
    const stemGeometry = new THREE.CylinderGeometry(0.05, 0.05, stemHeight, 8);
    const stemMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a7d1a,
      roughness: 0.8
    });
    
    const stem = new THREE.Mesh(stemGeometry, stemMaterial);
    stem.position.set(x, stemHeight / 2, z);
    stem.castShadow = true;
    scene.add(stem);
    
    // Create flower head
    const flowerColor = new THREE.Color().setHSL(
      THREE.MathUtils.randFloat(0.5, 0.9), // Blue to purple hue
      THREE.MathUtils.randFloat(0.7, 1),
      THREE.MathUtils.randFloat(0.4, 0.6)
    );
    
    const flowerGeometry = new THREE.SphereGeometry(0.3, 8, 8);
    const flowerMaterial = new THREE.MeshStandardMaterial({
      color: flowerColor,
      roughness: 0.7,
      metalness: 0.1
    });
    
    const flower = new THREE.Mesh(flowerGeometry, flowerMaterial);
    flower.position.set(x, stemHeight + 0.3, z);
    flower.castShadow = true;
    scene.add(flower);
    
    // Create simple petals
    const petalCount = THREE.MathUtils.randInt(5, 8);
    for (let p = 0; p < petalCount; p++) {
      const angle = (p / petalCount) * Math.PI * 2;
      const petalGeometry = new THREE.SphereGeometry(0.15, 8, 8);
      petalGeometry.translate(0.25, 0, 0);
      
      const petalMaterial = new THREE.MeshStandardMaterial({
        color: flowerColor,
        roughness: 0.6
      });
      
      const petal = new THREE.Mesh(petalGeometry, petalMaterial);
      petal.position.set(x, stemHeight + 0.3, z);
      petal.rotation.y = angle;
      petal.castShadow = true;
      scene.add(petal);
    }
  }
};

// Handle window resize
const onWindowResize = () => {
  if (!camera || !renderer || !threeContainer.value) return;
  
  const width = threeContainer.value.clientWidth;
  const height = threeContainer.value.clientHeight;
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};

// Animation loop
const animate = () => {
  animationFrameId = requestAnimationFrame(animate);
  
  try {
    // Animate camera position slightly
    if (camera) {
      const elapsedTime = (Date.now() - cameraAnimationStartTime) / 1000;
      camera.position.x = Math.sin(elapsedTime * 0.15) * 5;
      camera.position.z = 25 + Math.sin(elapsedTime * 0.1) * 3;
      camera.lookAt(0, 0, 0);
    }
    
    if (controls) {
      controls.update();
    }
    
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  } catch (error) {
    console.error('Error in animation loop:', error);
  }
};

// Lifecycle hooks
onMounted(() => {
  console.log('ThreeJsHeader component mounted');
  // Use setTimeout to ensure the DOM is fully rendered
  setTimeout(() => {
    initScene();
  }, 100);
});

onBeforeUnmount(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  window.removeEventListener('resize', onWindowResize);
  
  // Clean up Three.js resources
  if (renderer) {
    renderer.dispose();
  }
  
  if (scene) {
    scene.clear();
  }
});
</script>

<style scoped>
#three-container {
  position: relative;
  overflow: hidden;
  height: 100vh;
  min-height: 100vh;
  background-color: #000911;
  pointer-events: none; /* Disable all mouse interaction */
}

/* Make sure the canvas fills the container */
#three-container canvas {
  display: block;
  width: 100% !important;
  height: 100% !important;
  pointer-events: none; /* Disable all mouse interaction on canvas */
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style> 