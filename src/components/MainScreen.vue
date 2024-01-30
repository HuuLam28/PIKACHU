<template>
  <div class="main mb-4">
    <div class="hearder-main mb-4 flex justify-center flex-col items-center">
      <div class="title leading-none">Pikachu</div>
      <div class="select-item-title">Select mode to start game</div>
    </div>

    <div class="item-choose padding-2">
      <div class="item text-white" @click="OnClickPage(16)">4x4 <span>Easy</span></div>
      <div class="item text-green-300" @click="OnClickPage(36)">
        6x6 <span>Normal</span>
      </div>
      <div class="item text-purple-500" @click="OnClickPage(64)">
        8x8 <span>Hard</span>
      </div>
      <div class="item text-rose-500" @click="OnClickPage(100)">
        10x10 <span>Super Hard</span>
      </div>
    </div>
  </div>
</template>

<script>
import { shuffle } from "./common/randomArr";
export default {
  data() {
    return {
      settings: {
        totalBlocks: 0,
        cardContext: [],
      },
    };
  },
  methods: {
    OnClickPage(val) {
      if (val) {
        this.settings.totalBlocks = val;
        const fisrtCard = Array.from(
          { length: this.settings.totalBlocks / 2 },
          (_, i) => i + 1
        );
        const secondCard = [...fisrtCard];
        const fullCard = [...fisrtCard, ...secondCard];
        this.settings.cardContext = shuffle(shuffle(shuffle(shuffle(fullCard))));
        this.settings.startedAt = new Date().getTime();
        this.$router.push({
          path: "/interactScreen",
          query: {
            startTime: this.settings.startedAt,
            cardContext: this.settings.cardContext,
          },
        });
      }
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
  /* color: var(--light); */
  margin: 10px;
  cursor: pointer;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}
</style>
