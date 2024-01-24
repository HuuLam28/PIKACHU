<template>
  <div class="container padding-2">
    <div class="card" :class="{ isflipped: isFlipped }" @click="onToggleFlipCard()">
      <div class="card-face card__face--font">
        <div class="card--content"></div>
      </div>
      <div class="card-back card__face--back">
        <div class="card--content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
}
.card.isflipped {
  transform: rotateY(-180deg);
}
.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: visible;
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
  background-image: url("./../assets/images/10.png");
  background-repeat: no-repeat;
}

.card-back {
  background-color: var(--dark);
  transform: rotateY(0deg);
}
</style>
