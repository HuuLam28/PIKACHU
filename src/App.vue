<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import CoppyRight from "./components/CoppyRight.vue";
</script>

<template>
  <div class="center">
    <RouterView />
    <CoppyRight />
  </div>
</template>

<style scoped>
.center {
  margin: 20% 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
