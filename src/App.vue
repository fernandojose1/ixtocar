<template>
  <div
    class="dashboard"
    v-if="$route.path != '/' && $route.path != '/criar-conta'"
  >
    <Menu />
    <div class="content"><RouterView /></div>
  </div>
  <div v-else>
    <div class="content"><RouterView /></div>
  </div>
</template>

<script setup>
import Menu from "./components/Menu.vue";
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: var(--vt-c-gray-mute);
  height: 100vh;
  width: 100vw;
}

.content {
  flex: 1;
  background-color: var(--vt-c-gray-back);
}
</style>
