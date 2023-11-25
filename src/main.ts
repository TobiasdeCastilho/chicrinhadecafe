import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Login from './screens/Login.vue'
import Home from './screens/Home.vue'
import Register from './screens/Register.vue'
import { useAuth } from './stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Acesso', component: Login },
    { path: '/home', name: 'Início', component: Home },
    { path: '/register', name: 'Cadastro', component: Register }
  ]
})

router.beforeEach((to, from) => {
  const auth = useAuth()
  console.log(to.name, auth.isLogged)
  if (to.name !== 'Acesso')
    if (!auth.isLogged)
      return ''

})

const pinia = createPinia()

const app = createApp(App)

app
  .use(pinia)
  .use(router)
  .mount('#app')