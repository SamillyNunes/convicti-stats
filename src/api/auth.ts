import axiosInstance from '@/services/http'
import { handleApiError } from '@/utils/errorHandler'
import type { AxiosError } from 'axios'

export const login = async (username: string, password: string) => {
  const payload = {
    grant_type: 'password',
    client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
    client_secret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
    username: username,
    password: password,
  }

  try {
    const resp = await axiosInstance.post('/oauth/token', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return resp.data
  } catch (error) {
    console.error(error)
    const e = error as AxiosError
    throw new Error(handleApiError(e))
  }
}

export const logout = () => {
  localStorage.removeItem('access_token')
}
