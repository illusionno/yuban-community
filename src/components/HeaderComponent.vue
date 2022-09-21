<template>
  <div class="header">
    <div class="search-bar" :class="{ 'search-bar-active': isChange }">
      <input
        @focusin="changeStyle"
        @focusout="changeStyle"
        type="text"
        placeholder="请输入要查询的内容~~"
      />
    </div>
    <div class="settings" v-if="isLogin">
      <img class="img" src="../assets/img/head.jpg" alt="" />
      <span class="name">玉桂狗</span>
      <el-dropdown>
        <span >
          <el-icon>
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>账号设置</el-dropdown-item>
            <el-dropdown-item>意见反馈</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <!-- 小圆点 -->
      <div class="notify">
        <div class="notification"></div>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
          />
        </svg>
      </div>
    </div>
    <!-- <div v-else>
      <el-avatar :icon="UserFilled" />
    </div> -->
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { ArrowDown  } from "@element-plus/icons-vue";
export default defineComponent({
  name: "HeaderComponent",
  components: {
    ArrowDown,
    // UserFilled
  },
  setup() {
    let isChange = ref(false);
    let isLogin = ref(false)
    let changeStyle = () => {
      isChange.value = !isChange.value;
    };
    return {
      isChange,
      changeStyle,
      isLogin
    };
  },
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 30px;

  .search-bar {
    height: 34px;
    display: flex;
    width: 100%;
    max-width: 450px;

    input {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 8px;
      font-family: var(--body-font);
      font-size: 14px;
      font-weight: 500;
      padding: 0 40px 0 16px;
      box-shadow: 0 0 0 2px rgba(134, 140, 160, 0.02);
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
      background-size: 14px;
      background-repeat: no-repeat;
      background-position: 96%;
      color: #000;
    }
  }
  .search-bar-active {
    box-shadow: 1px 1px 5px #cc88f4;
    border-radius: 8px;
  }

  .settings {
    display: flex;
    align-items: center;
    padding-left: 20px;
    flex-shrink: 0;
    margin-left: auto;

    .img {
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      object-fit: cover;
      border-radius: 50%;
      padding: 2px;
      &:hover {
        border: 1px solid #fff;
      }
    }
    .name {
      color: #fff;
      font-size: 14px;
      margin: 0 6px 0 12px;
      @media screen and (max-width: 575px) {
        display: none;
      }
    }

    svg {
      width: 10px;
      flex-shrink: 0;
      @media screen and (max-width: 575px) {
        display: none;
      }
    }
    .notify {
      position: relative;
      svg {
        width: 20px;
        margin-left: 24px;
        flex-shrink: 0;
      }
      .notification {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #ec5252;
        position: absolute;
        right: 1px;
        border: 1px solid var(--theme-bg);
        top: -2px;
        @media screen and (max-width: 575px) {
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 475px) {
  .header {
    padding: 20px;
  }
}
</style>