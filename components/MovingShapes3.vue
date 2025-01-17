<template>
  <div>
    <div
        class="w-full h-[500px] relative"
        :style="generateRandomShape()"
    ></div>
  </div>
</template>

<script>
export default {
  methods: {
    generateRandomShape() {
      const point1 = `0% ${Math.random() * 100}%`;
      const point2 = `100% ${Math.random() * 100}%`;
      const point3 = `100% ${500 + Math.random() * 300}px`;
      const point4 = `0% ${500 + Math.random() * 300}px`;


      const polygon = `polygon(${point1}, ${point2}, ${point3}, ${point4})`;

      return {
        backgroundColor: "#ECB0E1",
        clipPath: polygon,
      };
    },
  },
};
</script>
