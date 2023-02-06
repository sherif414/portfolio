<script setup lang="ts">

</script>

<template>
  <article class="flex flex-col rounded-lg border overflow-hidden text-sm bg-primary-3 cursor-pointer">
    <div class="h-30 grow overflow-hidden">
      <img src="src/assets/cover 2sm.png" class="object-cover h-full w-full">
    </div>
    <div class="p2">
      <h2 class="mb-2 font-medium text-secondary-4">Project Name</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, fugit?</p>
    </div>
  </article>
</template>

<style scoped>
article:hover img {
  transform: scale(1.2);
  transition: transform 1s ease-out;
}
</style>