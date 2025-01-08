<template>
  <div class="relative overflow-hidden">
    <div
        class="flex transition-transform duration-1000 ease-in-out"
        :style="{ transform: 'translateX(' + translateX + 'px)' }"
    >
      <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          alt="slider image"
          class="w-full h-auto"
      />
    </div>

    <div
        class="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 cursor-pointer text-white"
        @click="prevSlide"
    >
      &#8592;
    </div>
    <div
        class="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 cursor-pointer text-white"
        @click="nextSlide"
    >
      &#8594;
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'public/img/slider-placeholder.png',
        'public/img/slider-placeholder.png',
        'public/img/slider-placeholder.png',
        'public/img/slider-placeholder.png',
      ],
      currentIndex: 0,
      slideInterval: null,
    };
  },
  computed: {
    translateX() {
      return -(this.currentIndex * 100); // Schuift de afbeeldingen horizontaal
    },
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    startAutoSlide() {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 3000); // Elke 3 seconden wisselt de afbeelding
    },
    stopAutoSlide() {
      clearInterval(this.slideInterval);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    clearInterval(this.slideInterval);
  },
};
</script>

<style scoped>
/* Voeg extra styling toe als nodig */
</style>
