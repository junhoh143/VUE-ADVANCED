<template>
  <div>
      <ul class="item-list">
          <li v-for="item in items" v-bind:key="item.id" class="post">
            <!-- 포인트 영역 -->
            <div class="points">
                {{item.points || 0}}
            </div>

            <!-- 기타정보영역 -->
            <div>
                <p class="item-title">
                    <template v-if="name == 'ask'">
                        <router-link  :to="item.url">{{item.title}}</router-link>
                    </template>
                    <template v-else>
                        <a v-bind:href="item.url">{{item.title}}</a>                    
                    </template>
                </p>
                <small class="link-text">
                    {{item.time_ago}} by
                    <template v-if="name == 'jobs'">
                        <a :href="`http://${item.domain}`" class="link-text">{{item.domain}}</a>
                    </template>
                    <template v-else>
                        <router-link :to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
                    </template>                    
                </small>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name : this.$route.name
        }
    },
    computed: {
        items() {
            return this.$store.state.list
        }
    }
}
</script>

<style scoped>
    .item-list {
        margin: 0;
        padding: 0;
    }

   .points{ 
        width: 80px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #42b883
    }    

    .post {
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
    }

    .item-title {
        margin: 0;
    }

    .link-text {
        color: #828282;
    }
</style>