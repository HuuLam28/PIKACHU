<template>
  <div class="screen w-full h-full px-10">
    <CardView
      v-for="(item, index) in receivedData"
      :key="index"
      :ref="`item-${index}`"
      :item="{ index, value: item }"
      :imgBackFaceUrl="`${item}.png`"
      :imgFaceUrl="`icon_back.png`"
      @OnFlip="checkRules"
      :class="{ isflipped: autoWin }"
      :style="{
        height: `${(700 - 16 * 4) / Math.sqrt(receivedData.length) - 16}px`,
        width: `${(((700 - 16 * 4) / Math.sqrt(receivedData.length) - 16) * 3) / 4}px`,
      }"
    />
  </div>
  <button @click="auto()" class="bg-orange-200 rounded p-2 text-xs">
    CLICK AUTO WIN
  </button>
</template>

<script>
import CardView from "./CardView.vue";

export default {
  components: {
    CardView,
  },
  data() {
    return {
      autoWin: false,
      rules: [],
      height: 120,
      width: 100,
      onCard: false,
      isFlippingAllowed: true,
    };
  },

  created() {
    // Sử dụng $route.query để nhận dữ liệu từ URL
    //this.receivedData = this.$route.query.cardContext;
    this.startTime = this.$store.state.startTime;
    this.receivedData = this.$store.state.cardSize;
    if (this.startTime === 0) {
      this.$router.push("/");
    }
  },
  methods: {
    checkRules(item) {
      this.rules.push(item);

      if (this.rules.length === 2) {
        // Xử lý khi có 2 thẻ được chọn
        if (this.rules[0].value === this.rules[1].value) {
          this.$refs[`item-${this.rules[0].index}`][0].handlerdontClicks();
          this.$refs[`item-${this.rules[1].index}`][0].handlerdontClicks();

          this.rules = [];
          const documentsCardCheck = document.querySelectorAll(".screen .isflipped");

          if (
            documentsCardCheck &&
            documentsCardCheck.length === Object.keys(this.receivedData).length - 1
          ) {
            setTimeout(() => {
              this.timer = new Date().getTime() - this.startTime;
              this.$store.dispatch("getSetTime", this.timer);
              this.$router.push({
                path: "/resultScreen",
                // query: {
                //   startTime: this.timer,
                // },
              });
            }, 700);
          }
        } else {
          // console.log("Failed to 2 rules", this.rules.length);
          // const index3 = this.rules[2];
          // console.log("3", index3);

          setTimeout(() => {
            this.$refs[`item-${this.rules[0].index}`][0].closeFlipCard();
            this.$refs[`item-${this.rules[1].index}`][0].closeFlipCard();

            this.rules = [];
          }, 700);
        }
      } else if (this.rules.length > 2) {
        const index3 = this.rules[2];

        // Xử lý khi có hơn 2 thẻ được chọn
        setTimeout(() => {
          for (let i = 0; i < this.rules.length; i++) {
            this.$refs[`item-${this.rules[i].index}`][0].closeFlipCard();
          }
          this.rules = [];
          this.rules.push(index3);
        }, 700);
      } else {
        // Xử lý khi có ít hơn 2 thẻ được chọn
        setTimeout(() => {
          console.log("Failed to one more");
        }, 700);
      }
    },

    auto() {
      this.autoWin = true;
      this.timer = (new Date().getTime() - this.startTime) / 1000;
      setTimeout(() => {
        this.$store.dispatch("getSetTime", this.timer);
        this.$router.push({
          path: "/resultScreen",
          // query: {
          //   timer: this.timer,
          // },
        });
      }, 2000);
    },
  },
};
</script>

<style>
.screen {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
