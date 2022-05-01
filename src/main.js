import 'mdb-vue-ui-kit/css/mdb.min.css';
import 'mdb-vue-ui-kit/js/mdb.common';
import 'node-waves/dist/waves.min.css';
import 'sweetalert2/src/sweetalert2.scss';
import './js/mdb';

import { createApp } from 'vue';
import App from './App.vue';
// import './registerServiceWorker';
import router from './router';

createApp(App).use(router).mount('#app');
