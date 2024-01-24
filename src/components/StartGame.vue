<template>
  <div class="main">
    <div class="title padding-1">Pikachu</div>
    <div class="select-item-title padding-1">Select mode to start game</div>
    <div class="item-choose padding-2">
      <div class="item" @click="OnClickPage(16)">4x4 <span>Easy</span></div>
      <div class="item" @click="OnClickPage(36)">6x6 <span>Normal</span></div>
      <div class="item" @click="OnClickPage(64)">8x8 <span>Hard</span></div>
      <div class="item" @click="OnClickPage(100)">10x10 <span>Super Hard</span></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    OnClickPage(val) {
      this.$emit("click-page", val);
      this.$router.push("/maingame");
    },
  },
};
</script>

<style scope>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.title {
  font-size: 40px;
}
.item-choose {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 120px;
  border-radius: 8px;
  background-color: var(--dark);
  color: var(--light);
  margin: 10px;
  cursor: pointer;
  flex-direction: column;
}
</style>
