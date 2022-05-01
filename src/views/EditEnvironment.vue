<template>
    <div class="create">
        <h3 class="text-underline">
            Edit environment
        </h3>

        <ul class="list-unstyled">
            <li>
                <b>Project name: </b>
                {{ this.$route.params.projectName }}
            </li>
            
            <li>
                <b>Environment: </b>
                {{ this.$route.params.envName }}
            </li>
        </ul>

        <hr class="my-5">

        <div class="row">
            <div class="col-12 col-lg-4">
                <form id="edit-environment">
                    <div v-if="datas" id="datas" class="form-outline mb-4">
                        <p>
                            <b>
                                Datas
                            </b>
                        </p>

                        <template v-for="(a, b) in datas" :key="b">
                            <div style="margin-bottom: 24px;">
                                <div v-for="(c, d) in a" :key="d" class="form-outline input-group mb-2">
                                    <input class="form-control" placeholder="Key" :value="`${d}`" />
                                    <input class="form-control" placeholder="Value" :value="`${c}`" />

                                    <span class="input-group-text">
                                        <button v-on:click="removeDatas()" class="btn btn-danger waves-effect m-0">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </template>
                    </div>

                    <div class="text-center">
                        <router-link 
                            :to="`/projects/${$route.params.projectName}`"
                            type="button"
                            class="btn btn-info btn-block waves-effect w-auto"
                        >
                            <span>Back to list</span>
                        </router-link>

                        <button v-on:click="createDatas()" type="button" class="btn btn-primary btn-block waves-effect w-auto">
                            <i class="fas fa-plus me-2"></i>
                            <span>Create new data</span>
                        </button>

                        <button v-on:click="saveDatas()" type="button" class="btn btn-success btn-block waves-effect w-auto">
                            <i class="fas fa-save me-2"></i>
                            <span>Save</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { api } from '../utils/api';
import { mdb } from '../js/mdb';

export default {
    data () {
        return {
            datas: 0,
            projects: [],
        }
    },
    async mounted() {
        mdb();

        document.querySelector('#edit-environment').onsubmit = e => {
            e.preventDefault();

        };

        const response = await api('details_project', {
            projectName: this.$route.params.projectName,
        });

        const json = await response.json();

        json.items.forEach(item => {
            if (item.envName !== this.$route.params.envName) {
                return false;
            }

            this.datas = item.datas;
        });
    },
    methods: {
        createDatas: function () {
            this.datas.push({
                name: '',
            });
        },
    },
};
</script>

<style lang="scss" scoped>
span.input-group-text {
    padding: 0;
    border: unset;

    button {
        padding: 7.5px 15px;
        box-shadow: unset;
        height: 100%;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
}

.form-outline .form-control:not(.placeholder-active)::placeholder {
    opacity: 1 !important;
}
</style>
