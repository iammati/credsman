<template>
    <i class="fas fa-users"></i>

    <span>
        {{ subline }}
    </span>
</template>

<script>
export default {
    props: {
        subline: String,
    },
};
</script>

<style scoped lang="scss">
    i {
        color: #fff;
        width: 35px;
        text-align: center;
    }

    span {
        color: #fff;
        display: block;
        width: max-content;
    }
</style>
