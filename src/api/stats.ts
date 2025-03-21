import axiosInstance from '@/services/http'
import { handleApiError } from '@/utils/errorHandler'
import type { AxiosError } from 'axios'

export const getDownloads = async (page?: number) => {
  try {
    const resp = await axiosInstance.get('/api/v1/downloads', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        page: page,
      },
    })
    return resp.data
  } catch (error) {
    const e = error as AxiosError
    throw new Error(handleApiError(e))
  }
}

export const getEvaluations = async (page?: number) => {
  try {
    const resp = await axiosInstance.get('/api/v1/evaluations', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        page: page,
      },
    })
    return resp.data
  } catch (error) {
    const e = error as AxiosError
    throw new Error(handleApiError(e))
  }
}

export const getErrors = async (page?: number) => {
  try {
    const resp = await axiosInstance.get('/api/v1/errors', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        page: page,
      },
    })
    return resp.data
  } catch (error) {
    const e = error as AxiosError
    throw new Error(handleApiError(e))
  }
}

export const getNewFeatures = async (page?: number) => {
  try {
    const resp = await axiosInstance.get('/api/v1/features', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        is_new: 1,
        page: page,
      },
    })
    return resp.data
  } catch (error) {
    const e = error as AxiosError
    throw new Error(handleApiError(e))
  }
}
