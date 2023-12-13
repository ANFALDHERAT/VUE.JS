<template>
  <div >

<app-header v-bind:title="title" v-on:changetitle="updatetitle($event)"></app-header>
<app-anfal v-bind:anfals="anfals"></app-anfal>
<!-- <hr>
<app-anfal v-bind:anfals="anfals"></app-anfal> -->
<app-footer v-bind:title="title">    </app-footer>
  </div>
</template>

<script>

// Update import statements in App.vue
import Header from './components/Header.vue'

import Footer from './components/footer.vue'
import anfals from './components/anfals.vue'

export default {

components:
{
'app-header' :Header,
'app-footer':Footer,
'app-anfal':anfals,
},
data(){
  return {
   anfals:[
    {name:'anfal',age:'20',show:false},
    {name:'an',age:'20',show:false},
    {name:'a',age:'20',show:false},
    {name:'anfa',age:'20',show:false},
   ],
   title:"anfal dherat"
  }
},
methods:{
  updatetitle:function (params) {
this.title=params;
  }
}


}
</script>

<style scoped>

</style>
