<template>
    <div>

      <h2>1.Data rozpoczęcia</h2>
         <v-date-picker color="indigo" v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
         <h2>2.Data zakończenia</h2>
         <v-date-picker color="indigo" v-model="picker2" :landscape="landscape" :reactive="reactive"></v-date-picker>
        
<h2>3. Dodatkowe dane</h2>

 <v-text-field
          name="input-2"
          label="Ilość kilometrów"
          mask="####"
          class="input-group--focused"
        ></v-text-field>
         <v-text-field
          name="input-2"
          label="Stawka za km"
         mask="####"
          class="input-group--focused"
        ></v-text-field>
        <hr/>
     <p>Material</p>
{{select}}
<v-data-table :items="items2" :headers="headers"  hide-actions> 
  <!-- <tr  v-for="item in ">
<td>{{item.nazwa}}</td><td>ilosc</td><td>usuń</td>
  </tr> -->
   <template slot="items" slot-scope="props">
      <td>{{ props.item.nazwa }}</td>
       <td>Ilość</td>
        <td>Usuń</td>
      </template>
</v-data-table>
    <v-select
            item-text="nazwa"
            item-value="id"
          label="Wybierz material"
          single-line
          v-model="select"
          :items="items"
        ></v-select>
 <v-text-field
          name="ilosc"
          label="ilosc"
         
          class="input-group--focused"
        ></v-text-field>





<v-btn color="indigo" dark @click="dodajMaterial">Dodaj materiał</v-btn>
<hr/>
<v-btn color="indigo" to="/mz" dark>Powrót</v-btn> <v-btn color="error" dark @click="zrealizujzlecenie">Zamknij zlecenie</v-btn>
  </div>
</template>


<script>
import axios from 'axios';
  export default {
    data () {
      return {
        users:'',
        ilosc:'',
        picker: null,
        picker2: null,
        landscape: false,
        reactive: false,
         e1: 0,
        select:'',
        items:[],
        items2:'',
        headers:[ { text: 'Nazwa', value: 'nazwa' },{ text: 'Ilość' },{ text: 'Akcja' }]
      }
    },
    created(){
      const token=localStorage.getItem('token')
      if (token==null){
         this.$router.push('/')
      }
          axios.get('http://127.0.0.1:8000/api/materialy/?token='+token)
        .then(response => {

          this.items = response.data;
              
          
        })
        .catch(error=>{
          console.log(error);
          
        })
    },
     methods: {
      dodajMaterial (){

     axios.post('http://127.0.0.1:8000/api/materialy',{idmat:this.select,idzlec:this.$route.params.idzlec})
     .then(response => {

         console.log(response);
                axios.get('http://127.0.0.1:8000/api/materialywzleceniu/'+this.$route.params.idzlec)
        .then(response => {

          this.items2 = response.data;
             this.$toasted.success('Materiał został dodany', {duration:2000, position: "bottom-center", theme: "primary" ,fullWidth:true} )
          
        })
        .catch(error=>{
          console.log(error);
          
        })
          
        })
     .catch(error=>{
        console.log(error);
     })
     
   
        
      },
      zrealizujzlecenie (){
        axios.post('http://127.0.0.1:8000/api/zrealizujzlecenie/'+this.$route.params.idzlec)
     .then(response => {
console.log(response);
this.$router.push('/mz')
     })
      .catch(error=>{
          console.log(error);
          
        })
      }
    }
  }
</script>

<style>
</style>
