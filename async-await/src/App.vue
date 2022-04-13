<template>
  <div>
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
        <li v-for="item in items" :key="item.id">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    loginUser() 
    {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          console.log('1', response);

          if(response.data.id === 1) 
          {
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then(response => {

                console.log('2', response);

                this.items = response.data;
              })
              .catch(error => console.log(error));
          }
        })
        .catch(error => console.log(error));
    },
    async loginUser1() 
    {
      try {
        console.log('1');
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        console.log('2');
  
        if(response.data.id === 1) {
          console.log('3');
          var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
          console.log('4');
          this.items = list.data;
          console.log('5');
        }
        console.log('6');
        
      } catch (error) {
         console.log(error);
      }

    }
  },
}

</script>