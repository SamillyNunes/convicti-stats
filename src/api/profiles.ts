import axiosInstance from '@/services/http'
import { handleApiError } from '@/utils/errorHandler'
import type { AxiosError } from 'axios'

export const getProfiles = async () => {
  try {
    const resp = await axiosInstance.get('/api/v1/profiles', {
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
