import Vue from 'vue'
import Comp from './component.vue'
import 'normalize-css'
import './../../assets/style.css'

const CompTest = Vue.extend(Comp)
new CompTest({
  mounted () {
    this.$on('addchart', d => console.log(d))
  }
}).$mount('#app')
