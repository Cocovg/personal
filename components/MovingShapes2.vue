<template>
  <div>
    <div
        class="w-full"
        :style="shapeStyle"
        :class="shapeClass"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shapeClass: 'h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]', // Basis hoogte van het block
      shapeStyle: this.generateRandomShape(),
    };
  },
  methods: {
    generateRandomShape() {
      // Willekeurige hoogtes voor de hoeken (tussen -100px en 100px)
      const topLeftHeight = Math.floor(Math.random() * 200) - 100;
      const topRightHeight = Math.floor(Math.random() * 200) - 100;
      const bottomLeftHeight = Math.floor(Math.random() * 200) - 100;
      const bottomRightHeight = Math.floor(Math.random() * 200) - 100;

      // De clip-path wordt dynamisch berekend met deze random waarden
      const clipPath = `polygon(
        0% ${topLeftHeight}%,
        100% ${topRightHeight}%,
        100% 100%,
        0% ${bottomLeftHeight}%
      )`;

      return {
        backgroundColor: '#2CF6B3', // Achtergrondkleur
        clipPath: clipPath, // Dynamische clip-path
      };
    },
  },
};
</script>

<style scoped>
/* In dit geval is de clip-path dynamisch, dus er is geen verdere CSS nodig */
</style>
