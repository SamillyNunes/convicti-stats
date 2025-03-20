import './assets/main.css'
import 'vue3-toastify/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import { checkSavedUser } from './utils/checkSavedUser'

const app = createApp(App)

app.use(router)

app.use(createPinia())

app.use(Vue3Toastify, {
  autoClose: 3000,
  position: 'top-right',
} as ToastContainerOptions)

checkSavedUser()

app.mount('#app')
