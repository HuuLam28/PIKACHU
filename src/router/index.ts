import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from './../components/MainScreen.vue'
import InteractScreen from './../components/InteractScreen.vue'
import resultScreen from './../components/resultScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainScreen,
    },
    {
      path: '/interactScreen',
      component: InteractScreen,
    },
    {
      path: '/resultScreen',
      component: resultScreen,
    },
  ]
});

export default router
