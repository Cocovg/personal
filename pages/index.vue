<template>
  <div class="relative">
    <img src="public/img/header.png">
    <div class="absolute inset-0 flex items-end">
      <img src="public/img/shape1.png" class="translate-y-80">
    </div>
    <div class="absolute flex">
      <p class="p-4 pr-56 pl-12 -mt-36 justify-">
        <span class="text-2xl">Welkom</span><br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet luctus tempor. Fusce consectetur tellus quis est hendrerit, accumsan posuere magna finibus. Ut ullamcorper feugiat felis ut aliquam. Suspendisse faucibus suscipit mauris scelerisque hendrerit. Nulla feugiat risus sit amet augue pellentesque accumsan. Sed sit amet semper nisi. Sed varius enim cursus augue placerat efficitur. Cras nec augue tempus, fermentum lacus et, molestie justo. Etiam finibus augue vel ligula porta, eget porta massa pretium. Phasellus scelerisque volutpat scelerisque. Donec non nibh augue. Phasellus facilisis orci id leo vestibulum sollicitudin. Suspendisse potenti.
      </p>
      <img class="propic pr-12 -mt-56" src="public/img/profile-placeholder.png">
    </div>
  </div>

  <div class="block ">
    <div class="flex items-end">
      <img src="public/img/shape2.png" >
    </div>
  </div>
  <div class="block">
    <div class="container mx-auto mt-10">
      <AutoSlider />
    </div>
    <img src="public/img/shape4.png" class="-mt-96">
  </div>
  <div class="relative">
    <!-- Web Images -->
    <div class="absolute left-0 w-full flex justify-center space-x-4 z-50">
      <img src="public/img/web.png" class="webpic2">
      <img src="public/img/web.png" class="webpic">
      <img src="public/img/web.png" class="webpic2">
    </div>

    <!-- Shape Container -->
    <div id="shape-container" class="relative mt-24 z-40"></div>

    <!-- Shape Image -->
    <img class="absolute -mt-72 z-30" src="public/img/shape3.png">
  </div>



</template>
<script>
export default {
  mounted() {
    this.createShapes();
    window.addEventListener("mousemove", this.handleMouseMove);

  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  },
  methods: {
    getRandomColor() {
      const colors = ["#2CF6B3", "#C9DDFF", "#DE6C83", "#ECB0E1"];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    createShapes() {
      const containerHeight = document.getElementById("shape-container").clientHeight;

      const height1 = Math.max(50, Math.floor(Math.random() * 100) + 50);
      const height2 = Math.max(80, Math.floor(Math.random() * 50) + 50);

      const rotateX1 = Math.floor(Math.random() * window.innerWidth);
      const rotateY1 = Math.floor(Math.random() * containerHeight);
      const rotateX2 = Math.floor(Math.random() * window.innerWidth);
      const rotateY2 = Math.floor(Math.random() * containerHeight);

      const shapeElement1 = document.createElement("div");
      shapeElement1.id = "shape1";
      shapeElement1.style.backgroundColor = this.getRandomColor();
      shapeElement1.classList.add("absolute", "top-[150px]", "left-0", "w-full");
      shapeElement1.style.height = `${height1}px`;
      shapeElement1.style.transformOrigin = `${rotateX1}px ${rotateY1}px`;
      shapeElement1.style.transform = `skew(${Math.floor(Math.random() * 30) - 15}deg, ${Math.floor(Math.random() * 15) - 7}deg)`; // Minder hoogte rotatie
      shapeElement1.style.borderRadius = "0";

      const shapeElement2 = document.createElement("div");
      shapeElement2.id = "shape2";
      shapeElement2.style.backgroundColor = this.getRandomColor();
      shapeElement2.classList.add("absolute", "left-0", "w-full");
      shapeElement2.style.top = `${150 + height1}px`;
      shapeElement2.style.height = `${height2}px`;
      shapeElement2.style.transformOrigin = `${rotateX2}px ${rotateY2}px`;
      shapeElement2.style.transform = `skew(${Math.floor(Math.random() * 30) - 15}deg, ${Math.floor(Math.random() * 15) - 7}deg)`; // Minder hoogte rotatie
      shapeElement2.style.borderRadius = "0";

      const container = document.getElementById("shape-container");
      container.appendChild(shapeElement1);
      container.appendChild(shapeElement2);
    },
    handleMouseMove(event) {
      const shape1 = document.getElementById("shape1");
      const shape2 = document.getElementById("shape2");

      if (shape1 && shape2) {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;

        // Aangepaste rotatie factoren voor minder hoogte draaiing
        shape1.style.transform = `skew(${x * 40 - 20}deg, ${y * 20 - 10}deg)`;
        shape2.style.transform = `skew(${y * 40 - 20}deg, ${x * 20 - 10}deg)`;
      }
    },
  },
};
</script>
