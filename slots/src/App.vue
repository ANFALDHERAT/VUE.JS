<template>
  <div >
<form-helper>
  <!-- <h2 slot="title">{{title}}</h2>
  <p slot="text">the paragraph tag for the slots</p> -->

  <div slot="form-header">
    <h3>"this is the title of form header"</h3>
    <p>information about form</p>
  </div>
  <div slot="form-fields">
<input type="text" placeholder="name" required>
<input type="password" placeholder="password" required>
  </div>
  <div slot="form-controls">
    <button v-on:click="handelSubmit">Submit</button>
  </div>
</form-helper>

  </div>
</template>

<script>

import formHelper from './components/formHelper.vue';

export default {

components:
{
'form-helper':formHelper

},
data(){
  return {
title:'I am adynamic title'
  }
}


}
</script>

<style scoped>

</style>
