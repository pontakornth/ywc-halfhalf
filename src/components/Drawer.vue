<template>
    <div class="Drawer">
        <div class="FilterGroup">
            <label class="FilterLabel">ประเภทร้านค้า</label>
            <label class="Radio">
                <span class="RadioInput">
                    <input type="radio" value="ทั้งหมด">
                    <span class="RadioControl"></span>
                </span>
                <span class="RadioLabel">ทั้งหมด</span>
            </label>
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
    @apply p-2 w-1/4 border border-blue-200 mr-8;
    display: none;
}

.FilterGroup {
    @apply p-2 ;
}

.FilterLabel {
    @apply font-bold;
}

.Radio {
    @apply gap-2;
    color: rebeccapurple;
    display: grid;
    grid-template-columns: min-content auto;
}

.RadioInput {
    display: flex;
}

.RadioLabel {
    line-height: 1;
}

.RadioInput input {
    opacity: 0;
    width: 0;
    height: 0;
}

.RadioControl {
    display: block;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: 0.1em solid currentColor;
    transform: translateY(-0.05em);
}

.RadioInput {
    & input {
       &:checked + .RadioControl {
           background: radial-gradient(currentcolor 50%, rgba(255, 0, 0, 0) 51%);
       }
    }
}


@screen md {
    .Drawer {
        @apply block;
    }
}
</style>