<template>
   <div class="Page">
     <search-bar/>
     <navigation/>
   </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import "../node_modules/@ibm/plex/css/ibm-plex.css";
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    Navigation
  }
}
</script>
<style lang="postcss">
</style>
