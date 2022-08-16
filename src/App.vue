<script setup lang="ts">
const menuOpen = $ref(false)
</script>

<template>
  <div class="grid grid-rows-[2.5rem_1fr_2.25rem] min-h-screen">
    <NavBar />
    <header class="lg:hidden flex justify-between p-4 items-center self-center border-b">
      <h2 class="">
        shareef-hassan
      </h2>
      <div :class="menuOpen ? 'i-ri-close-line' : 'i-ri-menu-line'" @click="menuOpen = !menuOpen" />
    </header>
    <div v-if="menuOpen" class="menu text-secondary-4">
      <router-link class="border-b border-t p-4" to="/" @click="menuOpen = false">
        _index
      </router-link>
      <router-link class="border-b p-4" to="/about" @click="menuOpen = false">
        _about-me
      </router-link>
      <router-link class="border-b p-4" to="/projects" @click="menuOpen = false">
        _projects
      </router-link>
      <router-link class="border-b p-4" to="/contact" @click="menuOpen = false">
        _contact-me
      </router-link>
    </div>
    <router-view v-slot="{ Component }">
      <Transition mode="out-in" name="fade">
        <component :is="Component" />
      </Transition>
    </router-view>

    <FooterBar />
  </div>
</template>
