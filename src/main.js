import './assets/css/style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { companyInfo } from './companyInfo.js'

const app = createApp(App)

app.config.globalProperties.$company = companyInfo;

app.use(router)

app.mount('#app')
