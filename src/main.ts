// import './assets/main.css'
import './assets/global.css'

import { createApp } from 'vue'
import App from './App.vue'
import  store   from './store/store.js'
import router from './router'


const app = createApp(App)
// Sử dụng Vuex store
// app.use(store)
app.use(router)

app.mount('#app')
