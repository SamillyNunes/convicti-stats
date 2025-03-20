import axiosInstance from '@/services/http'
import type IProfile from '@/shared/interfaces/IProfile'
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

export const createProfile = async (profileName: string, permissionsIds: Number[]) => {
  try {
    const payload = {
      name: profileName,
      permissions: permissionsIds,
    }

    const resp = await axiosInstance.post('/api/v1/profiles', payload, {
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

export const updateProfile = async (
  profileId: string,
  profileName: string,
  permissionsIds: Number[],
) => {
  try {
    const payload = {
      name: profileName,
      permissions: permissionsIds,
    }

    const resp = await axiosInstance.put(`/api/v1/profiles/${profileId}`, payload, {
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
