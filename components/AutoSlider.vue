<template>
  <div class="relative overflow-hidden" :style="{ width: sliderWidth + 'px',}">
    <div
        class="flex animate-scroll"
        :style="{ width: totalWidth + 'px', transform: `translateX(${translateX}px)` }"
    >
      <div
          v-for="(image, index) in infiniteImages"
          :key="index"
          :style="{ width: slideWidth + 'px'}"
          class=""
      >
        <img
            :src="image"
            alt="slider image"
            class="slidepic object-cover rounded-2xl"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ['/img/slider-placeholder.png', '/img/slider-placeholder.png', '/img/slider-placeholder.png'],
      sliderWidth: 1700, // Initial width of the slider
      translateX: 0,
      speed: 1, // Scroll speed (pixels per frame)
    };
  },
  computed: {
    infiniteImages() {
      return [...this.images, ...this.images]; // Duplicate images for continuous scrolling
    },
    totalWidth() {
      return this.infiniteImages.length * this.slideWidth; // Total width of the content
    },
    slideWidth() {
      return this.sliderWidth / 3; // Width of each slide
    },
  },
  methods: {
    startSlider() {
      setInterval(() => {
        // Update the translateX position for smooth scrolling
        this.translateX -= this.speed;

        // Reset translateX to 0 when it reaches half the total width for infinite loop
        if (Math.abs(this.translateX) >= this.totalWidth / 2) {
          this.translateX = 0;
        }
      }, 16); // This interval controls the speed of the scroll
    },
    updateWidth() {
      // Update the slider width dynamically based on window size
      this.sliderWidth = window.innerWidth * 0.8; // 80% of the window width
    },
  },
  mounted() {
    this.startSlider(); // Start the slider animation
    window.addEventListener('resize', this.updateWidth); // Update width on window resize
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWidth); // Cleanup on component destroy
  },
};
</script>

<style scoped>
/* Basic styles for smooth scrolling */
.animate-scroll {
  display: flex;
  transition: transform 0.01s ease-in-out;

}

</style>
