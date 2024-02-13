<script>
export default {
    data() {
        return {
            cards: [
                {
                    id: 1,
                    frontImage: '1.webp',
                    backImage: '1b.webp',
                    brand: "Levi's",
                    name: 'Relaxed Fit',
                    price: 29.99,
                    isInFavorites: true,
                    badges: [
                        {
                            type: 'tag',
                            value: 'Sostenibilità',
                        },
                        {
                            type: 'discount',
                            value: '-50%',
                        },
                    ],
                },
                {
                    id: 2,
                    frontImage: '2.webp',
                    backImage: '2b.webp',
                    brand: 'Guess',
                    name: 'Roses Tee',
                    price: 20.99,
                    isInFavorites: true,
                    badges: [
                        {
                            type: 'discount',
                            value: '-30%',
                        },
                    ],
                },
                {
                    id: 3,
                    frontImage: '3.webp',
                    backImage: '3b.webp',
                    brand: 'Come Zucchero Filato',
                    name: 'Voglia di colori pastello',
                    price: 129.99,
                    isInFavorites: false,
                    badges: [
                        {
                            type: 'discount',
                            value: '-30%',
                        },
                    ],
                },
                {
                    id: 4,
                    frontImage: '4.webp',
                    backImage: '4b.webp',
                    brand: "Levi's",
                    name: 'Tee Unisex',
                    price: 14.99,
                    isInFavorites: false,
                    badges: [
                        {
                            type: 'tag',
                            value: 'Sostenibilità',
                        },
                        {
                            type: 'discount',
                            value: '-50%',
                        },
                    ],
                },
                {
                    id: 5,
                    frontImage: '5.webp',
                    backImage: '5b.webp',
                    brand: 'Maya Deluxe',
                    name: 'Stripe Bodice',
                    price: 99.99,
                    isInFavorites: true,
                    badges: [
                        {
                            type: 'tag',
                            value: 'Sostenibilità',
                        },
                        {
                            type: 'discount',
                            value: '-50%',
                        },
                    ],
                },
                {
                    id: 6,
                    frontImage: '6.webp',
                    backImage: '6b.webp',
                    brand: 'Esprit',
                    name: 'Maglione - Black',
                    price: 29.99,
                    isInFavorites: true,
                    badges: [
                        {
                            type: 'tag',
                            value: 'Sostenibilità',
                        },
                    ],
                },
            ]

        }
    }
}
</script>
<template>
    <main class="container">
        <div v-for="product in cards" class="card">
            <div>
                <img :src="`../assets/img/${product.frontImage}`" alt="">
                <p> {{ product.brand }} </p>
                <h3>{{ product.name.toUpperCase() }}</h3>
                <p>{{ product.price }} €</p>
            </div>
        </div>
    </main>
</template>
<style scoped lang="scss">
.container {
    display: flex;
    padding: 50px 200px;
    flex-wrap: wrap;

    .card {
        width: calc(100% / 3 - 10px);
        margin-bottom: 20px;
        margin-left: 10px;
    }
}
</style>