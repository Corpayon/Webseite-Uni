<template>
<div class="Anmelden">
    <h2>Anmelden</h2>
   <p> <input type="text" name="emailAdress" v-model="email" placeholder="Email-Adresse"></p>
    <p><input type="password" name="password1" placeholder="Passwort"></p>
     <p> <input type="password" id="password" v-model="password" placeholder="Passwort bestätigen"></p>
     <p> <button  v-on:click="Anmelden" id="anmeldenButton">Anmelden</button></p>
</div>
</template>
<script>
import firebase from 'firebase';

export default {
    name: 'anmelden',
    data: function(){
        return{
            email:'',
            password:''
        }
    },
  methods: {
    Anmelden: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
        
            alert(`Account Created for ${user.email}`);
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