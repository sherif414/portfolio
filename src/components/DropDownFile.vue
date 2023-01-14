<script setup lang="ts">
import { useGlobalState } from '~/composables/store'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
const state = $(useGlobalState())
const classes = $computed(() => ({ 'text-secondary-4': state.currSheet === props.title }))
</script>

<template>
  <div class="highlight ml-8 flex" :class="[classes]" @click="state.currSheet = props.title">
    <i class="i-ri-file-user-fill mr-2" />{{ title }}
  </div>
</template>
