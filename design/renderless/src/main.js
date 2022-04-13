import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), // h는 virtual dom을 지칭하는 용어로 hyperscript이다. createElement를 대신해서 썼다.

  // 1
  // render: function(createElement) {
  //   return createElement(App);
  // },

  // 2
  // render: function(h) {
  //   return h(App);
  // },

  // 3
  // render: (h) => {
  //   return h(App);
  // },

  // 4
  // render: h => h(App),
}).$mount('#app')
