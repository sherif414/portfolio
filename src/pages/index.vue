<script setup lang="ts">
</script>

<template>
  <main class="grid lg:grid-cols-12 place-items-center text-3 2xl:text-4 text-secondary-4">
    <section class="lg:(col-start-3 col-span-4)">
      <span>
        Yo, I'm
      </span>
      <h1 class="my-2 text-11 2xl:text-16 lt-md:(text-8 text-center) leading-[.7] font-bold">
        Shareef Hassan
      </h1>
      <h2 class="text-secondary-3 text-6 2xl:text-8 lt-lg:text-4 mb-8">
        &gt; web developer
      </h2>
      <p class="text-secondary-1 my-2 lt-lg:hidden">
        // Iam a vuejs/nuxt developer from Sudan<br>
        // check out the projects that i've built
      </p>
      <p class="lg:hidden text-secondary-1">
        // Iam a vuejs/nuxt developer from Sudan
      </p>
      <code class="lt-md:w-20ch">
        <span class="text-secondary-3">const</span> <span class="text-secondary-2">githubPage</span> =
        <a target="_blank" href="https://github.com/sherif414" class=""><span class="text-accent-3 underline">"https://github.com/sherif414"</span></a>
      </code>
    </section>
    <section class="lg:(col-start-8 grid place-items-center col-span-4) lt-lg:hidden">
      <GameBoard />
    </section>
  </main>
</template>
