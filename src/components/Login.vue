<template>

<div>
   

 <v-container fluid>
 <v-layout >
    <v-flex xs12 sm6 offset-sm3 pa5>
        {{email}}:::{{password}}
   <div id="formy">
          <v-form v-model="valid" >
    
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
       <v-text-field
          v-model="password"
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          name="input-10-1"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          counter
        ></v-text-field>
        <v-btn dark color="purple darken-3"  :disabled="!valid"  @click="submit">ZALOGUJ</v-btn>
  </v-form>
   </div>
    </v-flex>
 </v-layout>
 </v-container>
</div>
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
      valid: false,
      password: '',
    e1:'',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }),
    methods: {
        submit(){
            //  alert('login'+this.email+' '+this.password)
             let vm=this;
             axios.post('http://127.0.0.1:8000/api/user/login', 
             {email: vm.email, password: vm.password}, 
             )
             .then (
                 (response) => {
                     const token = response.data.token;
                     localStorage.setItem('token',token);
                     this.$router.push('mz')
                 }
             )
             .catch (
             (error) => {
                 alert(error)
             }
             )

        }
    }
  }
</script>

<style>
#formy {
    margin: 10px;
}
</style>
