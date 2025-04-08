import { getNewFeatures } from '@/api/stats'
import type IFeature from '@/shared/interfaces/IFeature'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFeaturesStore = defineStore('features', () => {
  const allNewFeatures = ref<IFeature[]>([])

  const isNewFeaturesLoading = ref(false)

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
})
