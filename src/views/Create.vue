<template>
    <div class="create">
        <h3 class="text-underline">
            Create new project
        </h3>

        <hr class="my-5">

        <div class="row">
            <div class="col-12 col-lg-4">
                <form id="create-project">
                    <div class="form-outline mb-4">
                        <input type="text" id="projectName" class="form-control" />
                        <label class="form-label" for="projectName">Project name</label>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-block waves-effect w-auto">
                            <i class="fas fa-plus me-2"></i>
                            <span>Create new project</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import { api } from "../utils/api";

export default {
    mounted() {
        document.querySelector('form#create-project').onsubmit = e => {
            e.preventDefault();

            const projectName = document.querySelector('input#projectName').value;

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
            });

            if (projectName.length === 0) {
                return Toast.fire({
                    icon: 'error',
                    title: '"Project name"-field is mandatory!',
                });
            }

            api('create_project', {
                projectName: projectName,
            }).then(response => {
                response.text().then(text => {
                    if (text === 'PROJECT_NAME_ALREADY_IN_USE') {
                        return Toast.fire({
                            icon: 'error',
                            title: `The project name "${projectName}" is already in use!`,
                        });
                    }
                })

                if (response.status !== 200) {
                    return Toast.fire({
                        icon: 'error',
                        title: `Creating "${projectName}" project failed! Please contact your admin!`,
                    });
                }

                Toast.fire({
                    icon: 'success',
                    title: `Project "${projectName}" has been created`,
                });

                this.$router.push({ path: `/projects/${projectName}` });
            });
        };
    },
};
</script>
