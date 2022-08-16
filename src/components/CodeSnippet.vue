<script setup lang="ts">
import { ref } from 'vue'

const rickyrolled = ref(false)
</script>

<template>
  <div v-if="!rickyrolled" class="my-8 w-full">
    <div class="flex justify-between">
      <div class="flex">
        <img src="../assets/kachan.jpg" class="rounded-[50%] w-8 h-8" alt="profile pic">
        <div class="text-xs ml-2">
          <div class="text-secondary-3">
            @sherif414
          </div>
          <div>Created 5 months ago</div>
        </div>
      </div>
    </div>
    <div class="bg-primary-3 mt-4 text-sm border rounded-lg p-4">
      <i class="text-accent-1">function</i> <i class="text-secondary-3">startOperation</i> (<i
        class="text-accent-2"
      >codeName</i>: string, <i class="text-accent-2">target</i>:
      targetOptions): void {
      <br>
      <i class="text-accent-1 ml-4">try </i>{
      <br>
      <i class="text-secondary-3 ml-8">releaseDaNukes</i>(loaction = <i class="text-accent-2">target</i>)
      <br>
      <span class="ml-4">}</span>
      <br>
      <i class="text-accent-1 ml-4">catch</i>(e) {
      <br>
      <i class="ml-8 text-accent-1">throw</i> `operation <i class="text-secondary-2">${codeName}</i>
      unsuccessful !`
      <br>
      <span class="ml-4">}</span>
      <br>
      }
      <br>
      <i class="text-secondary-3">startOperation</i>(<i class="text-secondary-2">"kill Da hoes"</i>,
      <i class="text-secondary-2">"kizan"</i>)
    </div>
    <div class="flex justify-end mt-2">
      <button class="bg-secondary-3 py-1 px-4 rounded-lg text-secondary-4" @click="rickyrolled = true">
        run
      </button>
    </div>
  </div>
  <div v-if="rickyrolled">
    <div class="grid place-items-center">
      <img class="mt-12" src="../assets/rickyroll.gif" alt="">
    </div>
  </div>
</template>
