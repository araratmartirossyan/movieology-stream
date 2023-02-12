<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid'
interface MovieFeed {
  title: string
  poster: string
  year: string
  id: string
  rate: string
  link?: string
}
defineProps<MovieFeed>()
</script>
<template>
  <div class="mr-8">
    <img
      :src="poster"
      alt="movie poster"
      class="h-44 w-96 rounded-2xl drop-shadow-xl"
    />
    <div class="flex mt-4 justify-between">
      <h2 class="text-white text-xl">{{ title }}</h2>
      <div class="w-30 flex items-center">
        <h3 class="text-gray-600">{{ year }}</h3>
        <h3 class="text-gray-600 flex w-full ml-4">
          <StarIcon class="text-oranje w-4 mr-1" />
          {{ rate }}
        </h3>
      </div>
    </div>
  </div>
</template>

<style></style>
