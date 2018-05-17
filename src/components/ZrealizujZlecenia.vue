<template>
    <div>{{picker}}
      <h1>1.Data realizacji</h1>
         <v-date-picker color="indigo" v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
         <h1>2. Zrelizował</h1>
<h1>3. Dodatkowe dane</h1>
<p>ddddd</p>
 <v-text-field
          name="input-2"
          label="Ilość kilometrów"
         
          class="input-group--focused"
        ></v-text-field>
         <v-text-field
          name="input-2"
          label="Stawka za km"
         
          class="input-group--focused"
        ></v-text-field>
        <hr/>
     <p>Material</p>

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
<v-btn color="indigo" dark>Zamknij zlecenie</v-btn>
  </div>
</template>


<script>
import axios from 'axios';
  export default {
    data () {
      return {
        ilosc:'',
        picker: null,
        landscape: false,
        reactive: false,
         e1: 0,
        select:'',
        items:[]
      }
    },
    created(){
          axios.get('http://127.0.0.1:8000/api/materialy')
        .then(response => {

          this.items = response.data;
              
          
        })
        .catch(error=>{
          console.log(error);
          
        })
    },
     methods: {
      dodajMaterial (){
        
    
        
      }
    }
  }
</script>

<style>

</style>
