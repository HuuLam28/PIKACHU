<template>
  <div
    class="card"
    :class="{ isflipped: isFlipped, disabled: onDisableClick }"
    @click="onToggleFlipCard()"
  >
    <div
      class="card-face card__face--font p-2 bg-slate-700 flex justify-center items-center"
    >
      <div class="card--content">
        <img :src="getImageUrl(imgBackFaceUrl)" />
      </div>
    </div>
    <div
      class="card-back card__face--back p-2 bg-slate-700 flex justify-center items-center"
    >
      <div class="card--content w-1/2">
        <img :src="getImageUrlFace(imgFaceUrl)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgBackFaceUrl: {
      type: [String, Number, Object, Array],
      required: true,
    },
    imgFaceUrl: {
      type: [String, Number, Object, Array],
      required: true,
    },
    item: {
      type: [String, Number, Object, Array],
      required: true,
    },
    rules: {
      type: Array,
    },
  },
  data() {
    return {
      isFlipped: false,
      onDisableClick: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      if (this.onDisableClick) return;
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped) {
        this.$emit("OnFlip", this.item);
      }
    },
    closeFlipCard() {
      this.isFlipped = false;
    },
    getImageUrl(imgBackFaceUrl) {
      const imgBackFace = `/src/assets/images/${imgBackFaceUrl}`;
      return imgBackFace;
    },
    getImageUrlFace(imgFaceUrl) {
      const imgBackFace = `/src/assets/images/${imgFaceUrl}`;
      return imgBackFace;
    },
    handlerdontClicks() {
      this.onDisableClick = true;
    },
  },
};
</script>

<style scoped>
.card {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  margin: 0 12px;
}
.card.disabled {
  cursor: default;
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
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
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
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
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
  /* background: url("./../assets/images/icon_back.png") no-repeat center center; */
  background-color: var(--dark);
  background-size: 40px 40px;
  width: 100%;
  height: 100%;
}

.card__face--font {
  background-size: container;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}
</style>
