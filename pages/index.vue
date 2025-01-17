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
    <div class="container absolute rotate-12 mt-72 -ml-24 mx-auto">
      <h1 CLASS="dighead text-8xl font-black -mr-96 pb-12">DIGITAL ART • DIGITAL ART • DIGITAL ART</h1>
      <AutoSlider />
    </div>
    <img src="public/img/shape4.png" class="-mt-96">
  </div>
  <div class="">

    <div class="absolute left-0 w-full flex justify-center space-x-4 z-50">
      <img src="public/img/web.png" class="webpic2">
      <img src="public/img/web.png" class="webpic">
      <img src="public/img/web.png" class="webpic2">
    </div>
    <img class="absolute -mt-96 " src="public/img/shape3.png">
    <div id="shape-container" class="relative mt-24">
      <div class="relative z-40">
        <MovingShapes class="z-50 "/>
      </div>
    </div>
  </div>
  <div class="">

    <div class="absolute left-0 w-full flex justify-center space-x-4 z-50">
      <img src="public/img/web.png" class="webpic2">
      <img src="public/img/web.png" class="webpic">
      <img src="public/img/web.png" class="webpic2">
    </div>
    <img class="absolute -mt-96 " src="public/img/shape3.png">
    <div id="shape-container" class="relative mt-24">
      <div class="relative z-40">
        <MovingShapes3 class="z-0 "/>
        <MovingShapes2 class="z-50"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>