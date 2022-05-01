import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Create from '../views/Create.vue';
import CreateCredential from '../views/CreateCredential.vue';
import CreateEnvironment from '../views/CreateEnvironment.vue';
import Project from '../views/Project.vue';
import EditEnvironment from '../views/EditEnvironment.vue';
import Waves from 'node-waves';
import { mdb } from '../js/mdb';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/create',
        name: 'Create',
        component: Create,
    },
    {
        path: '/create-environment/:projectName',
        name: 'Create-Environment',
        component: CreateEnvironment,
        props: true,
    },
    {
        path: '/create-credential',
        name: 'Create-Credential',
        component: CreateCredential,
    },
    {
        path: '/projects/:projectName',
        name: 'Project',
        component: Project,
        props: true,
    },
    {
        path: '/edit/environment/:projectName/:envName',
        name: 'Edit-Environment',
        component: EditEnvironment,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// router.beforeEach(() => progress.start());
router.afterEach(() => {
    Waves.init();
    
    window.addEventListener('load', () => {
        mdb();
    })
});

export default router;
