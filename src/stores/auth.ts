import { login, logout } from '@/api/auth'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('access_token') || null)

  const isAuthenticated = computed(() => !!token.value)

  async function loginUser(username: string, password: string) {
    try {
      const data = await login(username, password)
      token.value = data.access_token
      localStorage.setItem('access_token', data.access_token)
      return true
    } catch (error) {
      // TODO: Tratar erro
      return false
    }
  }

  function logoutUser() {
    logout()
    token.value = null
  }

  return {
    user,
    isAuthenticated,
    loginUser,
    logoutUser,
  }
})
