<template>
  <div>
      <Sidebar/>
      <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
export default {
   name:'MainLayout',
   components:{
       Sidebar
   }
}
</script>

<style>

</style>