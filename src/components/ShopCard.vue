<template>
    <div class="Card">
        <div class="CardHeader">
            <img class="CardImage" :src="imageUrl">
            <div class="CardHeaderText">
                <h3 class="CardTitle">{{ title }}</h3>
                <span v-if="tag">{{ tag }}</span>
                <div class="CardInfo">
                    <span class="CardInfoItem">{{ category }} </span>
                    <span v-if="priceRange" class="CardInfoItem"> {{ priceRange }} </span>
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
    name: "ShopCard"
}
</script>
