<script setup lang="ts">
</script>

<template>
  <div class="grid grid-rows-[2.5rem_1fr_2.25rem] min-h-screen">
    <TheNavbar />

    <router-view v-slot="{ Component }">
      <Transition
        mode="out-in"
        enter-active-class="lg:transition"
        leave-active-class="lg:transition"
        enter-from-class="lg:opacity-0"
        leave-to-class="lg:opacity-0"
      >
        <component :is="Component" />
      </Transition>
    </router-view>

    <TheFooter />
  </div>
</template>
