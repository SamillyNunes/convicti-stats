import { login, logout } from '@/api/auth'
import { getLoggedUser } from '@/api/users'
import type IUser from '@/shared/interfaces/IUser'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<IUser | null>(null)
  const token = ref(localStorage.getItem('access_token') || null)

  const isAuthenticated = computed(() => !!token.value)

  const downloadsAllowed = computed(() =>
    user.value?.profile.permissions.some((p) => Number(p.id) === 1),
  )
  const evaluationsAllowed = computed(() =>
    user.value?.profile.permissions.some((p) => Number(p.id) === 2),
  )
  const errorsAllowed = computed(() =>
    user.value?.profile.permissions.some((p) => Number(p.id) === 3),
  )
  const feedbacksAllowed = computed(() =>
    user.value?.profile.permissions.some((p) => Number(p.id) === 4),
  )
  const featuresAllowed = computed(() =>
    user.value?.profile.permissions.some((p) => Number(p.id) === 5),
  )

  async function loginUser(username: string, password: string) {
    try {
      const data = await login(username, password)
      token.value = data.access_token
      localStorage.setItem('access_token', data.access_token)
      await retrieveLoggedUser()
      return true
    } catch (error) {
      throw error
    }
  }

  async function retrieveLoggedUser() {
    try {
      const response = await getLoggedUser()

      if (response) {
        user.value = response.data.user
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
    } catch (error) {
      throw error
    }
  }

  function setUser(u: string) {
    const converted = JSON.parse(u) as IUser
    user.value = converted
  }

  function logoutUser() {
    logout()
    localStorage.removeItem('user')
    token.value = null
    user.value = null
  }

  return {
    user,
    isAuthenticated,
    downloadsAllowed,
    evaluationsAllowed,
    errorsAllowed,
    feedbacksAllowed,
    featuresAllowed,
    loginUser,
    logoutUser,
    setUser,
  }
})
