<script setup lang="ts">
const state = useGlobalState()
</script>

<template>
  <div ref="el" class="game-board">
    <div class="pl-2">
      <div class="text-secondary-4 text-sm grid items-center p-2 bg-[rgba(1,20,35,0.19)] mb-4">
        <div class="mb-2">
          //use keyboard <br>
          //arrows to play
        </div>
        <div class="flex justify-center">
          <i class="i ri:arrow-down-s-fill bg-[#010C15] rotate-180 transform py-[5px] px-4 rounded-lg" />
        </div>
        <div class="flex items-center justify-center">
          <i class="i ri:arrow-down-s-fill bg-[#010C15] rotate-90 transform py-4 px-2 rounded-lg" />
          <i class="i ri:arrow-down-s-fill bg-[#010C15] mx-4 rotate-180 transform py-[5px] px-4 rounded-lg" />
          <i class="i ri:arrow-down-s-fill bg-[#010C15] rotate-270 transform py-4 px-2 rounded-lg" />
        </div>
      </div>
      <div class="text-secondary-4">
        //score : {{ state.score }}
      </div>
    </div>
  </div>
  <div class="grid fixed overflow-hidden w-50vw h-100vh">
    <svg viewBox="0 0 1114 1030" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.4" filter="url(#filter0_f_64_1234)">
        <path
          d="M723.946 855.519L510.032 804.132L420.663 739.469L447.226 568.957L622.649 549.391L621.041 427.647L823.309 373.392L953.602 404.691L871.165 670.797L743.892 703.987L723.946 855.519Z"
          fill="#4D5BCE"
        />
      </g>
      <g opacity="0.4" filter="url(#filter1_f_64_1234)">
        <path
          d="M673.469 258.482L689.984 477.861L655.759 582.726L485.295 609.598L413.003 448.57L297.588 487.343L184.059 311.368L174 177.746L452.567 174.828L523.099 285.846L673.469 258.482Z"
          fill="#43D9AD"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_64_1234"
          x="246.664"
          y="199.392"
          width="880.938"
          height="830.128"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_64_1234" />
        </filter>
        <filter
          id="filter1_f_64_1234"
          x="0"
          y="0.827728"
          width="863.983"
          height="782.77"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_64_1234" />
        </filter>
      </defs>
    </svg>
  </div>
</template>
