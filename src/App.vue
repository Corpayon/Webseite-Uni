<template>
  <div id="app">
    <app-header></app-header>
    
    <router-view/>
  </div>
</template>

<script>
import header from './components/Header.vue';
import Anmelden from '@/components/Anmelden.vue';
import login from './components/Login.vue';


export default {
  name: 'App',
  components:{
    'app-header':header,
 
    
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
