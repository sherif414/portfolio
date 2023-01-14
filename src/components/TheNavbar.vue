<script setup lang="ts">
let isOpen = $ref(false)
const router = useRouter()
async function navigateTo(route: string) {
  await router.push(route)
  setTimeout(() => {
    isOpen = false
  }, 100)
}
</script>

<template>
  <!-- desktop navbar -->
  <header class="border-b grid grid-cols-12 text-3 2xl:text-4 lt-lg:hidden!">
    <div class="lg:col-span-2 border-r h-full items-center pl-4 grid">
      _Shareef-Hassan
    </div>
    <router-link class="border-r nav-link" to="/">
      _index
    </router-link>
    <router-link class="border-r nav-link" to="/about">
      _about-me
    </router-link>
    <router-link class="border-r nav-link" to="/projects">
      _projects
    </router-link>
    <router-link class="border-r nav-link" to="/contact">
      _contact-me
    </router-link>
  </header>

  <!-- mobile navbar -->
  <header class="lg:hidden! flex justify-between p-4 items-center self-center border-b">
    <h2>
      shareef-hassan
    </h2>
    <div class="i-ri-menu-line" @click="isOpen = true" />
  </header>

  <div v-if="isOpen" class="lg:hidden! flex flex-col fixed z-10 w-screen h-screen left-0 top-0 bg-primary-3 text-secondary-4 divide-y">
    <h1 class="flex p4 items-center gap-4 text-secondary-1">
      shareef-hassan
      <i class="i-ri-close-line ml-auto" @click="isOpen = false" />
    </h1>
    <div class="p-4" @click="navigateTo('/')">
      _index
    </div>
    <div class="p-4" @click="navigateTo('/about')">
      _about-me
    </div>
    <div class="p-4" @click="navigateTo('/projects')">
      _projects
    </div>
    <div class="p-4 border-b!" @click="navigateTo('/contact')">
      _contact-me
    </div>
  </div>
</template>
