<script setup lang="ts">
import Food from '~/composables/food'
import Snake from '~/composables/snake'

let isDead = $ref(false)
let playing = $ref(false)
const store = $(useGlobalState())
const GAME_SPEED = 5
const snakeExpansionRate = 5
const GRID = { GRID_ROWS: 37, GRID_COLS: 22 }
let inputDirection: Point = { x: 0, y: 0 }
let lastInputDirection: Point = { x: 0, y: 0 }
let lastRenderTime = 0
const game = ref<HTMLElement>()
let snake: Snake
let food: Food

const keyListener = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0)
        break
      inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0)
        break
      inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0)
        break
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastInputDirection.x !== 0)
        break
      inputDirection = { x: 1, y: 0 }
      break
  }
}

function updateInputDirection(): void {
  lastInputDirection = inputDirection
}

// main function

const paint = (currTime: number) => {
  // Death logic
  if (snake.checkDeath()) {
    window.removeEventListener('keydown', keyListener)
    playing = false
    isDead = true
    snake = new Snake(GRID)
    food = new Food(GRID)
    if (game.value)
      game.value.innerHTML = ''
    return
  }
  requestAnimationFrame(paint)
  const timeSinceLastRender = (currTime - lastRenderTime) / 1000
  if (timeSinceLastRender < 1 / GAME_SPEED)
    return
  lastRenderTime = currTime

  updateInputDirection()
  if (game.value === undefined)
    return
  if (snake.consumedFood(food.position)) {
    store.score++
    game.value.innerHTML = ''
    snake.update(snakeExpansionRate, lastInputDirection)
    snake.draw(game.value)
    food.draw(game.value, true, snake.body)
  }
  else {
    game.value.innerHTML = ''
    snake.update(0, lastInputDirection)
    snake.draw(game.value)
    food.draw(game.value, false, snake.body)
  }
}

// end of main
const runGame = () => {
  store.score = 0
  snake = new Snake(GRID)
  food = new Food(GRID)
  inputDirection = { x: 0, y: 0 }
  requestAnimationFrame(paint)
  playing = true
  isDead = false

  window.addEventListener('keydown', keyListener)
}

interface Point {
  x: number
  y: number
}

onUnmounted(() => {
  window.removeEventListener('keydown', keyListener)
})
</script>

<template>
  <h3 v-if="isDead" class="py-4 w-46.6% text-center game-over text-6 left-1rem absolute bottom-24">
    GAME OVER!
  </h3>
  <button
    v-if="!playing"
    class="bg-lines absolute text-secondary-4 px-2 py-1 rounded-lg bottom-12 left-[20%]"
    @click="runGame"
  >
    start
  </button>
  <div id="game" ref="game" class="bg-[#011627] rounded-lg" />
</template>

<style>
  #game {
    display: grid;
    grid-template-rows: repeat(37, 1fr);
    grid-template-columns: repeat(22, 1fr);
  }
  .food {
    background-color: #fea55f;
    border-radius: 50%;
  }
  .snake {
    background-color: #43d9ad;
  }
  .game-over{
    background: hsla(207, 95%, 5%, 0.84);
    color: #43D9AD;
    box-shadow: inset 1px 5px 11px rgba(2, 18, 27, 0.71);
  }
</style>
