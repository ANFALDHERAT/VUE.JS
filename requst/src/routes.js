import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
import singleBlog from './components/singleBlog.vue'
export default[
  {path:'/',component:showBlogs},
  {path:'/show',component:listBlogs},
  {path:'/blog/:id',component:singleBlog},

]
