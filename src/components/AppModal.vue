<script>
import { store } from '../store/index';
export default {
    data() {
        return {
            store,
        }
    },

    props: {
        frontImage: String,
        brand: String,
        name: String,
        price: String,
    },

    methods: {
        handleCardClose() {
            this.store.modal.show = false;
        }
    }
}
</script>
<template>
    <div class="layover">
        <div class="modal">
            <p> {{ name }} </p>
            <p>{{ brand }} </p>
            <p>{{ price }} €</p>
            <i @click="handleCardClose" class="fa-solid fa-xmark"></i>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.layover {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(255, 105, 0, 0.3);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    .modal {
        width: 80%;
        max-width: 900px;
        background-color: white;
        padding: 2rem;
        position: relative;

        .fa-xmark {
            position: absolute;
            right: 0;
            top: 0;
            padding: 1.5rem;
            cursor: pointer;
        }

        img {
            width: 50%;
        }
    }
}
</style>