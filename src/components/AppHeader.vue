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
            <li v-for="link in links"> {{ link.text }}</li>
        </ul>
        <img src="../assets/img/boolean-logo.png" alt="">
        <div>
            icone
        </div>
    </header>
</template>
<style scoped lang="scss">
ul {
    display: flex;
    gap: 20px;
}

header {
    color: white;
    background-color: hsl(24.71deg 100% 50%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 0;

    img {
        width: 150px;
    }
}
</style>