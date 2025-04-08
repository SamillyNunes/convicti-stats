import { getDownloads } from '@/api/stats'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDownloadsStore = defineStore('downloads', () => {
  const allDownloads = ref(0)
  const androidDownloads = ref(0)
  const iosDownloads = ref(0)

  let isAlreadyFetched = false
  const lastIdChecked = ref<number>(0)
  const isDownloadsLoading = ref(false)

  const fetchDownloads = async () => {
    if (isDownloadsLoading.value) return

    isDownloadsLoading.value = true
    try {
      let currentPage = 1
      let totalPages = 1

      while (currentPage <= totalPages) {
        const response = await getDownloads(currentPage)

        response.data.data.forEach((download: any) => {
          if (isAlreadyFetched && lastIdChecked.value <= download.id) return

          // Armazenando o ultimo id que foi checado para os casos de atualizacao
          lastIdChecked.value = download.id

          allDownloads.value += 1
          if (download.platform === 'ANDROID') {
            androidDownloads.value += 1
          }
          if (download.platform === 'IOS') {
            iosDownloads.value += 1
          }
        })

        totalPages = response.data.last_page
        currentPage++
      }
      isAlreadyFetched = true
    } catch (error) {
      console.error(error)
    } finally {
      isDownloadsLoading.value = false
    }
  }

  return { allDownloads, androidDownloads, iosDownloads, isDownloadsLoading, fetchDownloads }
})
