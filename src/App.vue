<template>
   <div class="Page">
     <search-bar/>
     <navigation/>
     <h1 class="PageTitle">ผลการค้นหา อาหารเครื่องดื่มทั้งหมด</h1>
     <div class="PageContainer">
       <div class="Menu">
         <div class="Drawer"></div>
         <div class="CardGrid">
           <shop-card name="Title" imageUrl="https://loremflickr.com/320/240" />
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import "../node_modules/@ibm/plex/css/ibm-plex.css";
import Navigation from './components/Navigation.vue';
import ShopCard from './components/ShopCard.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    Navigation,
    ShopCard
  }
}
</script>
<style lang="postcss">
.PageTitle {
  @apply font-bold text-xl p-3 py-6;
}
.PageContainer {
  @apply w-full mx-auto relative p-4;
}
</style>
