<script setup lang="ts">
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/solid'
import { ref, computed } from 'vue'
import { flashNews } from '../mocks/news'
import Stack from './Stack.vue'

interface FlashNews {
  id: number
  rotate: number
  image: string
  text: string
  date: string
}

// Slider
const isBackDirection = ref<boolean>(false)
const currentSlideIndex = ref<number>(0)
const currentSlide = computed(() => flashNews[currentSlideIndex.value])
const isLastSlide = computed(
  () => currentSlideIndex.value >= flashNews.length - 1
)

const nextSlide = () => {
  if (isLastSlide.value) {
    return
  }
  isBackDirection.value = false
  toggleLoading()
  currentSlideIndex.value++
}

const prevSlide = () => {
  if (currentSlideIndex.value === 0) {
    return
  }
  isBackDirection.value = true
  toggleLoading()
  currentSlideIndex.value--
}

// Animations
const loading = ref<boolean>(false)

const toggleLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 300)
}
</script>

<template>
  <stack>
    <transition :name="!isBackDirection ? 'slide-fade' : 'slide-fade-reverse' ">
    <div v-show="!loading" class="w-full bg-white rounded-2xl p-6 drop-shadow-md rotate-3" >
      <div class="news-top">
        <img
          :src="currentSlide.image"
          class="rounded-2xl"
          alt="flash news poster"
        />
        <h2 class="text-oranje mt-2 font-bold text-m">🔥Hot News</h2>
        <p class="mt-2 font-bold">{{ currentSlide.text }}</p>
      </div>

      <div class="news-footer mt-4 flex">
        <p class="text-gray-400 w-full">
          {{ currentSlide.date }}
        </p>
        <p class="text-gray-900 flex">
          <ArrowLeftIcon
            v-if="currentSlideIndex > 0"
            class="w-6 mr-2"
            @click="prevSlide"
          />
          {{ currentSlideIndex + 1 }}/{{ flashNews.length }}
          <ArrowRightIcon
            v-if="!isLastSlide"
            class="w-6 ml-2"
            @click="nextSlide"
          />
          <div v-else class="w-6 ml-2"></div>
        </p>
      </div>
    </div>
  </transition> 
  </stack>

</template>

<style>
.slide-fade-enter-active,
.slide-fade-reverse-enter-active,
.slide-fade-reverse-leave-active,
.slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter {
  transform: translateX(100px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}


/* Back Scrolling */
.slide-fade-reverse-enter {
  transform: translateX(-100px);
  opacity: 0;
}
.slide-fade-reverse-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
