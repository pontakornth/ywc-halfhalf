<template>
    <div class="Drawer">
        <div class="FilterGroup">
            <label class="FilterLabel">ประเภทร้านค้า</label>
            <radio-button text="ทั้งหมด" value="ทั้งหมด" />
            <radio-button text="ร้านอาหารและเครื่องดื่ม" value="ร้านอาหารและเครื่องดื่ม" />
        </div>
        <div class="FilterGroup">
            <label class="FilterLabel">ใกล้ฉัน / ทั้งหมด</label>
            <!-- TODO: Implement real dropdown -->
            <input class="p-2 rounded my-4 block w-full border border-blue-300" type="text" placeholder="Placeholder" name="Place" />
        </div>
</div>
</template>

<script>
import RadioButton from './RadioButton.vue'
export default {
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

.Radio {
    @apply gap-2 py-2;
    color: rebeccapurple;
    display: grid;
    grid-template-columns: min-content auto;
}

.RadioInput {
    @apply flex;
    margin-left: -1em;
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

.RadioInput input:checked + .RadioControl {
    background: radial-gradient(currentcolor 50%, rgba(255, 0, 0, 0) 51%);
}

.RadioInput input:checked + .RadioControl {
    box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
}

@screen md {
    .Drawer {
        @apply block;
    }
}
</style>