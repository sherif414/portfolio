<script lang="ts" setup>
const store = useGlobalState()
</script>

<template>
  <div v-if="store.currSheet === 'personal'" class="w-full grid justify-items-center pt-6">
    <p class="lg:w-60ch ">
      Hi ! I'm shareef

      a 23 y.o collage student born and raised in sudan

      I mostly do frontend using tools like vue ,tailwindcss

      and some backend with django as a side kick .

      I'm open to freelancing and job offers so don't shy on

      hitting me up with an email.

      what I love the most about coding is how it helps me

      bring to life all the random crazy/silly ideas I get

      into creating all sort of projects that satisfies my urge

      as a creator.

      aside from coding I play lots of games specially real-time

      strategy titles like age of empires and civilizatons.
    </p>
  </div>
  <div v-if="store.currSheet === 'skills'" class="w-full grid justify-items-center pt-6">
    <p class="lg:w-60ch">
      although I do like to focus on one thing and hone my

      skills on it, knowing its ins and outs, I do experiment

      with new tools and libraries every now and then, picking

      them up along the way so I can keep myself updated and

      further expand my knowledge.

      I'm most confident in my vue and css skills and they are

      the things I'm focusing on right now

      django is my little side-kick project and my entrance

      to backend development.
    </p>
  </div>

  <div v-if="store.currSheet === 'formal'" class="w-full grid justify-items-center pt-6">
    <p class="lg:w-60ch ">
      there isn't really much to say about my education journey

      it was some what ordinary, i maintained good grades

      through mid school graduating with a score of 266/280

      highschool was a bit rough at first but I managed to keep

      up and graduated with a 87.3% and here I'm a collage

      student studying software engineering at sudan university.

      but if I'm to be honest formal education wasn't really

      my thing and I prefered self-learning through youtube,

      books or the people I met through out my life.
    </p>
  </div>
  <div v-if="store.currSheet === 'non-formal'" class="w-full grid justify-items-center pt-6">
    <p class="lg:w-60ch ">
      youtube is my go to place when ever i'm learning

      something new, channels like programming with mosh taught

      me alot and i'm forever grateful to them

      another option is the offical docs of the tool i'm trying

      to learn which sometimes can be a life saver.

      generally speaking, any source of information would be

      ok, whats more important is the desire to learn

      and some good time management skills then anyone can

      learn anything.
    </p>
  </div>
  <div v-if="store.currSheet === 'gaming'" class="w-full grid justify-items-center pt-6">
    <p class="lg:w-60ch ">
      one word. "league of legends" - actually those are 3

      but you don't need to know math to become a programmer -

      its definatly the game i loved and hated the most & i

      spent most of my free time playing it and when ever i

      felt stressed out by life it was my escape, then i'd

      realize it was a dump idea cuz it made me even more

      stressed but hey it was "fun".

      nerf fiora plz
    </p>
  </div>
  <div v-if="store.currSheet === 'manga'" class="w-full grid justify-items-center pt-6">
    <p class="lg:w-60ch ">
      i like manga blah blah blah..

      since I can post what ever BS I want on this

      website, ama just slide some manga recommendations here

      > grand blue - THE most hilarious shit I've ever read.

      > good night punpun - this gave some serious goosebumps.

      > tower of god - CHARACTER DEVELOPMENT don't sleep on

      this gem.
    </p>
  </div>
</template>
