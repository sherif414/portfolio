<template>
  <Transition name="drop">
    <slot></slot>
  </Transition>
</template>

<style>
.drop-enter-active,
.drop-leave-active {
  transition: all 0.5s;
  overflow: hidden;
}

.drop-enter-from,
.drop-leave-to {
  height: 0;
}

.drop-enter-to,
.drop-leave-from {
  height: 2.2rem;
}
</style>
