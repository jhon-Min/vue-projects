import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'animate.css'
import './assets/vendors/image-hover/imagehover.css-master/css/imagehover.min.css'
import '@fortawesome/fontawesome-free/js/all'
import './assets/vendors/feather-icons/feather.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App);
app.config.globalProperties.globalArray = []
app.use(VueSweetalert2).use(router).mount('#app')
