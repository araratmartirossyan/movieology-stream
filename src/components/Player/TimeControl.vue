<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  isActive: boolean
  videoDuration: number
  currentVideoPosition: number
}>()
const timeBar = ref<number>(0)

const emits = defineEmits<{ 'on-time-change': [value: number] }>()

const updateTimeBar = (event: Event) => {
  const currentTarget = event.target as HTMLInputElement
  timeBar.value = +currentTarget.value
  emits('on-time-change', timeBar.value)
}

const calculateTime = (duration: number) => {
  const seconds = Math.floor(duration % 60)
  const minutes = Math.floor(duration / 60)
  const computedSeconds = seconds >= 10 ? seconds : `0${seconds}`

  return `${minutes}:${computedSeconds}`
}

const currentTime = computed(() => calculateTime(props.currentVideoPosition))
const timeTotal = computed(() => calculateTime(props.videoDuration))

const range = computed(() => {
  const percent = (
    (props.currentVideoPosition / props.videoDuration) *
    100
  ).toFixed(2)

  return `${percent}% 100%`
})
</script>

<template>
  <div
    class="controls"
    v-bind="$attrs"
    :class="{
      active: isActive
    }"
  >
    <time class="text-white mr-4">{{ currentTime }}</time>

    <input
      type="range"
      class="time-track"
      :min="0"
      step="1"
      :max="videoDuration"
      :value="currentVideoPosition"
      @change="updateTimeBar"
    />

    <time class="text-white ml-4">{{ timeTotal }}</time>
  </div>
</template>

<style>
.time-track {
  @apply outline-none rounded-lg self-center opacity-70 cursor-pointer h-[8px] w-full;
  background-image: linear-gradient(#f37515, #f37515);
  background-repeat: no-repeat;
  background-size: v-bind(range);
  -webkit-appearance: none;
}

.time-track::-webkit-slider-thumb {
  @apply h-[18px] w-[18px] self-center bg-oranje rounded-lg cursor-pointer outline-none;
  -webkit-appearance: none;
}

.time-track::-moz-range-thumb {
  @apply h-[18px] w-[18px] self-center bg-oranje rounded-lg cursor-pointer outline-none;
  -webkit-appearance: none;
}

.controls {
  @apply px-8 w-full flex opacity-0 invisible m-0;
  transition: 0.5s;
  transition-property: opacity, visibility;
  transform: translateY(-55px);
}

.controls.active {
  @apply opacity-100 visible;
}

.controls * {
  opacity: 0.7;
  transition: opacity 0.3s;
}

@media (hover: hover) {
  .controls *:hover {
    opacity: 0.7;
  }
}
</style>
