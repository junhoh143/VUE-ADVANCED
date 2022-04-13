// plugin 은 컴포넌트에서 공통적으로 특정 라이브러리를 사용하고자 할 때 사용한다.
// ex) router, store

import Chart from 'chart.js';

export default {
    // install: function(Vue) {
    //     Vue.prototype.$_Chart = Chart;
    // },
    install(Vue) {
        Vue.prototype.$_Chart = Chart; // this.$_Chart.*** 라고 실행할 수 있다.
    }
}