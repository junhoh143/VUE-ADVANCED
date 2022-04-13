<template>
  <div class="header">
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default { // 이 파일의 자바스크립트 내용 중 외부에서 사용할 것은 export에 입력한다.

}
</script>

<style scoped>
.header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}

.header .router-link-exact-active {
  color: #35495e
}

.header a {
  color: white
}
</style>