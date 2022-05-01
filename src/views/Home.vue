<template>
    <div class="home">
        <h3 class="mb-0">
            Credsman
        </h3>

        <p>
            <i>– the better credentials manager</i>
        </p>

        <hr>

        <div class="row">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-striped table-hover table-sm ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Last modified</th>
                                <th scope="col"></th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(item, index) in items" :key="index">
                                <th scope="row">
                                    {{ index + 1 }}
                                </th>

                                <ProjectRow :data="item" />
                            </tr>
                        </tbody>

                        <caption>
                            <i>
                                List of projects.
                            </i>
                        </caption>
                    </table>
                </div>
            </div>
        </div>

        <div class="row text-end">
            <div class="col">
                <router-link to="/create" class="btn btn-primary waves-effect m-0">
                    <i class="fas fa-plus me-2"></i>
                    <span>Create new project</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectRow from '@/components/ProjectRow.vue';
import { api } from '../utils/api';

export default {
    components: {
        ProjectRow,
    },
    data() {
        return {
            items: null,
        };
    },
    async mounted() {
        const response = await api('list_projects');
        this.items = await response.json();
    },
};
</script>

<style scoped lang="scss">
tr {
    vertical-align: middle;
}
</style>
