<script setup lang="ts">
import { ArrowLongRightIcon } from '@heroicons/vue/24/solid'
import Stack from './Stack.vue'
import { flashNews } from './../mocks/news'

const activeSlide = flashNews[0]
</script>

<template>
  <stack>
    <div class="w-full absolute bg-white h-full rotate-3 rounded-2xl p-6">
      <div>
        <img class="rounded-2xl mb-2" :src="activeSlide.image" alt="" />
        <h2 class="font-bold text-oranje">🔥Hot News</h2>
        <p class="mt-2 font-bold">{{ activeSlide.text }}</p>
      </div>
      <div class="flex mt-6 justify-between">
        <p class="text-gray-600 font-bold">
          {{ activeSlide.date }}
        </p>
        <h3 class="flex w-30">
          1/{{ flashNews.length }}
          <ArrowLongRightIcon />
        </h3>
      </div>
    </div>
  </stack>
</template>

<style></style>
