<script>
import CardView from "./CardView.vue";
export default {
  components: {
    CardView,
  },
  created() {
    // Sử dụng $route.query để nhận dữ liệu từ URL
    this.receivedData = this.$route.query;
    console.log(this.receivedData);
  },
  methods: {
    getImagePath(indexImgs) {
      const imageName = indexImgs + ".png";
      // console.log(imageName);
      // Đường dẫn đầy đủ của ảnh (điều này phụ thuộc vào cách bạn tổ chức tài nguyên của mình)
      return `@/assets/images/${imageName}`;
    },
  },
};
</script>

<template>
  <div class="screen mb-28">
    <CardView
      v-for="(item, index) in receivedData"
      :key="index"
      :data="getImagePath(item)"
    />
  </div>
</template>
<style>
.screen {
  width: 50%;
}
</style>
