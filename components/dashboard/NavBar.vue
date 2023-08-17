<script setup lang="ts">
import HomeIcon from "~/components/icons/HomeIcon.vue";
import SearchIcon from "~/components/icons/SearchIcon.vue";
</script>

<template>
  <div class="h-[135px] bg-background-800 rounded-lg">
    <ul class="QuHe04rU4bj0Z5U9E2Tk">
      <li class="LU0q0itTx2613uiATSig InvalidDropTarget">
        <a
          draggable="false"
          aria-label="Início"
          aria-current="page"
          class="link-subtle UYeKN11KAw61rZoyjcgZ active"
          href="/intl-pt"
          aria-expanded="false"
        >
          <HomeIcon/>
          <span
            data-encore-id="type"
            class="Type__TypeElement-sc-goli3j-0 bkjCej"
            >Início</span
          >
        </a>
      </li>
      <li class="LU0q0itTx2613uiATSig InvalidDropTarget">
        <a
          draggable="false"
          aria-label="Buscar"
          class="link-subtle UYeKN11KAw61rZoyjcgZ"
          href="/search"
          aria-expanded="false"
        >
          <SearchIcon/>
          <span
            data-encore-id="type"
            class="Type__TypeElement-sc-goli3j-0 bkjCej"
            >Buscar</span
          >
        </a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
ol, ul {
  list-style: none;
}
.QuHe04rU4bj0Z5U9E2Tk {
  padding: 8px 12px;
}
.LU0q0itTx2613uiATSig {
  padding: 4px 12px;
}
.link-subtle {
  color: #b3b3b3;
  -webkit-transition-duration: .2s;
  transition-duration: .2s;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
.UYeKN11KAw61rZoyjcgZ {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 20px;
  height: 40px;
}
</style>