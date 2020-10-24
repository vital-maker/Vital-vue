import { createApp } from 'vue'

import App from './App.vue'
// import mixins from './data'
import router from '@/router'
import '@/assets/scss/styles.scss'
import '@/assets/css/animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import vital from './index'

window.$ = require('jquery')
createApp(App)
  .use(vital)
  .use(router)
  .mount('#app')
