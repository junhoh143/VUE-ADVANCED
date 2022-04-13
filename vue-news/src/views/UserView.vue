<template>
  <div>
    <user-profile :info="fetchedUser">
      <div slot="username">{{fetchedUser.id}}</div>
      <span slot="time">{{'Joined ' + fetchedUser.created}}, </span>
      <span slot="karma">{{fetchedUser.karma}}</span>
    </user-profile>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import UserProfile from '../components/UserProfile.vue';
import bus from '../utils/bus.js';

export default {
  components :{
    UserProfile,
  },
  computed: {
    // 4번 방법
    ...mapGetters(['fetchedUser'])
  },
  mounted() {
    bus.$emit('end:spinner');
  }
  // created() {
  //   console.log('id:', this.$route.params.id);
    
  //   this.$store.dispatch('FETCH_USER', this.$route.params.id);    
  // }
}
</script>

<style>

</style>