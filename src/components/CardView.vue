<template>
  <div class="card" :class="{ isflipped: isFlipped }" @click="onToggleFlipCard()">
    <div class="card-face card__face--font p-2 bg-slate-700">
      <div class="card--content">
        <div :style="{ backgroundImage: `url(@/assets/images/1.png)` }"></div>
        <!-- <img src="@/assets/images/1.png" alt="" /> -->
      </div>
    </div>
    <div class="card-back card__face--back p-2 bg-slate-700">
      <div class="card--content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      // required: true,
    },
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<style scoped>
.card {
  display: inline-block;
  width: 100px;
  height: 120px;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  margin: 0 12px;
}
.card.isflipped {
  transform: rotateY(-180deg);
}
.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  width: 100px;
  height: 120px;
  background-color: var(--light);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: var(--dark);
  text-align: center;
}
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  width: 100px;
  height: 120px;
  background-color: var(--dark);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: var(--light);
  text-align: center;
}

.card-face {
  transform: rotateY(-180deg);
  /* background: url("./../assets/images/10.png") no-repeat center center; */
  background-size: 80px 80px;
  background-repeat: no-repeat;
}

.card-back {
  transform: rotateY(0deg);
  background: url("./../assets/images/icon_back.png") no-repeat center center;
  background-color: var(--dark);
  background-size: 40px 40px;
  width: 100%;
  height: 100%;
}
</style>
