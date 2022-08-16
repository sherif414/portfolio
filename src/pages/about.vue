<script setup lang="ts">
import { useGlobalState } from '~/composables/store'

const store = useGlobalState()
</script>

<template>
  <div class="h-full">
    <!-- mobile view -->

    <main class="lg:hidden py-4">
      <DropDown />
      <h1 class="text-secondary-1 p-4">
        // {{ store.currSheet }}
      </h1>
      <div class="px-4">
        <SheetsMobile />
      </div>
    </main>

    <!-- desktop view -->

    <main class="grid lg:grid-cols-12 text-[.875rem] 2xl:text-[1.125rem] h-full lt-lg:hidden">
      <div class=" col-span-2 border-r grid grid-cols-[2.5rem_1fr]">
        <div class="border-r flex flex-col items-center pt-6 gap-4">
          <i class="i-ri-terminal-box-line" :class="[{ 'text-accent-1': store.openFolders.bio }]" /><i
            class="i-ri-book-mark-line" :class="[{ 'text-accent-2': store.openFolders.education }]"
          /><i
            class="i-ri-gamepad-line" :class="[{ 'text-accent-4': store.openFolders.interests }]"
          />
        </div>
        <DropDown />
      </div>
      <div class="col-span-5 border-r grid grid-cols-[1fr_1rem]">
        <div class="border-r">
          <Sheets />
        </div>
        <div class="p-1">
          <div class="w-full h-1 bg-secondary-1" />
        </div>
      </div>
      <div class="col-span-5 grid grid-cols-[1fr_1rem]">
        <div class="border-r px-8 py-4">
          <div class="">
            // code snippet showcase
          </div>
          <CodeSnippet />
        </div>
        <div class="p-1">
          <div class="w-full h-1 bg-secondary-1" />
        </div>
      </div>
    </main>
  </div>
</template>
