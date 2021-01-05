<template>

    <nav>
        <!-- Icon library https://www.youtube.com/watch?v=MoBYBc1dkhE-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="navbar">
        <ul>
            
            
                <a> <router-link to="/HomeView"> <i class="fa fa-home" aria-hidden="true"></i>Home</router-link></a>
               <a>  <router-link to="/Anmelden"><i class="fa fa-user-circle-o" aria-hidden="true"></i>Anmelden</router-link></a> 
               <a >  <router-link to="/Login"> <i class="fa fa-fw fa-user"></i>Login</router-link></a>
               <a> <router-link to="/Login"><button v-on:click="logout">Logout</button></router-link></a>
               <a v-if="isLoggedIn"><span class="email black-text">{{currentUser}}</span> </a>
              
             
        </ul>
        </div>
    </nav>
</template>
<script>
import firebase from 'firebase';

export default {
    name: 'navbar',
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
    methods:{
        logout: function(){
            firebase
            .auth()
            .signOut()
            .then( () =>{
                
                this.$router.go({path:this.$router.path});
            }
            )
        }
    }
    
}
</script>
<style scoped>
.navbar {
  width: 100%;
  background-color: #555;
  overflow: auto;
  color:aliceblue;
}
.navbar a{
    color: aliceblue;
   padding-right: 50px;
}

</style>