<template>
  <div>
      <section> 
          <!-- 사용자 정보 -->
          <user-profile :info="item">
            <router-link slot="username" :to="`/user/${item.user}`">{{item.user}}</router-link>
            <template slot="time">{{'Posted ' + item.time_ago}}</template>
          </user-profile>
      </section>

      <section>
        <h2>{{item.title}}</h2>
      </section>

      <!--  질문 댓글 -->
      <section>
        <div v-html="item.content"></div>
      </section>
      
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import UserProfile from '../components/UserProfile.vue';
import bus from '../utils/bus.js';

export default {
  components :{
    UserProfile
  },
  computed: {    
    // 3번 방법
    ...mapGetters({
       item: 'fetchedItem'
    })    
  },
  mounted() {
    bus.$emit('end:spinner');
  }
}
</script>

<style scoped>

</style>