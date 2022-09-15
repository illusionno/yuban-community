<template>
  <div class="top1-box">
    <!-- 页头 -->
    <top-header></top-header>
  </div>
</template>

<script>
import { defineComponent } from "vue";
// import { ArrowLeft } from "@element-plus/icons-vue";
import TopHeader from "@/components/discover/TopHeader.vue";
export default defineComponent({
  name: "Top1View",
  components: {
    // ArrowLeft
    TopHeader,
  },
});
</script>

<style lang="scss" scoped>
.top1-box {
  display: block;
}
</style>