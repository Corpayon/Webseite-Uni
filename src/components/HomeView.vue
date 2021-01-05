<template>
  <div>
    <h1>Database Test</h1>

    <div v-for="i in items" v-bind:key="i.firebaseId">
      <b-container class="bv-example-row">
        <div class="Item1">
          <img :src="i.URL" :alt="i.name" class="img" />
        </div>
        
      
      <router-link  :to="{ name: 'ProduktView', params: { id: i.firebaseId, liste: items }}" >
        <article  id= i.firebaseId  class="Item2">{{i.name}} </article>
        </router-link>
        
   
        
      <div class="ItemPreis">
       {{i.preis}}€
       </div>
        
       
      </b-container>
    </div>
  </div>
</template>
<script>
import db from "./firebaseInit";

export default {
  


  data() {
    return {
      items: [],
      
      
    };
  },

  created() {
    db.collection("Fernseher")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            beschreibung: doc.data().beschreibung,
            name: doc.data().name,
            preis: doc.data().preis,
            URL: doc.data().URL,
            firebaseId: doc.id
          };
          this.items.push(data);
        });
      });
  },

  
};

</script>
<style scoped>
.img {
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 400px;
  min-width: 100px;
  min-height: 80px;
}

.bv-example-row {
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 80px;
  grid-template-columns: 18% 52% 30%;
  text-align: center;

  grid-gap: 1px;
  background-color: #757575;
  padding: 1px;
}
.bv-example-row > div {
  background-color: rgb(255, 255, 255);
  
  padding: 10px ;
  font-size: 30px;

}

.Item1 {
  grid-row-start: span 2;
}
.Item2 {
  display: flex;
  grid-row-start: span 2;
  background-color: rgb(255, 255, 255);
}

.Item2 > * {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 480px;
}

.ItemPreis{
  grid-row-start: span 2;
  text-align: right;
  
}




</style>