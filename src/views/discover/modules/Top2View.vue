<template>
  <div class="top-box2">
    <top-header></top-header>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TopHeader from "@/components/discover/TopHeader.vue";

export default defineComponent({
  name: "Top2View",
  components: {
    TopHeader,
  },
});
</script>

<style lang="scss" scoped>
</style>