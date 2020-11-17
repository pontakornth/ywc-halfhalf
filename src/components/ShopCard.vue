<template>
    <div class="Card">
        <div class="CardHeader">
            <img class="CardImage" :src="imageUrl">
            <div class="CardHeaderText">
                <h3 class="CardTitle">{{ name }}</h3>
                <span class="Tag" v-if="tag">{{ tag }}</span>
                <div class="CardInfo">
                    <span class="CardInfoItem">{{ category }} </span>
                    <span v-if="priceLevel" class="CardInfoItem"> 
                        <span v-for="i in 3" :class="i <= priceLevel && 'text-text-dark'" :key="i">฿</span>
                    </span>
                    <span class="CardInfoItem"> {{ location }} </span>
                </div>
            </div>
        </div>
        <div class="CardDescription">
            <p class="CardDescrptionText"> {{ description }}</p>
            <span class="text-text-dark">เมนูแนะนำ:</span> <span>{{ recommendation }}</span>
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
        location: String,
        imageUrl: String,
        description: String,
        recommenedItem: Array,
    },
    computed: {
        recommendation() {
            return this.recommenedItem.join(",")
        }
    }
}
</script>

<style lang="postcss" scoped>
.Card {
    @apply border border-blue-200 font-medium;
}

.CardTitle {
    @apply font-bold text-xl inline-block pr-4;
}
.CardImage {
    @apply w-full;
    min-height: 14rem;
    height: auto;
}

.CardHeaderText, .CardDescription {
    @apply p-4 flex-1;
}

.Tag {
    padding: .33em;
    @apply text-sm font-bold rounded-sm inline-block bg-secondary text-white;
}

.CardInfo, .CardDescription {
    @apply text-text-gray; 
}

.CardDescription > p {
    @apply pb-2;
}

.CardInfo {
    @apply flex pb-4 border-b border-gray-200 ;
}


.CardInfo span {
    @apply inline-block ;
}

.CardInfo > span:not(:last-child)::after {
    content: '|';
    @apply text-text-gray px-2;

}
@screen lg {
    .Card{
        @apply flex;
    }
}
</style>
