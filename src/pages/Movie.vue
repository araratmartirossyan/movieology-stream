<script lang="ts" setup>
import Page from '../components/layout/Page.vue'
import VideoPlayer from '../components/Player/VideoPlayer.vue'
</script>

<template>
  <page>
    <template #title> Movie </template>

    <video-player />
  </page>
</template>
