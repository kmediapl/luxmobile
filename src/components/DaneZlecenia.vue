<template>
    <div>
      {{$route.params.idzlec}}
        <ul>
            <li>
{{items.nazwa}}

            </li>
            <li>
{{items.nazwa}}

            </li>
            <li>
{{items.nazwa}}

            </li>
            <li>
{{items.nazwa}}

            </li>
            <li>
{{items.nazwa}}

            </li>
        </ul>
        <v-btn color="indigo" to="/mz" dark>Powrót</v-btn><v-btn color="error" @click="zrezlizujZlecenie">Zrealizuj zlecenie</v-btn>
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
      created() {
      var token = localStorage.getItem('token')
      var wz = this;
       axios.get(`http://127.0.0.1:8000/api/users/?token=`+token)
    .then(response => {
      // JSON responses are automatically parsed.
       this.users = response.data
      //  console.log(token);
       
      // console.log(this.users.id);
      
    axios.get('http://127.0.0.1:8000/api/mojezlecenia/dane/'+this.$route.params.idzlec+'/?token='+token)
    .then(response => {
      // JSON responses are automatically parsed.
   
        
      wz.items = response.data
      console.log(wz.items);
      
    })
    .catch(e => {
      wz.errors.push(e)
      
    })
 
    })
    .catch(e => {
      wz.errors.push(e)
    })
  },
  methods: {
    zrezlizujZlecenie(){
        this.$router.push('/zrealizuj')
    }
  }

}
</script>

<style>

</style>
