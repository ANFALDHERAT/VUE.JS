<template>

<footer>
  <p>{{copyright}} {{title}}</p>
</footer>

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
    copyright:'anfal1998'
  }
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
