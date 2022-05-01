<template>
    <div class="project">
        <h3 class="text-underline">
            {{ $route.params.projectName }}
        </h3>

        <div class="mt-4">
            <template v-if="items && items.length > 0">
                <div class="accordion mb-3" v-for="(item, key) in items" :key="key">
                    <EnvironmentRow :data="{
                        item: item,
                        uniqueDataKeys: uniqueDataKeys
                    }" />

                    <div class="row text-end">
                        <div class="col mb-4">
                            <!-- <button v-on:click="editEnvironment(item, item.envName)" type="button" class="btn btn-primary waves-effect">
                                <i class="fas fa-pen me-2"></i>
                                <span>Edit</span>
                            </button> -->

                            <button v-on:click="deleteEnvironment(item)" type="button" class="btn btn-danger waves-effect">
                                <i class="fas fa-trash me-2"></i>
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            </template>

            <template v-else>
                <p>
                    It seems like this project got no credentials yet...
                </p>
            </template>
        </div>

        <caption>
            List of environments from this project.
        </caption>

        <div class="row text-end">
            <div class="col">
                <router-link to="/" class="btn btn-info waves-effect m-0 me-2">
                    <span>Back to list</span>
                </router-link>

                <router-link 
                    :to="`/create-environment/${$route.params.projectName}`"
                    class="btn btn-primary waves-effect m-0"
                >
                    <i class="fas fa-plus me-2"></i>
                    <span>Create new environment</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import EnvironmentRow from '@/components/EnvironmentRow.vue';
import { api } from '../utils/api';
import { toRaw } from 'vue';
import Swal from 'sweetalert2';

export default {
    components: {
        EnvironmentRow,
    },
    data() {
        return {
            arr: "XD",
            items: null,
            uniqueDataKeys: null,
        };
    },
    mounted() {
        const params = this.$route.params;
        const projectName = params.projectName;

        api('details_project', {
            projectName: projectName,
        }).then(async response => {
            const json = await response.json();
            this.items = json.items;
            this.uniqueDataKeys = json.uniqueDataKeys;
        });
    },
    methods: {
        editEnvironment: function (item, envName) {
            item = toRaw(item);
            this.$router.push({ path: `/edit/environment/${this.$route.params.projectName}/${envName}` });
        },
        deleteEnvironment: async function (item) {
            item = toRaw(item);

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: true,
                timer: 10000,
                timerProgressBar: true,
            });

            Toast.fire({
                title: `Do you really want to delete "${item.envName}" environment?`,
                focusCancel: true,
                showCancelButton: true,
                confirmButtonText: 'Confirm',
            }).then(async result => {
                if (!result.isConfirmed) {
                    return false;
                }

                const response = await api('delete_environment', {
                    projectName: this.$route.params.projectName,
                    name: item.envName,
                });

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });

                const text = await response.text();

                if (text === 'PROJECT_ENVIRONMENT_SUCCESSFULLY_DELETED') {
                    api('details_project', {
                        projectName: this.$route.params.projectName,
                    }).then(async response => {
                        const json = await response.json();
                        this.items = json.items;
                        this.uniqueDataKeys = json.uniqueDataKeys;
                    });

                    return Toast.fire({
                        icon: 'success',
                        title: `Deleted environment "${item.envName}"`
                    });
                }

                Toast.fire({
                    icon: 'error',
                    title: 'An error occurred. Please contact your admin!'
                });
            });
        },
    },
};
</script>

<style lang="scss">
.accordion {
    padding: 0 16px;
    box-shadow: 0 0 4px #0000004a;
    border-radius: .25rem;

    &.active {
        .heading {
            i {
                transform: rotate(180deg);
            }
        }
    }

    .heading {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #2e73e4;
        cursor: pointer;
        padding: 16px 0;

        span {
            display: block;
            width: max-content;
            white-space: nowrap;
        }

        i {
            margin-left: auto;
            text-align: right;
            font-size: 20px;
            transition: .467s cubic-bezier(1, -.5, .25, 1.467);
        }
    }

    .body {
        display: none;
        padding: 0 0 16px 0;
    }
}

caption {
    width: 100%;
    display: block;
    font-style: italic;
}

.project table thead tr th:first-child {
    padding-left: 0;
}
</style>
