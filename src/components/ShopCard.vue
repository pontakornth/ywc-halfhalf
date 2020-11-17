<template>
    <div class="Card">
        <div class="CardHeader">
            <img class="CardImage" :src="imageUrl">
            <div class="CardHeaderText">
                <h3 class="CardTitle">{{ name }}</h3>
                <span v-if="tag">{{ tag }}</span>
                <div class="CardInfo">
                    <span class="CardInfoItem">{{ category }} </span>
                    <span v-if="priceLevel" class="CardInfoItem"> {{ priceLevel }} </span>
                    <span class="CardInfoItem"> {{ location }} </span>
                </div>
            </div>
        </div>
        <div class="CardDescription">
            <p class="CardDescrptionText"> {{ description }}</p>
            <span class="text-black">เมนูแนะนำ:</span> {{ recommendation }}
        </div>
    </div>
</template>

<script>
export default {
    name: "ShopCard",
    props: {
        name: String,
        tag: String,
        category: String,
        priceLevel: Number,
        imageUrl: String,
    }
}
</script>

<style lang="postcss" scoped>
.Card {
    @apply border border-primary font-medium;
}

.CardTitle {
    @apply font-bold text-xl;
}
.CardImage {
    @apply w-full;
    min-height: 14rem;
    height: auto;
}

.CardHeaderText, .CardDescription {
    @apply p-4 flex-1;
}

.CardInfo, .CardDescription {
    @apply text-text-gray;
}

@screen lg {
    .Card k{
        @apply flex;
    }
}
</style>
