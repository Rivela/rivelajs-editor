import Vue from 'vue'
import Comp from './component.vue'
import 'normalize-css'
import './../..//assets/style.css'

import sample from './../../sampledata.js'

const CompTest = Vue.extend(Comp)
new CompTest({
  propsData: {
    charts: sample.charts,
    current: sample.charts[0]
  }
}).$mount('#app')
