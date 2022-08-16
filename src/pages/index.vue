<script setup lang="ts">
</script>

<template>
  <main class="grid lg:grid-cols-12 place-items-center text-3 2xl:text-4 text-secondary-4">
    <section class="lg:(col-start-3 col-span-4)">
      <div>
        Yo, it's
      </div>
      <h1 class="my-2 text-12 2xl:text-16 lt-md:(text-8 text-center) leading-[.7] font-bold">
        Shareef Hassan
      </h1>
      <div class="text-secondary-3 text-6 2xl:text-8 lt-lg:text-4 mb-16">
        &gt; Front-end developer
      </div>
      <div class="text-secondary-1 my-2 lt-lg:hidden">
        // surf around to know more about me and what I do <br>
        // you can also checkout my github page
      </div>
      <div class="lg:hidden text-secondary-1">
        // surf around my website
      </div>
      <div class="lt-md:w-20ch">
        <span class="text-secondary-3">const</span> <span class="text-secondary-2">githubLink</span> =
        <a target="_blank" href="https://github.com/sherif414" class=""><span class="text-accent-3 underline">"https://github.com/sherif414"</span></a>
      </div>
    </section>
    <section class="lg:(col-start-8 grid place-items-center col-span-4) lt-lg:hidden">
      <GameBoard />
    </section>
  </main>
</template>
