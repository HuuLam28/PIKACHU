<script>
import CardView from "./CardView.vue";
import { onBeforeUnmount, onMounted } from "vue";
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
    this.receivedData = this.$route.query.cardContext;
    this.startTime = this.$route.query.startTime;
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
              this.$router.push({
                path: "/resultScreen",
                query: {
                  startTime: this.timer,
                },
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
        this.$router.push({
          path: "/resultScreen",
          query: {
            timer: this.timer,
          },
        });
      }, 2000);
    },
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
      :style="{ height: `${height}` + 'px', width: `${width}` + 'px' }"
    />
  </div>
  <button @click="auto()" class="bg-orange-200 rounded p-2">CLICK AUTO WIN</button>
</template>
<style>
.screen {
  width: 50%;
}
</style>
