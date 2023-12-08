import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from './stores/auth'

import App from './App.vue'
import Home from './screens/Home.vue'
import Login from './screens/Login.vue'

import Register from './screens/Register.vue'
import MaterialsGrid from './screens/register/materials/Grid.vue'
import MaterialsMaintence from './screens/register/materials/Maintence.vue'
import UsersGrid from './screens/register/users/Grid.vue'
import UsersMaintence from './screens/register/users/Maintence.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Acesso', component: Login },
    { path: '/home', name: 'Início', component: Home },
    { path: '/register', name: 'Cadastro', component: Register },
    { path: '/register/materials', name: 'Cadastro de materiais', component: MaterialsGrid },
    { path: '/register/materials/maintence', name: 'Cadastro de materiais - Manutenção', component: MaterialsGrid },
    { path: '/register/materials/:id', name: 'Cadastro de materiais - Alteração', component: MaterialsMaintence },
    { path: '/register/users', name: 'Cadastro de usuários', component: UsersGrid },
    { path: '/register/users/maintence', name: 'Cadastro de usuários - Manutenção', component: UsersMaintence },
    { path: '/register/users/:id', name: 'Cadastro de usuários - Alteração', component: UsersMaintence }
  ]
})

router.beforeEach((to, from) => {
  const auth = useAuth()

  console.log(to.name, auth.isLogged())

  if (auth.isLogged())
    if (to.name === 'Acesso')
      return 'home'
    else
      '/'
})

const pinia = createPinia()

const app = createApp(App)

app
  .use(pinia)
  .use(router)
  .mount('#app')