<template>
<div id="anfal">
  <ul>
    <li v-for="anfal in anfals" v-on:click="anfal.show= !anfal.show">   <h1>{{ anfal.name }}</h1> </li>
  </ul>
</div>
</template>

<script>




export default {

  data(){
  return {
   anfals:[
    {name:'anfal',age:'20',show:false},
    {name:'an',age:'20',show:false},
    {name:'a',age:'20',show:false},
    {name:'anfa',age:'20',show:false},
   ]
  }
}

}
</script>

<style scoped>

</style>
