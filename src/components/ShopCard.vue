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
            <span>เมนูแนะนำ:</span> {{ recommendation }}
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
    }
}
</script>

<style lang="postcss" scoped>
.CardImage {
    @apply w-full;
    min-height: 14rem;
    height: auto;
}

.CardHeaderText {
    @apply p-4 flex-1;
}

@screen lg {
    .Card {
        @apply flex;
    }
}
</style>
