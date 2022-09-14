import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Video from 'video.js'
import './assets/css/player.scss'
import 'video.js/dist/video-js.css'
import 'video.js/dist/video-js.css'
require("vue-video-player/")
import "videojs-flash"
import video_zhCN from 'video.js/dist/lang/zh-CN.json'



Video.addLanguage('zh_CN',video_zhCN)

createApp(App).use(router).mount('#app')
