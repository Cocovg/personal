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
      shapeClass: 'h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]',
      shapeStyle: this.generateRandomShape(),
    };
  },
  methods: {
    generateRandomShape() {
      const topLeftHeight = Math.floor(Math.random() * 200) - 100;
      const topRightHeight = Math.floor(Math.random() * 200) - 100;
      const bottomLeftHeight = Math.floor(Math.random() * 200) - 100;
      const bottomRightHeight = Math.floor(Math.random() * 200) - 100;

      const clipPath = `polygon(
        0% ${topLeftHeight}%,
        100% ${topRightHeight}%,
        100% 100%,
        0% ${bottomLeftHeight}%
      )`;

      return {
        backgroundColor: '#C9DDFF',
        clipPath: clipPath,
      };
    },
  },
};
</script>

