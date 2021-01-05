<template>
<div>
<h1>{{id}}</h1>
<h1>{{items[1].preis}}</h1>


</div>

    
</template>

<script>
import Input from './HomeView';
export default {
  

    data(){
        return{
        id: 0,
        items: [],
    }
},
        created() {
            this.id = this.$route.params.id;
            this.items = this.$route.params.liste;
            
        },  
    
    
}
</script>

<style scoped>

</style>