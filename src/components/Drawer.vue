<template>
    <div class="Drawer">
        <div class="FilterGroup">
            <label>ประเภทร้านค้า</label>
            <input type="radio" name="categories" value="ทั้งหมด" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Drawer",
}
</script>

<style lang="postcss" scoped>
.Drawer {
    @apply p-2 w-1/4;
    display: none;
}

@screen md {
    .Drawer {
        @apply block;
    }
}
</style>