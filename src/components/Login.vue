<template>
<div class="Login">
    <h2>Login</h2>
   <p> <input type="text" id="emailAdress" v-model="email" placeholder="Email-Adresse"></p>
    <p><input type="password" id="password" v-model="password" placeholder="Passwort"></p>
    <p> <button v-on:click="Login" type="button" id="LoginButton">Login</button></p>
</div>
</template>
<script>
import firebase from 'firebase';
export default {
    name:'login',
    data: function(){
        return{
            email:'',
            password:''
        }
    },
  methods: {
    Login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
        
            alert(`Du bist eingelogt: ${user.email}`);
            this.$router.push('/Homeview');
             this.$router.go({path:this.$router.path});
           
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
    

</script>
<style scoped>

</style>