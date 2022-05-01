<template>
    <div class="create">
        <h3 class="text-underline">
            Create new environment
        </h3>

        <hr class="my-5">

        <div class="row">
            <div class="col-12 col-lg-4">
                <form id="create-environment">
                    <div class="form-outline mb-4">
                        <select id="projectName" class="form-control active">
                            <option disabled selected>
                                {{ $route.params.projectName }}
                            </option>
                        </select>

                        <label class="form-label" for="projectName">Project name</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input id="name" class="form-control" />
                        <label class="form-label" for="name">Name</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input id="environment" class="form-control" />
                        <label class="form-label" for="environment">Environment</label>
                    </div>

                    <div class="text-center">
                        <router-link 
                            :to="`/projects/${$route.params.projectName}`"
                            type="button"
                            class="btn btn-info btn-block waves-effect w-auto"
                        >
                            <span>Back to list</span>
                        </router-link>

                        <button type="submit" class="btn btn-primary btn-block waves-effect w-auto">
                            <i class="fas fa-plus me-2"></i>
                            <span>Create new environment</span>
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
import Swal from 'sweetalert2';

export default {
    data () {
        return {
            datas: 0,
            projects: [],
        }
    },
    mounted() {
        mdb();

        (async () => {
            const response = await api('list_projects');
            this.projects = await response.json();
        })();

        document.querySelector('form#create-environment').onsubmit = e => {
            e.preventDefault();

            const data = [
                document.querySelector('select#projectName').value,
                document.querySelector('input#name').value,
                document.querySelector('input#environment').value,
            ];

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
            });

            (async () => {
                const response = await api('create_environment', {
                    projectName: data[0],
                    name: data[1],
                    environment: data[2],
                });

                const text = await response.text();
                
                if (text === 'PROJECT_SUCCESSFULLY_CREATED_ENVIRONMENT') {
                    Toast.fire({
                        icon: 'success',
                        title: `New environment "${data[2]}" has been created.`,
                    });

                    return this.$router.push({ path: `/projects/${data[0]}` });
                }

                Toast.fire({
                    icon: 'error',
                    title: 'An error occurred. Please contact your admin!',
                });
            })();
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
