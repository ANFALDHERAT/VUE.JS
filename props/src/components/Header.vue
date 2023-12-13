<template>
  <header>
<h1 v-on:click="changetitle">{{title}}</h1>

  </header>
</template>

<script>




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
this.title="view result";
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
