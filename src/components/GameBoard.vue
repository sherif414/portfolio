<script setup lang="ts">
const state = useGlobalState()
</script>

<template>
  <div class="game-board">
    <Game />
    <div class="pl-2">
      <div class="text-secondary-4 text-sm grid items-center p-2 bg-[rgba(1,20,35,0.19)] mb-4">
        <div class="mb-2">
          //use keyboard <br>
          //arrows to play
        </div>

        <!-- arrow icons -->

        <div class="flex justify-center">
          <svg width="51" height="30" viewBox="0 0 51 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.46094" y="1.46356" width="48.0787" height="27.6912" rx="7.5" fill="#010C15" stroke="#1E2D3D" />
            <path d="M25.5 12.3091L29.75 18.3091H21.25L25.5 12.3091Z" fill="white" />
          </svg>
        </div>
        <div class="flex items-center justify-center">
          <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="49.0786" y="28.6547" width="48.0787" height="27.6912" rx="7.5" transform="rotate(-180 49.0786 28.6547)" fill="#010C15" stroke="#1E2D3D" />
            <path d="M22.0391 14.8091L28.0391 10.5591L28.0391 19.0592L22.0391 14.8091Z" fill="white" />
          </svg>

          <svg width="51" height="30" viewBox="0 0 51 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="49.5391" y="28.6547" width="48.0787" height="27.6912" rx="7.5" transform="rotate(-180 49.5391 28.6547)" fill="#010C15" stroke="#1E2D3D" />
            <path d="M25.5 17.8091L21.25 11.8091L29.75 11.8091L25.5 17.8091Z" fill="white" />
          </svg>

          <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="49" y="28.6547" width="48.0787" height="27.6912" rx="7.5" transform="rotate(-180 49 28.6547)" fill="#010C15" stroke="#1E2D3D" />
            <path d="M27.9604 14.8091L21.9604 19.0592L21.9604 10.5591L27.9604 14.8091Z" fill="white" />
          </svg>
        </div>
      </div>

      <!-- score section -->

      <div class="text-secondary-4">
        //highest score : <span class="text-4">{{ state.score }}</span>
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
