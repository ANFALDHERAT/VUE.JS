<template>

<footer>
  <p>{{copyright}} {{title}}</p>
</footer>

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
    copyright:'anfal1998'
  }
},
created()
{
  bus.$on('changetitle',(data)=>{
    this.title=data;
  })
}
}
</script>

<style scoped>
footer{
  background: red;
  padding: 6px;
}
p{
  color: grey;
  text-align: center;
}
</style>
