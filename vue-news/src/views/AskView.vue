<template>  
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixins/ListMixin.js';

export default {
    data() {
        return {
            name : this.$route.name
        }
    },    
    components: {
        "list-item" : ListItem,
    },
   mixins: [ListMixin],
}
</script>

<style>

</style>