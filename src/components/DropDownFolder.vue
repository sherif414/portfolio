<script setup lang="ts">
import TransitionDrop from '../components/transitions/TransitionDrop.vue'
import { useGlobalState } from '~/composables/store'

const props = defineProps<{
  title: 'bio' | 'education' | 'interests'
  color?: string
}>()
const store = $(useGlobalState())
const isOpen = $computed(() => store.openFolders[props.title])
const handleClick = () => {
  store.openFolders[props.title] = !isOpen
}
</script>

<template>
  <div>
    <div class="flex items-center highlight gap-2 mb-2" @click="handleClick">
      <i :class="{ 'rotate-90': isOpen }" class="i-ri-arrow-right-s-line duration-300" />
      <i class="i-ri-folder-fill" :class="color" /> {{ title }}
    </div>
    <TransitionDrop>
      <div v-show="isOpen">
        <slot />
      </div>
    </TransitionDrop>
  </div>
</template>
