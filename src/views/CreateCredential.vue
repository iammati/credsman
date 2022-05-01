<template>
    <div class="create">
        <h3 class="text-underline">
            Create new credential
        </h3>

        <hr class="my-5">

        <div class="row">
            <div class="col-12 col-lg-4">
                <form id="create-credential">
                    <div class="form-outline mb-4">
                        <select id="projectName" class="form-control active">
                            <option v-for="(item, index) in projects" :key="index">
                                {{ item.path }}
                            </option>
                        </select>

                        <label class="form-label" for="projectName">Project name</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input id="credentialName" class="form-control" />
                        <label class="form-label" for="credentialName">Credential name</label>
                    </div>

                    <div v-if="datas" id="datas" class="form-outline mb-4">
                        <template v-for="i in datas" :key="i">
                            <div class="form-outline input-group mb-4">
                                <input class="form-control" placeholder="Key" />
                                <input class="form-control" placeholder="Value" />

                                <span class="input-group-text">
                                    <button v-on:click="removeDatas()" class="btn btn-danger waves-effect m-0">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </span>
                            </div>
                        </template>
                    </div>

                    <div class="form-outline mb-4">
                        <button 
                            v-on:click="createDatas()"
                            class="btn btn-primary btn-block waves-effect w-auto"
                            type="button"
                        >
                            <i class="fas fa-plus me-2"></i>
                            <span>Add datas</span>
                        </button>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-block waves-effect w-auto">
                            <i class="fas fa-plus me-2"></i>
                            <span>Create new credential</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { api } from "../utils/api";
import { mdb } from '../js/mdb';

export default {
    data () {
        return {
            datas: 0,
            projects: [],
        }
    },
    methods: {
        createDatas: function () {
            this.datas = this.datas + 1;
            setTimeout(() => mdb(), 0);
        },
        removeDatas: function () {
            this.datas = this.datas - 1;
        },
    },
    async mounted() {
        const response = await api('list_projects');
        this.projects = await response.json();

        document.querySelector('form#create-credential').onsubmit = async e => {
            e.preventDefault();

            const datas = [];
            const projectName = document.querySelector('select#projectName').value;

            Array.from(document.querySelectorAll('#datas .form-outline')).map(node => {
                const [key, value] = [
                    node.querySelector('input:nth-child(1)'),
                    node.querySelector('input:nth-child(2)'),
                ];

                datas.push({
                    key: key.value,
                    value: value.value,
                });
            });

            // const Toast = Swal.mixin({
            //     toast: true,
            //     position: 'top-end',
            //     showConfirmButton: false,
            //     timer: 5000,
            //     timerProgressBar: true,
            // });

            const response = await api('create_credential', {
                projectName: projectName,
                datas: datas,
            });

            const json = await response.json();
            console.log(json);
        };
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
