<template>
  <div >
<!-- <show-blogs></show-blogs>
<list-blogs></list-blogs> -->

<router-view></router-view>
  </div>
</template>

<script>

import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
export default {

components:
{
'show-blogs':showBlogs,
'list-blogs':listBlogs
},
data(){
  return {


  }
}


}
</script>

<style scoped>

</style>
