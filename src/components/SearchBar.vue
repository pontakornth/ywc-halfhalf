<template>
     <div class="SearchBar">
       <div class="LogoContainer px-4 md:px-8 px-4 md:px-8">
       <a href="/">
           <img src="../assets/halfhalf-logo.png" class="Logo Logo--normal" />
           <img src="../assets/halfhalf-logo-mini.png" class="Logo Logo--mini" />
       </a>
       </div>
      <div class="InputBar">
        <input class="Input" v-model="term" placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม">
        <button class="SearchButton"></button>
      </div>
      <img src="../assets/filter.png" class="Filter" />
     </div>
</template>

<script>
export default {
    name: "SearchBar"
}
</script>

<style lang="postcss" scoped>
.LogoContainer {
  padding-top: 10px;
  padding-bottom: 10px;
}
.Logo {
  height: 40px;
  width: auto;
}

.Logo--normal {
  display: none;
}


.SearchBar {
  @apply flex justify-between items-center bg-white border;
}

.InputBar {
 @apply flex h-full ml-auto h-auto items-center rounded-lg overflow-hidden mr-4 ; 
 @apply relative;
 flex: 1 1 0%; 
 box-shadow: black 0px 0px 1px; 
}

.Input {
  @apply p-2;
}

.Filter {
  @apply mr-4 cursor-pointer;
  height: 20px;
  width: auto;
}

@screen md {
  .InputBar {
    @apply mr-8;
  }

  .Logo--normal {
    display: block;
  }

  .Logo--mini {
    display: none;
  }
}

</style>