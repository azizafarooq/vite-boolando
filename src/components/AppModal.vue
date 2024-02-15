<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<template>
    <div class="layover">
        <div class="modal"></div>
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
        padding: 1rem;
    }
}
</style>