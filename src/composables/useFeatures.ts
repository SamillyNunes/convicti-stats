import { getNewFeatures } from '@/api/stats'
import type IFeature from '@/shared/interfaces/IFeature'
import { onMounted, ref } from 'vue'

export function useFeatures() {
  const allNewFeatures = ref<IFeature[]>([])

  const isNewFeaturesLoading = ref(false)

  onMounted(() => {
    fetchNewFeatures()
  })

  const fetchNewFeatures = async () => {
    isNewFeaturesLoading.value = true
    try {
      let currentPage = 1
      let totalPages = 1

      while (currentPage <= totalPages) {
        const response = await getNewFeatures(currentPage)

        response.data.data.forEach((feature: IFeature) => {
          allNewFeatures.value.push(feature)
        })

        totalPages = response.data.last_page
        currentPage++

        console.log(response)
      }
    } catch (error) {
      console.error(error)
    } finally {
      isNewFeaturesLoading.value = false
    }
  }

  return { allNewFeatures, isNewFeaturesLoading, fetchNewFeatures }
}
