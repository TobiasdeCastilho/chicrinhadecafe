/* Dependencies */
import { defineStore } from 'pinia'
import { ref } from 'vue'

/* Function */
import { request } from '@/functions/requests'
import { type Router } from 'vue-router'

interface Auth { username: string, displayName: string, token: string }

export const useAuth = defineStore('auth', () => {
  const user = ref<Auth>({ username: '', displayName: '', token: '' })
  const logged = ref<boolean>(false)

  getStore()

  function setStore() {
    localStorage.setItem('auth', JSON.stringify({ user: user.value, logged: logged.value }))
  }

  function getStore() {
    const store = localStorage.getItem('auth')
    if (store) {
      const values = JSON.parse(store)
      user.value = values.user
      logged.value = values.logged
    }
  }

  function getUser() {
    return user.value
  }

  function login(_user: string, _pass: string, _router: Router) {
    request<Auth>({
      endpoint: 'login',
      callback: (response) => {
        user.value = { ...response }
        logged.value = true

        setStore()

        _router.replace('/Home')
      },
      errorCallback: (err) => {
        alert(err)
      }
    }, {
      username: _user,
      password: _pass,
    })
  }

  function logout(_router?: Router) {
    user.value = { username: '', displayName: '', token: '' }
    logged.value = false

    setStore()

    _router?.replace('/')
  }

  function isLogged() {
    return logged.value
  }

  return { getUser, login, logout, isLogged }
})
