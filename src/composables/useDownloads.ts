import { getDownloads } from '@/api/stats'
import { onMounted, ref } from 'vue'

export function useDownloads() {
  const allDownloads = ref(0)
  const androidDownloads = ref(0)
  const iosDownloads = ref(0)

  const isDownloadsLoading = ref(false)

  onMounted(() => {
    fetchDownloads()
  })

  const fetchDownloads = async () => {
    isDownloadsLoading.value = true
    try {
      let currentPage = 1
      let totalPages = 1

      while (currentPage <= totalPages) {
        const response = await getDownloads(currentPage)

        response.data.data.forEach((download: any) => {
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

        console.log(response)
      }
    } catch (error) {
      console.error(error)
    } finally {
      isDownloadsLoading.value = false
    }
  }

  return { allDownloads, androidDownloads, iosDownloads, isDownloadsLoading, fetchDownloads }
}
