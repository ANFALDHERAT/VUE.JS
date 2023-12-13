<template>
  <div  id="add-blog">
    <h2>Add new blog post</h2>
    <form>
      <lable >Blog Title :</lable>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Blog Content :</label>
      <textarea v-model.lazy="blog.content"></textarea>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content: {{blog.content}}</p>
    </div>
  </div>
</template>

<script>



export default {

components:
{

},
data(){
  return {

blog:{
  title:"",
content:""
}

  }
}


}
</script>

<style scoped>
body{
  margin:0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
