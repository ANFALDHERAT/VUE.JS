<template>
<div id="anfal">
  <!-- <p>{{ anfals }}</p> -->
  <ul>
    <li v-for="anfal in anfals" v-on:click="anfal.show= !anfal.show">   <h1>{{ anfal.name }}</h1> </li>
  </ul>
  <button v-on:click="deleteAnfal">Delete</button>
</div>
</template>

<script>




export default {
props:{
anfals:{
  type:Array,
  required:true
}
},
  data(){
  return {

  }

},
methods:{
  deleteAnfal:function(){
this.anfals.pop();
  }
},
//life cycle hooks
beforeCreate(){
  alert('before create');
},
created()
{
  alert('created');
},
beforeMount()
{
  alert('beforeMount');
},
mounted()
{
  alert('mounted');
},
beforeUpdate()
{
  alert('beforeUpdate');

},
updated()
{
  alert('updated');
}

}
</script>

<style scoped>

</style>
