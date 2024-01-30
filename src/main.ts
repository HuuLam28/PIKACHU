// import './assets/main.css'
import './assets/global.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store/';


const app = createApp(App)
// Sử dụng Vuex store
//app.use(store)
app.use(router)

app.mount('#app')
