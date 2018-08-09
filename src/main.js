import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import sample from '@/sampledata.js'

new Vue({
  propsData: {
    charts: sample
  },
  render: h => h(App)
}).$mount('#app')
