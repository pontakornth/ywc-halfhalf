<template>
   <div class="Page">
     <search-bar/>
     <navigation/>
     <h1 class="PageTitle">ผลการค้นหา อาหารเครื่องดื่มทั้งหมด</h1>
     <div class="PageContainer">
       <div class="Menu">
         <drawer v-if="fetchedData" :subCategories="subCategories" :categories="categories"/>
         <div class="CardGridWrapper">
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
            <div class="Button">ดูเพิ่มเติม</div>
          </div>

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
  data() {
    return {
      fetchedData: {}
    }
  },
  computed: {
    categories() {
      return this.fetchedData.categories.map(category => category.name)
    },
    subCategories() {
      // This is for food and drink only as the picture only show them
      return this.fetchedData.categories[0].subcategories
    }
  },
  created() {
    fetch("https://panjs.com/ywc18.json")
        .then(res => res.json())
        .then(json => {
          this.fetchedData = json
          console.log(json)
        })
  },
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

.CardGridWrapper {
  @apply flex-1;
}

.CardGrid {
  @apply grid gap-2;
  grid-template-columns: 1fr;
}

.Button {
  @apply mx-auto p-4 w-1/2 text-center rounded cursor-pointer border my-8 border-menu bg-white text-text-dark;
}


@screen md {
  .Menu {
    @apply flex;
  }
}
</style>
