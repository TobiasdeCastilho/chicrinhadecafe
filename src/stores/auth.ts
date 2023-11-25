/* Dependencies */
import { defineStore } from 'pinia'
import { ref } from 'vue'

/* Function */
import { request } from '@/functions/requests'
import { useRouter } from 'vue-router'

interface Auth { username: string, displayName: string, token: string }

export const useAuth = defineStore('auth', () => {
  const user = ref<Auth>({ username: '', displayName: '', token: '' })
  const logged = ref<boolean>(false)

  function getUser() {
    return user.value
  }

  function login(_user: string, _pass: string) {
    request<Auth>({
      endpoint: 'login',
      callback: (response) => {
        user.value = { ...response }
        logged.value = true
        useRouter().replace('/Home')
      },
      errorCallback: (err) => {
        alert(err)
      }
    }, {
      username: _user,
      password: _pass,
    })
  }

  function logout() {
    user.value = { username: '', displayName: '', token: '' }
    logged.value = false
    useRouter().replace('/')
  }

  return { getUser, login, logout, isLogged: logged.value }
})
