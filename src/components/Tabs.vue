<script lang="ts" setup>
import { Tab } from '../types'

defineProps<{
  tabs: Tab[]
  activeTab: string
}>()

const emits = defineEmits<{
  'on-tab-change': [tab: string]
}>()
</script>

<template>
  <div>
    <nav class="flex space-x-4">
      <a
        class="text-lg rounded-2xl px-5 py-2 text-white drop-shadow-sm hover:bg-oranje cursor-pointer"
        :class="id === activeTab ? 'bg-oranje' : 'bg-movie-black-200'"
        v-for="{ id, emoji, title } in tabs"
        @click="emits('on-tab-change', id)"
        :key="id"
      >
        {{ emoji }}
        {{ title }}
      </a>
    </nav>
  </div>
</template>
