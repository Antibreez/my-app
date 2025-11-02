import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/main.scss'
import App from './App.vue'
import { router } from './router'
import { register } from 'swiper/element/bundle'
import { createI18n } from 'vue-i18n'
import { i18nConfig } from './i18n'

register()

const pinia = createPinia()
const i18n = createI18n(i18nConfig)
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
