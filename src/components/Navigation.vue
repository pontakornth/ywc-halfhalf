<template>
    <div class="bg-primary">
     <nav class="Navigation container">
       <a class="underline font-medium" href="/">หน้าแรก</a>
       <span>/</span>
       <span class="font-bold">ค้นหา</span>
     </nav>
    </div>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style lang="postcss" scoped>
.Navigation {
  @apply py-3 px-3 flex bg-primary text-white mx-auto;
}
.Navigation * {
  @apply mr-3 ;
}

</style>