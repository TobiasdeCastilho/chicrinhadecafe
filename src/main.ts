import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Login from './screens/Login.vue'
import Home from './screens/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'Acesso', component: Login},
    // {path: '/password', name: 'Esqueci minha senha', component: PasswordForget},
    {path: '/home', name: 'Início', component: Home},
  ]
})

const app = createApp(App)

app.use(createPinia())

app
  .use(router)
  .mount('#app')
