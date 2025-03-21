import { getEvaluations } from '@/api/stats'
import type IEvaluation from '@/shared/interfaces/IEvaluation'
import { onMounted, ref } from 'vue'

export function useEvaluations() {
  const allEvaluationsCount = ref(0)
  const androidEvaluations = ref(0)
  const iosEvaluations = ref(0)

  const allEvaluations = ref<IEvaluation[]>([])

  const isEvaluationsLoading = ref(false)

  onMounted(() => {
    fetchEvaluations()
  })

  const fetchEvaluations = async () => {
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
}
