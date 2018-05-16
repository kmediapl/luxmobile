<template>
<div>
<p>Zlecenia dla {{users.name}}::</p>
 <v-list three-line>
          <template v-for="(item, index) in items">
<router-link :to="{ path: '/zlecenia/'+item.id}" >
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
            <v-list-tile v-else :key="item.nazwa" avatar @click="">
              <v-list-tile-avatar size="100" >
               {{item.data_zlecenia}}
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.nazwa"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.nazwa"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="item.nazwa"></v-list-tile-sub-title>
                
              </v-list-tile-content>
                <v-list-tile-action>
              <v-icon :color="item.czy_zrealizowane ? 'grey' : 'red'">chat_bubble</v-icon>
            </v-list-tile-action>
            </v-list-tile>
</router-link>
          </template>
        </v-list>


<v-btn @click="refresh">Odświerz</v-btn>
 

  <ul v-if="errors && errors.length">
    <li v-for="error of errors">
     1: {{error.stack}}
    </li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
      errors: [],
      users:[]
    }
  },

  // Fetches posts when the component is created.
  created() {
    
      var token = localStorage.getItem('token')

       if (token == null) {
        this.$router.push('/')
         
       }
       else {
             var wz = this;
       axios.get(`http://127.0.0.1:8000/api/users/?token=`+token)
    .then(response => {
      // JSON responses are automatically parsed.
       this.users = response.data
      //  console.log(token);
       
      // console.log(this.users.id);
      
    axios.get('http://127.0.0.1:8000/api/mojezlecenia/'+this.users.id+'/?token='+token)
    .then(response => {
      // JSON responses are automatically parsed.
   
        
      wz.items = response.data
    })
    .catch(e => {
      wz.errors.push(e)
      
    })
 
    })
    .catch(e => {
      wz.errors.push(e)
    })
       }
  },
  methods: {
    refresh() {
      var token = localStorage.getItem('token')
      var wz = this;
       axios.get(`http://127.0.0.1:8000/api/users/?token=`+token)
    .then(response => {
      // JSON responses are automatically parsed.
       this.users = response.data
       console.log(token);
       
      console.log(this.users.id);
      
    axios.get('http://127.0.0.1:8000/api/mojezlecenia/'+this.users.id+'/?token='+token)
    .then(response => {
      // JSON responses are automatically parsed.
   
        
      wz.items = response.data
    })
    .catch(e => {
      wz.errors.push(e)
      
    })
 
    })
    .catch(e => {
      wz.errors.push(e)
    })
    }
  }
}
</script>
<style scoped>
.list a {
    text-decoration: none;
}
</style>

