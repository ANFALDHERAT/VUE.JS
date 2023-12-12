<template>
  <div >

<app-header></app-header>
<app-footer></app-footer>
  </div>
</template>

<script>

// Update import statements in App.vue
import Header from './components/header.vue';
import Footer from './components/Footer.vue';

export default {

  components:{
'app-header' :Header,
'app-footer':Footer,
},


}
</script>

<style scoped>

</style>
