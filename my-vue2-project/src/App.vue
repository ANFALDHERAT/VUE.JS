<template>
  <div >

<app-header>    </app-header>
<app-anfal></app-anfal>
<app-footer>    </app-footer>
  </div>
</template>

<script>

// Update import statements in App.vue
import Header from './components/Header.vue'
import anfals from './components/anfals.vue'
import Footer from './components/footer.vue'

export default {

components:
{
'app-header' :Header,
'app-footer':Footer,
'app-anfal':anfals,
},


}
</script>

<style scoped>

</style>
