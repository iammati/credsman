<template>
    <td>{{ data.path }}</td>
    <td>{{ data.last_modified }}</td>
    <td>{{ data.status }}</td>

    <td>
        <button 
            v-on:click="details({
                data: data,
            })"
            class="btn btn-primary waves-effect"
        >
            <i class="fas fa-lg fa-list"></i>
        </button>

        <button 
            v-on:click="deleteProject({
                data: data,
            })"
            class="btn btn-danger waves-effect"
        >
            <i class="fas fa-lg fa-trash"></i>
        </button>
    </td>
</template>

<script>
import Swal from 'sweetalert2';
import { api } from '../utils/api';
import { toRaw } from 'vue';

export default {
    props: {
        data: Object,
    },
    methods: {
        api: api,

        details: async function (data) {
            data = toRaw(data.data);
            this.$router.push({ path: `/projects/${data.path}`, params: { name: data.path } });
        },

        deleteProject: async function (data) {
            data = toRaw(data.data);
            const projectName = data.path;

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: true,
                timer: 10000,
                timerProgressBar: true,
            });

            Toast.fire({
                title: `Do you really want to delete "${projectName}" project?`,
                focusCancel: true,
                showCancelButton: true,
                confirmButtonText: 'Confirm',
            }).then(result => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                });

                if (result.isConfirmed) {
                    api('delete_project', {
                        projectName: projectName,
                    }).then(response => {
                        response.text().then(text => {
                            if (text === 'PROJECT_NAME_DOES_NOT_EXIST') {
                                return Toast.fire({
                                    icon: 'error',
                                    title: `The project "${projectName}" does no longer exist!`,
                                });
                            }
                        })

                        if (response.status !== 200) {
                            return Toast.fire({
                                icon: 'error',
                                title: `Deleting "${projectName}" project failed! Please contact your admin!`,
                            });
                        }

                        Toast.fire({
                            icon: 'info',
                            title: `Project ${projectName} has been deleted.`
                        });

                        this.$router.push('/create');
                        setTimeout(() => this.$router.push('/'), 1);
                    });
                } else if (result.isConfirmed) {
                    Swal.fire('Cancel', '', 'info')
                }
            });
        },
    },
};
</script>

<style scoped lang="scss">
button {
    padding-left: 12px;
    padding-right: 12px;
}
</style>
