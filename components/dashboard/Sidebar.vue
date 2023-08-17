<script setup lang="ts">
import NavBar from '~/components/dashboard/NavBar.vue'
import YourLibrary from '~/components/dashboard/YourLibrary.vue'
</script>

<template>
  <nav class="w-full h-full max-w-[420px] flex flex-col gap-2 text-text-250">
    <NavBar />
    <YourLibrary />
  </nav>
</template>
