<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    <Navbar />

    <main>
        <Dashboard />

        <section id="content">
            <router-view />
        </section>
    </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Dashboard from "@/components/Dashboard.vue";

export default {
    name: "App",
    components: {
        Navbar,
        Dashboard,
    },
};
</script>

<style lang="scss">
$primary: #00325a;
$headerHeight: 85px;

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: rgb(27, 28, 38);
    overflow: hidden;

    main {
        display: grid;
        grid-template-columns: 240px 1fr;
        grid-template-rows: 50px 1fr 50px;
        height: calc(100vh - 65px);

        section {
            height: calc(100vh - 65px);

            &#content {
                height: calc(100vh - $headerHeight + 2px - 1rem);
                background-color: $lightgrey;

                padding: {
                    top: 3rem;
                    left: 3rem;
                    right: 3rem;
                }
            }
        }
    }
}
</style>
