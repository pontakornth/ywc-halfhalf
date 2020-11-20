<template>
   <div class="Page">
     <search-bar/>
     <navigation/>
     <h1 class="PageTitle">ผลการค้นหา อาหารเครื่องดื่มทั้งหมด</h1>
     <div class="PageContainer">
       <div class="Menu">
         <drawer v-if="fetchedData" 
            :subCategories="subCategories" 
            :categories="categories"
            :provinces="provinces"
            :handleUpdate="updateFiler"
         />
         <div class="CardGridWrapper">
          <div class="CardGrid">
              <shop-card v-for="(m, index) in merchants" :key="index"
                :name="m.shopNameTH"
                :category="m.subcategoryName"
                :priceLevel="m.priceLevel"
                :location="m.addressDistrictName +  ' ' + m.addressProvinceName"
                :imageUrl="m.coverImageId"
                :description="m.highlightText"
                :recommenedItem="m.recommendedItems"
                :tag="m.isOpen"
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
      fetchedData: {},
      filterCategory: null,
      filterSubcategory: null,
      filterProvince: null,
    }
  },
  computed: {
    categories() {
      return this.fetchedData.categories.map(category => category.name)
    },
    subCategories() {
      // This is for food and drink only as the picture only show them
      return this.fetchedData.categories[0].subcategories
    },
    merchants() {
      return this.fetchedData.merchants
    },
    provinces() {
      return this.fetchedData.provinces;
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
  @apply bg-repeat-y ;
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
  @apply mx-auto p-4 w-3/4 text-center rounded cursor-pointer border my-8 border-gray-400 bg-white text-text-dark;
}


@screen md {
  .Menu {
    @apply flex;
  }
  .Button {
    @apply w-1/2;
  }
}
</style>
