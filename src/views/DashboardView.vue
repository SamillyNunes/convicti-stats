<template>
  <Layout>
    <Title title="Estatísticas" />

    <div class="flex flex-col md:flex-row justify-between gap-2 lg:gap-6 !mt-5">
      <StatsCard
        v-if="authStore.downloadsAllowed"
        title="Downloads"
        :icon-url="cloudIcon"
        alt="Ícone de nuvem"
        :android-value="downloadsStore.androidDownloads.toString()"
        :apple-value="downloadsStore.iosDownloads.toString()"
      >
        <h1 class="font-bold text-[2.5rem]">{{ downloadsStore.allDownloads }}</h1>
      </StatsCard>
      <StatsCard
        v-if="authStore.evaluationsAllowed"
        title="Avaliações"
        :icon-url="starsIcon"
        alt="Ícone representando estrelas dadas em avaliações"
        :android-value="evaluationsStore.androidEvaluations.toString()"
        :apple-value="evaluationsStore.iosEvaluations.toString()"
      >
        <h1 class="font-bold text-[2.5rem]">{{ evaluationsStore.allEvaluationsCount }}</h1>
      </StatsCard>
      <StatsCard
        v-if="authStore.errorsAllowed"
        title="Erros"
        :icon-url="errorsIcon"
        alt="Ícone vermelho em formato de x representando erros."
        :android-value="errorsStore.androidErrors.toString()"
        :apple-value="errorsStore.iosErrors.toString()"
        decrease-value="-5%"
      >
        <h1 class="font-bold text-[2.5rem]">{{ errorsStore.allErrors }}</h1>
      </StatsCard>
    </div>

    <FeedbacksCard
      v-if="authStore.feedbacksAllowed"
      :evaluations="evaluationsStore.allEvaluations"
    />

    <FeaturesCard v-if="authStore.featuresAllowed" />
  </Layout>
</template>

<script setup lang="ts">
import StatsCard from '@/components/StatsCard.vue'
import cloudIcon from '@/assets/icons/cloud.png'
import starsIcon from '@/assets/icons/stars.png'
import errorsIcon from '@/assets/icons/errors.png'
import FeedbacksCard from '@/components/FeedbacksCard.vue'
import FeaturesCard from '@/components/FeaturesCard.vue'
import Layout from '@/components/Layout.vue'
import Title from '@/components/Title.vue'
import { useAuthStore } from '@/stores/auth'
import { useDownloadsStore } from '@/stores/downloads'
import { onMounted, onUnmounted } from 'vue'
import { useErrorsStore } from '@/stores/errors'
import { useEvaluationsStore } from '@/stores/evaluations'

const authStore = useAuthStore()

const downloadsStore = useDownloadsStore()
const evaluationsStore = useEvaluationsStore()
const errorsStore = useErrorsStore()

onMounted(() => {
  downloadsStore.fetchDownloads()
  errorsStore.fetchErrors()
  evaluationsStore.fetchEvaluations()

  const interval = setInterval(() => {
    downloadsStore.fetchDownloads()
  }, 300000)

  onUnmounted(() => clearInterval(interval))
})
</script>
