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
    margin-left: 1rem;
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
    @apply border border-blue-300;
    display: grid;
    place-items: center;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    transform: translateY(-.1em);
}

input + .RadioControl::before {
    content: "";
    width: .5em;
    height: .5em;
    border-radius: 50%;
    transition: 180ms transform ease-in-out;
    box-shadow: inset .5em .5em currentColor;
    transform: scale(0);
}

input:checked + .RadioControl::before {
    transform: scale(1);

}


.RadioInput input:checked + .RadioControl {
    box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
}

</style>
