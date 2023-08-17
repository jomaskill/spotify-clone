<script setup lang="ts">
import LibraryIcon from '~/components/icons/LibraryIcon.vue'
import PlusIcon from '~/components/icons/PlusIcon.vue'
import RightArrowIcon from '~/components/icons/RightArrowIcon.vue'
</script>

<template>
  <div class="h-full bg-background-800 rounded-lg">
    <div>
      <header class="flex flex-col gap-2 py-4 px-6">
        <div class="flex items-center flex-row gap-5">
          <div class="flex items-center gap-8 min-w-0 margin-inline-auto">
            <button class="inline-flex gap-4" aria-expanded="false">
              <span>
                <LibraryIcon />
              </span>
              Your Library
            </button>
          </div>
          <button
            class=""
            aria-expanded="false"
          >
            <span aria-hidden="true"><PlusIcon /></span>
          </button>
          <button
            class=""
            aria-expanded="false"
          >
            <span aria-hidden="true">
              <RightArrowIcon />
            </span>
          </button>
        </div>
      </header>
    </div>
  </div>
</template>
