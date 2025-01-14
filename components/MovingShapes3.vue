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
      // Genereer willekeurige punten voor de polygoon
      const point1 = `0% ${Math.random() * 100}%`; // Linker bovenhoek
      const point2 = `100% ${Math.random() * 100}%`; // Rechter bovenhoek
      const point3 = `100% ${500 + Math.random() * 300}px`; // Rechter benedenhoek
      const point4 = `0% ${500 + Math.random() * 300}px`; // Linker benedenhoek

      // Combineer punten in een polygon
      const polygon = `polygon(${point1}, ${point2}, ${point3}, ${point4})`;

      return {
        backgroundColor: "#ECB0E1",
        clipPath: polygon,
        height: "800px", // Stelt een veilige maximumhoogte in
      };
    },
  },
};
</script>
