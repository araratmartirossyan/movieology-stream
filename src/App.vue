<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <figure class="bg-blue-100 rounded-xl p-8 dark:bg-blue-800">
    <img
      class="w-24 h-24 rounded-f"
      src="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg"
      alt=""
      width="384"
      height="512"
    />
    <div class="pt-6 space-y-4">
      <blockquote>
        <p class="text-lg">
          “Tailwind CSS is the only framework that I've seen scale on large
          teams. It’s easy to customize, adapts to any design, and the build
          size is tiny.”
        </p>
      </blockquote>
      <figcaption>
        <div>Sarah Dayan</div>
        <div>Staff Engineer, Algolia</div>
      </figcaption>
    </div>
  </figure>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
