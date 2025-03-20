import { useAuthStore } from '@/stores/auth'

export const checkSavedUser = () => {
  const user = localStorage.getItem('user')

  if (user) {
    localStorage.getItem('user')
    const authStore = useAuthStore()
    authStore.setUser(user)
  }
}
