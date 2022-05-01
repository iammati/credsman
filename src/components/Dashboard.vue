<template>
    <section id="nav">
        <nav>
            <ul>
                <li class="waves-effect waves-light">
                    <router-link to="/">
                        <i class="fas fa-home me-2"></i>
                        <span>Home</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </section>
</template>

<script>
import Swal from "sweetalert2";

export default {
    name: "Dashboard",

    data() {
        return {
            routerData: {
                status: "unknown",
                warning: "none",
            },
        };
    },
    mounted() {
        Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 10,
        });
    },
}
</script>

<style lang="scss">
main section#nav {
    position: relative;
    background-color: $primary;
    box-shadow: rgb(0 0 0 / 41.67%) 3px 0 2px 0px;
    padding-top: 3rem;

    nav {
        height: 100%;

        ul {
            position: relative;
            margin: 0;
            padding-left: 0;
            list-style: none;
            height: 100%;

            li {
                width: 100%;

                &:hover a,
                a.router-link-exact-active {
                    background-color: darken($primary, 5%);
                }

                a {
                    color: #fff;
                    text-decoration: none;
                    display: block;
                    padding: 16px;

                    &.router-link-exact-active {
                        // color: #00325a;
                    }
                }
            }
        }
    }
}
</style>
