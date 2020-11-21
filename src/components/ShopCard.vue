<template>
    <div class="Card">
        <img class="CardImage" :src="imageUrl">
        <div class="CardHeader">
            <div class="CardHeaderText">
                <h3 class="CardTitle">{{ name }}</h3>
                <span :class="`Tag ${tag == 'Y' ? 'Tag--open' : 'Tag--close'}`" v-if="['Y', 'N'].includes(tag)"> {{ tagText }}</span>
                <div class="CardInfo">
                    <span class="CardInfoItem">{{ category }} </span>
                    <span class="mx-3">|</span>
                    <span v-if="priceLevel" class="CardInfoItem"> 
                        <span v-for="i in 3" :class="i <= priceLevel && 'text-text-dark'" :key="i">฿</span>
                    </span>
                    <span class="mx-3">|</span>
                    <span class="CardInfoItem"> {{ location }} </span>
                </div>
            </div>
        </div>
        <div class="CardDescription">
            <!-- Not anymore -->
            <p class="CardDescrptionText" v-html="safeDescription">
                
            </p>
            <span class="text-text-dark">เมนูแนะนำ:</span> <span>{{ recommendation }}</span>
            <div class="FacilitiesContainer">
                <span v-for="(facility, index) in facilities" :key="index" class="FacilityIcon">
                    <img :src="`${facility}.png`" />
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import sanitize from '../assets/HtmlSanitizer'
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
        facilities: Array,
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
        },
        safeDescription() {
            return sanitize.SanitizeHtml(this.description)
        }
    }
}
</script>

<style lang="postcss" scoped>
.Card {
    @apply border border-blue-200 font-medium bg-white;
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
    padding: .33em .5em;
    @apply text-sm font-bold rounded-sm inline-block bg-secondary text-white;
    transform: translateY(-10%);
}

.Tag--open {
    @apply bg-secondary;
}

.Tag--close {
    @apply bg-text-gray;
}

.CardInfo, .CardDescription {
    @apply text-text-gray; 
}

.CardDescription > p {
    @apply pb-2;
}

.CardInfo {
    @apply flex flex-wrap pb-4 border-b border-gray-200 ;
}


.CardInfo span {
    @apply inline-block ;
}

.FacilitiesContainer {
    @apply flex flex-wrap mb-4 mt-4
}

.FacilityIcon {
    @apply rounded-full border border-secondary;
    margin-right: 6px;
    margin-bottom: 3px;
}

.FacilityIcon img {
    width: 1.1rem;
    height: 1.1rem;
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
