import axiosInstance from '@/services/http'
import { handleApiError } from '@/utils/errorHandler'
import type { AxiosError } from 'axios'

export const getUsers = async () => {
  try {
    const resp = await axiosInstance.get('/api/v1/users', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return resp.data
  } catch (error) {
    const e = error as AxiosError
    throw new Error(handleApiError(e))
  }
}

export const createUser = async (name: string, email: string, profileId: string) => {
  try {
    const payload = {
      name,
      email,
      profile_id: profileId,
    }
    const resp = await axiosInstance.post('/api/v1/users', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return resp.data
  } catch (error) {
    const e = error as AxiosError
    throw new Error(handleApiError(e))
  }
}

export const updateUser = async (id: string, name?: string, email?: string, profileId?: string) => {
  try {
    const payload = {
      name,
      email,
      profile_id: profileId,
    }
    const resp = await axiosInstance.put(`/api/v1/users/${id}`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return resp.data
  } catch (error) {
    const e = error as AxiosError
    throw new Error(handleApiError(e))
  }
}
