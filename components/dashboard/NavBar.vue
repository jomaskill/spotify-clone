<script setup lang="ts">
import HomeIcon from '~/components/icons/HomeIcon.vue'
import SearchIcon from '~/components/icons/SearchIcon.vue'
</script>

<template>
  <div class="h-[135px] bg-background-800 rounded-lg">
    <ul class="py-2 px-3">
      <li class="py-1 px-3">
        <a
          draggable="false"
          aria-label="Início"
          aria-current="page"
          class="link-subtle"
          href="/intl-pt"
          aria-expanded="false"
        >
          <HomeIcon />
          <span>Home</span>
        </a>
      </li>
      <li class="py-1 px-3">
        <a
          draggable="false"
          aria-label="Buscar"
          class="link-subtle"
          href="/search"
          aria-expanded="false"
        >
          <SearchIcon />
          <span>Search</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
ol,
ul {
  list-style: none;
}

.link-subtle {
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 20px;
  height: 40px;

  &:hover {
    color: #fff;
  }
}
</style>
