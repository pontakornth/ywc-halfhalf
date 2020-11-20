<template>
    <div class="Drawer">
        <div class="FilterGroup">
            <label class="FilterLabel">ประเภทร้านค้า</label>
            <radio-button v-for="(category, index) in categories" v-model="filterCategory" :key="index" :text="category" :value="category" />
        </div>
        <div v-if="provinces" class="FilterGroup">
            <label class="FilterLabel">ใกล้ฉัน / ทั้งหมด</label>
            <dropdown style="overflow: scroll;line-height: 1.5" v-model="filterProvince" :options="dropdownProvinces" placeholder="ใกล้ฉัน" optionLabel="name" />
        </div>
        <div v-if="priceRange" class="FilterGroup">
            <label class="FilterLabel">ราคา</label>
            <dropdown style="overflow: scroll;line-height: 1.5" v-model="filterPriceRange" :options="dropdownPriceRange" placeholder="กรุณาเลือก" optionLabel="name" />
        </div>
        <div class="FilterGroup">
            <label class="FilterLabel">ประเภทร้านอาหารเครื่องดื่ม</label>
            <radio-button v-for="(category, index) in subCategories" v-model="filterSubCategory" :key="index" :text="category" :value="category" />
        </div>
</div>
</template>

<script>
import RadioButton from './RadioButton.vue'
export default {
    data() {
        return {
            filterCategory: null,
            filterProvince: null,
            filterSubCategory: null,
            filterPriceRange: null,
        }
    },
    computed: {
        dropdownProvinces() {
            if (this.provinces) {
                return this.provinces.map(x => ({name: x}))
            }
            return []
        },
        dropdownPriceRange() {
            if (this.priceRange) {
                return this.priceRange.map(x => ({name: x}))
            }
        }
    },
    props: {
        categories: Array,
        subCategories: Array,
        provinces: Array,
        priceRange: Array,
    },
    components: { RadioButton },
    name: "Drawer",
}
</script>

<style lang="postcss" scoped>
.Drawer {
@apply p-2 w-1/4 border border-blue-200 mr-8;
display: none;
}

.FilterGroup {
@apply p-2 ;
}

.FilterLabel {
    @apply font-bold;
}


@screen md {
    .Drawer {
        @apply block;
    }
}
</style>