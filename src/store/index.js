import { reactive } from 'vue';

export const store = reactive({
    apiUri: 'http://localhost:3000/products',
    modal: {
        show: false,
    }
})