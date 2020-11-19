<template>
    <div class="Drawer">
        <div class="FilterGroup">
            <label class="FilterLabel">ประเภทร้านค้า</label>
            <radio-button v-for="(category, index) in categories" :key="index" :text="category" :value="category" />
        </div>
        <div class="FilterGroup">
            <label class="FilterLabel">ใกล้ฉัน / ทั้งหมด</label>
            <!-- TODO: Implement real dropdown -->
            <input class="p-2 rounded my-4 block w-full border border-blue-300" type="text" placeholder="Placeholder" name="Place" />
        </div>
        <div class="FilterGroup">
            <label class="FilterLabel">ประเภทร้านอาหารเครื่องดื่ม</label>
            <radio-button v-for="(category, index) in subCategories" :key="index" :text="category" :value="category" />
        </div>
</div>
</template>

<script>
import RadioButton from './RadioButton.vue'
export default {
    props: {
        categories: Array,
        subCategories: Array,
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