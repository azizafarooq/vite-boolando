<script>
export default {
    props: {
        frontImage: String,
        brand: String,
        name: String,
        price: String,
    },
}
</script>

<template>
    <div @click="$emit('showProduct')" class="card">
        <img :src="`../assets/img/${frontImage}`" alt="">
        <p> {{ brand }} </p>
        <h3>{{ name.toUpperCase() }}</h3>
        <p>{{ price }} €</p>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc(100% / 3 - 10px);
    margin-bottom: 20px;
    margin-left: 10px;
    cursor: pointer;
}
</style>
