import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin.js';

Vue.config.productionTip = false

Vue.use(ChartPlugin); // install 속성 함수가 실행된다.

new Vue({
  render: h => h(App),
}).$mount('#app')
