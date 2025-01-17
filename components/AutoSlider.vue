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
      sliderWidth: 1000, //1700 past op laptop. maar zorgt voor rare overflowproblemen
      translateX: 0,
      speed: 1,
    };
  },
  computed: {
    infiniteImages() {
      return [...this.images, ...this.images];
    },
    totalWidth() {
      return this.infiniteImages.length * this.slideWidth;
    },
    slideWidth() {
      return this.sliderWidth / 3;
    },
  },
  methods: {
    startSlider() {
      setInterval(() => {
        this.translateX -= this.speed;

        if (Math.abs(this.translateX) >= this.totalWidth / 2) {
          this.translateX = 0;
        }
      }, 16);
    },
    updateWidth() {
      this.sliderWidth = window.innerWidth * 0.8;
    },
  },
  mounted() {
    this.startSlider();
    window.addEventListener('resize', this.updateWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWidth);
  },
};
</script>

<style scoped>

.animate-scroll {
  display: flex;
  transition: transform 0.01s ease-in-out;

}

</style>
