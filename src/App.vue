<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import CoppyRight from "./components/CoppyRight.vue";
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full h-full">
    <div class="center bg-slate-300">
      <RouterView />
      <CoppyRight />
    </div>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
}
</style>
