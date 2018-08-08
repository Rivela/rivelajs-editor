import Vue from 'vue'
import Comp from './component.vue'
import 'normalize-css'
import './../../assets/style.css'

const CompTest = Vue.extend(Comp)
new CompTest({
  propsData: {
    charts: [
        {method: 'barchart', data: [2, 5, 3], props: {x: 0, y: 0}},
        {method: 'bubblechart', data: [2, 5, 3], props: {x: 200, y: 0}}
    ]
  }
}).$mount('#app')
