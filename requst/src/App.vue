<template>
  <div >
<!-- <show-blogs></show-blogs>
<list-blogs></list-blogs> -->
<app-header></app-header>
<router-view></router-view>
  </div>
</template>

<script>

import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
import header from './components/header.vue'
export default {

components:
{
'show-blogs':showBlogs,
'list-blogs':listBlogs,
'app-header':header
},
data(){
  return {


  }
}


}
</script>

<style scoped>

</style>
