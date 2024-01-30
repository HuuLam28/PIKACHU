<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import CoppyRight from "./components/CoppyRight.vue";
</script>

<template>
  <div class="center bg-slate-300">
    <RouterView />
    <CoppyRight />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
}
</style>
