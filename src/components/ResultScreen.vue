<template>
  <div>
    <p class="italic text-orange-700">End Game!</p>
    <router-link to="/" class="rounded bg-orange-400 p-1">Home</router-link>
  </div>
</template>

<script>
export default {
  created() {
    console.log("this", this.$route.query);
  },
};
</script>

<style scoped>
/* CSS của bạn nếu cần */
</style>
