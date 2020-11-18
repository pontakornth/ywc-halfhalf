<template>
   <div class="Page">
     <search-bar/>
     <navigation/>
     <h1 class="PageTitle">ผลการค้นหา อาหารเครื่องดื่มทั้งหมด</h1>
     <div class="PageContainer">
       <div class="Menu">
         <drawer />
         <div class="CardGrid">
           <shop-card 
               name="ร้านหมูกระทะวายดับบลิวซี" 
               tag="เปิดอยู่"
               category="ร้านหมูกระทะ"
               :priceLevel="2"
               location="bangkok"
               imageUrl="https://loremflickr.com/320/240"
               description="มีของกินจำนวนมาก"
               :recommenedItem="['ไก่ทอดหากเล็ก', 'หมูห้าชั้น']"
             />
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
import Drawer from './components/Drawer.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    Navigation,
    ShopCard,
    Drawer
  }
}
</script>
<style lang="postcss">
.Page {
  background: url('./assets/result-bg.png');
}
.PageTitle {
  @apply font-bold text-xl p-3 py-6;
}
.PageContainer {
  @apply w-full mx-auto relative p-4;
}

.CardGrid {
  @apply flex-1 grid gap-2;
  grid-template-columns: 1fr;
}


@screen md {
  .Menu {
    @apply flex;
  }
}
</style>
