<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner-comp :loading="loadingStatus"></spinner-comp>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import SpinnerComp  from './components/SpinnerComp.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    SpinnerComp
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    // 이벤트 버스 객체가 계속 쌓이기 때문에, 화면 종료 시 이벤트 버스를 해제한다.
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
/* 크롬 브라우저 기본 style 속성 제거 */
body { 
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}
</style>
