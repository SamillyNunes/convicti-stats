import { getErrors } from '@/api/stats'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useErrorsStore = defineStore('errors', () => {
  const allErrors = ref(0)
  const androidErrors = ref(0)
  const iosErrors = ref(0)

  const isErrorsLoading = ref(false)

  const fetchErrors = async () => {
    isErrorsLoading.value = true
    try {
      let currentPage = 1
      let totalPages = 1

      while (currentPage <= totalPages) {
        const response = await getErrors(currentPage)

        response.data.data.forEach((error: any) => {
          allErrors.value += 1
          if (error.platform === 'ANDROID') {
            androidErrors.value += 1
          }
          if (error.platform === 'IOS') {
            iosErrors.value += 1
          }
        })

        totalPages = response.data.last_page
        currentPage++

        console.log(response)
      }
    } catch (error) {
      console.error(error)
    } finally {
      isErrorsLoading.value = false
    }
  }

  return {
    allErrors,
    androidErrors,
    iosErrors,
    isErrorsLoading,
    fetchErrors,
  }
})
