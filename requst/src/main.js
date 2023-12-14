// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
Vue.config.productionTip = false
Vue.use(VueResource);
/* eslint-disable no-new */



//custom directives


// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
// el.style.color="red";
//   }
// });

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide')
    {
      el.style.maxWidth='1200px';

    }
  }
});

//filters

// Vue.filter('to-uppercase',function(value){
// return value.toUpperCase();
// });

Vue.filter('snippet',function(value){
  return value.slice(0,100)+'...';
  });

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
