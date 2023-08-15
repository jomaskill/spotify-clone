<script setup lang="ts">

import NavBar from "~/components/dashboard/NavBar.vue";
import YourLibrary from "~/components/dashboard/YourLibrary.vue";
</script>

<template>
  <div class="w-full h-full max-w-[420px] flex flex-col gap-2">
    <NavBar/>
    <YourLibrary/>
  </div>
</template>