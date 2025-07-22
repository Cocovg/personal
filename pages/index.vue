<template>
  <div class="flex flex-col">
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
}

/* Ensure main content has a solid background that fully covers the 3D scene */
#main-content {
  position: relative;
  background-color: white;
  box-shadow: 0 -10px 20px rgba(0,0,0,0.1);
}
</style>