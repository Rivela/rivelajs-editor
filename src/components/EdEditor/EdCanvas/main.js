import Vue from 'vue'
import Comp from './component.vue'
import 'normalize-css'

import sample from './../../../sampledata.js'

const CompTest = Vue.extend(Comp)
new CompTest({
  propsData: {
    charts: sample.charts
  }
}).$mount('#app')
