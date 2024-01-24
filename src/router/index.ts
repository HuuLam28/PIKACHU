import { createRouter, createWebHistory } from 'vue-router'
import StartGame from './../components/StartGame.vue'
import MainGame from './../components/MainGame.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: StartGame,
    },
    {
      path: '/maingame',
      component: MainGame,
    },
  ]
})

export default router
