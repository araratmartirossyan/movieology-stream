<script lang="ts" setup>
import { ref } from 'vue'
import TimeControl from './TimeControl.vue'

const videoDuration = ref<number>(0)
const videoCurrentTime = ref<number>(0)
const video = ref()
const player = ref()

const setVideoData = () => {
  if (video.value.readyState) {
    videoDuration.value = video.value.duration
  }
}

const progress = () => {
  videoCurrentTime.value = video.value.currentTime
}

const onTimeChange = (value: number) => {
  video.value.currentTime = value
  progress()
}
</script>

<template>
  <div class="player" ref="player">
    <video
      class="video-screen"
      src="../../assets/video.mp4"
      controls
      preload="auto"
      ref="video"
      allowfullscreen
      type="video/mp4"
      @loadedmetadata="setVideoData"
      @progress="progress"
      @timeupdate="progress"
    />
    <time-control
      :video-duration="videoDuration"
      :current-video-position="videoCurrentTime"
      :is-active="true"
      @on-time-change="onTimeChange"
    />
    <volume-control />
  </div>
</template>

<style>
.player {
  @apply w-full rounded-lg aspect-video relative object-cover cursor-pointer;
}

.video-screen {
  @apply aspect-video shadow-sm block w-full h-full cursor-pointer bg-movie-black-200;
}

::-webkit-media-controls {
  display: none;
}
</style>
