<template>
    <div>
      <v-card>
    ID Zlecenia:  {{$route.params.idzlec}} ::Data zlecenia {{items.data_zlecenia}}
      </v-card>
      <br>
       <v-card>
<h2>Nazwa zlecenia{{items.nazwa}}</h2>
<br>
<h3>Rodzaj instalacji</h3> {{items.rodzaj_instalacji}}
<h3>Rodzaj usługi</h3> {{items.rodzaj_uslugi}}
<h4>Kilometry: {{items.kilometry}}</h4>
<h4>Kilometry koszt: {{items.kilometry_koszt}}</h4>
<h4>Opis:</h4> 
<p>{{items.opis}}</p> 
       </v-card>
<v-card>
<h2>Zleceniodawca</h2>
{{zleceniodawca.nazwa}}
<p>Miejscowość: {{zleceniodawca.miejscowosc}}</p>
<p>Kod pocztowy: {{zleceniodawca.kodpocztowy}}</p>
<p>Ulica: {{zleceniodawca.ulica}} {{zleceniodawca.nrdomulokalu}}</p>
</v-card>
<br>
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
      users:[],
      zleceniodawca:[]
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
      // console.log(wz.items);

       axios.get('http://127.0.0.1:8000/api/zleceniodawcy/'+this.items.zleceniodawca_id+'/?token='+token)
    .then(response => {
      // JSON responses are automatically parsed.
   
        
      wz.zleceniodawca = response.data
      //  console.log(wz.zleceniodawca);
        
      
    })
    .catch(e => {
      wz.errors.push(e)
      
    })




      
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
        this.$router.push('/zrealizuj/'+this.$route.params.idzlec)
    }
  }

}
</script>

<style>

</style>
