<template>
  <div class="box">
    <span class="title">{{ $route.query.title }} </span>
    <el-icon class="right-arrow" @click="() =>$router.back()"><ArrowRightBold /></el-icon>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ArrowRightBold } from "@element-plus/icons-vue";

export default defineComponent({
  name: "TopHeader",
  components: {
    ArrowRightBold,
  },
});
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;
  .title {
    background-image: linear-gradient(#fff, #f8c7d1);
    padding: 8px;
    border-radius: 11px;
  }
  .right-arrow{
    top: 11px;
  }
}
::deep.el-divider el-divider--vertical {
  border-left: 2px solid #4e5e83;
}
</style>