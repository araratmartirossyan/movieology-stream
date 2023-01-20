<script lang="ts" setup>
import { ref } from 'vue'
import Page from '../components/layout/Page.vue'
import Tabs from '../components/Tabs.vue'
import MainBanner from '../components/MainBanner.vue'
import FlashNews from '../components/FlashNews.vue'
import ContentRow from '../components/ContentRow.vue'
import { tabsMock } from '../mocks/tabs'

const activeTab = ref<string>(tabsMock[0].id)
const onTabChange = (tabId: string) => {
  activeTab.value = tabId
}
</script>

<template>
  <page>
    <template #title> Movie </template>
    <div>
      <tabs
        :tabs="tabsMock"
        :active-tab="activeTab"
        @on-tab-change="onTabChange"
      />
    </div>
    <content-row>
      <main-banner />
      <flash-news />
    </content-row>
  </page>
</template>
