<script setup lang="ts">
import Sidebar from "./components/layout/Sidebar.vue";
</script>

<template>
  <div class="flex h-screen flex-col">
    <div class="flex flex-1 overflow-hidden">
      <sidebar />
      <main class="min-w-0 lg:flex flex-1">
        <router-view />
      </main>
    </div>
  </div>
</template>
