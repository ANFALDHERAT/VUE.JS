<template>
<nav>
  <ul>
    <li><router-link to="/" exact>Blog</router-link></li>
    <li><router-link to="/show" exact>list blog</router-link></li>
  </ul>
</nav>
</template>

<script>

export default {


data(){
  return {


  }
}


}
</script>

<style scoped>
.router-link-active{
  background-color: blueviolet;
}
</style>
