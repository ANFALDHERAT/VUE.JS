<template>
  <header>
<h1 v-on:click="changetitle">{{title}}</h1>

  </header>
</template>

<script>


import{bus} from '../main';

export default {
props:{
title:{
  type:String

}
},

data(){
  return {
    title:"anfal"
  }
},
methods:{
  changetitle:function()
  {
// this.$emit('changetitle','vue wizards')
this.title='vue';
bus.$emit('changetitle','vue wizards');
  }

}
}
</script>

<style scoped>
header{
  background: gold;
  padding: 10px;
}
h1{
  color: grey;
  text-align: center;
}
</style>
