<template>
    <div id="header">
        <router-link to="/">
            <div class="logo">
                <Logo subline="Credentials Manager" />
            </div>
        </router-link>
    </div>
</template>

<script>
import Logo from "./Logo.vue";

export default {
    name: "Navbar",
    components: {
        Logo,
    },
};
</script>

<style lang="scss">
#header {
    padding: 10px;
    display: flex;
    height: 60px;
    background-color: $primary;
    position: relative;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
}
</style>
