<template>
  <div id="app">
   
    <v-app id="inspire">
 
  <v-toolbar color="indigo" dark fixed app>
      
      <v-toolbar-title >LUXWET Aplikacja mobilna</v-toolbar-title> <v-spacer></v-spacer><v-btn color="error" @click="wyloguj" >Wyloguj</v-btn>
       
    </v-toolbar>
  <v-content>
    <v-container >  
      <router-view></router-view>
    </v-container>
  </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
  ,
//   created(){
//  const token=localStorage.getItem('token')
//       if (token==null){
//          disabled:false;
//       }
//   },
  methods: {
    wyloguj() {
      localStorage.removeItem('token');
      this.$toasted.success('Zostałeś wylogowany', {duration:1500, position: "bottom-center", } )
     
       this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
