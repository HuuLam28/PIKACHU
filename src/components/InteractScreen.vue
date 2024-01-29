<script>
import CardView from "./CardView.vue";
export default {
  components: {
    CardView,
  },
  created() {
    // Sử dụng $route.query để nhận dữ liệu từ URL
    this.receivedData = this.$route.query;
  },
  methods: {
    checkRules(item) {
      this.rules.push(item);
      if (this.rules.length === 1) return false;
      else if (this.rules.length === 2) {
        if (this.rules[0].value === this.rules[1].value) {
          this.$refs[`item-${this.rules[0].index}`][0].handlerdontClicks();
          this.$refs[`item-${this.rules[1].index}`][0].handlerdontClicks();
          this.rules = [];
          const documentsCardCheck = document.querySelectorAll(".screen .isflipped");

          if (
            documentsCardCheck &&
            documentsCardCheck.length === Object.keys(this.receivedData).length - 1
          ) {
            alert("Win ");
          }
        } else {
          setTimeout(() => {
            this.$refs[`item-${this.rules[0].index}`][0].closeFlipCard();
            this.$refs[`item-${this.rules[1].index}`][0].closeFlipCard();
            this.rules = [];
          }, 1000);
        }
      }
    },
    auto() {
      console.log("auto");
      this.autoWin = true;
      setTimeout(() => {
        alert("Win ");
      }, 1000);
    },
  },
  data() {
    return {
      autoWin: false,
      rules: [],
    };
  },
};
</script>

<template>
  <div class="screen mb-14">
    <CardView
      v-for="(item, index) in receivedData"
      :key="index"
      :ref="`item-${index}`"
      :item="{ index, value: item }"
      :imgBackFaceUrl="`${item}.png`"
      @OnFlip="checkRules"
      :class="{ isflipped: autoWin }"
    />
  </div>
  <button @click="auto()" class="bg-orange-200 rounded p-2">CLICK AUTO WIN</button>
</template>
<style>
.screen {
  width: 50%;
}
</style>
