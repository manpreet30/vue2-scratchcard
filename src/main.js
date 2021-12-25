import Vue from 'vue'
import ScratchCard from './ScratchCard'

Vue.config.productionTip = false

new Vue({
  render: h => h(ScratchCard),
}).$mount('#my-vue-scratch-card')
