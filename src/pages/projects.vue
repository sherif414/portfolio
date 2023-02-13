<script lang="ts" setup>
</script>

<template>
  <main class="grid grid-cols-12 grid-rows-[max-content_1fr] place-content-center text-sm 2xl:text-5">
    <div class="border-b col-span-full h-8 grid grid-cols-12">
      <h2 class="col-span-2 border-r pl-4 flex items-center">
        projects
      </h2>
    </div>
    <aside class="border-r col-span-2 p-4">
      <ul class="flex flex-col gap-4">
        <li class="flex gap-2 items-center">
          <input id="radio-vue" class="mr-2" type="radio" name="framework" value="vue">
          <label for="radio-vue"><i class="i-ri-vuejs-line" /> vue</label>
        </li>
        <li class="flex gap-2 items-center">
          <input id="radio-react" class="mr-2" type="radio" name="framework" value="react">
          <label for="radio-react"><i class="i-ri-reactjs-line" /> react</label>
        </li>
        <li class="flex gap-2 items-center">
          <input id="radio-nuxt" class="mr-2" type="radio" name="framework" value="nuxt">
          <label for="radio-nuxt"><INuxt /> nuxt</label>
        </li>
        <li class="flex gap-2 items-center">
          <input id="radio-next" class="mr-2" type="radio" name="framework" value="next">
          <label for="radio-next"><INextjs /> next</label>
        </li>
        <li class="flex gap-2 items-center">
          <input id="radio-vanilla" class="mr-2" type="radio" name="framework" value="vanilla">
          <label for="radio-vanilla"><IJavascript /> vanilla js</label>
        </li>
        <li class="flex gap-2 items-center">
          <input id="radio-ionic" class="mr-2" type="radio" name="framework" value="ionic">
          <label for="radio-ionic"><IIonic /> ionic</label>
        </li>
      </ul>
    </aside>
    <section class="grid grid-cols-3 grid-rows-2 gap-6 justify-center col-span-10 p12">
      <!-- <ProjectCard v-for="i in 6" :key="i" /> -->
    </section>
  </main>
</template>

<style scoped>
input{
  accent-color: #01080E;
  cursor: pointer;
}

input[type="radio"]:checked + label{
  color: white;
}

label {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
