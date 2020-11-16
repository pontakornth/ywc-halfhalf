<template>
   <div class="Page">
     <search-bar/>
     <nav class="Navigation">
       <a href="/">หน้าแรก</a>
       <span>/</span>
       <span class="font-bold">ค้นหา</span>
     </nav>
   </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'App',
  components: {
    SearchBar
  }
}
</script>
<style lang="postcss">
.Navigation {
  @apply py-3 px-3 flex bg-primary text-white;
}
.Navigation * {
  @apply mr-3 ;
}

</style>