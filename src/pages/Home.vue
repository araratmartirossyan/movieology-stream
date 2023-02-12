<script lang="ts" setup>
import { ref } from 'vue'
import Page from '../components/layout/Page.vue'
import Tabs from '../components/Tabs.vue'
import MainBanner from '../components/MainBanner.vue'
import ContentRow from '../components/ContentRow.vue'
import FlashNews from '../components/FlashNews.vue'
import MovieFeed from '../components/MovieFeed.vue'
import { tabsMock } from '../mocks/tabs'

const activeTab = ref<string>(tabsMock[0].id)
const onTabChange = (tabId: string) => {
  activeTab.value = tabId
}
</script>

<template>
  <page paddingless>
    <template #title> Movie </template>
    <div class="mx-4">
      <tabs
        :tabs="tabsMock"
        :active-tab="activeTab"
        @on-tab-change="onTabChange"
      />
      <content-row>
        <main-banner />
        <div class="ml-10 max-w-md w-full">
          <flash-news />
        </div>
      </content-row>
    </div>
    <content-row class="flex-col">
      <h1 class="mx-4 text-2xl text-white font-bold">Special for you</h1>
      <movie-feed />
    </content-row>
  </page>
</template>
