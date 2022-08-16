import Vue from 'vue'
import App from './App.vue'
import initElement from '@/utls/index.js'
import './styles/index.scss'
import router from './router'
import store from './store'
// 完整加载
import VueLuckyCanvas from '@lucky-canvas/vue'

Vue.use(VueLuckyCanvas)
Vue.prototype.$ELEMENT = { size: 'medium', zIndex: 3000 }

// 导入全局样式

Vue.config.productionTip = false

Vue.use(initElement)
new Vue({
  router,
  store: store,
  render: (h) => h(App)
}).$mount('#app')
