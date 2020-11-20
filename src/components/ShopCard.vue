<template>
    <div class="Card">
        <img class="CardImage" :src="imageUrl">
        <div class="CardHeader">
            <div class="CardHeaderText">
                <h3 class="CardTitle">{{ name }}</h3>
                <span class="Tag" v-if="['Y', 'N'].includes(tag)"> {{ tagText }}</span>
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
        },
        tagText() {
            switch (this.tag) {
                case 'Y':
                    return 'เปิดอยู่'
                    break
                case 'N':
                    return 'ปิดแล้ว'
                    break
            }
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

.Tag--open {
    @apply bg-secondary;
}

.Tag--close {
    @apply bg-text-dark;
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
        @apply grid;
        grid-template-areas:
        'image header header'
        'image description description';
        grid-template-columns: 250px 1fr 1fr;
        grid-gap: 0;
    }
    
    .CardHeader {
        grid-area: header;
    }

    .CardImage {
        @apply p-2;
        grid-area: image;
        height: auto;
    }

    .CardDescription {
        grid-area: description;
        margin-top: -2rem;
    } 
}
</style>
