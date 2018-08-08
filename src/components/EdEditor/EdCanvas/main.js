import Vue from 'vue'
import Comp from './component.vue'
import 'normalize-css'

const CompTest = Vue.extend(Comp)
new CompTest({
  mounted () {
    var ob = {method: 'barchart', data: [2, 5, 3]}
    this.addChart(ob)
  }
}).$mount('#app')
