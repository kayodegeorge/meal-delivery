<template>
  <v-app>    
    <app-navigation></app-navigation>
    <router-view/>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';


export default {
  name: 'App',

  components: {
    AppNavigation,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
</style>