<template>
    <label class="Radio">
        <span class="RadioInput">
            <input type="radio" :value="value">
            <span class="RadioControl"></span>
        </span>
        <span class="RadioLabel">{{ text }}</span>
    </label>
</template>

<script>
export default {
    name: "Radio",
    props: {
        value: String,
        text: String,
    }
}
</script>

<style lang="postcss" scoped>
.Radio {
    @apply gap-2 py-2;
    color: #1990ff;
    display: grid;
    grid-template-columns: min-content auto;
}

.RadioInput {
    @apply flex;
    margin-left: -1em;
}

.RadioLabel {
    @apply text-text-dark;
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
    background: radial-gradient(#1990ff 50%, rgba(255, 0, 0, 0) 51%);
}

.RadioInput input:checked + .RadioControl {
    box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
}

</style>