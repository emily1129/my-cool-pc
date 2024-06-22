import Vue from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'
import router from '@/router'
import '@/assets/css/index.css'

Vue.config.productionTip = false

Vue.use(PortalVue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
