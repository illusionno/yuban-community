<template>
  <div>
    <TopHeader></TopHeader>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TopHeader from "@/components/discover/TopHeader.vue";

export default defineComponent({
  name: "VideoDetail",
  components: {
    TopHeader,
  },
});
</script>

<style lang="scss" scoped>
</style>