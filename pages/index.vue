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
      <img  src="public/img/shape2.png" >
    </div>
  </div>
  <div class="overflow-hidden">
    <div class="">

      <img class="absolute -mt-96 " src="public/img/shape3.png">

      <div id="shape-container" class="relative w-full h-screen overflow-hidden z-20" ></div>
    </div>
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
      const colors = ["#2CF6B3","#C9DDFF", "#DE6C83", "#ECB0E1"];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    createShapes() {
      const containerHeight = document.getElementById("shape-container").clientHeight;

      // Willekeurige breedte en hoogte voor de eerste shape
      const height1 = Math.max(50, Math.floor(Math.random() * 200) + 50); // Hoogte minimaal 250px
      const height2 = Math.max(80, Math.floor(Math.random() * 200) + 50); // Resthoogte zodat totaal een blok vormt

      // Willekeurig rotatiepunt
      const rotateX1 = Math.floor(Math.random() * window.innerWidth);
      const rotateY1 = Math.floor(Math.random() * containerHeight);
      const rotateX2 = Math.floor(Math.random() * window.innerWidth);
      const rotateY2 = Math.floor(Math.random() * containerHeight);

      // Creëer de eerste shape
      const shapeElement1 = document.createElement("div");
      shapeElement1.id = "shape1";
      shapeElement1.style.backgroundColor = this.getRandomColor();
      shapeElement1.classList.add("absolute", "top-[150px]", "left-0", "w-full");
      shapeElement1.style.height = `${height1}px`;
      shapeElement1.style.transformOrigin = `${rotateX1}px ${rotateY1}px`;
      shapeElement1.style.transform = `skew(${Math.floor(Math.random() * 50) - 25}deg, ${Math.floor(Math.random() * 50) - 25}deg)`;
      shapeElement1.style.borderRadius = "0";

      // Creëer de tweede shape
      const shapeElement2 = document.createElement("div");
      shapeElement2.id = "shape2";
      shapeElement2.style.backgroundColor = this.getRandomColor();
      shapeElement2.classList.add("absolute", "left-0", "w-full");
      shapeElement2.style.top = `${150 + height1}px`;
      shapeElement2.style.height = `${height2}px`;
      shapeElement2.style.transformOrigin = `${rotateX2}px ${rotateY2}px`;
      shapeElement2.style.transform = `skew(${Math.floor(Math.random() * 50) - 25}deg, ${Math.floor(Math.random() * 50) - 25}deg)`;
      shapeElement2.style.borderRadius = "0";

      // Voeg beide shapes toe aan de container
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

        shape1.style.transform = `skew(${x * 50 - 25}deg, ${y * 50 - 25}deg)`;
        shape2.style.transform = `skew(${y * 50 - 25}deg, ${x * 50 - 25}deg)`;
      }
    },
  },
};
</script>
