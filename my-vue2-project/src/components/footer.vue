<template>

<footer>
  <p>{{copyright}}</p>
</footer>

</template>

<script>

export default {

data(){
  return {
    copyright:'anfal 1998'
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
