<template>
  <div v-theme:column="'wide'" id="show-blogs">
<h1>All blog artical</h1>
<input type="text"  v-model="search" placeholder="search blogs">
<div  v-for="blog in filterBlogs "  class="single-blog">
  <router-link v-bind:to="'/blog/' + blog.id"><h1 v-rainbow>{{blog.title | to-uppercase}}</h1></router-link>
  <p>{{blog.body | snippet}}</p>
</div>
  </div>
</template>

<script>


import searchMixin from '../mixins/searchMixin'

export default {

data(){
  return {
blogs:[],
search:''

  }
},
methods:{

},
created()
{
  this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data)
  {
// console.log(data);
this.blogs=data.body.slice(0,10);
  })
},
computed:{
  // filterBlogs:function()
  // {
  //   return this.blogs.filter((blog)=>{
  //     return blog.title.match(this.search);
  //   })
  // },
  filters:{
    toUppercase(value){
      return value.toUpperCase();

    }
  },
  directive:{
    'rainbow':{
      bind(el,binding,vnode){
el.style.color="red";
  }
    }
  }
},
mixins:[searchMixin]

}
</script>

<style scoped>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog
{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
