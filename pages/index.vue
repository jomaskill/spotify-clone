<script setup lang="ts">
import Sidebar from '~/components/dashboard/Sidebar.vue'
</script>

<template>
  <div class="p-2 h-screen flex flex-col bg-black">
    <div class="h-full flex gap-2">
      <sidebar />
      <div class="bg-background-800 rounded-lg w-full">
        <div>main content</div>
      </div>
    </div>
    <div class="h-[80px] bg-background-800 rounded-lg mt-2">Player</div>
  </div>
</template>
