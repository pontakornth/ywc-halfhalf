<template>
   <div class="Page">
     <search-bar/>
   </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import "../node_modules/@ibm/plex/css/ibm-plex.css";

export default {
  name: 'App',
  components: {
    SearchBar
  }
}
</script>
<style lang="postcss">
</style>
