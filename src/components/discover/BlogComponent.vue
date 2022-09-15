<template>
  <div class="blogs">
    <div
      class="blog anim"
      v-for="item in data"
      :key="item.id"
    >
      <div   @click="() => $router.push({ name: `${item.path}` ,query:{title:`${item.title}`}})">
        <div class="title">{{item.theme}} | {{ item.title }}</div>
        <div class="author">
          <div class="author-wrapper">
            <!-- 小对勾 -->
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-check"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <img :src="item.authorPic" alt="" />
          </div>
          <div class="detail">
            <div class="name">{{ item.author }}</div>
            <div class="info">
              {{ item.browseNumber }} 浏览 <span class="separate"></span
              >{{ item.update }}
            </div>
          </div>
        </div>
        <div class="time">{{ item.duration }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
const data = [
  {
    id: 1,
	theme:'皮卡丘',
    title: "不干什么，就为了干这个世界！",
    author: "皮卡丘",
    authorPic: require("../../assets/img/pikachu.png"),
    browseNumber: "690K",
    update: "1 天前",
    duration: "6 分钟",
    path: "top1",
  },
  {
    id: 2,
	theme:'年度最佳',
    title: "2022年度颜色排行榜",
    author: "潘通色彩",
    authorPic:
      "https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg",
    browseNumber: "39K",
    update: "10 天前",
    duration: "4 分钟",
    path: "top2",
  },
];
export default defineComponent({
  name: "BlogComponent",
  setup() {
    return {
      data,
    };
  },
});
</script>

<style scoped lang="scss">
.blogs {
  display: flex;
  align-items: center;

  .blog {
    background-image: url(../../assets/img/pikachu.png);
    // 背景图片缩小
    background-size: 50%;
    // 背景图片相对于x轴的偏移位置
    background-position-x: 300px;
    background-color: #31abbd;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 65%;
    padding: 20px;
    border-radius: 20px;
    //单个项目在交叉轴方向上的对齐方式
    align-self: stretch;
    // overflow: hidden;
    position: relative;
    // transition: background 0.3s;
    background-repeat: no-repeat;

    .title {
      font-size: 25px;
      // 单位ch：相对于数字0的大小
      max-width: 20ch; //只能装下20个0
      font-weight: 600;
      // 字符间距
      letter-spacing: 1px;
      color: #fff;
      margin-bottom: 30px;
    }

    .author {
      display: flex;
      align-items: center;

      .author-wrapper {
        position: relative;

        svg {
          width: 16px;
          padding: 2px;
          background-color: #fff;
          color: #0daabc;
          border-radius: 50%;
          border: 2px solid #0daabc;
          position: absolute;
          bottom: 0;
          right: 0;
        }

        img {
          width: 52px;
          height: 52px;
          border: 1px solid rgb(255 255 255 / 75%);
          padding: 4px;
          border-radius: 50%;
          // 保持原有尺寸比例。高度铺满容器，宽度等比缩放，超出部分被剪掉
          object-fit: cover;
        }
      }

      .detail {
        margin-left: 16px;
        .name {
          font-size: 15px;
          color: #fff;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .info {
          font-size: 13px;
          font-weight: 400;
          color: #fff;

          .separate {
            width: 3px;
            height: 3px;
            border-radius: 50%;
            display: inline-block;
            vertical-align: middle;
            background-color: #fff;
            margin: 0 6px;
          }
        }
      }
    }

    .tips {
      flex-direction: column-reverse;
      align-items: flex-start;
    }

    .time {
      background: rgba(21, 13, 13, 0.44);
      color: #fff;
      padding: 3px 8px;
      font-size: 12px;
      border-radius: 6px;
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }
  // 选取类名为.blog之后的类名为.blog元素
  .blog + .blog {
    margin-left: 20px;
    width: 35%;
    background-image: url(../../assets/img/beautiful_girl.png);
    background-color: darkseagreen;
    background-position-x: 0;
    background-size: 139%;
    // position: relative;
    // filter: saturate(1.4);
    img {
      border-color: rgb(255 255 255 / 75%);
    }
    .author-wrapper svg {
      border-color: #ffe6b2;
      color: #e7bb7d;
    }
    .detail {
      .name {
        font-size: 14px;
      }
    }
  }
}
// 浏览器可视区域宽度小于680px
@media screen and (max-width: 680px) {
  .blogs {
    display: flex;
    flex-direction: column;
    width: 100%;
    .blog {
      width: 100%;
    }
    .blog + .blog {
      width: 100%;
      margin-left: 0;
      margin-top: 20px;
      //background-color: red;
    }
  }
}
</style>