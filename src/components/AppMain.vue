<script>
import axios from 'axios';
import AppCard from './AppCard.vue';
import { store } from '../store';
export default {
    data() {
        return {
            products: []

        }
    },
    components: { AppCard },

    created() {
        axios.get('http://localhost:3000/products').then((res) => {
            this.products = res.data;
        })
    },

    methods: {
        handleCardOpen() {
            store.modal.show = true;
        }
    }
}
</script>
<template>
    <main class="container">
        <AppCard v-for="product in products" @showProduct="handleCardOpen" :img="`../assets/img/${product.frontImage}`"
            :name="product.name" :brand="product.brand" :price="product.price">
        </AppCard>
    </main>
</template>
<style scoped lang="scss">
.container {
    display: flex;
    padding: 50px 200px;
    flex-wrap: wrap;
    margin: auto;
}
</style>