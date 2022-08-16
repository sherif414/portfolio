<template>
  <button
    v-if="!playing"
    class="bg-lines absolute text-secondary-4 px-2 py-1 rounded-lg bottom-12 left-[20%]"
    @click="runGame"
  >
    start
  </button>
  <div ref="game" id="game" class="bg-[#011627] rounded-lg"></div>
</template>

<script setup lang="ts">
  import Snake from "../game/Snake";
  import Food from "../game/Food";
  import { ref } from "vue";
  import { useStore } from "../store/mainStore";

  const store = useStore();
  const playing = ref(false);
  const GAME_SPEED = 5;
  const snakeExpansionRate = 5;
  const GRID = { GRID_ROWS: 37, GRID_COLS: 22 };
  let inputDirection: Point = { x: 0, y: 0 };
  let lastInputDirection: Point = { x: 0, y: 0 };
  let lastRenderTime = 0;
  const game = ref<HTMLElement>();
  let snake: Snake;
  let food: Food;

  function updateInputDirection(): void {
    lastInputDirection = inputDirection;
  }

  //main function

  const paint = (currTime: number) => {
    if (snake.checkDeath()) {
      playing.value = false;
      let food = null;
      let snake = null;
      store.score = 0;
      if (game.value) game.value.innerHTML = "";
      return;
    }
    requestAnimationFrame(paint);
    const timeSinceLastRender = (currTime - lastRenderTime) / 1000;
    if (timeSinceLastRender < 1 / GAME_SPEED) return;
    lastRenderTime = currTime;

    updateInputDirection();
    if (game.value === undefined) return;
    if (snake.consumedFood(food.position)) {
      store.score++;
      game.value.innerHTML = "";
      snake.update(snakeExpansionRate, lastInputDirection);
      snake.draw(game.value);
      food.draw(game.value, true, snake.body);
    } else {
      game.value.innerHTML = "";
      snake.update(0, lastInputDirection);
      snake.draw(game.value);
      food.draw(game.value, false, snake.body);
    }
  };

  //end of main
  const runGame = () => {
    snake = new Snake(GRID);
    food = new Food(GRID);
    inputDirection = { x: 0, y: 0 };
    requestAnimationFrame(paint);
    playing.value = true;

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (lastInputDirection.y !== 0) break;
          inputDirection = { x: 0, y: -1 };
          break;
        case "ArrowDown":
          if (lastInputDirection.y !== 0) break;
          inputDirection = { x: 0, y: 1 };
          break;
        case "ArrowLeft":
          if (lastInputDirection.x !== 0) break;
          inputDirection = { x: -1, y: 0 };
          break;
        case "ArrowRight":
          if (lastInputDirection.x !== 0) break;
          inputDirection = { x: 1, y: 0 };
          break;
      }
    });
  };

  type Point = {
    x: number;
    y: number;
  };
</script>

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
</style>
