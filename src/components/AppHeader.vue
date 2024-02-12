<script>
export default {
    data() {
        return {
            links: [
                {
                    text: 'Donna',
                    url: '#',
                },
                {
                    text: 'Uomo',
                    url: '#',
                },
                {
                    text: 'Bambini',
                    url: '#',
                }
            ],
            logo: 'logo',
            icons: 'icons'
        };
    }
}
</script>
<template>
    <header>
        <ul>
            <li v-for="link in links">
                <a :href="link.url">
                    {{ link.text }}
                </a>
            </li>
        </ul>
        <img src="../assets/img/boolean-logo.png" alt="">
        <div class="icons">
            <i class="fa-regular fa-user"></i>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-bag-shopping"></i>
        </div>
    </header>
</template>
<style scoped lang="scss">
header {
    color: white;
    background-color: hsl(24.71deg 100% 50%);
    display: flex;
    align-items: center;
    padding: 0.5rem 200px;
    gap: calc(100% / 3 - 10px);

    img {
        width: 150px;
    }

    ul {
        display: flex;
        gap: 20px;
    }

    .icons {
        display: flex;
        gap: 10px;
    }
}
</style>