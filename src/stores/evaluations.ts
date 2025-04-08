import { getEvaluations } from '@/api/stats'
import type IEvaluation from '@/shared/interfaces/IEvaluation'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEvaluationsStore = defineStore('evaluations', () => {
  const allEvaluationsCount = ref(0)
  const androidEvaluations = ref(0)
  const iosEvaluations = ref(0)

  const allEvaluations = ref<IEvaluation[]>([])

  const isEvaluationsLoading = ref(false)
  let isAlreadyFetched = false

  const fetchEvaluations = async () => {
    if (isAlreadyFetched || isEvaluationsLoading.value) return

    isEvaluationsLoading.value = true
    try {
      let currentPage = 1
      let totalPages = 1

      while (currentPage <= totalPages) {
        const response = await getEvaluations(currentPage)

        response.data.data.forEach((evaluation: IEvaluation) => {
          allEvaluationsCount.value += 1
          allEvaluations.value.push(evaluation)
          if (evaluation.platform === 'ANDROID') {
            androidEvaluations.value += 1
          }
          if (evaluation.platform === 'IOS') {
            iosEvaluations.value += 1
          }
        })

        totalPages = response.data.last_page
        currentPage++

        console.log(response)
      }
      isAlreadyFetched = true
    } catch (error) {
      console.error(error)
    } finally {
      isEvaluationsLoading.value = false
    }
  }

  return {
    allEvaluationsCount,
    androidEvaluations,
    iosEvaluations,
    allEvaluations,
    isEvaluationsLoading,
    fetchEvaluations,
  }
})
